// var total = document.getElementById("total");
// var withdraw = document.getElementById("withdraw");
// var form= document.getElementById("formid");
// form.addEventListener('submit',function(event)
// {
//     if(total.value > withdraw.value)
//     {
//         statusid.innerText = "transaction successfully done";
//         var x = parseFloat(total.value);
//         var y = parseFloat(withdraw.value);
//         result = x-y;
//         resultid1.innerText = "available balance:" +result+"/-";

//         event.preventDefault();
//     }
   




// }



// );


var total = document.getElementById("total");
var withdraw = document.getElementById("withdraw");
var form = document.getElementById("formid");
var statusid = document.getElementById("statusid");
var resultid1 = document.getElementById("resultid1");

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var totalValue = parseFloat(total.value);
    var withdrawValue = parseFloat(withdraw.value);

    if (isNaN(totalValue) || isNaN(withdrawValue)) {
        statusid.innerText = "Please enter valid numbers";
    } else if (totalValue < withdrawValue) {
        statusid.innerText = "Insufficient funds";
    } else {
        statusid.innerText = "Transaction successfully done";
        var result = totalValue - withdrawValue;
        resultid1.innerText = "Available balance: " + result.toFixed(2) + "/-"; // toFixed(2) rounds to 2 decimal places
    }
});
