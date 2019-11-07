(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{452:function(e,t,i){},453:function(e,t,i){},454:function(e,t,i){},455:function(e,t,i){},480:function(e,t,i){"use strict";var r=i(452);i.n(r).a},481:function(e,t,i){"use strict";var r=i(453);i.n(r).a},482:function(e,t,i){"use strict";var r=i(454);i.n(r).a},483:function(e,t,i){"use strict";var r=i(455);i.n(r).a},486:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"reviews-page"},[e.isLoading?i("div",{staticClass:"reviews-page__preloader"},[i("clip-loader",{attrs:{color:e.accentColor,size:70}})],1):[i("div",{staticClass:"reviews-page__title"},[i("page-title")],1),e.isShowForm?i("div",{ref:"form",staticClass:"reviews-page__form"},[i("review-form",{attrs:{"is-sending":e.isSendingForm,"current-review":e.currentReview},on:{reset:e.cancelReviewChanges,create:e.createNewReview,update:e.updateCurrentReview}})],1):e._e(),i("div",{staticClass:"reviews-page__grid"},[i("card-gradient-button",{staticClass:"reviews-page__item",attrs:{"is-disabled":e.isShowForm&&!e.currentReview},on:{click:e.addReview}},[e._v("Добавить "),i("br"),e._v(" отзыв")]),e._l(e.reviews,function(t){return i("review-item",{key:t.id,staticClass:"reviews-page__item",attrs:{review:t,"is-active":t===e.currentReview},on:{edit:function(i){return e.editReview(t)},delete:function(i){return e.deleteReview(t.id)}}})})],2)]],2)};r._withStripped=!0;var a=i(68),n=i(432),s=i(101),o=i(426),c=i(458),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("card",{staticClass:"new-review"},[i("div",{staticClass:"new-review__header",attrs:{slot:"title"},slot:"title"},[e._v("Новый отзыв")]),i("template",{slot:"content"},[i("form",{staticClass:"new-review__form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[i("div",{staticClass:"new-review__photo"},[i("avatar-upload",{attrs:{"error-message":e.validation.firstError("reviewData.photo")},model:{value:e.reviewData.photo,callback:function(t){e.$set(e.reviewData,"photo",t)},expression:"reviewData.photo"}})],1),i("div",{staticClass:"new-review__name"},[i("simple-input",{attrs:{label:"Имя автора","error-message":e.validation.firstError("reviewData.author")},model:{value:e.reviewData.author,callback:function(t){e.$set(e.reviewData,"author",t)},expression:"reviewData.author"}})],1),i("div",{staticClass:"new-review__position"},[i("simple-input",{attrs:{label:"Титул автора","error-message":e.validation.firstError("reviewData.occ")},model:{value:e.reviewData.occ,callback:function(t){e.$set(e.reviewData,"occ",t)},expression:"reviewData.occ"}})],1),i("div",{staticClass:"new-review__text"},[i("simple-textarea",{attrs:{label:"Отзыв","error-message":e.validation.firstError("reviewData.text")},model:{value:e.reviewData.text,callback:function(t){e.$set(e.reviewData,"text",t)},expression:"reviewData.text"}})],1),i("div",{staticClass:"new-review__controls"},[i("basic-button",{staticClass:"new-review__button",attrs:{size:"small",display:"flat",disabled:e.isSending},on:{click:function(t){return e.$emit("reset")}}},[e._v("Отмена")]),i("basic-button",{staticClass:"new-review__button new-review__button_save",attrs:{type:"submit",size:"small",bordered:!0,disabled:e.isSending}},[e._v("Сохранить")])],1)])])],2)};u._withStripped=!0;var l=i(70),v=i.n(l),p=i(425),w=i(424),d=i(457),f=i(148),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"avatar-upload"},[i("label",{staticClass:"avatar-upload__control",attrs:{for:"file-input"}},[e.renderedPhoto?i("img",{staticClass:"avatar-upload__image",attrs:{src:e.renderedPhoto}}):e._e()]),i("input",{ref:"file-input",staticClass:"avatar-upload__file",attrs:{id:"file-input",type:"file",accept:"image/jpeg,image/png"},on:{change:e.handlePhotoUpload}}),i("basic-button",{staticClass:"avatar-upload__button",attrs:{size:"small",display:"flat"},on:{click:e.uploadFile}},[e._v(e._s(e.value?"Изменить фото":"Добавить фото"))]),i("transition",{attrs:{name:"slide-up"}},[e.errorMessage?i("div",{staticClass:"avatar-upload__error"},[i("error-tooltip",[e._v(e._s(e.errorMessage))])],1):e._e()])],1)};m._withStripped=!0;var h=i(149),_=i(456),b={components:{ErrorTooltip:h.a,BasicButton:f.a},mixins:[_.a]},g=(i(480),i(18)),R=Object(g.a)(b,m,[],!1,null,"18e1ac2c",null);R.options.__file="src/admin/components/AvatarUpload.vue";var C=R.exports;function x(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),r.forEach(function(t){y(e,t,i[t])})}return e}function y(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var D={author:"",occ:"",text:"",photo:null},S={components:{Card:p.a,SimpleInput:w.a,SimpleTextarea:d.a,BasicButton:f.a,AvatarUpload:C},props:{currentReview:{type:Object,default:null},isSending:{type:Boolean,default:!1}},watch:{currentReview:function(){this.updateReviewData(),this.validation.reset()}},mixins:[v.a.mixin],data:function(){return{reviewData:D}},validators:{"reviewData.author":function(e){return l.Validator.value(e).required("Введите автора")},"reviewData.occ":function(e){return l.Validator.value(e).required("Введите титул")},"reviewData.text":function(e){return l.Validator.value(e).required("Введите текст отзыва")},"reviewData.photo":function(e){return l.Validator.value(e).required("Загрузите фото")}},computed:{title:function(){return this.currentReview?"Редактирование отзыва":"Новый отзыв"}},methods:{updateReviewData:function(){this.reviewData=this.currentReview?x({},this.currentReview):x({},D)},onSubmit:function(){var e=this;this.$validate().then(function(t){if(t){var i=e.currentReview?"update":"create";e.$emit(i,e.reviewData),e.validation.reset()}})}},created:function(){this.updateReviewData()}},O=(i(481),Object(g.a)(S,u,[],!1,null,"3cb3d328",null));O.options.__file="src/admin/components/ReviewForm.vue";var k=O.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("card",{staticClass:"review-item",class:{"review-item_active":e.isActive}},[i("div",{staticClass:"review-item__header",attrs:{slot:"title"},slot:"title"},[i("img",{staticClass:"review-item__user-avatar",attrs:{src:e.imageSrc}}),i("div",{staticClass:"review-item__user-info"},[i("div",{staticClass:"review-item__user-name"},[e._v(e._s(e.review.author))]),i("div",{staticClass:"review-item__user-position"},[e._v(e._s(e.review.occ))])])]),i("template",{slot:"content"},[i("div",{staticClass:"review-item__text"},[e._v(e._s(e.review.text))]),i("div",{staticClass:"review-item__controls"},[i("button",{staticClass:"review-item__button review-item__button_edit",on:{click:function(t){return e.$emit("edit")}}},[i("div",{staticClass:"review-item__button-text"},[e._v("Править")]),i("icon",{staticClass:"review-item__button-icon_edit",attrs:{name:"pencil"}})],1),i("button",{staticClass:"review-item__button review-item__button_delete",on:{click:function(t){return e.$emit("delete")}}},[i("div",{staticClass:"review-item__button-text"},[e._v("Удалить")]),i("icon",{staticClass:"review-item__button-icon_delete",attrs:{name:"cross"}})],1)])])],2)};j._withStripped=!0;var F=i(446),$=i(55),P={components:{Card:p.a,Icon:$.a},props:{review:{type:Object,default:{}},isActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{imageSrc:function(){return Object(F.a)(this.review.photo)}}},T=(i(482),Object(g.a)(P,j,[],!1,null,"0b99c53b",null));T.options.__file="src/admin/components/ReviewItem.vue";var E=T.exports;function B(e,t,i,r,a,n,s){try{var o=e[n](s),c=o.value}catch(e){return void i(e)}o.done?t(c):Promise.resolve(c).then(r,a)}function L(e){return function(){var t=this,i=arguments;return new Promise(function(r,a){var n=e.apply(t,i);function s(e){B(n,r,a,s,o,"next",e)}function o(e){B(n,r,a,s,o,"throw",e)}s(void 0)})}}function q(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),r.forEach(function(t){z(e,t,i[t])})}return e}function z(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var A={components:{PageTitle:o.a,CardGradientButton:c.a,ReviewForm:k,ReviewItem:E,ClipLoader:n.ClipLoader},data:function(){return{currentReview:null,isShowForm:!1,isSendingForm:!1,isLoading:!1,accentColor:s["accent-color"]}},computed:q({},Object(a.c)("reviews",{reviews:function(e){return e.reviews}})),methods:q({},Object(a.b)("reviews",["fetchReviews","createReview","updateReview","removeReview"]),Object(a.b)("tooltips",["showTooltip"]),{createNewReview:function(){var e=L(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.isSendingForm=!0,e.prev=1,e.next=4,this.createReview(t);case 4:this.showTooltip({type:"success",text:"Отзыв успешно создан",duration:3e3}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this.showTooltip({type:"error",text:e.t0.message,duration:3e3});case 10:return e.prev=10,this.isSendingForm=!1,e.finish(10);case 13:this.hideForm();case 14:case"end":return e.stop()}},e,this,[[1,7,10,13]])}));return function(t){return e.apply(this,arguments)}}(),updateCurrentReview:function(){var e=L(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.isSendingForm=!0,e.prev=1,e.next=4,this.updateReview(t);case 4:this.showTooltip({type:"success",text:"Отзыв успешно обновлен",duration:3e3}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this.showTooltip({type:"error",text:e.t0.message,duration:3e3});case 10:return e.prev=10,this.isSendingForm=!1,e.finish(10);case 13:this.hideForm();case 14:case"end":return e.stop()}},e,this,[[1,7,10,13]])}));return function(t){return e.apply(this,arguments)}}(),deleteReview:function(){var e=L(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.removeReview(t);case 3:this.showTooltip({type:"success",text:"Отзыв успешно удален",duration:3e3}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.showTooltip({type:"error",text:e.t0.message,duration:3e3});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),showForm:function(){var e=this;this.isShowForm=!0,this.$nextTick(function(){e.$scrollTo(e.$refs.form,500,{container:".inner-page__content",offset:-50})})},hideForm:function(){this.isShowForm=!1,this.currentReview=null},addReview:function(){this.currentReview=null,this.showForm()},cancelReviewChanges:function(){this.currentReview=null,this.hideForm()},editReview:function(e){this.currentReview=e,this.showForm()},fetchData:function(){var e=L(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.prev=1,e.next=4,this.fetchReviews();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),this.showTooltip({type:"error",text:"Произошла ошибка при загрузке отзывов",duration:3e3});case 9:return e.prev=9,this.isLoading=!1,e.finish(9);case 12:case"end":return e.stop()}},e,this,[[1,6,9,12]])}));return function(){return e.apply(this,arguments)}}()}),created:function(){this.fetchData()}},I=(i(483),Object(g.a)(A,r,[],!1,null,"2043995e",null));I.options.__file="src/admin/views/Reviews.vue";t.default=I.exports}}]);