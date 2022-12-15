function computeProduct1()
{
    var drinkSize = document.product_list.product1_size;
    var drinkSizePrice = 0;
    if (drinkSize[0].checked) { // medium?
        drinkSizePrice = parseFloat(drinkSize[0].value);
    } else if (drinkSize[1].checked) { // large?
        drinkSizePrice = parseFloat(drinkSize[1].value);
    }

    var toppingsKinako = document.product_list.product1_kinako;
    var toppingsKinakoPrice = toppingsKinako.checked ? 10.00 : 0;
   
    var toppingsKuromitsu = document.product_list.product1_kuromitsu;
    var toppingsKuromitsuPrice = toppingsKuromitsu.checked ? 10.00 : 0;

    var toppingsGenmal = document.product_list.product1_genmal;
    var toppingsGenmalPrice = toppingsGenmal.checked ? 15.00 : 0;

    var toppingsShiratama = document.product_list.product1_shiratama;
    var toppingsShiratamaPrice = toppingsShiratama.checked ? 15.00 : 0;
    
    var toppingsRedBeanBall = document.product_list.product1_redbeanball;
    var toppingsRedBeanBallPrice = toppingsRedBeanBall.checked ? 20.00 : 0;

    var qty = document.product_list.product1_qty.value;
    qty = qty.length ? parseInt(qty) : 0;
    
    var price = drinkSizePrice + toppingsKinakoPrice + toppingsKuromitsuPrice + toppingsGenmalPrice + toppingsShiratamaPrice + toppingsRedBeanBallPrice;
    
    var total = qty * price;

    document.getElementById('product1_total').innerHTML = total.toFixed(2);

    computeGrandTotal();
}

function computeTotalQty()
{
    // product 1 quantity
    var product1Qty = document.product_list.product1_qty.value;
    product1Qty = product1Qty.length ? parseInt(product1Qty) : 0;

    // var product1Qty = document.product_list.product1_qty.value;
    // product1Qty = product1Qty.length ? parseInt(product1Qty) : 0;
     
    // var product1Qty = document.product_list.product1_qty.value;
    //   product1Qty = product1Qty.length ? parseInt(product1Qty) : 0;
  
    // var product1Qty = document.product_list.product1_qty.value;
    //   product1Qty = product1Qty.length ? parseInt(product1Qty) : 0;
    
    // var product1Qty = document.product_list.product1_qty.value;
    // product1Qty = product1Qty.length ? parseInt(product1Qty) : 0;

    // total quantity
    var totalQty = product1Qty;
    document.getElementById('total_qty').innerHTML = totalQty;

}

function computeGrandTotal()
{
    product1Total = parseFloat(document.getElementById('product1_total').innerHTML);
  
    // grand total
    var total = product1Total;
    document.getElementById('grand_total').innerHTML = total.toFixed(2);
}

function computeChange()
{
    var grandTotal = parseFloat(document.getElementById('grand_total').innerHTML);

    var tender = document.product_list.tender.value;
    tender = tender.length ? parseFloat(tender) : 0;
  
    var change = tender > grandTotal ? tender - grandTotal : 0;
    document.getElementById('change').innerHTML = change.toFixed(2);
}