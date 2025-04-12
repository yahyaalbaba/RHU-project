let total = localStorage.getItem('total');  
let totalBill = JSON.parse(total);  
document.getElementById("total").innerHTML = `$${totalBill}`;

document.getElementById("submit").addEventListener('click', function() {  
    complete();  
})

function complete() {  
    document.getElementById("purchased").innerHTML = "<h4>Purchase Complete!</h4>";  
}

function myFunction() {
    location.reload();
}