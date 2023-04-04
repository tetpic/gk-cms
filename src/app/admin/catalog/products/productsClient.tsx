"use client"

import {getProducts} from "@/redux/productsSlice"
import {RootState} from "@/redux/store"
import {useAppDispatch } from "@/redux/types"
import {useEffect, useRef } from "react"
import {useSelector } from "react-redux"

type OneProduct = {
    id: number,
    data: string,
    time: string
}

function product(props:OneProduct) {
    return <>
        <div key={props.id}>
            <p>{props.id}</p>
            <p>{props.data}</p>
            <p>{props.time}</p>
        </div>
    </>
}

export default function ProductsPage() {

    const ref = useRef(false);

    const {products, fetched} = useSelector((state:RootState)=> state.products)

    const dispatch = useAppDispatch()
    useEffect(()=> {
           dispatch(getProducts())
    }, [dispatch])

   return (<>
       {
           products.map((element:any) => {
               return product(element)
           })
       }
       </>
   )
}