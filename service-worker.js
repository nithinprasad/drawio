if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-12cca165"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"46c8f865f0f69566b7e412291df971d6"},{url:"js/extensions.min.js",revision:"5f96202f6da7fac09289ee6738d036b9"},{url:"js/stencils.min.js",revision:"7a7bde0d8b6615eee4ebd215d2b9d761"},{url:"js/shapes-14-6-5.min.js",revision:"93cb7d82e382a16b54eb307374b1b760"},{url:"js/math-print.js",revision:"9d98c920695f6c3395da4b68f723e60a"},{url:"index.html",revision:"8b5b1cf07fc74454cf354717e9d18534"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"748da0cd0a068a52eac70ee2b2c194fe"},{url:"styles/atlas.css",revision:"e8152cda9233d3a3af017422993abfce"},{url:"styles/dark.css",revision:"3179f617dd02efd2cefeb8c06f965880"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"a9d263399bd80fd5e22af89bbb5e5788"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"2ce6e99d95113e9ca6b24343cea202e0"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"6e9412c359a21b86dc7c5128bf6208d4"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"01caa325f3ad3f6565e0b4228907fb63"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"197ed5837ed27992688fc424699a9a78"},{url:"connect/jira/fullscreen-viewer.js",revision:"4e0775a6c156a803e777870623ac7c3e"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"c787357209cff2986dcca567b599e2ef"},{url:"plugins/cConf-1-4-8.js",revision:"d7577d8f21716423852c343f027c4c27"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"4d5f987bbe6afbb70aca28601df1eafd"},{url:"connect/new_common/cac.js",revision:"3d8c436c566db645fb1e6e6ba9f69bbc"},{url:"connect/gdrive_common/gac.js",revision:"38f1df3ecc4d78290493f47e62202138"},{url:"connect/onedrive_common/ac.js",revision:"887d3ac605a7bb297067537e7c1f5686"},{url:"connect/confluence/viewer-init.js",revision:"4a60c6c805cab7bc782f1e52f7818d9f"},{url:"connect/confluence/viewer.js",revision:"37543b7bdde2bdf515584934e286366c"},{url:"connect/confluence/viewer-1-4-42.html",revision:"c7b38b3af4eb7a58ab6dc4791216530e"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"4c7730a67df6bacf5ca6d8a40cfd6e87"},{url:"connect/confluence/includeDiagram.html",revision:"c03c89622d22227313645900af4e3c3d"},{url:"connect/confluence/macro-editor.js",revision:"e273a48b8e81faac4530bf1a68d75aa0"},{url:"math/MathJax.js",revision:"b2c103388b71bb3d11cbf9aa45fe9b68"},{url:"math/config/TeX-MML-AM_SVG-full.js",revision:"d5cb8ac04050983170ae4af145bc66ff"},{url:"math/jax/output/SVG/fonts/TeX/fontdata.js",revision:"495e5a410955d1b6178870e605890ede"},{url:"math/jax/element/mml/optable/BasicLatin.js",revision:"cac9b2e71382e62270baa55fab07cc13"},{url:"math/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js",revision:"e3e5e4d5924beed29f0844550b5c8f46"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js",revision:"0767cbad7275b53da128e7e5e1109f7c"},{url:"math/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js",revision:"346302a5c5ee00e01c302148c56dbfe3"},{url:"resources/dia.txt",revision:"0ded293b93bc0fa98d99c234514ffe6f"},{url:"resources/dia_am.txt",revision:"0386be52b38f9f77437cb749e7b30939"},{url:"resources/dia_ar.txt",revision:"fd5174b2cac2aaa8335b2db4314978c6"},{url:"resources/dia_bg.txt",revision:"cb4abed85ba47ad248a68d53f357644a"},{url:"resources/dia_bn.txt",revision:"7aa9263b4ed1645bccca489c34d1b490"},{url:"resources/dia_bs.txt",revision:"1c352675c508c5a2cf39b87bd2ef27c4"},{url:"resources/dia_ca.txt",revision:"832c2cd5ec2e83f205f33e3edb9ecfac"},{url:"resources/dia_cs.txt",revision:"94103432f3d4097252b5485c237a0bad"},{url:"resources/dia_da.txt",revision:"c1b5de15635e4eac17f81ad1d561b134"},{url:"resources/dia_de.txt",revision:"1fc377a6cb1ee597db29162c1856cf98"},{url:"resources/dia_el.txt",revision:"ed520e70ae83056d7ee4caac5bf425e6"},{url:"resources/dia_eo.txt",revision:"5dda2a256c4e6bb50a02f0203da58e77"},{url:"resources/dia_es.txt",revision:"c1bc1e3185f212e6b6328d2a2c0a2479"},{url:"resources/dia_et.txt",revision:"261d74899244afc9bd2651dea3febe6d"},{url:"resources/dia_eu.txt",revision:"f8548baadeeaf48f163e402c58be8aeb"},{url:"resources/dia_fa.txt",revision:"11631d635e20991bec78d87a5f34bbeb"},{url:"resources/dia_fi.txt",revision:"611479288eb8bf0e321a1243ef70cb24"},{url:"resources/dia_fil.txt",revision:"61fd3df3b53d13a54208086cb555855f"},{url:"resources/dia_fr.txt",revision:"fc7ce084819cedec0d3131fa8a240aee"},{url:"resources/dia_gl.txt",revision:"b3daa85b59cedcd5efa5ef8d05716263"},{url:"resources/dia_gu.txt",revision:"3974a5a12435e997742b48099cfac4c4"},{url:"resources/dia_he.txt",revision:"c134b0633bec9651fc9471dcd8c904bd"},{url:"resources/dia_hi.txt",revision:"951440d0e03b03c550d21132e6498997"},{url:"resources/dia_hr.txt",revision:"ed5794501d1509dd8b60a4a6c02ea221"},{url:"resources/dia_hu.txt",revision:"0431f03750e5f3283e01da9dc047f360"},{url:"resources/dia_id.txt",revision:"a0789a391b5032a280a726ab7641f4b7"},{url:"resources/dia_it.txt",revision:"b505031dda16cfbeefab270e450f29fb"},{url:"resources/dia_ja.txt",revision:"ec71356fbc19358ad99f9dbcad33e28d"},{url:"resources/dia_kn.txt",revision:"220dc6008a16bd7e00cbd70bcb93b2e8"},{url:"resources/dia_ko.txt",revision:"9b22c4ab483814e3d4debd3321a2e4c0"},{url:"resources/dia_lt.txt",revision:"4dcbddf3f49e35b62ddc1200131aee9e"},{url:"resources/dia_lv.txt",revision:"d410f46d3c00871efa8ba53aae905084"},{url:"resources/dia_ml.txt",revision:"28b064931ddee9ddc61ca64b477b6dac"},{url:"resources/dia_mr.txt",revision:"2c9d39a0b885262b4edf1b11cddd2a44"},{url:"resources/dia_ms.txt",revision:"981af732b25d1bdcc77225ef4dec68c1"},{url:"resources/dia_my.txt",revision:"0ded293b93bc0fa98d99c234514ffe6f"},{url:"resources/dia_nl.txt",revision:"c0d4ccd2bb84a3c97bbc21c3fb083db0"},{url:"resources/dia_no.txt",revision:"de0fa32e852088266689634982544132"},{url:"resources/dia_pl.txt",revision:"0428b94d632e855f85fd774665c4d7da"},{url:"resources/dia_pt-br.txt",revision:"1bfb74139980be96c7ca73c9c269b895"},{url:"resources/dia_pt.txt",revision:"7cae74a83b336db7c307358dd2caf54b"},{url:"resources/dia_ro.txt",revision:"f4c0e8f1d200820703b5d28d53ece90c"},{url:"resources/dia_ru.txt",revision:"aac811d2ade33c58691d685e77ec7093"},{url:"resources/dia_si.txt",revision:"0ded293b93bc0fa98d99c234514ffe6f"},{url:"resources/dia_sk.txt",revision:"bfce32ad76e5b4e9464332d26e6fd4ad"},{url:"resources/dia_sl.txt",revision:"48fd88ffeb0bb831ea985dbaf75c1831"},{url:"resources/dia_sr.txt",revision:"b04259b778457fa9e91620cf892344ac"},{url:"resources/dia_sv.txt",revision:"6c8db8078b4efc5d7d6c955c5c6c9a34"},{url:"resources/dia_sw.txt",revision:"0e7df86830bad298c6e010e1e9c1e92f"},{url:"resources/dia_ta.txt",revision:"23213ee18dce71aad11e60c18884799d"},{url:"resources/dia_te.txt",revision:"2ad5fbf0f5d537e22ddf88c756a02159"},{url:"resources/dia_th.txt",revision:"1624ad9640855d610a8adb1be58357ca"},{url:"resources/dia_tr.txt",revision:"dd2f8c2f69842c14ccb6bbd100acb4a9"},{url:"resources/dia_uk.txt",revision:"474ca24fb6d4f6072dc294e2364f454d"},{url:"resources/dia_vi.txt",revision:"9a629f0c5a51a2d6e37674dcd5afbe03"},{url:"resources/dia_zh-tw.txt",revision:"548b1ca868393ec747c390ef7932063c"},{url:"resources/dia_zh.txt",revision:"dd32a7b9c3808f46c46cb3b431e95b05"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"b5b7280ec98671bb6c3847a36bc7ea12"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map
