exports.ids = [1];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("00703a2a", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_thread_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_2_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_4_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_5_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_75c68f1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_thread_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_2_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_4_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_5_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_75c68f1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_thread_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_2_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_4_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_5_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_75c68f1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_cache_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_thread_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_2_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_4_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_5_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_75c68f1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_cache_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_thread_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_2_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_4_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_5_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_75c68f1c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "button[data-v-75c68f1c]{color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=template&id=75c68f1c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NuxtLink',{attrs:{"to":"/test"}},[_vm._v("test")]),_vm._ssrNode(" <button data-v-75c68f1c> get data </button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=template&id=75c68f1c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--2-0!./node_modules/thread-loader/dist/cjs.js??ref--2-1!./node_modules/babel-loader/lib??ref--2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  async asyncData({
    store,
    app
  }) {
    // await app.$axios.get("/abbos?GetPopularApp").then(res => {
    //     console.log(res);
    // })
    await app.$models.app.getAppList().then(res => {
      console.log(res);
    });
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
  },

  mounted() {
    console.log(this.testData);
  },

  methods: {
    getData() {
      this.$models.app.getAppList().then(res => {
        console.log(res);
      });
    }

  }
});
// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "75c68f1c",
  "57d8e98d"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map