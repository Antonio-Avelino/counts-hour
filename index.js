let {Synccreatehour,dates,createhourCall,createhourPromise}= require("./lib/hora")

// console.log(Synccreatehour("1 6, 2021","22:45","1 6, 2021","05:30"))

// console.log(createhourCall("1 6, 2021","22:45","1 6, 2021","05:30",(data)=>{

//     console.log( data)
// }))
// createhourCall("1 6, 2021","22:45","1 6, 2021","05:30",(error,data)=>{

//     console.log(data)
    
//     console.log(error)
// })


createhourPromise("1 6, 2021","22:45","1 6, 2021","05:30")
.then((date)=>{

    console.log(date)
})
    // console.log(dates("1 5, 2021","January 5, 2021"))


