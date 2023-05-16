"use client"

import { getProducts } from "@/redux/productsSlice"
import { useAppDispatch, useAppSelector } from "@/redux/types"
import { useEffect } from "react"
import EditObject from "./editObject"
import { CreatedProduct } from "@/types/product"



export default function EditPage ({ params }: { params: { id: number }}) {

    const disatch = useAppDispatch()

    useEffect(()=>{
        disatch(getProducts())
    },[disatch])

    const obj = useAppSelector(state=> state.products.products)    
    let product: any 
    product = obj.find(el=>el.id === Number(params.id)) as CreatedProduct

    const fetched = useAppSelector(state=>state.products.fetched)

    if (fetched && product) {
        return (<>
        <EditObject {...product}/>
        </>)
    }
    else {
        return (<><p>Объект не найден</p></>)
    }
} 