if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-dfbb910f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"953b6bc9958b5f3822bd4274508d8437"},{url:"js/extensions.min.js",revision:"44f4bd1a585836eb684bc07c94238837"},{url:"js/stencils.min.js",revision:"a4363c11e41442d41b1e073606f5566d"},{url:"js/shapes-14-6-5.min.js",revision:"ebce9c260798e9465fa3c3e3c1607d43"},{url:"js/math-print.js",revision:"9d98c920695f6c3395da4b68f723e60a"},{url:"index.html",revision:"9200e0815b5a48cae7db8f54f9604990"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/grapheditor.css",revision:"748da0cd0a068a52eac70ee2b2c194fe"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"3179f617dd02efd2cefeb8c06f965880"},{url:"js/croppie/croppie.min.css",revision:"fc297c9002c79c15a132f13ee3ec427e"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"c9678257a127910f35e8bb84e7145019"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"2ce6e99d95113e9ca6b24343cea202e0"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"6e9412c359a21b86dc7c5128bf6208d4"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"01caa325f3ad3f6565e0b4228907fb63"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"197ed5837ed27992688fc424699a9a78"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"d7577d8f21716423852c343f027c4c27"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"8f6c85460791915b01d83cd0a793effb"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"887d3ac605a7bb297067537e7c1f5686"},{url:"connect/confluence/viewer-init.js",revision:"4a60c6c805cab7bc782f1e52f7818d9f"},{url:"connect/confluence/viewer.js",revision:"d025b0929817299fa154f273525aa0ec"},{url:"connect/confluence/viewer-1-4-42.html",revision:"c7b38b3af4eb7a58ab6dc4791216530e"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"8b670f4b6ccde55358851da705ae884f"},{url:"connect/confluence/includeDiagram.html",revision:"c03c89622d22227313645900af4e3c3d"},{url:"connect/confluence/macro-editor.js",revision:"e273a48b8e81faac4530bf1a68d75aa0"},{url:"math/MathJax.js",revision:"b2c103388b71bb3d11cbf9aa45fe9b68"},{url:"math/config/TeX-MML-AM_SVG-full.js",revision:"d5cb8ac04050983170ae4af145bc66ff"},{url:"math/jax/output/SVG/fonts/TeX/fontdata.js",revision:"495e5a410955d1b6178870e605890ede"},{url:"math/jax/element/mml/optable/BasicLatin.js",revision:"cac9b2e71382e62270baa55fab07cc13"},{url:"math/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",revision:"e3e5e4d5924beed29f0844550b5c8f46"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js",revision:"0767cbad7275b53da128e7e5e1109f7c"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js",revision:"346302a5c5ee00e01c302148c56dbfe3"},{url:"resources/dia.txt",revision:"6ac22c2dd7bf24f2ce4db6ea5cd82470"},{url:"resources/dia_am.txt",revision:"7b87288182abf40af0364ee000959b7b"},{url:"resources/dia_ar.txt",revision:"8cb02cb9d3740ac3306b963f060db29f"},{url:"resources/dia_bg.txt",revision:"c3fe70b41c1c99a3817f45a533f0d3d1"},{url:"resources/dia_bn.txt",revision:"50da78b0b7f2f65bdf25eabae73b3228"},{url:"resources/dia_bs.txt",revision:"568b22ef20ebfe162fce127fa9bcc6b5"},{url:"resources/dia_ca.txt",revision:"a4f3c89b030191d40999805696e6859b"},{url:"resources/dia_cs.txt",revision:"feebdfef9385384c37fbadd1a1a1b6c2"},{url:"resources/dia_da.txt",revision:"163d26afd66826247cf1553314ec70f5"},{url:"resources/dia_de.txt",revision:"9aa8d6e1d10659624519c88a7ad3e042"},{url:"resources/dia_el.txt",revision:"5289ac0ed78737231ca568be2c777d1a"},{url:"resources/dia_eo.txt",revision:"98e0cca265917fe115de548ca2c6d7a4"},{url:"resources/dia_es.txt",revision:"1a590b0b38299487e1267d440ba04350"},{url:"resources/dia_et.txt",revision:"bed7cfc8f949531f762ad86a225c15a2"},{url:"resources/dia_eu.txt",revision:"5186a4cce8e53bb454e4d539d1792b4d"},{url:"resources/dia_fa.txt",revision:"21e0279f46bcdd79063c06fcfc7b1120"},{url:"resources/dia_fi.txt",revision:"649cea556e9168919b0492f8565bac8b"},{url:"resources/dia_fil.txt",revision:"a717e0751e11dbb6502acfcc51c1a704"},{url:"resources/dia_fr.txt",revision:"4e6530553659158b0f55cc43ec46cc7e"},{url:"resources/dia_gl.txt",revision:"4fe5a563571d23001fb0dcd28dadcb32"},{url:"resources/dia_gu.txt",revision:"5eef301316f5945a700c13d1d96570ed"},{url:"resources/dia_he.txt",revision:"d13e2c3ec4f6f34948f874eda3d63a55"},{url:"resources/dia_hi.txt",revision:"65a2374e09cee44447e9462f3acb7f6a"},{url:"resources/dia_hr.txt",revision:"21626f14592c1b84ee28b058fcb74194"},{url:"resources/dia_hu.txt",revision:"1698e21cde2ed5f5b599429e5e68a8c4"},{url:"resources/dia_id.txt",revision:"a3af078b5bc5cd36df5368fb2604ed02"},{url:"resources/dia_it.txt",revision:"f3b29c577b79c37687f37c1b0748b9d1"},{url:"resources/dia_ja.txt",revision:"990f1ad82383245f1f9e37678a1c9bab"},{url:"resources/dia_kn.txt",revision:"836030c27dc0bb91a25ebcc722f2df41"},{url:"resources/dia_ko.txt",revision:"4a5032d2cad4be2a1815f7e29238664a"},{url:"resources/dia_lt.txt",revision:"d0a2bbb32c3d7d860c8c0385075407ee"},{url:"resources/dia_lv.txt",revision:"8cdfac8996f69486b99302eb0c01757a"},{url:"resources/dia_ml.txt",revision:"53f0f853779db48abc46023e507cb698"},{url:"resources/dia_mr.txt",revision:"4f3bffbf25b0d07a0946e77a288f40b9"},{url:"resources/dia_ms.txt",revision:"55d9c222689543ab6a091636d12dc92f"},{url:"resources/dia_my.txt",revision:"6ac22c2dd7bf24f2ce4db6ea5cd82470"},{url:"resources/dia_nl.txt",revision:"da45f841b898121c268b02e5cf0c0f5e"},{url:"resources/dia_no.txt",revision:"afa660c88bef1253c9827f857e3c2a99"},{url:"resources/dia_pl.txt",revision:"934cb78df740c1377b724cc68b28b436"},{url:"resources/dia_pt-br.txt",revision:"128c5640c8ea34d4e5296bbb2ef35db3"},{url:"resources/dia_pt.txt",revision:"1d30c678b01d010a0c8a5cf415fa68a0"},{url:"resources/dia_ro.txt",revision:"a90bf597059e90eff0d955d12058df23"},{url:"resources/dia_ru.txt",revision:"b225c1bd151294617e8d600181d9e44e"},{url:"resources/dia_si.txt",revision:"6ac22c2dd7bf24f2ce4db6ea5cd82470"},{url:"resources/dia_sk.txt",revision:"be785304786ae06fe6cdae4c029e5f28"},{url:"resources/dia_sl.txt",revision:"c3748f17f0775bdd539ed69a49acd1e1"},{url:"resources/dia_sr.txt",revision:"611506593ed67893a50c3a9000a12c79"},{url:"resources/dia_sv.txt",revision:"54157da886c9c17d4eb1fe9e3d195368"},{url:"resources/dia_sw.txt",revision:"0cd0148f07578cbac9dc4e2222277266"},{url:"resources/dia_ta.txt",revision:"79cb0ed533e753ae646f055fb75d25fc"},{url:"resources/dia_te.txt",revision:"305740ddcfe539071f9f65d844c13068"},{url:"resources/dia_th.txt",revision:"ffc4698dc2f34eb02bf02f3ac26c5c7e"},{url:"resources/dia_tr.txt",revision:"1092cea9e131780ae817c5c5915be3b6"},{url:"resources/dia_uk.txt",revision:"e1ab64d71b13935ef5ef05c09a8f95d9"},{url:"resources/dia_vi.txt",revision:"a9ead4c2e8460af1b127b7405dba35a3"},{url:"resources/dia_zh-tw.txt",revision:"28d610fd1f35a68bcc8a555fea09dc12"},{url:"resources/dia_zh.txt",revision:"f49748b5eb13dee86003c5f57aa628ff"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
