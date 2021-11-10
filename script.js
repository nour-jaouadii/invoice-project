function getObjectsFromLS(key) {

    return JSON.parse(localStorage.getItem(key) || '[]');

    }
function displayProduct(){

    let products = getObjectsFromLS('products');
    let blockk = ``;
    for (let i = 0; i < products.length; i++) {
     
         blockk += `<option value="${products[i].id}">${products[i].name}</option>`;
         
    }
    document.getElementById('optionDiv').innerHTML= blockk;
    
}
function validate(){
    let  selected = document.getElementById('optionDiv').value;
    let  qty = document.getElementById('qty').value;

     localStorage.setItem('selected',JSON.stringify(selected))
     localStorage.setItem('qty',qty)
     
    console.log(JSON.parse(localStorage.getItem('selected')));
    console.log(localStorage.getItem('qty'));
    
    location.replace('invoice.html');

}
function displayInvoice(){
    let  today =   new Date();
    let dateTime = today.toLocaleString()  ;
    
    document.getElementById('dateNow').innerHTML = dateTime;

       let selectedLs = JSON.parse(localStorage.getItem('selected'));
    let qtyLs =localStorage.getItem('qty');
        let block1 = ``;
   
        total = searchProductById(selectedLs).price * qtyLs;
        block1 +=  `
        <td class="left"> ${searchProductById(selectedLs).name}</td>
        <td class="left"> ${searchProductById(selectedLs).price}</td>

        <td class="left strong">${qtyLs} </td>

        <td class="left"> ${searchProductById(selectedLs).name}</td>

        `;
        console.log(block1)

        document.getElementById('invoice').innerHTML = block1;
       let block2 = ``;
       
    //    block2 =` <tr>
    //    <td class="left">
    //        <strong class="text-dark">Subtotal</strong>
    //    </td>
    //    <td class="right">$28,809,00</td>
    //   </tr>
    //    `   
    //    document.getElementById('total').innerHTML= block2;
     document.getElementById('total').innerHTML= total;

}
function searchProductById(id) {
    let products = getObjectsFromLS('products');

    let myProduct = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            myProduct = products[i];
            break;
        }
    }
    return myProduct

}