let products = [
    {sku:123, name:"product 1", price:5000},
    {sku:125, name:"product 2", price:6000},
    {sku:254, name:"product 3", price:7000},
    {sku:944, name:"product 4", price:8000},
    {sku:355, name:"product 5", price:9000},
    {sku:982, name:"product 6", price:4000},
    {sku:147, name:"product 7", price:3000},
]

let select = document.querySelector(".pro")
products.forEach(pro=> {
    let option = document.createElement("option")
    option.value = pro.sku
    option.textContent = pro.name
    select.appendChild(option)
})
const calcPrice = () => {
    const selectedValue = $('.pro').val();
    let res = products.find(pro=> pro.sku==selectedValue)
    let p = document.querySelector(".price")
    let q = document.querySelector(".quantity")
    let sub = document.querySelector(".sub")
    let d = document.querySelector(".dis")
    p.value= p.value || res.price
    q.value= q.value || 1
    d.value = d.value || 0
    sub.value = p.value * q.value * (100-d.value)/100

}
const cloneRow = () => {
    const tbody = document.querySelector("tbody")
    let tr = document.createElement('tr')
    tbody.appendChild(tr)
    let td = document.createElement("td")
    tr.appendChild(td)
    let select = document.createElement("select")
    select.classList="form-control form-select pro"
    td.appendChild(select)
    let option = document.createElement("option")
    option.innerHTML="please choose a product"
    option.setAttribute("selected", true)
    option.setAttribute("disabled", true)
    select.appendChild(option)
    products.forEach(pro=> {
        let option = document.createElement("option")
        option.value = pro.sku
        option.textContent = pro.name
        select.appendChild(option)
    })
    
//     <td>
//         <input name="quantity" class="quantity form-control">
//     </td>
//     <td>
//         <input name="price" class="form-control price">
//     </td>
//     <td>
//         <input name="dis" class="form-control dis">
//     </td>
//     <td>
//         <input name="sub"  class="form-control sub" disabled>
//     </td>                    
}
document.querySelector('#add').addEventListener("click", ()=> 
    cloneRow()
)

// select.addEventListener("change", function() {
document.querySelector('.pro').addEventListener('change', function () {
    calcPrice()
})
document.querySelector(".dis").addEventListener('input', function(){
    calcPrice()    
})
document.querySelector(".quantity").addEventListener('input', function(){
    calcPrice()    
})

document.querySelector(".price").addEventListener('input', function(){
    calcPrice()    
})