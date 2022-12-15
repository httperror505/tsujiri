function computeProduct1()
{
    var drinkSize = document.product_list.product1_size;
    var drinkSizePrice = 0;
    if (drinkSize[0].checked) { // medium?
        drinkSizePrice = parseFloat(drinkSize[0].value);
    } else if (drinkSize[1].checked) { // large?
        drinkSizePrice = parseFloat(drinkSize[1].value);
    }


    var toppingsWhipped = document.product_list.product1_whipped;
    var toppingsWhippedPrice = toppingsWhipped.checked ? 20.00 : 0;


    var toppingsRedBean = document.product_list.product1_redbean;
    var toppingsRedBeanPrice = toppingsRedBean.checked ? 25.00 : 0;


    var qty = document.product_list.product1_qty.value;
    qty = qty.length ? parseInt(qty) : 0;

    var price = drinkSizePrice + toppingsWhippedPrice + toppingsRedBeanPrice;
    

    var total = qty * price;

    document.getElementById('product1_total').innerHTML = total.toFixed(2);

    computeGrandTotal();
}

function computeProduct2()
{
    
    var drinkSize = document.product_list.product2_size;
    var drinkSizePrice = 0;
    if (drinkSize[0].checked) { // medium?
        drinkSizePrice = parseFloat(drinkSize[0].value);
    } else if (drinkSize[1].checked) { // large?
        drinkSizePrice = parseFloat(drinkSize[1].value);
    }

    var toppingsWhipped = document.product_list.product2_whipped;
    var toppingsWhippedPrice = toppingsWhipped.checked ? 20.00 : 0;

 
    var toppingsRedBean = document.product_list.product2_redbean;
    var toppingsRedBeanPrice = toppingsRedBean.checked ? 25.00 : 0;

   
    var qty = document.product_list.product2_qty.value;
    qty = qty.length ? parseInt(qty) : 0;

   
    var price = drinkSizePrice + toppingsWhippedPrice + toppingsRedBeanPrice;
    
    
    var total = qty * price;

    document.getElementById('product2_total').innerHTML = total.toFixed(2);
    
   
    computeGrandTotal();
}
function computeProduct3()
{
   
    var drinkSize = document.product_list.product3_size;
    var drinkSizePrice = 0;
    if (drinkSize[0].checked) { // medium?
        drinkSizePrice = parseFloat(drinkSize[0].value);
    } else if (drinkSize[1].checked) { // large?
        drinkSizePrice = parseFloat(drinkSize[1].value);
    }

  
    var toppingsWhipped = document.product_list.product3_whipped;
    var toppingsWhippedPrice = toppingsWhipped.checked ? 20.00 : 0;

   
    var toppingsRedBean = document.product_list.product3_redbean;
    var toppingsRedBeanPrice = toppingsRedBean.checked ? 25.00 : 0;

   
    var qty = document.product_list.product3_qty.value;
    qty = qty.length ? parseInt(qty) : 0;
 
    var price = drinkSizePrice + toppingsWhippedPrice + toppingsRedBeanPrice;
    
  
    var total = qty * price;

    document.getElementById('product3_total').innerHTML = total.toFixed(2);
    
    // update grand total
    computeGrandTotal();
}
function computeProduct4()
{
    // drink size
    var drinkSize = document.product_list.product4_size;
    var drinkSizePrice = 0;
    if (drinkSize[0].checked) { // medium?
        drinkSizePrice = parseFloat(drinkSize[0].value);
    } else if (drinkSize[1].checked) { // large?
        drinkSizePrice = parseFloat(drinkSize[1].value);
    }

    // toppings: whipped cream
    var toppingsWhipped = document.product_list.product4_whipped;
    var toppingsWhippedPrice = toppingsWhipped.checked ? 20.00 : 0;

    // toppings: red bean
    var toppingsRedBean = document.product_list.product4_redbean;
    var toppingsRedBeanPrice = toppingsRedBean.checked ? 25.00 : 0;

    // quantity
    var qty = document.product_list.product4_qty.value;
    qty = qty.length ? parseInt(qty) : 0;

    // price
    var price = drinkSizePrice + toppingsWhippedPrice + toppingsRedBeanPrice;
    
    // total price
    var total = qty * price;

    document.getElementById('product4_total').innerHTML = total.toFixed(2);
    
    // update grand total
    computeGrandTotal();
}
function computeProduct5()
{
    // drink size
    var drinkSize = document.product_list.product5_size;
    var drinkSizePrice = 0;
    if (drinkSize[0].checked) { // medium?
        drinkSizePrice = parseFloat(drinkSize[0].value);
    } else if (drinkSize[1].checked) { // large?
        drinkSizePrice = parseFloat(drinkSize[1].value);
    }

    // toppings: whipped cream
    var toppingsWhipped = document.product_list.product5_whipped;
    var toppingsWhippedPrice = toppingsWhipped.checked ? 20.00 : 0;

    // toppings: red bean
    var toppingsRedBean = document.product_list.product5_redbean;
    var toppingsRedBeanPrice = toppingsRedBean.checked ? 25.00 : 0;

    // quantity
    var qty = document.product_list.product5_qty.value;
    qty = qty.length ? parseInt(qty) : 0;

    // price
    var price = drinkSizePrice + toppingsWhippedPrice + toppingsRedBeanPrice;
    
    // total price
    var total = qty * price;

    document.getElementById('product5_total').innerHTML = total.toFixed(2);
    
    // update grand total
    computeGrandTotal();
}
function computeProduct6()
{
    // drink size
    var drinkSize = document.product_list.product6_size;
    var drinkSizePrice = 0;
    if (drinkSize[0].checked) { // medium?
        drinkSizePrice = parseFloat(drinkSize[0].value);
    } else if (drinkSize[1].checked) { // large?
        drinkSizePrice = parseFloat(drinkSize[1].value);
    }

    // toppings: whipped cream
    var toppingsWhipped = document.product_list.product6_whipped;
    var toppingsWhippedPrice = toppingsWhipped.checked ? 20.00 : 0;

    // toppings: red bean
    var toppingsRedBean = document.product_list.product6_redbean;
    var toppingsRedBeanPrice = toppingsRedBean.checked ? 25.00 : 0;

    // quantity
    var qty = document.product_list.product6_qty.value;
    qty = qty.length ? parseInt(qty) : 0;

    // price
    var price = drinkSizePrice + toppingsWhippedPrice + toppingsRedBeanPrice;
    
    // total price
    var total = qty * price;

    document.getElementById('product6_total').innerHTML = total.toFixed(2);
    
    // update grand total
    computeGrandTotal();
}
function computeProduct7()
{
    // drink size
    var drinkSize = document.product_list.product7_size;
    var drinkSizePrice = 0;
    if (drinkSize[0].checked) { // medium?
        drinkSizePrice = parseFloat(drinkSize[0].value);
    } else if (drinkSize[1].checked) { // large?
        drinkSizePrice = parseFloat(drinkSize[1].value);
    }

    // toppings: whipped cream
    var toppingsWhipped = document.product_list.product7_whipped;
    var toppingsWhippedPrice = toppingsWhipped.checked ? 20.00 : 0;

    // toppings: red bean
    var toppingsRedBean = document.product_list.product7_redbean;
    var toppingsRedBeanPrice = toppingsRedBean.checked ? 25.00 : 0;

    // quantity
    var qty = document.product_list.product7_qty.value;
    qty = qty.length ? parseInt(qty) : 0;

    // price
    var price = drinkSizePrice + toppingsWhippedPrice + toppingsRedBeanPrice;
    
    // total price
    var total = qty * price;

    document.getElementById('product7_total').innerHTML = total.toFixed(2);
    
    // update grand total
    computeGrandTotal();
}

