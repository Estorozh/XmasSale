let now =  document.querySelector('.now');
let stock = document.querySelector('.stock');
let warantly = document.querySelector('.warantly');

now.addEventListener('mousedown',(e)=>{e.preventDefault();});
now.addEventListener('click', translateSubscribe);
stock.addEventListener('mouseover', showWarantly);
stock.addEventListener('mouseout', hideWarantly);

function showWarantly(event) {
    warantly.style.display = "block";
}
function hideWarantly() {
    warantly.style.display = "none"
}
function translateSubscribe(event) {

}