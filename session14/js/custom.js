// variables
// let const var
// console.log(x)
// let x = 5;
// var z =3 
// var z = true
// var z = "marwa"
// console.log(typeof z)

// let x =3
// x=6
// const y = 5
// y=8
// if(true){
//     x = 5
// }

// console.log(x)

// operators
// Math. Operators
// **  %   *  /  + -
// console.log(5%2**4)
//comporision
// == === != !== > < >= <=
// 5 == '5'  ==> true
// 5 !== '5'  ==> true
//logical 
// && || !
// assignment
//= += -= *= .....
// x=5
// x+=3
// if(!(x=3)){

// }

// let log = console.log
// let x = 4
// x += 3*5 // x = 4+3*5
// log(x)

// conditions
// x == 5 ? console.log("hello 5") : console.log("msh hello 5")


// if(true) {}
// else{ }

// let degree = 50;
// if(degree>=90) console.log("A")
// else if(degree>80) console.log("B")
// else {}

// let d = 1
// switch(d){
//     case 1:console.log("sun");break 
//     case 2: console.log("monday"); break 
//     case 3: console.log("tue"); break 
//     default: console.log("blash hezar")
// }

// loops
// do while  , while , for 
// let counter = 0
// while(counter<10){
//     console.log(counter)
//     counter+=2
// }
// console.log("counter ", counter)
// for(let i=0; i<10; i+=2){
//     console.log(i)
// }


// for(;choice!=0;){
//     console.log("looping")
//     if(true) break
// }

// for(let i = 0; i<=10; i+=3){
//     console.log("my i")
//     if(i==3) continue
//     console.log(i)
// }

// do{
//     console.log("test")
// }while(false)

// let ch = prompt("enter your choice")
// console.log(ch)

// 1-sand1 2-sand2 3-sand3  0- end

// let choice;
// do{
//     choice = +prompt (`enter your choice
//         1 - chicken
//         2 - meat
//         3 - fish
//         0 - to exit`)
//         if(choice == 0) break
//         else if(choice>3) {
//             console.log("blash hezar")
//             continue
//         }
//         console.log(choice)
// }while(choice!=0)

// let x = 6
// console.log(++x)
// console.log(x)


let p1H = +prompt("p1 h")
let p1w = +prompt("p1 w")
let p2H = +prompt("p2 h")
let p2w = +prompt("p2 w")

let bmi1 = p1w / ((p1h/100)**2)
let bmi2 = p2w / ((p2h/100)**2)

console.log(`peron 1 --> h in meter ${ p1H/100 }M and w ${p1w} and his BMI = ${bmi1}`)






