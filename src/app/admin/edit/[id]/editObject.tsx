'use client'

import { CreatedProduct } from "@/types/product"

export default function EditObject(product: CreatedProduct) {       

        let {title, body, description, price, discount} = product

        return (<>
        <div className="bg-secondary p-4 d-flex align-items-start justify-content-between flex-wrap">

            <div className="mb-3" key="add-product-title">
                <label className="form-label text-white">Название товара
                <input type="text"  className="form-control"  name="title" value={title} />
                <div  className="form-text text-black">Короткое название для заголовка</div>
                </label>
            </div>

            <div className="mb-3" key="product-body">
              <label  className="form-label text-white">
                Полное название
                <input type="text" className="form-control"  value={body}  name="body"/>
                <div  className="form-text text-black">Модель, артикул или другие уточняющие данные</div>
              </label>
            </div>

            <div className="mb-3 w-100" key="add-product-description">
              <label  className="form-label text-white w-100">
                Описание 
                <textarea rows={4} className="form-control"   value={description}  name="description">{description}</textarea>
                <div  className="form-text text-black">Описание товара (без технических характеристик)</div>
              </label>
            </div>

            <div className="mb-3" key="add-product-price">
              <label className="form-label text-white">
                Цена
                <input type="number" className="form-control"   value={price}  name="price"/>
                <div  className="form-text text-black">Базовая цена товара</div>
              </label>
            </div>

            <div className="mb-3" key="add-product-discount">
              <label className="form-label text-white">
                Скидка
                <input type="number" className="form-control"  value={discount}  name="discount"/>
                <div  className="form-text text-black">Цена товара со скидкой</div>
              </label>
            </div>

            <div className="mb-3 w-100 form-switch d-flex justify-content-between form-check" key="product-published">
              <label className="form-check-label">
                <input type="checkbox" name="active"  className="form-check-input" />
                  Опубликовано
                </label>
              <button type="button"  className={"btn btn-primary "}>Сохранить</button>
            </div>

        </div>
        
        </>)   
    
}