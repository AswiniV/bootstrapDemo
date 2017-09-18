function orderPrice()
{
   var cost=0;
   var items1 = document.getElementsByName('Pizza')

    for( let i =0; i < items1.length ; i++){
	if(items1[i].checked==true){
	cost += parseFloat(items1[i].value);
    }
}

    var items2 = document.getElementsByName('ice');
    // var items2 = $('ice');
    for( let i =0; i < items2.length ; i++){
	if(items2[i].checked==true){
	cost += parseFloat(items2[i].value);
        }
    }
    //return pizzaPrice;
    var items3 = document.getElementsByName('drink');
    for( let i =0; i < items3.length ; i++){
	if(items3[i].checked==true){
	cost += parseFloat(items3[i].value);
        }
    }
     document.getElementById("totalCost").innerHTML="Total Price For the order $"+cost;
    alert($("#totalCost").html());
   
}
