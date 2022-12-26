
/************************************************/
// Бургер меню //
/************************************************/

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

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

document.querySelectorAll('.accordeon-button').forEach((el) => {
	document.querySelectorAll('.accordeon-item').forEach((el) => {
		el.classList.remove('_active');
	})
	el.addEventListener('click', function (e) {
		document.querySelectorAll('.accordeon-item').forEach((el) => {
			el.classList.remove('_active');
		})
		el.parentNode.classList.add('_active');
	});
})

