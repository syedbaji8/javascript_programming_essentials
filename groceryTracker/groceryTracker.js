let grocery1_amount;
let grocery2_amount;
let grocery3_amount;
let totalGroceryAmount;

function CalculateTotalGroceryAmount(){
    grocery1_amount = document.getElementById('grocery1').value
    grocery2_amount = document.getElementById('grocery2').value
    grocery3_amount = document.getElementById('grocery3').value
    totalGroceryAmount = document.getElementById('totalGroceryAmount')
    const result = parseFloat(grocery1_amount) + parseFloat(grocery2_amount) + parseFloat(grocery3_amount)
    totalGroceryAmount.innerHTML = `The total amount is ${result}`
}