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


const writeDataToStorage = (data, keyWord="users") => 
    localStorage.setItem(keyWord, JSON.stringify(data))


const addUser = document.querySelector("#addUser")
addUser.addEventListener('submit', function(e){
    e.preventDefault()
    const data = readDataFromStorage()
    const userData = {
        id:Date.now(),
        name:addUser.elements.name.value,
        age:addUser.elements.age.value,
        email:addUser.elements.email.value
    }
    data.push(userData)
    writeDataToStorage(data)
    // addUser.reset()
    window.location.href = "index.html"
})