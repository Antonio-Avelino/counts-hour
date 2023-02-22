# counts-hour
This library allows you to calculate the total work hours between two specified dates and times.

:us: [English][en-docs]&nbsp;&nbsp;|&nbsp;&nbsp;:brazil: [Português de Angola][pt-ao-docs]

```console
npm i counts-hour
```
## Function: date

The date function takes two dates as parameters and calculates the number of days between them.
date(firstdate, seconddate)
### Parameters:
>firstdate (string): The first date to be used in the calculation. The date should be in the format 'yyyy-mm-dd'.
> seconddate (string): The second date to be used in the calculation. The date should be in the format 'yyyy-mm-dd'.
Date format:
year month day
format: '2022-01-01'
### Example:
```javascript

date('2022-01-01', '2022-01-02')
console.log(date('2022-01-01', '2022-01-02'))

```
## Functions: hourSync, hourSync, hourPromise
These functions calculate the number of hours and minutes between two dates and times passed as parameters.
firstdate, firsthour, seconddate, secondhour

> firstdate (string): The first date to be used in the calculation. The date should be in the format 'yyyy-mm-dd'.
> firsthour (string): The first time to be used in the calculation. The time should be in the format 'hh:mm'.
> seconddate (string): The second date to be used in the calculation. The date should be in the format 'yyyy-mm-dd'.
> secondhour (string): The second time to be used in the calculation. The time should be in the format 'hh:mm'.

## Function: hourSync
hourSync(firstdate, firsthour, seconddate, secondhour)

### Example:
```javascript

hourSync('2022-01-01', '13:30', '2022-01-02', '14:34')
console.log(hourSync('2022-01-01', '13:30', '2022-01-02', '14:34'))

```
## Function: hourCall
hourCall(firstdate, firsthour, seconddate, secondhour,(data,erro)=>{

console.log(data)
})
### Example:
```javascript

hourCall('2022-01-01', '13:30', '2022-01-02', '14:34',(data,erro)=>{

console.log(data)
})

```
## Function: hourPromise

hourPromise(firstdate, firsthour, seconddate, secondhour)
.then((date)=>{

console.log(date)
})

### Example:

```javascript

hourPromise('2022-01-00', '13:30', '2022-01-02', '14:34')
.then((date)=>{

console.log(date)
})

```

## License

[MIT][license-url] &copy; Antonio Avelino, Florentino Matos