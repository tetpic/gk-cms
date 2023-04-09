

export async function getMyself() {
    // const request = await fetch('http://localhost:4000/users', {

    //Серёгино апи
    const request = await fetch('http://0.0.0.0:80/api/users')
    const response = await request.json();
    
    return response
}