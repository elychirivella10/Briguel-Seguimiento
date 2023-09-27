import moment from "moment"    
export function colorLoop(index, valor2){
    index = index+1
    let multiplo = []
    for (let indexmultiplo = 1; indexmultiplo < Math.ceil(valor2.length/3)+1; indexmultiplo++) {
        multiplo.push(3*indexmultiplo)
    }

    
    for (let indexposicion = 0; indexposicion < Math.ceil(valor2.length/3)+1; indexposicion++) {
        if (index === multiplo[indexposicion]) {
            index = 3
        } else if (index + 1 === multiplo[indexposicion]) {
            index = 2
        } else if (index + 2 === multiplo[indexposicion]){
            index = 1
        }
    }   

    return index
 }

export const colorList = (date, status) => {
    const dateNow = new Date()
    date = new Date(date)
    
    let background = 0
    if (status === "CULMINADO") {
        background = 'culminado'
    }else if(dateNow.getTime()>date.getTime()){
        background = 'vencido'
    }else if(Math.floor(((date.getTime()-dateNow.getTime())/1000)/86400)<= 10){
        background = 'por_vencer'
    }else{
        background = 'no_status'
    }
    return background
} 

export const ColorColumns = (date, status) =>{
    const dateNow = new Date()
    date = new Date(date)
    
    let background = 0
    if (status === "CULMINADO") {
        background = '#319b43'
    }else if(dateNow.getTime()>date.getTime()){
        background = '#2d99ac'
    }else if(Math.floor(((date.getTime()-dateNow.getTime())/1000)/86400)<= 10){
        background = '#ad3c3c'
    }else{
        background = '#c5c5c5'
    }
    return background
}