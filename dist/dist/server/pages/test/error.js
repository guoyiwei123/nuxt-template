exports.ids = [2];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/test/error.vue?vue&type=template&id=43ab6351&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("error test page")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/test/error.vue?vue&type=template&id=43ab6351&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/test/error.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  async asyncData({
    $axios
  }) {
    await $axios.get("http://abc.com/abc?a=1");
    console.log("next");
  }

});
// CONCATENATED MODULE: ./src/pages/test/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var test_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/pages/test/error.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  test_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3abf1bc0"
  
)

/* harmony default export */ var error = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=error.js.map