window.addEventListener('DOMContentLoaded', () => {
	// Hide/show Header on scroll
	const onScrollHeader = () => {
		const header = document.querySelector('.header');
		let	prevScroll = window.pageYOffset,
				currentScroll;

				window.addEventListener('scroll', () => {
					currentScroll = window.pageYOffset;

					const headerHidden = () => header.classList.contains('header__hidden');

					if (currentScroll > prevScroll && !headerHidden()) {
						header.classList.add('header__hidden');
					}
					if (currentScroll < prevScroll && headerHidden()) {
						header.classList.remove('header__hidden');
					}
					prevScroll = currentScroll;
				});
	};
	onScrollHeader();

	//tabs section main
	const tabs = document.querySelectorAll('.main__img-miniature'),
			tabsContent = document.querySelectorAll('.main__img-bg'),
			tabsParent = document.querySelector('.main__miniature');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('main__img-bg');
		item.classList.remove('active');
		});

		tabs.forEach(item => {
			item.classList.remove('active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('active');
		tabsContent[i].classList.remove('hide');
	tabs[i].classList.add('active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('main__img-miniature')) {
		tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	//goods counter
	let pole = document.getElementById("number-diet"),
		plus = document.getElementsByClassName("main__item-plus")[0],
		minus = document.getElementsByClassName("main__item-minus")[0];

	plus.addEventListener("click", function() {
		pole.value = parseInt(pole.value) + 1;
	});

	minus.addEventListener("click", function() {
		if (parseInt(pole.value) > 1) {
			pole.value = parseInt(pole.value) -+ 1;
		}
	});

	//output of data about the addition of goods
	const addCart = document.querySelector('.main__item-addcart'),
			favorite = document.querySelector('.main__item-favorite'),
			addCartText = document.querySelector('.main__item-addtext');
	let	mainTitle = document.getElementsByClassName('main__item-title')[0].innerHTML;

	addCart.addEventListener('click', function() {
		addCartText.innerHTML = `товар ${mainTitle} в количестве ${pole.value} единиц добавлен в корзину`;
	});
	favorite.addEventListener('click', function() {
		addCartText.innerHTML = `товар ${mainTitle} в количестве ${pole.value} единиц добавлен в избранное`;
	});

	// выбрать размер
	const showSize = document.querySelector('.main__item-selectsize'),
			itemProp = document.querySelector('.main__item-prop'),
			selectsizeSvg = document.querySelector('.main__selectsize-icon');

	showSize.addEventListener('click', function() {
		itemProp.classList.toggle('active');
		selectsizeSvg.classList.toggle('active');
	});

	//hamburger
	const btnMenu = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu-item');
	const toggleMenu = function() {
		menu.classList.toggle('active');
	};
	
	btnMenu.addEventListener('click', function(e) {
		btnMenu.classList.toggle('active');
		e.stopPropagation();
		toggleMenu();
	});
	
	document.addEventListener('click', function(e) {
		const target = e.target;
		const itsMenu = target == menu || menu.contains(target);
		const itsBtnMenu = target == btnMenu;
		const menuIsActive = menu.classList.contains('active');

		btnMenu.classList.remove('active');
		if (!itsMenu && !itsBtnMenu && menuIsActive) {
			toggleMenu();
		}
	});

});

//form
jQuery(document).ready(function () {

	jQuery('form button').click(function () {
		var form = jQuery(this).closest('form');

		if (form.valid()) {
			form.css('opacity', '.5');
			var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function (data) {
					form.html(data);
					form.css('opacity', '1');
					form.find('.status').html('форма отправлена успешно');
					//$('#myModal').modal('show') // для бутстрапа
				},
				error: function () {
					form.find('.status').html('серверная ошибка');
				}
			});
		}
	});

	//zoom


});

