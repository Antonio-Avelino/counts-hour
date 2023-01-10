let {Synccreatehour,createhour}= require("./lib/hora")



// console.log(Synccreatehour("13:40","15:30")
// )

createhour("13:40","15:30",(data)=>{
    console.log(data)
})