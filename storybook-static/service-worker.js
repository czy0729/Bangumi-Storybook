if(!self.define){let e,i={};const n=(n,l)=>(n=new URL(n+".js",l).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let u={};const s=e=>n(e,a),d={module:{uri:a},exports:u,require:s};i[a]=Promise.all(l.map((e=>d[e]||s(e)))).then((e=>(r(...e),u)))}}define(["./workbox-6e153f31"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"166.592e19c1.iframe.bundle.js",revision:null},{url:"184.986c9ea9.iframe.bundle.js",revision:null},{url:"229.b524e7c1.iframe.bundle.js",revision:null},{url:"273.fd0d08d7.iframe.bundle.js",revision:null},{url:"279.53214d57.iframe.bundle.js",revision:null},{url:"284.1680156a.iframe.bundle.js",revision:null},{url:"326.6db20e8f.iframe.bundle.js",revision:null},{url:"379.15e6362e.iframe.bundle.js",revision:null},{url:"42.0908c6d3.iframe.bundle.js",revision:null},{url:"422.052d240a.iframe.bundle.js",revision:null},{url:"492.9e6f6a56.iframe.bundle.js",revision:null},{url:"51.02462fcd.iframe.bundle.js",revision:null},{url:"551.0558bab4.iframe.bundle.js",revision:null},{url:"637.b591b83f.iframe.bundle.js",revision:null},{url:"676.e34d1e57.iframe.bundle.js",revision:null},{url:"701.2622a68e.iframe.bundle.js",revision:null},{url:"745.dda28bfc.iframe.bundle.js",revision:null},{url:"786.92880a46.iframe.bundle.js",revision:null},{url:"807.fc967da9.iframe.bundle.js",revision:null},{url:"81.bd736364.iframe.bundle.js",revision:null},{url:"82.b6c2894a.iframe.bundle.js",revision:null},{url:"897.8a31a091.iframe.bundle.js",revision:null},{url:"903.77e2c782.iframe.bundle.js",revision:null},{url:"915.69a0df2d.iframe.bundle.js",revision:null},{url:"935.04c06e9f.iframe.bundle.js",revision:null},{url:"943.21cc43cc.iframe.bundle.js",revision:null},{url:"98.f0243cda.iframe.bundle.js",revision:null},{url:"996.ad55b7ac.iframe.bundle.js",revision:null},{url:"assets/images/favicon.ico",revision:"7037a4400bcbe1bcb6511c8f046a0cc3"},{url:"assets/proto/adv/bin/index.bin",revision:"17b0edc81bd2f846cb61bcfa63f6c532"},{url:"assets/proto/adv/proto/index.proto",revision:"875914d2a91613b12b09461479a9cbb1"},{url:"assets/proto/anime/bin/index.bin",revision:"39a4b4ec91ec72fde5426bd3f0223c01"},{url:"assets/proto/anime/proto/index.proto",revision:"5513c7177d5c7138345d0721713cf35d"},{url:"assets/proto/bangumi-data/bin/index.bin",revision:"cff1d4b1fb7a8cc124fd8c368665b587"},{url:"assets/proto/bangumi-data/proto/index.proto",revision:"81e4527509aee4d7ce8d7e863d65ac8c"},{url:"assets/proto/catalog/bin/index.bin",revision:"0e73695e1c57dae1a86c8cd1a4a560c8"},{url:"assets/proto/catalog/proto/index.proto",revision:"056e8fffe3049052cae429d9fc5d7366"},{url:"assets/proto/game/bin/index.bin",revision:"ab874b00c9b29396b46c921e15c1a6b1"},{url:"assets/proto/game/proto/index.proto",revision:"0233d427e940732de5f78dc5c23e6852"},{url:"assets/proto/manga/bin/index.bin",revision:"d2da68a2757b59a0378a0ab5ccbf5103"},{url:"assets/proto/manga/proto/index.proto",revision:"e365406330bcfd11a9d41a37352302e5"},{url:"iframe.html",revision:"54f5e0d4c7468a207e36dc2e85023edf"},{url:"main-05ee9f99.d0d26c29.iframe.bundle.js",revision:null},{url:"main-0e1e83df.28895db2.iframe.bundle.js",revision:null},{url:"main-12c8e37e.839c6611.iframe.bundle.js",revision:null},{url:"main-1f42c3dc.a0710856.iframe.bundle.js",revision:null},{url:"main-296f7ffc.7b27fd00.iframe.bundle.js",revision:null},{url:"main-42e662e4.45b9d1fe.iframe.bundle.js",revision:null},{url:"main-4ab8fa9a.692c13bc.iframe.bundle.js",revision:null},{url:"main-5c1ca5a8.119982b6.iframe.bundle.js",revision:null},{url:"main-6dd396c5.0a3d21db.iframe.bundle.js",revision:null},{url:"main-6fd56578.96cdca3b.iframe.bundle.js",revision:null},{url:"main-700b26c8.2a72ffea.iframe.bundle.js",revision:null},{url:"main-7cc7466e.7bc0978e.iframe.bundle.js",revision:null},{url:"main-a1d170d4.6930eaa6.iframe.bundle.js",revision:null},{url:"main-b2c1640e.7e75490d.iframe.bundle.js",revision:null},{url:"main-d605314e.fd39d728.iframe.bundle.js",revision:null},{url:"main-f57d8346.805b02ae.iframe.bundle.js",revision:null},{url:"runtime~main.7582bee6.iframe.bundle.js",revision:null},{url:"static/media/2018.dbee1da3.png",revision:null},{url:"static/media/2019.569aa6b0.png",revision:null},{url:"static/media/2020.148ecdf6.png",revision:null},{url:"static/media/2021.462120bb.png",revision:null},{url:"static/media/2022.5af55e15.png",revision:null},{url:"static/media/AntDesign.e5509e34.ttf",revision:null},{url:"static/media/AppleColorEmoji.b2ee304a.ttf",revision:null},{url:"static/media/Ionicons.0b8c2202.ttf",revision:null},{url:"static/media/MaterialIcons.54333280.ttf",revision:null},{url:"static/media/ResourceHanRoundedCN-Bold.59edaf7b.ttf",revision:null},{url:"static/media/ResourceHanRoundedCN-Medium.7cd557fb.ttf",revision:null},{url:"static/media/alipay.a349a8f6.png",revision:null},{url:"static/media/back-icon-mask.c0e55859.png",revision:null},{url:"static/media/back-icon.be2f2e3b.png",revision:null},{url:"static/media/default.85476f9e.png",revision:null},{url:"static/media/file.aced87b9.png",revision:null},{url:"static/media/folder.aaaf079f.png",revision:null},{url:"static/media/l.58a4dcd1.png",revision:null},{url:"static/media/music.00a4d382.png",revision:null},{url:"static/media/musume1.1de68f7f.png",revision:null},{url:"static/media/musume2.3ad6ba64.png",revision:null},{url:"static/media/musume3.0e928e0d.png",revision:null},{url:"static/media/musume4.67a76df4.png",revision:null},{url:"static/media/musume5.1de68f7f.png",revision:null},{url:"static/media/musume6.54b0701a.png",revision:null},{url:"static/media/musume7.9816a389.png",revision:null},{url:"static/media/origin.e6465591.png",revision:null},{url:"static/media/pic.d541162b.png",revision:null},{url:"static/media/video.17ea08b7.png",revision:null},{url:"static/media/wx.3d0c87ff.png",revision:null},{url:"static/media/zip.8f83ea00.png",revision:null}],{}),e.registerRoute(/\.(png|jpe?g|gif|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(ttf|woff|woff2|eot)$/,new e.CacheFirst({cacheName:"fonts",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(proto|bin)$/,new e.NetworkFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
