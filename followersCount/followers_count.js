// function increaseCount() {
//     let countDisplay;
//     let count = 0;
//     return function () {
//         countDisplay = document.getElementById('countDisplay');
//         count++;
//         countDisplay.innerHTML = count;
//         if (count % 10 === 0) {
//             alert('Congratualations you got ' + count + ' followers!')
//         } 
//     }
// }
// const mycount = increaseCount();
let count = 0;
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}
function checkCountValue() {
    if (count % 10 === 0) {
        alert('Congratualations you got ' + count + ' followers!')
    }
}
function resetCount(){
    count = 0;
    alert('Hey your followers got reset now you have ' + count + ' followers!')
    displayCount();
}
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}
