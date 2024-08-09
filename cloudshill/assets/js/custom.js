(function ($) {

	"use strict";

	// Page loading animation
	$(window).on('load', function () {

		$('#js-preloader').addClass('loaded');

	});


	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	})

	$('.owl-banner').owlCarousel({
		center: true,
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		margin: 30,
		responsive: {
			992: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});

	var width = $(window).width();
	$(window).resize(function () {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
		}
	})

	const elem = document.querySelector('.properties-box');
	const filtersElem = document.querySelector('.properties-filter');
	if (elem) {
		const rdn_events_list = new Isotope(elem, {
			itemSelector: '.properties-items',
			layoutMode: 'masonry'
		});
		if (filtersElem) {
			filtersElem.addEventListener('click', function (event) {
				if (!matchesSelector(event.target, 'a')) {
					return;
				}
				const filterValue = event.target.getAttribute('data-filter');
				rdn_events_list.arrange({
					filter: filterValue
				});
				filtersElem.querySelector('.is_active').classList.remove('is_active');
				event.target.classList.add('is_active');
				event.preventDefault();
			});
		}
	}


	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var width = $(window).width();
				if (width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);
				}
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});


	// Page loading animation
	$(window).on('load', function () {
		if ($('.cover').length) {
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function () {
			setTimeout(function () {
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});



})(window.jQuery);

function setActiveMenu(id) {
	// Get all menu items
	var menuItems = document.querySelectorAll('.nav a');

	// Remove 'active' class from all menu items
	menuItems.forEach(function (item) {
		item.classList.remove('active');
	});

	// Add 'active' class to the clicked menu item
	var activeItem = document.getElementById(id);
	if (activeItem) {
		activeItem.classList.add('active');
	}
}

document.querySelectorAll('.nav a').forEach(function (link) {
	link.addEventListener('click', function () {
		setActiveMenu(this.id);
	});
});

// Function to show the pop-up
function showPopup() {
	document.getElementById('form-popup').style.display = 'block';
}

// Automatically show the pop-up 3 seconds after the page loads
window.addEventListener('load', function () {
	setTimeout(showPopup, 3000);
});

// Select all elements with the class 'schedule-visit-btn'
var buttons = document.querySelectorAll('.schedule-visit-btn');

// Loop through each button and add an event listener
buttons.forEach(function (button) {
	button.addEventListener('click', function (event) {
		event.preventDefault();
		document.getElementById('form-popup').style.display = 'block';
	});
});
// Close the form pop-up when the close button is clicked
document.getElementById('close-popup').addEventListener('click', function () {
	document.getElementById('form-popup').style.display = 'none';
});

// Submit the form using JavaScript
const btn = document.getElementById('form-submit');
document.getElementById('contact-form').addEventListener('submit', function (event) {
	event.preventDefault();
	btn.value = 'Sending...';
	const serviceID = 'service_20ly6io';
	const templateID = 'template_ta3moa9';
	emailjs.sendForm(serviceID, templateID, this).then(() => {
		btn.value = 'Send Email';
		alert('Sent!');
	}, (err) => {
		btn.value = 'Send Email';
		alert(JSON.stringify(err));
	});
});

document.getElementById('contact-form2').addEventListener('submit', function (event) {
	event.preventDefault();
	btn.value = 'Sending...';
	const serviceID = 'service_20ly6io';
	const templateID = 'template_ta3moa9';
	emailjs.sendForm(serviceID, templateID, this).then(() => {
		btn.value = 'Send Email';
		alert('Sent!');
	}, (err) => {
		btn.value = 'Send Email';
		alert(JSON.stringify(err));
	});
});