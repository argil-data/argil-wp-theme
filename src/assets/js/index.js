window.jQuery = window.$ = require('jquery');
window.Swiper = require('swiper');
console.log('code & development: Argil Data Agency');

// import Tailwind styles
import 'tailwindcss/tailwind.css';
// import 'fontawesome-free/scss/fontawesome.scss';

// core version + navigation, pagination modules:
// import Swiper from 'swiper/dist/js/swiper.js';
import Swiper, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
// import 'swiper/swiper.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module

// Animate On Scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';
// Animate On Scroll init
AOS.init();

import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

// import Muuri from "muuri";
// import Shuffle from "shufflejs";
// import bundle;
// import page-labs;

let navOpen = false;
const navBtn = document.getElementById('primary-mobile-menu');
const nav = document.getElementById('primary-menu-container');

// NAVIGATION
// $('.c-navigation').on('mouseenter', '.menu-item-has-children', (e) => {
//     $(e.currentTarget).addClass('open');
// }).on('mouseleave', '.menu-item-has-children', (e) => {
//     $(e.currentTarget).removeClass('open');
// })

// Mobile Menu Dropdown Toggle
function navToggle(e) {
  e.preventDefault();
  var btn = document.getElementById('primary-mobile-menu');
  // var nav = document.getElementById('topnav');
  var navModal = document.getElementById('modal-o-nav');
  // console.log(e);
  btn.classList.toggle('open');
  navModal.classList.toggle('flex');
  navModal.classList.toggle('hidden');
}
navBtn.addEventListener('click', navToggle);

// SWIPER
// configure Swiper to use modules
// Swiper.use([Navigation, Pagination]);
// init Swiper:
const swiperLabs = new Swiper('.swiper-labs', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
    // Optional parameters
	// initial slide index
  	direction: 'horizontal',
	keyboard: true,
	mousewheel: true,
	a11y: true,
	loop: true,
	autoplay: true,
	speed: 400,
	updateOnWindowResize: true,
	centeredSlides: true,
	initialSlide: 1,
	slidesPerView: 'auto',
	spaceBetween: 30,
	observeParents: true,
    observer: true,
	// effect:'slide',

	// Responsive breakpoints
	// breakpoints: {
	// when window width is >= 320px
		// 320: {
		// 	slidesPerView: 1,
		// 	centeredSlides: true,
		// 	spaceBetween: 10
		// },
	// when window width is >= 480px
	// 	480: {
	// 		slidesPerView: 1,
	// 		// spaceBetween: 10
	// 	},
	// 	// when window width is >= 640px
	// 	640: {
	// 		slidesPerView: 3,
	// 		// spaceBetween: 10
	// 	}
	// },
	// grid: {
	// 	columns: 3,
	// 	// rows: 2,
	// },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// SWIPER
// configure Swiper to use modules
const swiperProjects = new Swiper('.swiper-projects', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
    // Optional parameters
	// initial slide index
  	direction: 'horizontal',
	keyboard: true,
	mousewheel: true,
	a11y: true,
	loop: true,
	autoplay: true,
	speed: 400,
	updateOnWindowResize: true,
	centeredSlides: true,
	initialSlide: 1,
	slidesPerView: 'auto',
	spaceBetween: 30,
	observeParents: true,
    observer: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

// init Swipers:
swiperLabs.init();
// console.log(swiperLabs);

swiperProjects.init();
// console.log(swiperProjects);
