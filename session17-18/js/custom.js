// const readDataFromStorage = ( type = 0, keyWord = "data" ) => {
//     // 0 => json, 1=> any other primetive data
//     let data = localStorage.getItem(keyWord) || []    
//     try{
//         if(!type){  //if(!1)
//             if(!Array.isArray(data)){
//                 throw new Error("Data is not an array")
//             }
//             data = JSON.parse(data)
//         }
//     }
//     catch(e){
//         data = []
//     }
//     return data
// }
// console.log(readDataFromStorage())

// const formHeads = ["name", "age", "email"]

const readDataFromStorage = (keyWord="users")=>{
    let data = localStorage.getItem(keyWord) || []
    try{
        data = JSON.parse(data)
        if(!Array.isArray(data)) throw new Error("")
    }
    catch(e){
        data = []
    }
    return data
}

const getUserData = (userId) =>{
    const allUsers = readDataFromStorage()
    let user = allUsers.find(u=> u.id == userId)
    if(!user) return console.log("not found")
    console.log(user)
}

getUserData(123)
// const writeDataToStorage = (data, keyWord="users") => 
//     localStorage.setItem(keyWord, JSON.stringify(data))
// const generateUserObject = (ele) =>{
//     const data = {}
//     data.id =Date.now()
//     //const data = { id: Date.now() }
//     formHeads.forEach(head => data[head] = ele[head].value)
//         // name:ele.name.value,
//         // age:ele.age.value,
//         // email:ele.email.value
//     return data
// }

// const addUser = document.querySelector("#addUser") //null
// if(addUser){
//     addUser.addEventListener('submit', function(e){
//         e.preventDefault()
//         const data = readDataFromStorage()
//         const userData = generateUserObject(addUser.elements)
//         // addUser.elements.name.value
//         data.push(userData)
//         writeDataToStorage(data)
//         // addUser.reset()
//         window.location.href = "index.html"
//     })
// }

// const dataWrap = document.querySelector("#dataWrap")
// if(dataWrap){
//     const data = readDataFromStorage()
//     if(data.length == 0 ){
//         dataWrap.innerHTML+=` <tr class="alert alert-danger">
//         <td colspan="5"  class="bg-danger-subtle
//       ">No Data Found</td>
//       </tr>`
//     }
//     data.forEach(user => {
//         dataWrap.innerHTML+= `<tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.age}</td>
//                 <td>${user.email}</td>
//                 <td>
//                   <a href="show.html" class="btn btn-success me-3 px-5">Show</a>
//                   <a href="edit.html" class="btn btn-warning me-3  px-5">Edit</a>
//                   <button class="btn btn-danger me-3 px-5">Delete</button>
//                 </td>
//               </tr>`
//     })
//     // for(let i = 0; i< data.length; i++){
//     //     console.log(data[i])
//     // }
// }


/* FILTER FIND FINDINDEX */
// let users = [
//     {id:1, age:10},
//     {id:2, age:20},
//     {id:3, age:30},
//     {id:4, age:25}
// ]

// find
// let user = users.find( u => {return u.id == 2} )
// user = users.filter( u => {return u.id == 2} )

// console.log(user)