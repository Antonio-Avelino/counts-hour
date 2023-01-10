
const Synccreatehour = (firsthour,secondhour)=>{

    // Convert the hours for milliseconds
    let hour1 = Date.parse(`01/10/2022 ${firsthour}:00`)
    let hour2 = Date.parse(`01/10/2022 ${secondhour}:00`)

    //  Convert the difference in milliseconds for hours and minutes  

    let diferenca = hour2 - hour1  

        const horas = Math.floor(diferenca / 3600000);
        const minutos = Math.floor((diferenca % 3600000) / 60000);

           

    return {hora:horas,minuto:minutos}
}




const createhour = (firsthour,secondhour,calback)=> {

    // Convert the hours for milliseconds
    let hour1 = Date.parse(`01/10/2022 ${firsthour}:00`)
    let hour2 = Date.parse(`01/10/2022 ${secondhour}:00`)

    //  Convert the difference in milliseconds for hours and minutes  

    let diferenca = hour2 - hour1  

        const horas = Math.floor(diferenca / 3600000);
        const minutos = Math.floor((diferenca % 3600000) / 60000);
                        
       let  diferencas = {hora:horas,minuto:minutos}
           
//  throw Error(`error: ${nameFolder} : The subfolder cannot contain the name of any characters that follow
//  : '/,\,|<,>,?," " : * } `)
     return   calback(diferencas)

}


module.exports = {Synccreatehour,createhour}