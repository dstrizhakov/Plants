console.log("1. Вёрстка соответствует макету. Ширина экрана 768px +24 \n")
console.log("2 .Вёрстка соответствует макету. Ширина экрана 380px +24 \n")
console.log("3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n")
console.log("4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 \n")
console.log("Общая оценка 75/75 \n")

/************************************************/
// Бургер меню //
/************************************************/
// получаем элементы .menu__icon и .menu__body
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
// если .menu__icon есть
if (menuIcon) {
	document.body.addEventListener("click", function (e) {
		// если кликнули по иконке бургер - переключаем классы
		// открываем меню или закрываем его
		if (e.target.closest('.menu__icon')) {
			document.body.classList.toggle('_lock');
			menuIcon.classList.toggle('_active');
			menuBody.classList.toggle('_active');
			// иначе кликнули вне иконки бургер - закрываем меню
			// не важно, кникнули ли мы по пункту меню или вне его
		} else {
			document.body.classList.remove('_lock');
			menuIcon.classList.remove('_active');
			menuBody.classList.remove('_active');
		};
	});
}

//https://rolling-scopes-school.github.io/dstrizhakov-JSFEPRESCHOOL2022Q4/Plants/


