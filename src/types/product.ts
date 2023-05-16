export type Product = {
    title: string, 
    body?:string|undefined, 
    description?:string|undefined,
    tags?: string[]|undefined, 
    active: boolean|undefined,
    price?: number|undefined,
    discount?: number|undefined,
}


export interface CreatedProduct extends Product {
    id:number|undefined, 
    userId:number|undefined,    
    timeCreated: string|undefined, 
    timeChanged: string|undefined,   
    position: number|undefined,   
    eventId: number,
    body: string,   
}

export interface AddNewProduct {
    productBody: string,
    productTime: string
}

export interface ProductsInitialState  {
    products : CreatedProduct[],
    isAllProductsLoading: boolean,
    isAddProductLoading: boolean,
    error: string,
    deleted: boolean,
    fetched: boolean,
    newProduct: Product,  
}