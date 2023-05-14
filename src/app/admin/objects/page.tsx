'use client'
import { useAppDispatch, useAppSelector } from "@/redux/types"
import ProductObjectItem from "./productItem"
import { CreatedProduct } from "@/types/product"
import { useEffect, useRef, useState } from "react"
import { getProducts } from "@/redux/productsSlice"
import { sortHandler } from "@/helpers/utils"


export default function ProductsPage() {
    const dispatch = useAppDispatch()
    let once = useRef(true)
    
    
    useEffect(()=>{
        dispatch(getProducts())      
    }, [dispatch])    
    
    
    //TODO: поменять useSelector в других местах на useAppSelector
    const {products, fetched} = useAppSelector(state => state.products)   

    const [sorted, resort] = useState([...products])

    const btnHandler = (type: string) => {        
        let result = sortHandler(sorted, type)
        resort([...result])
    }

    if(once.current == true && fetched) {        
        once.current = false
        resort([...products])
    }
    
    return fetched? (<>
        <h4>Ваши объекты</h4>
        <p className="tip">Здесь вы можете отсортировать и отредактировать ваши объекты</p>
        <button  onClick={()=>btnHandler('title')}>Имя</button>
        <button onClick={()=>btnHandler('timeCreated')}>Дата создания</button>
        <button onClick={()=>btnHandler('timeCreated')}>Дата создания</button>
        {sorted.map((el:CreatedProduct)=>{
            return (<>
                <ProductObjectItem {...el}/>
            </>
            )
        })
    }

    </>):
    (<> <p>...загрузка</p> </>)
}