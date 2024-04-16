"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Saiful
   Date:   4/16
   
   Filename: tc_cart.js
	
*/



var orderTotal = 0;
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

for (var i = 0; i < item.length; i++) {
   // Step a
   cartHTML += "<tr><td><img src='tc_item.png' alt='item' /></td>";
   // Step b
   cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";
   // Step c
   var itemCost = itemPrice[i] * itemQty[i];
   // Step d
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   // Step e
   orderTotal += itemCost;
}
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";
document.getElementById("cart").innerHTML = cartHTML;

