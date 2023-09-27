export const validarEmpty = (data) => {
    let error = 0
    for (let clave in data){
        if (data[clave]===""||data[clave]===0||data[clave]==="0000-00-00") {
            error=1
        }
    }
    return error
}
