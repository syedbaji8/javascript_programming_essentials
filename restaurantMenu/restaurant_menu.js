const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

let renderBF = '';
breakfastMenu.forEach((item, index) => {
    renderBF += `<p>Item ${index + 1}: ${item}</p>`;
})
document.getElementById('breakfastMenuItems').innerHTML = renderBF;
document.getElementById('breakfastTotalItems').innerHTML = breakfastMenu.length;


let rendermainCourseMenu = '';
mainCourseMenu.forEach((item, index) => {
    rendermainCourseMenu += `<p>Item ${index + 1}: ${item}</p>`;
})
document.getElementById('maincourseMenuItems').innerHTML = rendermainCourseMenu;
document.getElementById('maincourseTotalItems').innerHTML = mainCourseMenu.length;


let renderdessertMenu = '';
dessertMenu.forEach((item, index) => {
    renderdessertMenu += `<p>Item ${index + 1}: ${item}</p>`;
})
document.getElementById('dessertMenuItems').innerHTML = renderdessertMenu;
document.getElementById('dessertTotalItems').innerHTML = dessertMenu.length;