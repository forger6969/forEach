let arr = [`non`, `banan`, ` asal`, `moshina`, `olma`, `aziza`, `gul`]
let arrN = []
let arrNoN = []

arr.forEach(element => {

    if (element.includes(`n`)) {
        arrN.push(element)
    } else {
        arrNoN.push(element)
    }

});

console.log(`Общее: `, arr);
console.log(`Есть буква N: `, arrN);
console.log(`Нету буквы N: `, arrNoN);
