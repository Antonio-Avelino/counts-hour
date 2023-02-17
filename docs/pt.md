
## Instalação



calcular o número de dias existente em um intervalo de datas
```js

date('2022-01-01', '2022-01-05');

// Retorna { totalday: 5, firstdate: '2022-01-01', seconddate: '2022-01-05' }

// o primeiro parametro é primeira data a ser usada no cálculo

// o segundo parametro é segunda data a ser usada no cálculo
```


 calcular o número de horas e minutos entre duas datas
 ```js

console.log(hourSync('2022-01-01', '10:00', '2022-01-01', '23:40'))

// Output: { hour: 13, minute: 40, firstdate: 2022-01-01', seconddate: '2022-01-01'' }


hourSync('2022-01-01', '10:00', '2022-01-01', '23:40', (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

// Output: { hour: 13, minute: 40, firstdate: 2022-01-01', seconddate: '2022-01-01'' }
```
