"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.dynamicCardDisplay:hover{\\n transform: translateY(-5px);\\n}\\n\\n.dynamicCardText{\\n  color: black;\\n  \\n}\\n.boxImage{\\n  width: 400px;\\n  left: 50%;\\n \\n} \\n.carousel_text{\\n  color:\\\"red\\\";\\n  text-align:\\\"start\\\";\\n}\\n\\n.row {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: row;\\n  \\n}\\n.space{\\n  margin-top: 7%;\\n}\\n.search_Heading{\\n  text-align: center;\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n  \\n}\\n.search_box{\\n  justify-content: center;\\n  text-align: center;\\n  height: 50px;\\n  border-top: none;\\n  border-left: none;\\n  border-right: none;\\n   border-bottom: 1px solid gray;\\n width: 100%;\\n  max-width: 100vw; \\n  \\n}\\n\\n.col {\\n  margin: 0;\\n  padding: 0;\\n}\\n.box{\\n\\nmax-width: 1000px;\\nwidth: 100%;\\n\\n}\\n.carousel_index{\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n}\\n\\n\\n@media (max-width: 976px) {\\n  .card-columns {\\n    column-count: 0;\\n  }\\n  .navbar-brand{\\n    left: 50%;\\n  }\\n  .space{\\n    margin-top: 10%;\\n  }\\n  .row {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    height:  100%;\\n  }\\n  .col {\\n    flex: 1 0 100%;\\n    margin: 0;\\n    padding: 0;\\n    height: 100%;\\n    width: 100%;\\n    max-height:max-content;\\n   \\n  }\\n  .search_Heading{\\n    position:\\\"relative\\\";\\n    text-align: center;\\n   \\n   \\n  }\\n  \\n}\\n\\n.fa {\\n  padding: 10px;\\n  font-size: 20px;\\n  width: 50px;\\n  text-align: center;\\n  text-decoration: none;\\n  margin: 5px 2px;\\n  height: 35px;\\n}\\n\\n.fa:hover {\\n    opacity: 0.7;\\n}\\n\\n.fa-facebook {\\n  background: #3B5998;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-twitter {\\n  background: #55ACEE;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-google {\\n\\n  background: #dd4b39;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-linkedin {\\n  background: #007bb5;\\n  color: white;\\n  border-radius: 10px;\\n}\\n.card {\\n  --font-color: #323232;\\n  --bg-color: #e0e0e0;\\n  width: 300px;\\n  height: 400px;\\n  border-radius: 20px;\\n  background: var(--bg-color);\\n  box-shadow: -9px 9px 18px #5a5a5a,\\n              9px -9px 18px #ffffff;\\n  display: flex;\\n  flex-direction: column;\\n  transition: .4s;\\n  position: relative;\\n  gap:10px\\n}\\n\\n.card:hover {\\n  transform: scale(1.02);\\n  box-shadow: 0px 0px 10px 2px #5a5a5a;\\n}\\n\\n.card__img {\\n  width: 100%;\\n  max-height: 100%;\\n  object-fit: cover;\\n  border-radius: 20px 20px 0 0;\\n  /* background-color: blueviolet; */\\n}\\n\\n.card__descr-wrapper {\\n  padding: 15px;\\n  display: grid;\\n}\\n\\n.card__title {\\n  color: var(--font-color);\\n  text-align: center;\\n  margin-bottom: 15px;\\n  font-weight: 900;\\n  font-size: 16px;\\n}\\n\\n.card__descr {\\n  color: var(--font-color);\\n}\\n\\n.svg {\\n  width: 25px;\\n  height: 25px;\\n  transform: translateY(25%);\\n  fill: var(--font-color);\\n}\\n\\n.card__links {\\n  margin-top: 10px;\\n  display: flex;\\n  /* flex-direction: column; */\\n  justify-content: space-between;\\n  align-self: flex-end;\\n}\\n\\n.card__links .link {\\n  color: var(--font-color);\\n  font-weight: 600;\\n  font-size: 15px;\\n  text-decoration: none;\\n}\\n\\n.card__links .link:hover {\\n  text-decoration: underline;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\";AACA;CACC,2BAA2B;AAC5B;;AAEA;EACE,YAAY;;AAEd;AACA;EACE,YAAY;EACZ,SAAS;;AAEX;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,mBAAmB;;AAErB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;;AAEnB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;GACjB,6BAA6B;CAC/B,WAAW;EACV,gBAAgB;;AAElB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;AACA;;AAEA,iBAAiB;AACjB,WAAW;;AAEX;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;;AAGA;EACE;IACE,eAAe;EACjB;EACA;IACE,SAAS;EACX;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,aAAa;EACf;EACA;IACE,cAAc;IACd,SAAS;IACT,UAAU;IACV,YAAY;IACZ,WAAW;IACX,sBAAsB;;EAExB;EACA;IACE,mBAAmB;IACnB,kBAAkB;;;EAGpB;;AAEF;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B;mCACiC;EACjC,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB;AACF;;AAEA;EACE,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,4BAA4B;EAC5B,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,4BAA4B;EAC5B,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B\",\"sourcesContent\":[\"\\n.dynamicCardDisplay:hover{\\n transform: translateY(-5px);\\n}\\n\\n.dynamicCardText{\\n  color: black;\\n  \\n}\\n.boxImage{\\n  width: 400px;\\n  left: 50%;\\n \\n} \\n.carousel_text{\\n  color:\\\"red\\\";\\n  text-align:\\\"start\\\";\\n}\\n\\n.row {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: row;\\n  \\n}\\n.space{\\n  margin-top: 7%;\\n}\\n.search_Heading{\\n  text-align: center;\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n  \\n}\\n.search_box{\\n  justify-content: center;\\n  text-align: center;\\n  height: 50px;\\n  border-top: none;\\n  border-left: none;\\n  border-right: none;\\n   border-bottom: 1px solid gray;\\n width: 100%;\\n  max-width: 100vw; \\n  \\n}\\n\\n.col {\\n  margin: 0;\\n  padding: 0;\\n}\\n.box{\\n\\nmax-width: 1000px;\\nwidth: 100%;\\n\\n}\\n.carousel_index{\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n}\\n\\n\\n@media (max-width: 976px) {\\n  .card-columns {\\n    column-count: 0;\\n  }\\n  .navbar-brand{\\n    left: 50%;\\n  }\\n  .space{\\n    margin-top: 10%;\\n  }\\n  .row {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    height:  100%;\\n  }\\n  .col {\\n    flex: 1 0 100%;\\n    margin: 0;\\n    padding: 0;\\n    height: 100%;\\n    width: 100%;\\n    max-height:max-content;\\n   \\n  }\\n  .search_Heading{\\n    position:\\\"relative\\\";\\n    text-align: center;\\n   \\n   \\n  }\\n  \\n}\\n\\n.fa {\\n  padding: 10px;\\n  font-size: 20px;\\n  width: 50px;\\n  text-align: center;\\n  text-decoration: none;\\n  margin: 5px 2px;\\n  height: 35px;\\n}\\n\\n.fa:hover {\\n    opacity: 0.7;\\n}\\n\\n.fa-facebook {\\n  background: #3B5998;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-twitter {\\n  background: #55ACEE;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-google {\\n\\n  background: #dd4b39;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-linkedin {\\n  background: #007bb5;\\n  color: white;\\n  border-radius: 10px;\\n}\\n.card {\\n  --font-color: #323232;\\n  --bg-color: #e0e0e0;\\n  width: 300px;\\n  height: 400px;\\n  border-radius: 20px;\\n  background: var(--bg-color);\\n  box-shadow: -9px 9px 18px #5a5a5a,\\n              9px -9px 18px #ffffff;\\n  display: flex;\\n  flex-direction: column;\\n  transition: .4s;\\n  position: relative;\\n  gap:10px\\n}\\n\\n.card:hover {\\n  transform: scale(1.02);\\n  box-shadow: 0px 0px 10px 2px #5a5a5a;\\n}\\n\\n.card__img {\\n  width: 100%;\\n  max-height: 100%;\\n  object-fit: cover;\\n  border-radius: 20px 20px 0 0;\\n  /* background-color: blueviolet; */\\n}\\n\\n.card__descr-wrapper {\\n  padding: 15px;\\n  display: grid;\\n}\\n\\n.card__title {\\n  color: var(--font-color);\\n  text-align: center;\\n  margin-bottom: 15px;\\n  font-weight: 900;\\n  font-size: 16px;\\n}\\n\\n.card__descr {\\n  color: var(--font-color);\\n}\\n\\n.svg {\\n  width: 25px;\\n  height: 25px;\\n  transform: translateY(25%);\\n  fill: var(--font-color);\\n}\\n\\n.card__links {\\n  margin-top: 10px;\\n  display: flex;\\n  /* flex-direction: column; */\\n  justify-content: space-between;\\n  align-self: flex-end;\\n}\\n\\n.card__links .link {\\n  color: var(--font-color);\\n  font-weight: 600;\\n  font-size: 15px;\\n  text-decoration: none;\\n}\\n\\n.card__links .link:hover {\\n  text-decoration: underline;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHNFQUFzRSwrQkFBK0IsR0FBRyxxQkFBcUIsaUJBQWlCLE9BQU8sWUFBWSxpQkFBaUIsY0FBYyxPQUFPLGlCQUFpQixrQkFBa0IseUJBQXlCLEdBQUcsVUFBVSxjQUFjLGVBQWUsa0JBQWtCLHdCQUF3QixPQUFPLFNBQVMsbUJBQW1CLEdBQUcsa0JBQWtCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLHNCQUFzQixPQUFPLGNBQWMsNEJBQTRCLHVCQUF1QixpQkFBaUIscUJBQXFCLHNCQUFzQix1QkFBdUIsbUNBQW1DLGVBQWUsc0JBQXNCLE9BQU8sVUFBVSxjQUFjLGVBQWUsR0FBRyxPQUFPLHNCQUFzQixjQUFjLEtBQUssa0JBQWtCLDBCQUEwQix1QkFBdUIsc0JBQXNCLEdBQUcsaUNBQWlDLG1CQUFtQixzQkFBc0IsS0FBSyxrQkFBa0IsZ0JBQWdCLEtBQUssV0FBVyxzQkFBc0IsS0FBSyxVQUFVLG9CQUFvQiwwQkFBMEIsc0JBQXNCLG9CQUFvQixLQUFLLFVBQVUscUJBQXFCLGdCQUFnQixpQkFBaUIsbUJBQW1CLGtCQUFrQiw2QkFBNkIsVUFBVSxvQkFBb0IsNEJBQTRCLHlCQUF5QixlQUFlLE9BQU8sU0FBUyxrQkFBa0Isb0JBQW9CLGdCQUFnQix1QkFBdUIsMEJBQTBCLG9CQUFvQixpQkFBaUIsR0FBRyxlQUFlLG1CQUFt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QixLQUFLLFVBQVUsb0JBQW9CLDBCQUEwQixzQkFBc0Isb0JBQW9CLEtBQUssVUFBVSxxQkFBcUIsZ0JBQWdCLGlCQUFpQixtQkFBbUIsa0JBQWtCLDZCQUE2QixVQUFVLG9CQUFvQiw0QkFBNEIseUJBQXlCLGVBQWUsT0FBTyxTQUFTLGtCQUFrQixvQkFBb0IsZ0JBQWdCLHVCQUF1QiwwQkFBMEIsb0JBQW9CLGlCQUFpQixHQUFHLGVBQWUsbUJBQW1CLEdBQUcsa0JBQWtCLHdCQUF3QixpQkFBaUIsd0JBQXdCLEdBQUcsaUJBQWlCLHdCQUF3QixpQkFBaUIsd0JBQXdCLEdBQUcsZ0JBQWdCLDBCQUEwQixpQkFBaUIsd0JBQXdCLEdBQUcsa0JBQWtCLHdCQUF3QixpQkFBaUIsd0JBQXdCLEdBQUcsU0FBUywwQkFBMEIsd0JBQXdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLGdDQUFnQyw0RUFBNEUsa0JBQWtCLDJCQUEyQixvQkFBb0IsdUJBQXVCLGVBQWUsaUJBQWlCLDJCQUEyQix5Q0FBeUMsR0FBRyxnQkFBZ0IsZ0JBQWdCLHFCQUFxQixzQkFBc0IsaUNBQWlDLHFDQUFxQyxLQUFLLDBCQUEwQixrQkFBa0Isa0JBQWtCLEdBQUcsa0JBQWtCLDZCQUE2Qix1QkFBdUIsd0JBQXdCLHFCQUFxQixvQkFBb0IsR0FBRyxrQkFBa0IsNkJBQTZCLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLCtCQUErQiw0QkFBNEIsR0FBRyxrQkFBa0IscUJBQXFCLGtCQUFrQiwrQkFBK0IscUNBQXFDLHlCQUF5QixHQUFHLHdCQUF3Qiw2QkFBNkIscUJBQXFCLG9CQUFvQiwwQkFBMEIsR0FBRyw4QkFBOEIsK0JBQStCLEdBQUcscUJBQXFCO0FBQzc2UDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz8wNGRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZHluYW1pY0NhcmREaXNwbGF5OmhvdmVye1xcbiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5keW5hbWljQ2FyZFRleHR7XFxuICBjb2xvcjogYmxhY2s7XFxuICBcXG59XFxuLmJveEltYWdle1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbGVmdDogNTAlO1xcbiBcXG59IFxcbi5jYXJvdXNlbF90ZXh0e1xcbiAgY29sb3I6XFxcInJlZFxcXCI7XFxuICB0ZXh0LWFsaWduOlxcXCJzdGFydFxcXCI7XFxufVxcblxcbi5yb3cge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgXFxufVxcbi5zcGFjZXtcXG4gIG1hcmdpbi10b3A6IDclO1xcbn1cXG4uc2VhcmNoX0hlYWRpbmd7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjpcXFwicmVsYXRpdmVcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBcXG59XFxuLnNlYXJjaF9ib3h7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcXG4gd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMHZ3OyBcXG4gIFxcbn1cXG5cXG4uY29sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5ib3h7XFxuXFxubWF4LXdpZHRoOiAxMDAwcHg7XFxud2lkdGg6IDEwMCU7XFxuXFxufVxcbi5jYXJvdXNlbF9pbmRleHtcXG4gIHBvc2l0aW9uOlxcXCJyZWxhdGl2ZVxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk3NnB4KSB7XFxuICAuY2FyZC1jb2x1bW5zIHtcXG4gICAgY29sdW1uLWNvdW50OiAwO1xcbiAgfVxcbiAgLm5hdmJhci1icmFuZHtcXG4gICAgbGVmdDogNTAlO1xcbiAgfVxcbiAgLnNwYWNle1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICB9XFxuICAucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBoZWlnaHQ6ICAxMDAlO1xcbiAgfVxcbiAgLmNvbCB7XFxuICAgIGZsZXg6IDEgMCAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6bWF4LWNvbnRlbnQ7XFxuICAgXFxuICB9XFxuICAuc2VhcmNoX0hlYWRpbmd7XFxuICAgIHBvc2l0aW9uOlxcXCJyZWxhdGl2ZVxcXCI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBcXG4gICBcXG4gIH1cXG4gIFxcbn1cXG5cXG4uZmEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luOiA1cHggMnB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4uZmE6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5mYS1mYWNlYm9vayB7XFxuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZhLXR3aXR0ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1QUNFRTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mYS1nb29nbGUge1xcblxcbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mYS1saW5rZWRpbiB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNhcmQge1xcbiAgLS1mb250LWNvbG9yOiAjMzIzMjMyO1xcbiAgLS1iZy1jb2xvcjogI2UwZTBlMDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogLTlweCA5cHggMThweCAjNWE1YTVhLFxcbiAgICAgICAgICAgICAgOXB4IC05cHggMThweCAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBnYXA6MTBweFxcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCAjNWE1YTVhO1xcbn1cXG5cXG4uY2FyZF9faW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7ICovXFxufVxcblxcbi5jYXJkX19kZXNjci13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uY2FyZF9fdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jYXJkX19kZXNjciB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5zdmcge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcXG4gIGZpbGw6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY2FyZF9fbGlua3Mge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5jYXJkX19saW5rcyAubGluayB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY2FyZF9fbGlua3MgLmxpbms6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7O0FBRVg7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtHQUNqQiw2QkFBNkI7Q0FDL0IsV0FBVztFQUNWLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLFdBQVc7O0FBRVg7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7SUFDZCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCOztFQUV4QjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjs7O0VBR3BCOztBQUVGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0I7bUNBQ2lDO0VBQ2pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5keW5hbWljQ2FyZERpc3BsYXk6aG92ZXJ7XFxuIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuXFxuLmR5bmFtaWNDYXJkVGV4dHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIFxcbn1cXG4uYm94SW1hZ2V7XFxuICB3aWR0aDogNDAwcHg7XFxuICBsZWZ0OiA1MCU7XFxuIFxcbn0gXFxuLmNhcm91c2VsX3RleHR7XFxuICBjb2xvcjpcXFwicmVkXFxcIjtcXG4gIHRleHQtYWxpZ246XFxcInN0YXJ0XFxcIjtcXG59XFxuXFxuLnJvdyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBcXG59XFxuLnNwYWNle1xcbiAgbWFyZ2luLXRvcDogNyU7XFxufVxcbi5zZWFyY2hfSGVhZGluZ3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOlxcXCJyZWxhdGl2ZVxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIFxcbn1cXG4uc2VhcmNoX2JveHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbiB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwdnc7IFxcbiAgXFxufVxcblxcbi5jb2wge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmJveHtcXG5cXG5tYXgtd2lkdGg6IDEwMDBweDtcXG53aWR0aDogMTAwJTtcXG5cXG59XFxuLmNhcm91c2VsX2luZGV4e1xcbiAgcG9zaXRpb246XFxcInJlbGF0aXZlXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTc2cHgpIHtcXG4gIC5jYXJkLWNvbHVtbnMge1xcbiAgICBjb2x1bW4tY291bnQ6IDA7XFxuICB9XFxuICAubmF2YmFyLWJyYW5ke1xcbiAgICBsZWZ0OiA1MCU7XFxuICB9XFxuICAuc3BhY2V7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gIH1cXG4gIC5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogIDEwMCU7XFxuICB9XFxuICAuY29sIHtcXG4gICAgZmxleDogMSAwIDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDptYXgtY29udGVudDtcXG4gICBcXG4gIH1cXG4gIC5zZWFyY2hfSGVhZGluZ3tcXG4gICAgcG9zaXRpb246XFxcInJlbGF0aXZlXFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIFxcbiAgIFxcbiAgfVxcbiAgXFxufVxcblxcbi5mYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDVweCAycHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5mYTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmZhLWZhY2Vib29rIHtcXG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZmEtdHdpdHRlciB7XFxuICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZhLWdvb2dsZSB7XFxuXFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZhLWxpbmtlZGluIHtcXG4gIGJhY2tncm91bmQ6ICMwMDdiYjU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZCB7XFxuICAtLWZvbnQtY29sb3I6ICMzMjMyMzI7XFxuICAtLWJnLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxuICBib3gtc2hhZG93OiAtOXB4IDlweCAxOHB4ICM1YTVhNWEsXFxuICAgICAgICAgICAgICA5cHggLTlweCAxOHB4ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdhcDoxMHB4XFxufVxcblxcbi5jYXJkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4ICM1YTVhNWE7XFxufVxcblxcbi5jYXJkX19pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDsgKi9cXG59XFxuXFxuLmNhcmRfX2Rlc2NyLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jYXJkX190aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNhcmRfX2Rlc2NyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLnN2ZyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xcbiAgZmlsbDogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5jYXJkX19saW5rcyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmNhcmRfX2xpbmtzIC5saW5rIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jYXJkX19saW5rcyAubGluazpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});