function computeTotalQty()
{
    // product 1 quantity
    var product1Qty = document.product_list.product1_qty.value;
    product1Qty = product1Qty.length ? parseInt(product1Qty) : 0;
    
    // product 2 quantity
    var product2Qty = document.product_list.product2_qty.value;
    product2Qty = product2Qty.length ? parseInt(product2Qty) : 0;
   
    var product3Qty = document.product_list.product3_qty.value;
    product3Qty = product3Qty.length ? parseInt(product3Qty) : 0;
    
    // product 2 quantity
    var product4Qty = document.product_list.product4_qty.value;
    product4Qty = product4Qty.length ? parseInt(product4Qty) : 0;

    var product5Qty = document.product_list.product5_qty.value;
    product5Qty = product5Qty.length ? parseInt(product5Qty) : 0;
    
    // product 2 quantity
    var product6Qty = document.product_list.product6_qty.value;
    product6Qty = product6Qty.length ? parseInt(product6Qty) : 0; 
   
    // product 2 quantity
    var product7Qty = document.product_list.product7_qty.value;
    product7Qty = product7Qty.length ? parseInt(product7Qty) : 0;

    // total quantity
    var totalQty = product1Qty + product2Qty + product3Qty + product4Qty + product5Qty + product6Qty + product7Qty;
    document.getElementById('total_qty').innerHTML = totalQty;
}

function computeGrandTotal()
{
    product1Total = parseFloat(document.getElementById('product1_total').innerHTML);
    
    product2Total = parseFloat(document.getElementById('product2_total').innerHTML);
    
    product3Total = parseFloat(document.getElementById('product3_total').innerHTML);
    
    product4Total = parseFloat(document.getElementById('product4_total').innerHTML);
    product5Total = parseFloat(document.getElementById('product5_total').innerHTML);
    
 
    product6Total = parseFloat(document.getElementById('product6_total').innerHTML);
    product7Total = parseFloat(document.getElementById('product7_total').innerHTML);
    
   
       
    // grand total
    var total = product1Total + product2Total + product3Total + product4Total + product5Total + product6Total + product7Total;
    document.getElementById('grand_total').innerHTML = total.toFixed(2);
}

function computeChange()
{
    // grand total
    var grandTotal = parseFloat(document.getElementById('grand_total').innerHTML);
    
    // tender
    var tender = document.product_list.tender.value;
    tender = tender.length ? parseFloat(tender) : 0;
    
    // change
    var change = tender > grandTotal ? tender - grandTotal : 0;
    document.getElementById('change').innerHTML = change.toFixed(2);
}