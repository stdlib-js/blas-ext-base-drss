"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=n(function(z,q){
var l=require('@stdlib/blas-ext-base-drssbl/dist').ndarray;function m(e,r,a,i,s,t,u){return l(e,r,a,i,s,t,u)}q.exports=m
});var c=n(function(A,y){
var d=require('@stdlib/strided-base-stride2offset/dist'),R=v();function _(e,r,a,i,s){var t=d(e,a),u=d(e,s);return R(e,r,a,t,i,s,u)}y.exports=_
});var x=n(function(B,p){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=c(),E=v();b(f,"ndarray",E);p.exports=f
});var O=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=x(),o,j=g(O(__dirname,"./native.js"));h(j)?o=k:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
