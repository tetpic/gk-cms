export type Product = {
    title: string, 
    body?:string, 
    description?:string,
    tags?: string[], 
    active: boolean,
    price?: number,
    discount?: number,
}

export interface CreatedProduct extends Product {
    id:number, 
    userId:number,    
    timeCreated: string, 
    timeChanged: string,   
    position: number, 
    active: boolean,  
    eventId: number,
    body: string,
    title: string,   
    description: string,
    tags: string[],  
    price: number,
    discount: number,
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