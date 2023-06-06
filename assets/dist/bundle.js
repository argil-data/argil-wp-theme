(self["webpackChunkargilfoliox"] = self["webpackChunkargilfoliox"] || []).push([["/assets/dist/bundle"],{

/***/ "./resources/js/bundle.js":
/*!********************************!*\
  !*** ./resources/js/bundle.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider */ "./resources/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation */ "./resources/js/components/navigation.js");
// import $ from 'jquery';

 // console.log("Hello from bundle!");

window.jQuery = window.$ = __webpack_require__(/*! jquery */ "./node_modules/.pnpm/jquery@3.6.0/node_modules/jquery/dist/jquery.js");
jQuery(document).ready(function ($) {
  // $() will work as an alias for jQuery() inside of this function
  console.log('[ from Bundle your jQuery code goes here ]');
}); // SHUFFLE DEMO
// construct new Shuffle grid instance
// const shuffleInstance = new Shuffle(document.getElementById('shuffleGrid'), {
//   itemSelector: '.picture-item',
//   sizer: '.my-sizer-element',
// });
// console.log(shuffleInstance);
// 'use strict';
// var Shuffle = window.Shuffle;
// var Demo = function (element) {
//   this.element = element;
//   this.shuffle = new Shuffle(element, {
//     itemSelector: '.picture-item',
//     // sizer: element.querySelector('.my-sizer-element'),
//   });
//   // Log events.
//   this.addShuffleEventListeners();
//   this._activeFilters = [];
//   this.addFilterButtons();
//   this.addSorting();
//   this.addSearchFilter();
//   this.mode = 'exclusive';
// };
// Demo.prototype.toggleMode = function () {
//   if (this.mode === 'additive') {
//     this.mode = 'exclusive';
//   } else {
//     this.mode = 'additive';
//   }
// };

/**
 * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
 * for them like you normally would (with jQuery for example).
 */
// Demo.prototype.addShuffleEventListeners = function () {
//   this.shuffle.on(Shuffle.EventType.LAYOUT, function (data) {
//     console.log('layout. data:', data);
//   });
//   this.shuffle.on(Shuffle.EventType.REMOVED, function (data) {
//     console.log('removed. data:', data);
//   });
// };
// Demo.prototype.addFilterButtons = function () {
//   var options = document.querySelector('.filter-options');
//   if (!options) {
//     return;
//   }
//   var filterButtons = Array.from(options.children);
//   filterButtons.forEach(function (button) {
//     button.addEventListener('click', this._handleFilterClick.bind(this), false);
//   }, this);
// };
// Demo.prototype._handleFilterClick = function (evt) {
//   var btn = evt.currentTarget;
//   var isActive = btn.classList.contains('active');
//   var btnGroup = btn.getAttribute('data-group');
//   // You don't need _both_ of these modes. This is only for the demo.
//   // For this custom 'additive' mode in the demo, clicking on filter buttons
//   // doesn't remove any other filters.
//   if (this.mode === 'additive') {
//     // If this button is already active, remove it from the list of filters.
//     if (isActive) {
//       this._activeFilters.splice(this._activeFilters.indexOf(btnGroup));
//     } else {
//       this._activeFilters.push(btnGroup);
//     }
//     btn.classList.toggle('active');
//     // Filter elements
//     this.shuffle.filter(this._activeFilters);
//   // 'exclusive' mode lets only one filter button be active at a time.
//   } else {
//     this._removeActiveClassFromChildren(btn.parentNode);
//     var filterGroup;
//     if (isActive) {
//       btn.classList.remove('active');
//       filterGroup = Shuffle.ALL_ITEMS;
//     } else {
//       btn.classList.add('active');
//       filterGroup = btnGroup;
//     }
//     this.shuffle.filter(filterGroup);
//   }
// };
// Demo.prototype._removeActiveClassFromChildren = function (parent) {
//   var children = parent.children;
//   for (var i = children.length - 1; i >= 0; i--) {
//     children[i].classList.remove('active');
//   }
// };
// Demo.prototype.addSorting = function () {
//   var buttonGroup = document.querySelector('.sort-options');
//   if (!buttonGroup) {
//     return;
//   }
//   buttonGroup.addEventListener('change', this._handleSortChange.bind(this));
// };
// Demo.prototype._handleSortChange = function (evt) {
//   // Add and remove `active` class from buttons.
//   var buttons = Array.from(evt.currentTarget.children);
//   buttons.forEach(function (button) {
//     if (button.querySelector('input').value === evt.target.value) {
//       button.classList.add('active');
//     } else {
//       button.classList.remove('active');
//     }
//   });
//   // Create the sort options to give to Shuffle.
//   var value = evt.target.value;
//   var options = {};
//   function sortByDate(element) {
//     return Date.parse(element.getAttribute('data-date-created'));
//   }
//   function sortByTitle(element) {
//     return element.getAttribute('data-title').toLowerCase();
//   }
//   if (value === 'date-created') {
//     options = {
//       reverse: true,
//       by: sortByDate,
//     };
//   } else if (value === 'title') {
//     options = {
//       by: sortByTitle,
//     };
//   }
//   this.shuffle.sort(options);
// };
// // Advanced filtering
// Demo.prototype.addSearchFilter = function () {
//   var searchInput = document.querySelector('.js-shuffle-search');
//   if (!searchInput) {
//     return;
//   }
//   searchInput.addEventListener('input', this._handleSearchKeyup.bind(this));
// };
// /**
//  * Filter the shuffle instance by items with a title that matches the search input.
//  * @param {Event} evt Event object.
//  */
// Demo.prototype._handleSearchKeyup = function (evt) {
//   var searchText = evt.target.value.toLowerCase();
//   this.shuffle.filter(function (element, shuffle) {
//     // If there is a current filter applied, ignore elements that don't match it.
//     if (shuffle.group !== Shuffle.ALL_ITEMS) {
//       // Get the item's groups.
//       var groups = JSON.parse(element.getAttribute('data-groups'));
//       var isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;
//       // Only search elements in the current group
//       if (!isElementInCurrentGroup) {
//         return false;
//       }
//     }
//     var titleElement = element.querySelector('.picture-item__title');
//     var titleText = titleElement.textContent.toLowerCase().trim();
//     return titleText.indexOf(searchText) !== -1;
//   });
// };
// document.addEventListener('DOMContentLoaded', function () {
//   window.demo = new Demo(document.getElementById('shuffleGrid'));
//   console.log(demo);
// });

/***/ }),

/***/ "./resources/js/components/navigation.js":
/*!***********************************************!*\
  !*** ./resources/js/components/navigation.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/.pnpm/jquery@3.6.0/node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

window.jQuery = window.$ = __webpack_require__(/*! jquery */ "./node_modules/.pnpm/jquery@3.6.0/node_modules/jquery/dist/jquery.js"); // console.log("Hello from navigation!");

