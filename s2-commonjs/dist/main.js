/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib.js":
/*!****************!*\
  !*** ./lib.js ***!
  \****************/
/***/ ((module, exports) => {

console.log('this is module');

exports.geekbang = { 'hello': 'haha' }

exports.tencent = function () {
    console.log('good')
}

// 知识点1：对module.exports赋值，exports对象就不再是外面require所得到的结果了。
// 我在视频里采用的说法是“覆盖exports”其实不算非常严谨。
// 因为exports变量本身还是存在的
module.exports = function () {
    console.log('hello geekbang');
}

// 知识点2：外部拿到require调用的结果和这里的exports对象是同一个引用
setTimeout(()=> {
    // 验证index.js里加的additional属性是否生效
    // 用于确定外部require到的对象和此处的exports是否是同一个属性
    console.log(exports)
}, 2000)


// 视频中我建议大家使用webpack命令辅助理解commonjs
// 但目前2021年最新版本的webpack已经不能直接使用我在视频里提到的命令了
// 但大家可以改用webpack --devtool=inline-source-map --mode=development --target=node ./index.js

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
console.log('start require');
var lib = __webpack_require__(/*! ./lib */ "./lib.js")

console.log('end require', lib);

// 参见lib.js注释里的知识点1
console.log(lib.tencent);

// 参见lib.js注释里的知识点2
// require返回的对象，和lib.js里的exports对象属于同一个引用
// 因此此处加的属性能在里面体现出来。
lib.additional = 'test'
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxnQkFBZ0IsS0FBSzs7QUFFckIsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkE7QUFDQSxVQUFVLG1CQUFPLENBQUMsdUJBQU87O0FBRXpCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCd0aGlzIGlzIG1vZHVsZScpO1xuXG5leHBvcnRzLmdlZWtiYW5nID0geyAnaGVsbG8nOiAnaGFoYScgfVxuXG5leHBvcnRzLnRlbmNlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2dvb2QnKVxufVxuXG4vLyDnn6Xor4bngrkx77ya5a+5bW9kdWxlLmV4cG9ydHPotYvlgLzvvIxleHBvcnRz5a+56LGh5bCx5LiN5YaN5piv5aSW6Z2icmVxdWlyZeaJgOW+l+WIsOeahOe7k+aenOS6huOAglxuLy8g5oiR5Zyo6KeG6aKR6YeM6YeH55So55qE6K+05rOV5piv4oCc6KaG55uWZXhwb3J0c+KAneWFtuWunuS4jeeul+mdnuW4uOS4peiwqOOAglxuLy8g5Zug5Li6ZXhwb3J0c+WPmOmHj+acrOi6q+i/mOaYr+WtmOWcqOeahFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvIGdlZWtiYW5nJyk7XG59XG5cbi8vIOefpeivhueCuTLvvJrlpJbpg6jmi7/liLByZXF1aXJl6LCD55So55qE57uT5p6c5ZKM6L+Z6YeM55qEZXhwb3J0c+WvueixoeaYr+WQjOS4gOS4quW8leeUqFxuc2V0VGltZW91dCgoKT0+IHtcbiAgICAvLyDpqozor4FpbmRleC5qc+mHjOWKoOeahGFkZGl0aW9uYWzlsZ7mgKfmmK/lkKbnlJ/mlYhcbiAgICAvLyDnlKjkuo7noa7lrprlpJbpg6hyZXF1aXJl5Yiw55qE5a+56LGh5ZKM5q2k5aSE55qEZXhwb3J0c+aYr+WQpuaYr+WQjOS4gOS4quWxnuaAp1xuICAgIGNvbnNvbGUubG9nKGV4cG9ydHMpXG59LCAyMDAwKVxuXG5cbi8vIOinhumikeS4reaIkeW7uuiuruWkp+WutuS9v+eUqHdlYnBhY2vlkb3ku6TovoXliqnnkIbop6Njb21tb25qc1xuLy8g5L2G55uu5YmNMjAyMeW5tOacgOaWsOeJiOacrOeahHdlYnBhY2vlt7Lnu4/kuI3og73nm7TmjqXkvb/nlKjmiJHlnKjop4bpopHph4zmj5DliLDnmoTlkb3ku6TkuoZcbi8vIOS9huWkp+WutuWPr+S7peaUueeUqHdlYnBhY2sgLS1kZXZ0b29sPWlubGluZS1zb3VyY2UtbWFwIC0tbW9kZT1kZXZlbG9wbWVudCAtLXRhcmdldD1ub2RlIC4vaW5kZXguanMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc29sZS5sb2coJ3N0YXJ0IHJlcXVpcmUnKTtcbnZhciBsaWIgPSByZXF1aXJlKCcuL2xpYicpXG5cbmNvbnNvbGUubG9nKCdlbmQgcmVxdWlyZScsIGxpYik7XG5cbi8vIOWPguingWxpYi5qc+azqOmHiumHjOeahOefpeivhueCuTFcbmNvbnNvbGUubG9nKGxpYi50ZW5jZW50KTtcblxuLy8g5Y+C6KeBbGliLmpz5rOo6YeK6YeM55qE55+l6K+G54K5MlxuLy8gcmVxdWlyZei/lOWbnueahOWvueixoe+8jOWSjGxpYi5qc+mHjOeahGV4cG9ydHPlr7nosaHlsZ7kuo7lkIzkuIDkuKrlvJXnlKhcbi8vIOWboOatpOatpOWkhOWKoOeahOWxnuaAp+iDveWcqOmHjOmdouS9k+eOsOWHuuadpeOAglxubGliLmFkZGl0aW9uYWwgPSAndGVzdCciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=