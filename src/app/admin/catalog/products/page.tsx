"use client"

import getAllProducts from "@/app/api/hello/products/products"
import {getProducts, setProducts} from "@/redux/productsSlice"
import {RootState} from "@/redux/store"
import {use, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"




/*It works but only for synchronous actions, 
you have to wait fot thunk actions to finish to pre hydrate 
data fetched with tunk and it is recommended to use getServerSideProps
 or getStaticProps instead. */
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
    
    //эти данные грузятся конкретно сервером
    const serverProducts = use(getAllProducts())



    const dispatch = useDispatch<any>()
    const products  = useSelector((state:RootState) => state.products)
    useEffect(()=> {
            dispatch(getProducts())
    }, [dispatch])


    // useEffect(()=> {
    //     dispatch(setProducts(serverProducts))
    // }, [products, dispatch])
    
    
//     let consoleIt = () => {
//         dispatch(setProducts(serverProducts))
//     //     // getProducts()

//     //     // dispatchProducts
//     //    
// }
    console.log(products.products[0])


    return (<>{

        products.products.map((element:any) => {
            
            return product(element)
        })
    }
    {/* <button onClick={()=>{consoleIt()}}>console it</button> */}
        </>
    )
}