!function(){var t="https://pixabay.com/api/",o="34821763-cd0390e9b5fa3f24bbb43d369",n=function(t){return t},c="photo",a="horizontal",r=!0;var e,i;(e="flowers",i=function(e){var i=o,f=n,s=c,u=a,h=r;return"".concat(t,"?key=").concat(i,"&q=").concat(f(e),"&image_type=").concat(s,"&orientation=").concat(u,"&safesearch=").concat(h)}(e),fetch(i).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(t){console.log(t.totalHits,t.total)}))}();
//# sourceMappingURL=index.a60d6c3f.js.map
