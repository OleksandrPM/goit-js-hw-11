const t={baseUrl:"https://pixabay.com/api/",key:"34821763-cd0390e9b5fa3f24bbb43d369",q:function(t){return t},image_type:"photo",orientation:"horizontal",safesearch:!0};(function(e){const o=function(e){const{baseUrl:o,key:n,q:a,image_type:r,orientation:s,safesearch:i}=t;return`${o}?key=${n}&q=${a(e)}&image_type=${r}&orientation=${s}&safesearch=${i}`}(e);return fetch(o).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))})("flowers").then((t=>{console.log(t.totalHits,t.total)}));
//# sourceMappingURL=index.b88862eb.js.map
