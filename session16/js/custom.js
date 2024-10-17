// const myArr = ["name 1", "name 2"]
// myArr[0] = "n 1"
// myArr.push("n 3")
// myArr.unshift("n 0")
// console.log(myArr.length)
// for(let i=0; i<myArr.length; i++){
//     console.log(`${i} => ${myArr[i]}`)
// }

// let arr = [1,2,3,4,5,6,7,8,9,15]
// let x = arr.pop()
// let y = arr.push("test")
// // console.log(arr)
// console.log(arr[y-1])

// let x = arr.shift()
// console.log(arr, x)
// let fileName = "a.jpg"
// "a-b-c-d-f-r-h"
// let name = "arr.controller.js"
// let data = name.split(".")
// // ["arr", "contrlloer", "js"]
// console.log(data);


// let userName = "marwa radwan"
// let result = userName.split(" ")
// if(result) console.log("name is full");
// else console.log("enter your full name");

// result==2 || result==3
// result>=2 && result<=3

// ["marwa", "radwan"] => 2 => true

// let arr = ["m", "a", "r", "w", "x"]
// let r = arr.includes("9")
// console.log(r)

// r = arr.indexOf("9")
// console.log(r)
// arr.reverse()
// console.log(arr)

// let x = []
// let y = {}
// let z = 10
// let q = "marwa"

// let p = Array.isArray(q)
// console.log(p)
// let data = [
//     {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true
//     }
//     ]

// let user = {
//     name: "mahmoud",
//     age:25,
//     email: "mahmoud@nti.com"
// }
// user.name 
// user["name"]
// for(let i = 0; i<data.length; i++){
//     data[i].completed
// }

// forEach
// data = [1,2,3]
// data.forEach( (el,i,arr) => {
//     console.log(`${el.userId} - ${el.title} - ${el.id} - ${el.completed}`)
// } )
 

// let arr = ["a", "b", "c", "d", "e"]
// let a2 = arr.slice(1,10)
// let a2 = arr.splice(1, 3)
// console.log(arr)
// console.log(a2);

// arr = arr.concat(a2)
// console.log(a3)

// let user = { }
// user.age = 20
// user["name"]= "test"
// console.log(user.name)

// let user = {
//     name:"marwa",
//     age:39,
//     email:"marwa@nti.com",
//     print : function(){
//         console.log(`${this.name} - ${this.age}`)
//     }
// }
// delete user.age

// user.print()
// function test(u){
//     // console.log(u)
//     u.name = "mahmoud"
// }

// test(user)
// console.log(user)

// let d = [{name:"a"}, {name:"b"}]
// d = JSON.stringify(d)
// localStorage.setItem("data", d)

// let result = localStorage.getItem("data")
// result = JSON.parse(result)
// console.log(result)
// console.log(result[0])

// let m = document.getElementById("myDiv")
// console.log(m.textContent)
// console.log(m.innerText)
// console.log(m.innerHTML)
// m.innerHTML = "<b>hi from JS</b>"

// let d1 = document.getElementsByTagName("div")
// console.log(d1);
// d1[0].textContent="hjdghgfdsghfvdsh"

// let x = document.querySelector("div")

let myDiv = document.querySelector("#myDiv")
// myDiv.classList = "c b d f"

// console.log(myDiv.classList)

// myDiv.classList.add("c")
// myDiv.classList.remove("p")


let mybtn =document.querySelector("#mybtn")
mybtn.addEventListener("click", function(e){
    console.log(this)
    this.innerText= "remove class"
    myDiv.classList.add("c")
})