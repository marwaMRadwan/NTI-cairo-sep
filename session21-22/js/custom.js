// setTimeout(()=>{
//     console.log("hello")
// }, 2000)
// console.log(1)


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => console.log(res.json()))
// .catch(e=> console.log(e))

// const fetchApiData =async function() {
// const fetchApiData =async()=> {
// async function fetchApiData(callback){
//     try{
//         let apiURL = "https://jsonplaceholder.typicode.com/posts?_limit=10"
        // let response = await(await fetch(apiURL)).json()
//         let data = await fetch(apiURL)
//         let response = await data.json()
//         // response.forEach(element => {
//         //     //logic for element creation
//         // });
//         // return response
//         callback(response, false)
//     }
//     catch(e){
//         // console.log(e)
//         callback(false, e)
//     }
// }
// console.log(fetchApiData())
// fetchApiData((res,err)=>{
//     if(err) return console.log(err)
//     console.log(res)
// })


let btns = ["posts","albums","photos","todos"]
// let urls =[
//     "",
//     ""]
const btnWrap = document.querySelector("#btnWrap")
const result    = document.querySelector("#result")
const baseUrl = "https://jsonplaceholder.typicode.com/"
btns.forEach((btn, i)=>{
    let btnElement = document.createElement("button")
    btnElement.textContent = btn
    btnWrap.appendChild(btnElement)
    btnElement.addEventListener("click", async function(){
        let data = await fetch(`${baseUrl}${btn}`)
        let res = await data.json()
        result.innerHTML=""
        res.forEach(r=> {
            let li = document.createElement("li")
            li.textContent = `${r.id}- ${r.title}`
            result.appendChild(li)
        })
    })
})