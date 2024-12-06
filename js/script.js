

var productlist = [];

var productname = document.getElementById("name");
var productprice = document.getElementById("price");


function Add_product(){
    var product = {
        name: productname.value,
        price : productprice.value
    }


    productlist.push(product);
    display()
}




function display(){

    var cartona = ``;

    for(var i = 0  ; i < productlist.lenght ; i++){
        cartona += `<div class="col-md-4">
                <h4>name : ${productlist[i].name} </h4>
                <h4>price : ${productlist[i].price} </h4>
            </div>`
    }


}