jQuery(document).ready(function ($) {// $() will work as an alias for jQuery() inside of this function
  // console.log('[ Hello from navigation jQuery code goes here ]');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).parent('.sub-menu').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open').find(' > a > .menu-button').trigger('click');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).removeClass('open');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('click', '.menu .menu-button', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var menu_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
  var menu_link = menu_button.parent();
  var menu_item = menu_link.parent();
  console.log(menu_item);

  if (menu_item.hasClass('open')) {
    menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
    menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
    menu_button.find('menu-button-show').attr('aria-hidden', 'false');
    menu_button.find('menu-button-hide').attr('aria-hidden', 'true');
  } else {
    menu_item.siblings('.open').find(' > a > .menu-button').trigger('click');
    menu_item.addClass('open');
    menu_link.attr('aria-expanded', 'true');
    menu_button.find('menu-button-show').attr('aria-hidden', 'true');
    menu_button.find('menu-button-hide').attr('aria-hidden', 'false');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-item.open').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open > a > .menu-button').trigger('click');
  }
});

/***/ }),

/***/ "./resources/js/components/slider.js":
/*!*******************************************!*\
  !*** ./resources/js/components/slider.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// console.log("Hello from slider!");
window.jQuery = window.$ = __webpack_require__(/*! jquery */ "./node_modules/.pnpm/jquery@3.6.0/node_modules/jquery/dist/jquery.js");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["/assets/dist/vendor"], function() { return __webpack_exec__("./resources/js/bundle.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckNMLENBQTBDLGFBQTFDQSxFQUF5RCxNQUF6REE7QUFDQUEsZUFBVyxDQUFDTixJQUFaTSxDQUFpQixrQkFBakJBLEVBQXFDSyxJQUFyQ0wsQ0FBMEMsYUFBMUNBLEVBQXlELE9BQXpEQTtBQUNIO0FBbkJMO0FBc0JBakIsNkNBQUMsQ0FBQ0UsUUFBRCxDQUFERixDQUFZd0IsS0FBWnhCLENBQW1CTyxXQUFELEVBQU87QUFDckIsTUFBR1AsNkNBQUMsQ0FBQyxpQkFBRCxDQUFEQSxDQUFxQlUsTUFBeEIsRUFBZ0M7QUFDNUJWLElBQUFBLDZDQUFDLENBQUMsNENBQUQsQ0FBREEsQ0FBZ0RZLE9BQWhEWixDQUF3RCxPQUF4REE7QUFDSDtBQUhMOzs7Ozs7Ozs7O0FDdkNBO0FBQ0FGLE1BQU0sQ0FBQ0MsTUFBUEQsR0FBZ0JBLE1BQU0sQ0FBQ0UsQ0FBUEYsR0FBV0csbUJBQU8sQ0FBQyxvRkFBRCxDQUFsQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmdpbGZvbGlveC8uL3Jlc291cmNlcy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vYXJnaWxmb2xpb3gvLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2FyZ2lsZm9saW94Ly4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XG5cbi8vIGNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSBidW5kbGUhXCIpO1xud2luZG93LmpRdWVyeSA9IHdpbmRvdy4kID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxualF1ZXJ5KCBkb2N1bWVudCApLnJlYWR5KCBmdW5jdGlvbiggJCApIHtcbiAgICAvLyAkKCkgd2lsbCB3b3JrIGFzIGFuIGFsaWFzIGZvciBqUXVlcnkoKSBpbnNpZGUgb2YgdGhpcyBmdW5jdGlvblxuICAgIGNvbnNvbGUubG9nKCdbIGZyb20gQnVuZGxlIHlvdXIgalF1ZXJ5IGNvZGUgZ29lcyBoZXJlIF0nKTtcbn0gKTtcblxuXG5cbi8vIFNIVUZGTEUgREVNT1xuLy8gY29uc3RydWN0IG5ldyBTaHVmZmxlIGdyaWQgaW5zdGFuY2Vcbi8vIGNvbnN0IHNodWZmbGVJbnN0YW5jZSA9IG5ldyBTaHVmZmxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaHVmZmxlR3JpZCcpLCB7XG4vLyAgIGl0ZW1TZWxlY3RvcjogJy5waWN0dXJlLWl0ZW0nLFxuLy8gICBzaXplcjogJy5teS1zaXplci1lbGVtZW50Jyxcbi8vIH0pO1xuLy8gY29uc29sZS5sb2coc2h1ZmZsZUluc3RhbmNlKTtcblxuXG4vLyAndXNlIHN0cmljdCc7XG4vLyB2YXIgU2h1ZmZsZSA9IHdpbmRvdy5TaHVmZmxlO1xuLy8gdmFyIERlbW8gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuLy8gICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4vLyAgIHRoaXMuc2h1ZmZsZSA9IG5ldyBTaHVmZmxlKGVsZW1lbnQsIHtcbi8vICAgICBpdGVtU2VsZWN0b3I6ICcucGljdHVyZS1pdGVtJyxcbi8vICAgICAvLyBzaXplcjogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubXktc2l6ZXItZWxlbWVudCcpLFxuLy8gICB9KTtcblxuLy8gICAvLyBMb2cgZXZlbnRzLlxuLy8gICB0aGlzLmFkZFNodWZmbGVFdmVudExpc3RlbmVycygpO1xuXG4vLyAgIHRoaXMuX2FjdGl2ZUZpbHRlcnMgPSBbXTtcblxuLy8gICB0aGlzLmFkZEZpbHRlckJ1dHRvbnMoKTtcbi8vICAgdGhpcy5hZGRTb3J0aW5nKCk7XG4vLyAgIHRoaXMuYWRkU2VhcmNoRmlsdGVyKCk7XG5cbi8vICAgdGhpcy5tb2RlID0gJ2V4Y2x1c2l2ZSc7XG4vLyB9O1xuXG4vLyBEZW1vLnByb3RvdHlwZS50b2dnbGVNb2RlID0gZnVuY3Rpb24gKCkge1xuLy8gICBpZiAodGhpcy5tb2RlID09PSAnYWRkaXRpdmUnKSB7XG4vLyAgICAgdGhpcy5tb2RlID0gJ2V4Y2x1c2l2ZSc7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgdGhpcy5tb2RlID0gJ2FkZGl0aXZlJztcbi8vICAgfVxuLy8gfTtcblxuLyoqXG4gKiBTaHVmZmxlIHVzZXMgdGhlIEN1c3RvbUV2ZW50IGNvbnN0cnVjdG9yIHRvIGRpc3BhdGNoIGV2ZW50cy4gWW91IGNhbiBsaXN0ZW5cbiAqIGZvciB0aGVtIGxpa2UgeW91IG5vcm1hbGx5IHdvdWxkICh3aXRoIGpRdWVyeSBmb3IgZXhhbXBsZSkuXG4gKi9cbi8vIERlbW8ucHJvdG90eXBlLmFkZFNodWZmbGVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbi8vICAgdGhpcy5zaHVmZmxlLm9uKFNodWZmbGUuRXZlbnRUeXBlLkxBWU9VVCwgZnVuY3Rpb24gKGRhdGEpIHtcbi8vICAgICBjb25zb2xlLmxvZygnbGF5b3V0LiBkYXRhOicsIGRhdGEpO1xuLy8gICB9KTtcblxuLy8gICB0aGlzLnNodWZmbGUub24oU2h1ZmZsZS5FdmVudFR5cGUuUkVNT1ZFRCwgZnVuY3Rpb24gKGRhdGEpIHtcbi8vICAgICBjb25zb2xlLmxvZygncmVtb3ZlZC4gZGF0YTonLCBkYXRhKTtcbi8vICAgfSk7XG4vLyB9O1xuXG4vLyBEZW1vLnByb3RvdHlwZS5hZGRGaWx0ZXJCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuLy8gICB2YXIgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItb3B0aW9ucycpO1xuXG4vLyAgIGlmICghb3B0aW9ucykge1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuXG4vLyAgIHZhciBmaWx0ZXJCdXR0b25zID0gQXJyYXkuZnJvbShvcHRpb25zLmNoaWxkcmVuKTtcblxuLy8gICBmaWx0ZXJCdXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUZpbHRlckNsaWNrLmJpbmQodGhpcyksIGZhbHNlKTtcbi8vICAgfSwgdGhpcyk7XG4vLyB9O1xuXG4vLyBEZW1vLnByb3RvdHlwZS5faGFuZGxlRmlsdGVyQ2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4vLyAgIHZhciBidG4gPSBldnQuY3VycmVudFRhcmdldDtcbi8vICAgdmFyIGlzQWN0aXZlID0gYnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG4vLyAgIHZhciBidG5Hcm91cCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnKTtcblxuLy8gICAvLyBZb3UgZG9uJ3QgbmVlZCBfYm90aF8gb2YgdGhlc2UgbW9kZXMuIFRoaXMgaXMgb25seSBmb3IgdGhlIGRlbW8uXG5cbi8vICAgLy8gRm9yIHRoaXMgY3VzdG9tICdhZGRpdGl2ZScgbW9kZSBpbiB0aGUgZGVtbywgY2xpY2tpbmcgb24gZmlsdGVyIGJ1dHRvbnNcbi8vICAgLy8gZG9lc24ndCByZW1vdmUgYW55IG90aGVyIGZpbHRlcnMuXG4vLyAgIGlmICh0aGlzLm1vZGUgPT09ICdhZGRpdGl2ZScpIHtcbi8vICAgICAvLyBJZiB0aGlzIGJ1dHRvbiBpcyBhbHJlYWR5IGFjdGl2ZSwgcmVtb3ZlIGl0IGZyb20gdGhlIGxpc3Qgb2YgZmlsdGVycy5cbi8vICAgICBpZiAoaXNBY3RpdmUpIHtcbi8vICAgICAgIHRoaXMuX2FjdGl2ZUZpbHRlcnMuc3BsaWNlKHRoaXMuX2FjdGl2ZUZpbHRlcnMuaW5kZXhPZihidG5Hcm91cCkpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICB0aGlzLl9hY3RpdmVGaWx0ZXJzLnB1c2goYnRuR3JvdXApO1xuLy8gICAgIH1cblxuLy8gICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblxuLy8gICAgIC8vIEZpbHRlciBlbGVtZW50c1xuLy8gICAgIHRoaXMuc2h1ZmZsZS5maWx0ZXIodGhpcy5fYWN0aXZlRmlsdGVycyk7XG5cbi8vICAgLy8gJ2V4Y2x1c2l2ZScgbW9kZSBsZXRzIG9ubHkgb25lIGZpbHRlciBidXR0b24gYmUgYWN0aXZlIGF0IGEgdGltZS5cbi8vICAgfSBlbHNlIHtcbi8vICAgICB0aGlzLl9yZW1vdmVBY3RpdmVDbGFzc0Zyb21DaGlsZHJlbihidG4ucGFyZW50Tm9kZSk7XG5cbi8vICAgICB2YXIgZmlsdGVyR3JvdXA7XG4vLyAgICAgaWYgKGlzQWN0aXZlKSB7XG4vLyAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4vLyAgICAgICBmaWx0ZXJHcm91cCA9IFNodWZmbGUuQUxMX0lURU1TO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4vLyAgICAgICBmaWx0ZXJHcm91cCA9IGJ0bkdyb3VwO1xuLy8gICAgIH1cblxuLy8gICAgIHRoaXMuc2h1ZmZsZS5maWx0ZXIoZmlsdGVyR3JvdXApO1xuLy8gICB9XG4vLyB9O1xuXG4vLyBEZW1vLnByb3RvdHlwZS5fcmVtb3ZlQWN0aXZlQ2xhc3NGcm9tQ2hpbGRyZW4gPSBmdW5jdGlvbiAocGFyZW50KSB7XG4vLyAgIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbi8vICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4vLyAgICAgY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4vLyAgIH1cbi8vIH07XG5cbi8vIERlbW8ucHJvdG90eXBlLmFkZFNvcnRpbmcgPSBmdW5jdGlvbiAoKSB7XG4vLyAgIHZhciBidXR0b25Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0LW9wdGlvbnMnKTtcblxuLy8gICBpZiAoIWJ1dHRvbkdyb3VwKSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG5cbi8vICAgYnV0dG9uR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5faGFuZGxlU29ydENoYW5nZS5iaW5kKHRoaXMpKTtcbi8vIH07XG5cbi8vIERlbW8ucHJvdG90eXBlLl9oYW5kbGVTb3J0Q2hhbmdlID0gZnVuY3Rpb24gKGV2dCkge1xuLy8gICAvLyBBZGQgYW5kIHJlbW92ZSBgYWN0aXZlYCBjbGFzcyBmcm9tIGJ1dHRvbnMuXG4vLyAgIHZhciBidXR0b25zID0gQXJyYXkuZnJvbShldnQuY3VycmVudFRhcmdldC5jaGlsZHJlbik7XG4vLyAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4vLyAgICAgaWYgKGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSBldnQudGFyZ2V0LnZhbHVlKSB7XG4vLyAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbi8vICAgICB9XG4vLyAgIH0pO1xuXG4vLyAgIC8vIENyZWF0ZSB0aGUgc29ydCBvcHRpb25zIHRvIGdpdmUgdG8gU2h1ZmZsZS5cbi8vICAgdmFyIHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcbi8vICAgdmFyIG9wdGlvbnMgPSB7fTtcblxuLy8gICBmdW5jdGlvbiBzb3J0QnlEYXRlKGVsZW1lbnQpIHtcbi8vICAgICByZXR1cm4gRGF0ZS5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kYXRlLWNyZWF0ZWQnKSk7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBzb3J0QnlUaXRsZShlbGVtZW50KSB7XG4vLyAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJykudG9Mb3dlckNhc2UoKTtcbi8vICAgfVxuXG4vLyAgIGlmICh2YWx1ZSA9PT0gJ2RhdGUtY3JlYXRlZCcpIHtcbi8vICAgICBvcHRpb25zID0ge1xuLy8gICAgICAgcmV2ZXJzZTogdHJ1ZSxcbi8vICAgICAgIGJ5OiBzb3J0QnlEYXRlLFxuLy8gICAgIH07XG4vLyAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICd0aXRsZScpIHtcbi8vICAgICBvcHRpb25zID0ge1xuLy8gICAgICAgYnk6IHNvcnRCeVRpdGxlLFxuLy8gICAgIH07XG4vLyAgIH1cblxuLy8gICB0aGlzLnNodWZmbGUuc29ydChvcHRpb25zKTtcbi8vIH07XG5cbi8vIC8vIEFkdmFuY2VkIGZpbHRlcmluZ1xuLy8gRGVtby5wcm90b3R5cGUuYWRkU2VhcmNoRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuLy8gICB2YXIgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2h1ZmZsZS1zZWFyY2gnKTtcblxuLy8gICBpZiAoIXNlYXJjaElucHV0KSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG5cbi8vICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9oYW5kbGVTZWFyY2hLZXl1cC5iaW5kKHRoaXMpKTtcbi8vIH07XG5cbi8vIC8qKlxuLy8gICogRmlsdGVyIHRoZSBzaHVmZmxlIGluc3RhbmNlIGJ5IGl0ZW1zIHdpdGggYSB0aXRsZSB0aGF0IG1hdGNoZXMgdGhlIHNlYXJjaCBpbnB1dC5cbi8vICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBFdmVudCBvYmplY3QuXG4vLyAgKi9cbi8vIERlbW8ucHJvdG90eXBlLl9oYW5kbGVTZWFyY2hLZXl1cCA9IGZ1bmN0aW9uIChldnQpIHtcbi8vICAgdmFyIHNlYXJjaFRleHQgPSBldnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbi8vICAgdGhpcy5zaHVmZmxlLmZpbHRlcihmdW5jdGlvbiAoZWxlbWVudCwgc2h1ZmZsZSkge1xuXG4vLyAgICAgLy8gSWYgdGhlcmUgaXMgYSBjdXJyZW50IGZpbHRlciBhcHBsaWVkLCBpZ25vcmUgZWxlbWVudHMgdGhhdCBkb24ndCBtYXRjaCBpdC5cbi8vICAgICBpZiAoc2h1ZmZsZS5ncm91cCAhPT0gU2h1ZmZsZS5BTExfSVRFTVMpIHtcbi8vICAgICAgIC8vIEdldCB0aGUgaXRlbSdzIGdyb3Vwcy5cbi8vICAgICAgIHZhciBncm91cHMgPSBKU09OLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwcycpKTtcbi8vICAgICAgIHZhciBpc0VsZW1lbnRJbkN1cnJlbnRHcm91cCA9IGdyb3Vwcy5pbmRleE9mKHNodWZmbGUuZ3JvdXApICE9PSAtMTtcblxuLy8gICAgICAgLy8gT25seSBzZWFyY2ggZWxlbWVudHMgaW4gdGhlIGN1cnJlbnQgZ3JvdXBcbi8vICAgICAgIGlmICghaXNFbGVtZW50SW5DdXJyZW50R3JvdXApIHtcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIHZhciB0aXRsZUVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWN0dXJlLWl0ZW1fX3RpdGxlJyk7XG4vLyAgICAgdmFyIHRpdGxlVGV4dCA9IHRpdGxlRWxlbWVudC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblxuLy8gICAgIHJldHVybiB0aXRsZVRleHQuaW5kZXhPZihzZWFyY2hUZXh0KSAhPT0gLTE7XG4vLyAgIH0pO1xuLy8gfTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbi8vICAgd2luZG93LmRlbW8gPSBuZXcgRGVtbyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2h1ZmZsZUdyaWQnKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRlbW8pO1xuLy8gfSk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xud2luZG93LmpRdWVyeSA9IHdpbmRvdy4kID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbi8vIGNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSBuYXZpZ2F0aW9uIVwiKTtcbmpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24oICQgKSB7XG4gICAgLy8gJCgpIHdpbGwgd29yayBhcyBhbiBhbGlhcyBmb3IgalF1ZXJ5KCkgaW5zaWRlIG9mIHRoaXMgZnVuY3Rpb25cbiAgICAvLyBjb25zb2xlLmxvZygnWyBIZWxsbyBmcm9tIG5hdmlnYXRpb24galF1ZXJ5IGNvZGUgZ29lcyBoZXJlIF0nKTtcbn0gKTtcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgICBpZighJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgnLnN1Yi1tZW51JykubGVuZ3RoKSB7XG4gICAgICAgICQoJy5tZW51ID4gLm1lbnUtaXRlbS5vcGVuJykuZmluZCgnID4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnb3BlbicpO1xufSkub24oJ21vdXNlbGVhdmUnLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xuICAgICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb3BlbicpO1xufSlcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdjbGljaycsICcubWVudSAubWVudS1idXR0b24nLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBsZXQgbWVudV9saW5rID0gbWVudV9idXR0b24ucGFyZW50KCk7XG4gICAgbGV0IG1lbnVfaXRlbSA9IG1lbnVfbGluay5wYXJlbnQoKTtcblxuICAgIGNvbnNvbGUubG9nKG1lbnVfaXRlbSk7XG4gICAgaWYobWVudV9pdGVtLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgbWVudV9pdGVtLmFkZChtZW51X2l0ZW0uZmluZCgnLm1lbnUtaXRlbS5vcGVuJykpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIG1lbnVfbGluay5hZGQobWVudV9pdGVtLmZpbmQoJ2EnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBtZW51X2J1dHRvbi5maW5kKCdtZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnbWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZW51X2l0ZW0uc2libGluZ3MoJy5vcGVuJykuZmluZCgnID4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIG1lbnVfaXRlbS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICBtZW51X2xpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJ21lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJ21lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIH1cbn0pO1xuXG4kKGRvY3VtZW50KS5jbGljaygoZSkgPT4ge1xuICAgIGlmKCQoJy5tZW51LWl0ZW0ub3BlbicpLmxlbmd0aCkge1xuICAgICAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub3BlbiA+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbn0pXG4iLCIvLyBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gc2xpZGVyIVwiKTtcbndpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG4iXSwibmFtZXMiOlsid2luZG93IiwialF1ZXJ5IiwiJCIsInJlcXVpcmUiLCJkb2N1bWVudCIsInJlYWR5IiwiY29uc29sZSIsImxvZyIsIm9uIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnQiLCJsZW5ndGgiLCJmaW5kIiwidHJpZ2dlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwibWVudV9pdGVtIiwiaGFzQ2xhc3MiLCJhZGQiLCJhdHRyIiwic2libGluZ3MiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=