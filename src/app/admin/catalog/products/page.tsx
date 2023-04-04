import AddNewProductForm from "./addNewProduct"
import ProductsPage from "./productsClient"



export default function ProductServerPage() {
  return <>
    <h3>Товары</h3>
      <div>
        <AddNewProductForm/>
        <ProductsPage />
    </div>
  </>
 }
  