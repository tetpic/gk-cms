export function concatClasses(array: string[]) {
    let withStrings = array.map(el=> {
        return el + ' '
    })
    return withStrings.join(' ')
}