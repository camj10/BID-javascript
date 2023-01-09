// -----------------------Predicting the output in the theme: JavaScript Destructuring----------------------------------------


//Problem 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars 
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar) //Mostrará Tesla: el primer elemento
// console.log(otherRandomCar) //Mostrará Mercedes: el siguiente elemento luego del primero

//Problem 2
// const employee = {
//     nam: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { nam: otherName } = employee;
// //Predict the output
// console.log(nam); //Sin valor: la varible nam no constituye una varible independiente, ya que su valor es asignado a otherName
// console.log(otherName); //Mostrará Elon

//Problem 3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);//Mostrará 12345
// console.log(hashedPassword); //Varible no definida. La asignación luego del "dos puntos (:)" solo es válida para elementos del objeto. 

//Problem 4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);//Mostrará 5
// console.log(first == third);//Mostrará 2
//Equivocado: Las asignaciones se dan por medio del = y no del ==, el doble igual indica una comparación. 
//Por lo tanto nos mostrará por pantalla el resultado de esa comparación, que sería falso o verdadero (false or true).

//Problem 5
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log("key ", key); //Mostrará value
// console.log("secondKey ",secondKey); //Mostrará 1 5 1 8 3 3 
// console.log(secondKey[0]); //Mostrará 1
// console.log("willthiswork",willThisWork); //Mostrará 5: Segundo valor luego del contenido en secondKey, es decir, luego del 1