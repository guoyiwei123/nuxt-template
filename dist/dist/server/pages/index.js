exports.ids = [4];
exports.modules = {

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=template&id=f8caa696&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NuxtLink',{attrs:{"to":"/test"}},[_vm._v("test")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=template&id=f8caa696&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  async asyncData({
    store
  }) {
    const res = await store.dispatch("test/getNews", {
      a: 1
    });
    console.log(res);
    return {};
  },

  head() {
    return {
      title: "1111",
      meta: [{
        hid: "description",
        name: "description",
        content: "home page"
      }, {
        hid: "keywords",
        name: "keywords",
        content: "keywords"
      }]
    };
  }

});
// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "246b3847"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map