import { CreatedProduct } from "@/types/product";
import s from "./objectItem.module.scss"

export default function ProductObjectItem(product: CreatedProduct) {
    let {id, body, title, price, discount, description} = product
    return (
        <div className={s.product + ' text-white'} key={id}>
            <h6 className="product__title">{title}</h6>
            <p className={s.product__body}>{body}</p>
            <p className={s.product__description}>{description}</p>
            <span>Цена: {price}</span>
            <span>Скидка: {discount}</span>
        </div>        
    )    
}