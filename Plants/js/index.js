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
/************************************************/
// Аккордeон //
/************************************************/
// получаем коллекцию элементов с классом .accordeon-button
// пробегаем по элементам методом forEach
document.querySelectorAll('.accordeon-button').forEach((el) => {
	// добавляем слушатель события "click" каждому элементу .accordeon-button
	el.addEventListener('click', function (e) {
		// на всякий случай прерываем действие браузера по умолчанию
		e.preventDefault();
		// получаем коллекцию элементов с классом .accordeon-item
		// удаляем класс _active у всех элементов
		document.querySelectorAll('.accordeon-item').forEach((el) => {
			el.classList.remove('_active');
		})
		// добавляем класс _active родительскому элементу (.accordeon-item)
		// кнопки .accordeon-button по которой произошел клик
		el.parentNode.classList.add('_active');
	});
})
/************************************************/
// Обработка кнопки выбора города (селект)//
/************************************************/
const buttonCity = document.querySelector('.button-city')
const buttonCityName = document.querySelector('.button-city__name')
const selectContact = document.querySelector('.select-contact')
const contactsImage = document.querySelector('.contacts__image')
if (buttonCity) {
	document.body.addEventListener("click", function (e) {
		e.preventDefault();
		if (e.target.closest('.button-city')) {
			buttonCity.classList.toggle('_active');
		} else {
			buttonCity.classList.remove('_active');
		};
		if (e.target.closest('.select-contact__link')) {
			document.querySelectorAll('.city-item').forEach((el) => {
				el.classList.remove('_active');
			});
			let cityId = 10 + Number(e.target.id);
			let currentCityItem = document.getElementById(`${cityId}`);
			currentCityItem.classList.add('_active');
			buttonCityName.innerText = e.target.innerHTML;
			contactsImage.classList.add('_hidden')
		}
	})
}

//https://rolling-scopes-school.github.io/dstrizhakov-JSFEPRESCHOOL2022Q4/Plants/


