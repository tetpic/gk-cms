import { FAKE_API_PATH } from "@/helpers/constants";
import { Product } from "@/types/product";

export async function getAllProducts() {
    const request = await fetch( FAKE_API_PATH + '/products')
    const response = await request.json();
    return response
}



export async function postNewProduct(data: Product) {
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


export async function removeProduct(id: number, index: number) {
    console.log(index)
    const req = await fetch(FAKE_API_PATH + '/products/'+ id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    const res = await req.text()

    return  res
}