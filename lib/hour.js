

const date = (firstdate,seconddate) => {

    
    
    try {


    var getFirstdate = new Date(firstdate);
    var getSeconddate = new Date(seconddate);


    let validationFirstdate = [isNaN(getFirstdate.getMonth()),isNaN(getFirstdate.getDay()),
        isNaN(getFirstdate.getFullYear())]

        let validationSeconddate = [isNaN(getSeconddate.getMonth()),isNaN(getSeconddate.getDay()),
            isNaN(getSeconddate.getFullYear())]


      const FirstdateTrue =   validationFirstdate.every((data)=> data == true)
      const SeconddateTrue =   validationSeconddate.every((data)=> data == true)


      if(FirstdateTrue || SeconddateTrue){


        throw Error(`parameter dates, no this very defined one`)

      }else{

            // It calculates the difference in milliseconds
            var  calculateDate = Math.abs(getSeconddate.getTime() - getFirstdate.getTime());
            
            // It calculates the difference in days
            var totalday = Math.ceil(calculateDate / (1000 * 3600 * 24));

                    var resultDate =   totalday + 1
              

      }

        return {
            
            totalday:resultDate,
            firstdate:firstdate,
            seconddate:seconddate
        }
        
    } catch (error) {
        
         throw Error(`${error}  `)

    }
    

}






const convertHours = (firstdate,seconddate,firsthour,secondhour) => {
          // Convert the hours for milliseconds
   
      let gtHourfirsthour = Date.parse(`${firstdate} ${firsthour}:00`)
    let getHoursecondhour = Date.parse(`${seconddate} ${secondhour}:00`)
    let difference =  getHoursecondhour  - gtHourfirsthour 
   

        const hours = Math.floor(difference / 3600000);
        const minutes = Math.floor((difference % 3600000) / 60000);

           return {
                    hours: hours,
                    minutes:minutes
           }
}


const convertPositiveMinute = (minutes)=>{


let negativeNumber = minutes;
        let positiveNumber = Math.abs(negativeNumber);

           return {
                 
                    minutes:positiveNumber
           }
}


const convertPositiveHora = (hora)=>{


let negativeNumber = hora;
        let positiveNumber = Math.abs(negativeNumber);

           return {
                 
                    hora:positiveNumber
           }
}




   

const hourSync = (firstdate,firsthour,seconddate,secondhour)=>{


    try {


        let resultDate =  date(firstdate,seconddate).totalday 
    

        let convertedMinute = convertHours(firstdate,seconddate,firsthour,secondhour).minutes

        let convertedHours = convertHours(firstdate,seconddate,firsthour,secondhour).hours

        let  hora = (convertPositiveHora(convertedHours).hora )  
        

    return {

        hour:  convertPositiveHora(hora).hora 
        ,minute:  convertPositiveMinute(convertedMinute).minutes,    
        firstdate:firstdate,
        seconddate:seconddate}
        
        
    
    } catch (error) {
            
         throw Error(`error: ${error}  `)
        
    }
  
}




const hourCall = (firstdate,firsthour,seconddate,secondhour,callback)=>{


    try {
           
        const resultDate =  date(firstdate,seconddate).totalday 



        let convertedMinute = convertHours(firstdate,seconddate,firsthour,secondhour).minutes

        let convertedHours = convertHours(firstdate,seconddate,firsthour,secondhour).hours

        let  hora = (convertPositiveHora(convertedHours).hora )  
        
                     if(callback){

 
                        return  callback(
                          
                            {
                                hour:convertPositiveHora(hora).hora 
                                ,minute:convertPositiveMinute(convertedMinute).minutes,    
                                firstdate:firstdate,
                                seconddate:seconddate},  error=null,)
                     }else{
                            
         throw Error(`lacking the function callback  `)

                     }
    } catch (error) {
            
         throw Error(`error: ${error}  `)
        
    }
  
}






const hourPromise = (firstdate,firsthour,seconddate,secondhour) => {


    try {



        let convertedMinute = convertHours(firstdate,seconddate,firsthour,secondhour).minutes

        let convertedHours = convertHours(firstdate,seconddate,firsthour,secondhour).hours

        let  hora = (convertPositiveHora(convertedHours).hora )  

    return new Promise ((resolve,reject)=>{



        resolve(
        {
        hour:convertPositiveHora(hora).hora, 
        minute:convertPositiveMinute(convertedMinute).minutes,    
        firstdate:firstdate,
        seconddate:seconddate
    }
            )
               
    })
        
    } catch (error) {
            
         throw Error(`${error}  `)
        
    }
  
}





module.exports = {date,hourSync,hourCall,hourPromise}