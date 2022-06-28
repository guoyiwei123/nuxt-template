exports.ids = [1];
exports.modules = {

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=template&id=ffb070a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_vm._ssrNode("\n    home\n")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=template&id=ffb070a6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  async asyncData({
    $axios
  }) {
    const res = await $axios.get("/abbos");
    console.log(res);
  }

});
// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "57d8e98d"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map