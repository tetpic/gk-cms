"use client"

import { ProductsInitialState, getProducts } from "@/redux/productsSlice"
import { RootState } from "@/redux/store"
import { useEffect } from "react"
// import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"




/*It works but only for synchronous actions, 
you have to wait fot thunk actions to finish to pre hydrate 
data fetched with tunk and it is recommended to use getServerSideProps
 or getStaticProps instead. */

function product(arr: any) {
    arr[0].map((el: any)=> {
        
        return <p>
            {el.id}
        </p>    
    })

}

export default function ProductsPage() {
    // const products = useSelector((state: RootState)=>{
        // state.products
    // })
    const dispatch = useDispatch<any>()
    useEffect(()=> {
        dispatch(getProducts())
    }, [dispatch])
    
    
    const products  = useSelector((state:RootState) => state.products)
    

    return (products.isLoading?
        <div className="spinner-border text-secondary" role="status"></div>
        :
        products.products[0][0].data
        // product(products.products)
        )
    
 
}