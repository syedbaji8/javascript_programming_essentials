let length;
let width;
let result;

function calculateArea() {
    length = document.getElementById('length');
    width = document.getElementById('width');
    result = document.getElementById('result');
    result.innerHTML = length.value * width.value;
}