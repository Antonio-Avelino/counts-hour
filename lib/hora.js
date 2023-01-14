

const dates = (firstdate,seconddate)=>{

    
    
    try {

    var date1 = new Date(firstdate);
    var date2 = new Date(seconddate);


    let resultDate1 = [isNaN(date1.getMonth()),isNaN(date1.getDay()),
        isNaN(date1.getFullYear())]

        let resultDate2 = [isNaN(date2.getMonth()),isNaN(date2.getDay()),
            isNaN(date2.getFullYear())]


      const dateresult =   resultDate1.every((data)=> data == true)
      const dateresult2 =   resultDate2.every((data)=> data == true)


      if(dateresult || dateresult2){


        throw Error(`error: erro no parametro data da data, não esta bem definido`)

      }else{

            // Calcula a diferença em milissegundos
            var time = Math.abs(date2.getTime() - date1.getTime());
            
            // Calcula a diferença em dias
            var totalday = Math.ceil(time / (1000 * 3600 * 24));
              var resultDate =   totalday

                    if(totalday == 0 || totalday == 1){

                        resultDate =  totalday +1
                        
                    }

      }

        return {
            
            totalday:resultDate,
            firstdate:firstdate,
            seconddate:seconddate
        }
        
    } catch (error) {
        
         throw Error(`error: ${error}  `)

    }
    

}


const Synccreatehour = (firstdate,firsthour,seconddate,secondhour)=>{


    try {
          // Convert the hours for milliseconds
    let hour1 = Date.parse(`01/10/2022 ${firsthour}:00`)
    let hour2 = Date.parse(`01/10/2022 ${secondhour}:00`)

    //  Convert the difference in milliseconds for hours and minutes  
    

    let diferenca = hour2 - hour1  

        const horas = Math.floor(diferenca / 3600000);
        const minutos = Math.floor((diferenca % 3600000) / 60000);

           
        const resulstDate =  dates(firstdate,seconddate).totalday* 24
        
        // caso o minuto é negativo soma com 60 ex:-15 , -15+60
    return {hora:horas + resulstDate 
        ,minuto:minutos,    
        firstdate:firstdate,
        seconddate:seconddate}
        
    } catch (error) {
            
         throw Error(`error: ${error}  `)
        
    }
  
}



const createhourCall = (firstdate,firsthour,seconddate,secondhour,callback)=>{


    try {
          // Convert the hours for milliseconds
    let hour1 = Date.parse(`01/10/2022 ${firsthour}:00`)
    let hour2 = Date.parse(`01/10/2022 ${secondhour}:00`)

    //  Convert the difference in milliseconds for hours and minutes  
    

    let diferenca = hour2 - hour1  

        const horas = Math.floor(diferenca / 3600000);
        const minutos = Math.floor((diferenca % 3600000) / 60000);

           
        const resulstDate =  dates(firstdate,seconddate).totalday* 24
        
                     if(callback){


                     return   callback(error=null,{hora:horas + resulstDate 
                            ,minuto:minutos,    
                            firstdate:firstdate,
                            seconddate:seconddate})
                     }else{
                            
         throw Error(`error: faltando a função callback  `)

                     }
    } catch (error) {
            
         throw Error(`error: ${error}  `)
        
    }
  
}







const createhourPromise = (firstdate,firsthour,seconddate,secondhour)=>{


    try {
          // Convert the hours for milliseconds
    let hour1 = Date.parse(`01/10/2022 ${firsthour}:00`)
    let hour2 = Date.parse(`01/10/2022 ${secondhour}:00`)

    //  Convert the difference in milliseconds for hours and minutes  
    

    let diferenca = hour2 - hour1  

        const horas = Math.floor(diferenca / 3600000);
        const minutos = Math.floor((diferenca % 3600000) / 60000);

           
        const resulstDate =  dates(firstdate,seconddate).totalday* 24

    return new Promise ((aceit,reject)=>{

        aceit({hora:horas + resulstDate 
            ,minuto:minutos,    
            firstdate:firstdate,
            seconddate:seconddate})
                // if()
    })
        
    } catch (error) {
            
         throw Error(`error: ${error}  `)
        
    }
  
}





module.exports = {Synccreatehour,dates,createhourCall,createhourPromise}