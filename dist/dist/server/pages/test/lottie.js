exports.ids = [3];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/test/lottie.vue?vue&type=template&id=afce7d08&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"lottie\"></div> <script src=\"/js/lottie.js\"></script>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/test/lottie.vue?vue&type=template&id=afce7d08&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/test/lottie.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var lottievue_type_script_lang_js_ = ({
  head() {
    return {
      link: [{
        rel: 'stylesheet',
        href: '/css/lottie.css'
      }]
    };
  },

  mounted() {
    lottie.loadAnimation({
      container: this.$refs['container'],
      renderer: 'canvas',
      loop: true,
      autoplay: true,
      path: '/box_static_display.json'
    });
  }

});
// CONCATENATED MODULE: ./src/pages/test/lottie.vue?vue&type=script&lang=js&
 /* harmony default export */ var test_lottievue_type_script_lang_js_ = (lottievue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/pages/test/lottie.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  test_lottievue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2e6ed937"
  
)

/* harmony default export */ var test_lottie = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=lottie.js.map