let {hourSync,date,hourCall,hourPromise} = require("./lib/hour")


module.exports={hourSync,date,hourCall,hourPromise};
 

// console.log(hourSync('2022-01-01', '22:00', '2022-01-03', '08:00'))
// hourCall('2022-01-01', '13:30', '2022-01-02', '14:34',(data,erro)=>{

//     console.log(data)
// })



// hourPromise('2022-01-00', '13:30', '2022-01-02', '14:34')
// .then((date)=>{

//     console.log(date)
// })


// console.log(date('2022-01-01', '2022-01-02'))


