let products = [
    {sku:123, name:"product 1", price:5000},
    {sku:125, name:"product 2", price:6000},
    {sku:254, name:"product 3", price:7000},
    {sku:944, name:"product 4", price:8000},
    {sku:355, name:"product 5", price:9000},
    {sku:982, name:"product 6", price:4000},
    {sku:147, name:"product 7", price:3000},
]
// const setProductInSelect = (select) => {
//     products.forEach(pro=> {
//         let option = createCustomEle(select, "option", false, pro.name)
//         option.value = pro.sku
//     })
// }
// const calcPrice = (select,  price, dis, subtotal , quantity) => {
//     console.log(select.value)
//     const selectedValue = select.value;
//     let res = products.find(pro=> pro.sku==selectedValue)
//     let p = price
//     let q = quantity
//     let sub = subtotal
//     let d = dis
//     p.value= p.value || res.price
//     q.value= q.value || 1
//     d.value = d.value || 0
//     sub.value = p.value * q.value * (100-d.value)/100
// }
// const createCustomEle = (parent, ele, classes, txt) => {
//     const el = document.createElement(ele)
//     parent.appendChild(el)
//     if(classes) el.classList = classes
//     if(txt) el.innerHTML = txt
//     return el
// }
// const setAttributeForElement = (ele, attrName, attrVal) => {
//     ele.setAttribute(attrName, attrVal)
// }
// const cloneRow = () => {
//     const tbody = document.querySelector("tbody")
//     let tr =createCustomEle(tbody, "tr",false, false)
//     let td = createCustomEle(tr, "td", null, false)
//     let select = createCustomEle(td, "select","form-control form-select pro", null )
//     let option = createCustomEle(select, "option", false, "please choose a product")
//     option.setAttribute("selected", true)
//     option.setAttribute("disabled", true)
//     setProductInSelect(select)
//     td = createCustomEle(tr, "td", null, null)
//     let quantity = createCustomEle(td, "input", "quantity form-control", false)
//     quantity.name = "quantity"
//     td = createCustomEle(tr, "td", null, null)
//     let price = createCustomEle(td, "input", "price form-control", false)
//     price.name = "price"
//     td = createCustomEle(tr, "td", null, null)
//     let dis = createCustomEle(td, "input", "dis form-control", false)
//     dis.name = "dis"
//     td = createCustomEle(tr, "td", null, null)
//     let sub = createCustomEle(td, "input", "sub form-control", false)
//     sub.name = "sub"
//     select.addEventListener('change', function () {
//          calcPrice(select, price, dis, sub , quantity)
//     })
//     dis.addEventListener('input', function(){
//         calcPrice(select, price, dis, sub , quantity)
//      })
//     quantity.addEventListener('input', function(){ 
//         calcPrice(select, price, dis, sub , quantity)
//      })
//     price.addEventListener('input', function(){
//         calcPrice(select, price, dis, sub , quantity)
//      })
// }

const creation = (parent, tagName, classes, attributes) => {
    const newEl = document.createElement(tagName)
    parent.appendChild(newEl)
    if(classes) newEl.classList = classes
    if(attributes) {
        //{attrName: "name", attrVal: "xyz"}
        attributes.forEach(a => {
            newEl.setAttribute(a.attrName, a.attrVal)
        });
    }
    return newEl
}
const drawRow = () => {
    let tbody = document.querySelector("tbody")
    let tr = creation(tbody, "tr", false, null)
    let td = creation(tr, "td", false, null)
    let product = creation(td, "select", "form-control form-select", [
        {attrName: "name", attrVal: "product"},
    ])
    product.innerHTML +=`<option selected disabled>choose your pro</option>`
    products.forEach(pro=>{
        let option = creation(product, "option", 0, [
            {attrName:"value",attrVal:pro.sku}
        ])
        option.innerHTML = pro.name
    })

    td = creation(tr, "td", false, null)
    let q = creation(td,"input", "form-control",[
        { attrName:"name", attrVal:"quantity"}
    ])

    td = creation(tr, "td", false, null)
    let p = creation(td,"input", "form-control",[
        { attrName:"name", attrVal:"price"}
    ])    
    
    td = creation(tr, "td", false, null)
    let d = creation(td,"input", "form-control",[
        { attrName:"name", attrVal:"discount"}
    ])    
    
    td = creation(tr, "td", false, null)
    let s = creation(td,"input", "form-control",[
        { attrName:"name", attrVal:"subtotal"}
    ])    
    
}



drawRow()
document.querySelector('#add').addEventListener("click", ()=> 
    drawRow()
)



let test = document.querySelector("#test")
test.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(!test.elements.username.value) {
        console.log("required")
        document.querySelector(".userName").classList.remove("d-none")
    }
})