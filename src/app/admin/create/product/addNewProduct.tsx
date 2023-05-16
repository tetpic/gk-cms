"use client"

import RootLayout from "@/app/layout"
import  {deleteStatus, postProduct, setNewProduct}  from "@/redux/productsSlice"
import { RootState } from "@/redux/store"
import { useAppDispatch } from "@/redux/types"
import { useSelector } from "react-redux"

export default function EditProductForm() {
  
    let {title, body, description, price, discount} = useSelector((state:RootState)=> state.products.newProduct)
    let deleted = useSelector((state:RootState)=> state.products.deleted)
    
    const dispatch  = useAppDispatch()

    let newProductCreatingHandler = (event: {target: {value: any, name: string, checked?: boolean, type: string}})=> {
      let value = event.target.value
      let name = event.target.name
      let checked = event.target.checked
      let type = event.target.type
      dispatch(setNewProduct({[name]: type == 'checkbox'?checked: value}))
    }

    if(deleted) {
      setTimeout(()=>{
        dispatch(deleteStatus())
      }, 2000)
    }



    return <div className="bg-secondary p-4 d-flex align-items-start justify-content-between flex-wrap">

        <div className="mb-3" key="add-product-title">
            <label className="form-label text-white">Название товара
            <input type="text"  className="form-control" onChange={newProductCreatingHandler} name="title" value={title} />
            <div  className="form-text text-black">Короткое название для заголовка</div>
            </label>
        </div>

        <div className="mb-3" key="product-body">
          <label  className="form-label text-white">
            Полное название
            <input type="text" className="form-control" onChange={newProductCreatingHandler} value={body}  name="body"/>
            <div  className="form-text text-black">Модель, артикул или другие уточняющие данные</div>
          </label>
        </div>

        <div className="mb-3 w-100" key="add-product-description">
          <label  className="form-label text-white w-100">
            Описание 
            <textarea rows={4} className="form-control" onChange={newProductCreatingHandler}  value={description}  name="description">{description}</textarea>
            <div  className="form-text text-black">Описание товара (без технических характеристик)</div>
          </label>
        </div>

        <div className="mb-3" key="add-product-price">
          <label className="form-label text-white">
            Цена
            <input type="number" className="form-control" onChange={newProductCreatingHandler}  value={price}  name="price"/>
            <div  className="form-text text-black">Базовая цена товара</div>
          </label>
        </div>

        <div className="mb-3" key="add-product-discount">
          <label className="form-label text-white">
            Скидка
            <input type="number" className="form-control" onChange={newProductCreatingHandler} value={discount}  name="discount"/>
            <div  className="form-text text-black">Цена товара со скидкой</div>
          </label>
        </div>

        <div className="mb-3 w-100 form-switch d-flex justify-content-between form-check" key="product-published">
          <label className="form-check-label">
            <input type="checkbox" name="active" onChange={newProductCreatingHandler}  className="form-check-input" />
              Опубликовано
            </label>
          <button type="button" onClick={()=> dispatch(postProduct())}  className={"btn btn-primary "}>{deleted?"Сохранено":"Сохранить"}</button>
        </div>

    </div>

}