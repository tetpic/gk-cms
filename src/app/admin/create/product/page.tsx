import AddNewProductForm from "./addNewProduct"
import ProductsPage from "./productsClient"



export default function ProductServerPage() {
  return <>
    <h3>Создать новый товар</h3>      
        <AddNewProductForm/>
        <ProductsPage />   
  </>
 }
  