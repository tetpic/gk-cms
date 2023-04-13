import { FAKE_API_PATH } from "@/helpers/constants";
import { NewProduct } from "./productsTypes";

export async function getAllProducts() {
    const request = await fetch( FAKE_API_PATH + '/products')
    const response = await request.json();
    return response
}



export async function postNewProduct(data: NewProduct) {
    let json = JSON.stringify(data)
    const request = await fetch( FAKE_API_PATH + '/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: json,
    })
    const response = await request.json();
    return response
}