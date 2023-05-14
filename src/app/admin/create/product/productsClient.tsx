"use client"

import {deleteProduct, getProducts} from "@/redux/productsSlice"
import {RootState} from "@/redux/store"
import {useAppDispatch } from "@/redux/types"
import {useEffect} from "react"
import {useSelector } from "react-redux"


export default function ProductsPage() {

    const {products, fetched} = useSelector((state:RootState)=> state.products)
    
    const dispatch = useAppDispatch()
    useEffect(()=> {
           dispatch(getProducts())
    }, [dispatch])

    if(!fetched) {
        return <>
            <div className="spinner-border" role="status"></div>
        </>
    } else {
        return (
        <div className="mt-2 p-3 ">
            <p>Недавно созданные товары</p>
            {products.map((element:any, index: number) => {
                return(
                    <div className="bg-dark text-white d-flex p-2 justify-content-between mb-2" key={element.id}>         
                    <p className="mb-0">{element.title}</p>           
                    <p className="ms-auto mb-0">{element.price}</p>          
                    <button type="button" onClick={()=> dispatch(deleteProduct({id: element.id, index: index}))} className="btn-close btn-close-white ms-2"  aria-label="Close"></button>
                </div>
                )
                })
            }
        </div>
        )
    }
}