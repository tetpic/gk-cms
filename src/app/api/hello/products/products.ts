export default async function getAllProducts() {
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json();
    return data
}