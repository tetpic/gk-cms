export function concatClasses(array: string[]) {
    let result :string[] = []
    if(array.length == 0) {return ''}
    array.map((el, index)=>{
        if (el !== '') {
            if(index +1 < array.length) {
                result.push(el+' ')
            }
            else {
                result.push(el)
            }
        } 
     
    })
    return result.join('')
}



export function sortHandler (array: any[], type: string) {
    let result = array.sort((a, b)=>{
        return a[type] >= b[type]?1:-1
    })       
    return result
}