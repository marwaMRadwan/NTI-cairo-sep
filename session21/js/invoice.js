let products = [
    {sku:123, name:"product 1", price:5000},
    {sku:125, name:"product 2", price:6000},
    {sku:254, name:"product 3", price:7000},
    {sku:944, name:"product 4", price:8000},
    {sku:355, name:"product 5", price:9000},
    {sku:982, name:"product 6", price:4000},
    {sku:147, name:"product 7", price:3000},
]

let select = document.querySelector(".select2")
products.forEach(pro=> {
    let option = document.createElement("option")
    option.value = pro.sku
    option.textContent = pro.name
    select.appendChild(option)
})

// select.addEventListener("change", function() {
$('.select2').on('change', function () {
    const selectedValue = $('.select2').val();
    let res = products.find(pro=> pro.sku==selectedValue)
    console.log(res)
    document.querySelector("#price").value= res.price
    document.querySelector("#quantity").value= 1
    document.querySelector("#sub").value = res.price
    document.querySelector("#dis").value = 0
    
})