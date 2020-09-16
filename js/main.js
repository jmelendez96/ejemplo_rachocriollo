const menu = document.querySelector('.menu');
const des = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(des)

menu.addEventListener('click',()=>{
	des.classList.toggle("spread")
})

window.addEventListener('click', e=>{
	if (des.classList.contains('spread') && e.target !=des && e.target != menu) {
		des.classList.toggle("spread")
	}


})