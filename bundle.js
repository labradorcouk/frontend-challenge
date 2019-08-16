!function(e){var r={};function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(a,t){if(1&t&&(a=i(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)i.d(e,r,function(t){return a[t]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="",i(i.s="./bin/www")}({"./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */function(m,t,o){(function(t){var r=o(/*! http-errors */"http-errors"),a=o(/*! express */"express"),e=o(/*! path */"path"),i=o(/*! morgan */"morgan"),d=o(/*! cors */"cors"),n=o(/*! ./routes/index */"./routes/index.js"),D=o(/*! ./routes/user */"./routes/user.js"),p=o(/*! ./routes/tariffs */"./routes/tariffs.js"),s=a();s.set("views",e.join(t,"./views")),s.set("views",e.join(t,"views")),s.set("view engine","html"),s.set("json spaces",40),s.use(i("dev")),s.use(d()),s.use(a.json()),s.use(a.urlencoded({extended:!1})),s.use(a.static(e.join(t,"public"))),s.use("/",n),s.use("/user",D),s.use("/tariffs",p),s.use(function(t,a,e){e(r(404))}),s.use(function(t,a,e,r){e.locals.message=t.message,e.locals.error="development"===a.app.get("env")?t:{},e.status(t.status||500),e.send("Error: "+(t.status||500))}),m.exports=s}).call(this,"/")},"./bin/www":
/*!*****************!*\
  !*** ./bin/www ***!
  \*****************/
/*! no static exports found */function(t,a,e){var r=e(/*! ../app */"./app.js"),i=e(/*! debug */"debug")("api:server"),d=e(/*! http */"http"),n=function(t){var a=parseInt(t,10);if(isNaN(a))return t;if(0<=a)return a;return!1}(process.env.PORT||"3000");r.set("port",n);var D=d.createServer(r);D.listen(n),D.on("error",function(t){if("listen"!==t.syscall)throw t;var a="string"==typeof n?"Pipe "+n:"Port "+n;switch(t.code){case"EACCES":console.error(a+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(a+" is already in use"),process.exit(1);break;default:throw t}}),D.on("listening",function(){var t=D.address(),a="string"==typeof t?"pipe "+t:"port "+t.port;i("Listening on "+a)})},"./jsons/tariffs.json":
/*!****************************!*\
  !*** ./jsons/tariffs.json ***!
  \****************************/
/*!*************************!*\
  !*** ./jsons/user.json ***!
  \*************************/
/*! exports provided: firstName, lastName, title, supplierId, tariffId, paymentMethodId, default */function(t){t.exports=JSON.parse('{"firstName":"George","lastName":"Smith","title":"Mr","supplierId":98,"tariffId":4912,"paymentMethodId":1}')},"./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */function(t,a,e){var r=e(/*! express */"express").Router();r.get("/",function(t,a,e){a.send("SimpleAPIbackend. Use: /user or /tariffs")}),t.exports=r},"./routes/tariffs.js":
/*!***************************!*\
  !*** ./routes/tariffs.js ***!
  \***************************/
/*! no static exports found */function(t,a,e){var r=e(/*! express */"express").Router(),i=e(/*! ../jsons/tariffs */"./jsons/tariffs.json");r.get("/",function(t,a,e){a.set({"Content-Type":"application/json"}),function(a){return new Promise(function(t){return setTimeout(t,a)})}(function(){var t=100*Math.random();return t<=80?0:t<=90?1e4:36e5}()).then(function(){a.json(i)}).catch(function(){a.send("Error")})}),t.exports=r},"./routes/user.js":
/*!************************!*\
  !*** ./routes/user.js ***!
  \************************/
/*! no static exports found */function(t,a,e){var r=e(/*! express */"express").Router(),i=e(/*! ../jsons/user */"./jsons/user.json");r.get("/",function(t,a,e){a.set({"Content-Type":"application/json"}),function(a){return new Promise(function(t){return setTimeout(t,a)})}(function(){var t=100*Math.random();return t<=80?0:t<=90?1e4:36e5}()).then(function(){a.json(i)}).catch(function(){a.send("Error")})}),t.exports=r},cors:
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */function(t,a){t.exports=require("cors")},debug:
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */function(t,a){t.exports=require("debug")},express:
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */function(t,a){t.exports=require("express")},http:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */function(t,a){t.exports=require("http")},"http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */function(t,a){t.exports=require("http-errors")},morgan:
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */function(t,a){t.exports=require("morgan")},path:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */function(t,a){t.exports=require("path")}});