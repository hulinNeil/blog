/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2965e291caef21b22ea02084c123603f"
  },
  {
    "url": "about/index.html",
    "revision": "21a908a08f00d9862795c99d21af74d7"
  },
  {
    "url": "assets/css/1.styles.cb421415.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.df3e32a2.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.2cac3322.css",
    "revision": "66e0d44e04b10a4fa22e8bbaafdd66bd"
  },
  {
    "url": "assets/img/blog.c5a9a0ab.jpg",
    "revision": "c5a9a0ab118e42e02fb9a35fbeb71421"
  },
  {
    "url": "assets/img/home.6a04dd0a.jpg",
    "revision": "6a04dd0a9c5f7ee575afdc6f79e33da2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cb421415.js",
    "revision": "e65dd1576d56a0d3822658485d3daeb9"
  },
  {
    "url": "assets/js/10.7eb9aa3c.js",
    "revision": "b2f7fc175bbae51054278bd4b5b49955"
  },
  {
    "url": "assets/js/11.1378472f.js",
    "revision": "192846fe773a60bd603b211101df2756"
  },
  {
    "url": "assets/js/12.7434b2fa.js",
    "revision": "76598f4513c6a0477642c576c6ddf30f"
  },
  {
    "url": "assets/js/13.ff1739a9.js",
    "revision": "5725862de972ffd2cd3e4e343140dbdb"
  },
  {
    "url": "assets/js/14.0f9d8bd8.js",
    "revision": "fbb03f124f632a82a45c83ab17ddd63f"
  },
  {
    "url": "assets/js/15.91df113f.js",
    "revision": "80e8ae482ba7edcd6271faa3df0f7314"
  },
  {
    "url": "assets/js/16.9d315117.js",
    "revision": "54ac6b03c50858dd34a09156b64d7f13"
  },
  {
    "url": "assets/js/17.0be3247d.js",
    "revision": "55f343f1244c5e5f428060eca1536f41"
  },
  {
    "url": "assets/js/18.f66b5c5a.js",
    "revision": "8af21825e593c27afedd50bfb73269d3"
  },
  {
    "url": "assets/js/19.d0494c6e.js",
    "revision": "9a277ae4330c6492bfc2c44d2d95dacc"
  },
  {
    "url": "assets/js/2.df3e32a2.js",
    "revision": "b734f67f4fb1be49ed73630c6a0fcf10"
  },
  {
    "url": "assets/js/20.2a526a8d.js",
    "revision": "90289e7c71bad8d27fc164bace2973c1"
  },
  {
    "url": "assets/js/21.4535ccdf.js",
    "revision": "a13c742ff9b110676baccd17bbbc2969"
  },
  {
    "url": "assets/js/22.e7a241ab.js",
    "revision": "35bd04d93f002bfb6f323403aabc39f4"
  },
  {
    "url": "assets/js/23.5c68f21b.js",
    "revision": "e07b42be88cbcd48c64f6148890f64bb"
  },
  {
    "url": "assets/js/24.3b30af57.js",
    "revision": "7791cc7b96d9a5b2991cf8bbb1c869d8"
  },
  {
    "url": "assets/js/25.ad57ee56.js",
    "revision": "bebdec0ac203763fdb83c20766c530cb"
  },
  {
    "url": "assets/js/26.3ad03778.js",
    "revision": "8b7676815b81c8e6f89f5dc2aadda3d3"
  },
  {
    "url": "assets/js/3.ee615cef.js",
    "revision": "dc293bb40a27709f171558057d9a841f"
  },
  {
    "url": "assets/js/4.cd60779c.js",
    "revision": "abeab0a6469c7ae8587b2830c49d98a4"
  },
  {
    "url": "assets/js/5.669ca99a.js",
    "revision": "ebd9df3b3fd0f22bbdba55daa4ec2f27"
  },
  {
    "url": "assets/js/6.3a293ec9.js",
    "revision": "7daebe0d3664e4f02f51bf68a732204d"
  },
  {
    "url": "assets/js/7.1d6871d9.js",
    "revision": "6a185225a85ec24457915b47311eed01"
  },
  {
    "url": "assets/js/8.26294794.js",
    "revision": "198dc611def8ad98f8c2fd349dc3c287"
  },
  {
    "url": "assets/js/9.6efd6aa2.js",
    "revision": "cf6c31f5292e1cc201199dfd92098ed9"
  },
  {
    "url": "assets/js/app.2cac3322.js",
    "revision": "7701c2b365c91d3c1efed84402b8394d"
  },
  {
    "url": "blog/canvas2Image.html",
    "revision": "2a28ac679320a6dcc14ed99b9b0b9963"
  },
  {
    "url": "blog/css-problem.html",
    "revision": "0e0f0685fe8b46ffaf4adec02ad94e3e"
  },
  {
    "url": "blog/elegant-code.html",
    "revision": "4621c8123b0648ef10b597bbe642aced"
  },
  {
    "url": "blog/ES6-study.html",
    "revision": "b623599342f56dbcce3a812c5ab094e4"
  },
  {
    "url": "blog/eslint-rules-list.html",
    "revision": "3fe310b99327fec5d322522e8d6e5f6e"
  },
  {
    "url": "blog/front-end-progress.html",
    "revision": "b48dffa70800baf772ceb8331c25ed6b"
  },
  {
    "url": "blog/github-use-notes.html",
    "revision": "7135683efed216a21bd73b7c1338cc5b"
  },
  {
    "url": "blog/html5-IOS-Android.html",
    "revision": "b468cd5d8fbbc86b61038fd0e7a047a4"
  },
  {
    "url": "blog/javaScript-error-type.html",
    "revision": "352f639dc8a02f4aecc8eace49cb1abd"
  },
  {
    "url": "blog/javaScript-execCommand.html",
    "revision": "ce7bbcf96debb30de21f940e9f7c9e9e"
  },
  {
    "url": "blog/javaScript-skill.html",
    "revision": "5a2c9a1c24dfb21fb0c0e609c3826b46"
  },
  {
    "url": "blog/js-diabolic-tricks-and-wicked-craft.html",
    "revision": "77b4e87f72efa1686c35e98a78a7941d"
  },
  {
    "url": "blog/mac-command.html",
    "revision": "6e94e9200b516e24d2682724ede4d28e"
  },
  {
    "url": "blog/mac-mysql-attention.html",
    "revision": "d92d53e299870b1190b2a404ea427b01"
  },
  {
    "url": "blog/mobile-hack.html",
    "revision": "42e267207cd884bdb161e9a2b82dab0e"
  },
  {
    "url": "blog/node-code-standard.html",
    "revision": "fb7f71245d9d256e48c66888046e654e"
  },
  {
    "url": "blog/node-common-methods.html",
    "revision": "bf8076eba574ede127783410831a34a6"
  },
  {
    "url": "blog/node-study.html",
    "revision": "8811062d5a5bcabb3c1ea604f324be4b"
  },
  {
    "url": "blog/vue-attention.html",
    "revision": "83b692ced381009a4a0028379372df28"
  },
  {
    "url": "blog/vue-source-study.html",
    "revision": "c73242c31a2b4e208c4b61db7a93d2f1"
  },
  {
    "url": "blog/vuepress-theme-toos.html",
    "revision": "d9c3b88959fc8f8e3b581a5591a937d7"
  },
  {
    "url": "img/blog.jpg",
    "revision": "c5a9a0ab118e42e02fb9a35fbeb71421"
  },
  {
    "url": "img/home.gif",
    "revision": "c1cf7dff0b60d2dfe61f39efdf377f30"
  },
  {
    "url": "img/home.jpg",
    "revision": "6a04dd0a9c5f7ee575afdc6f79e33da2"
  },
  {
    "url": "img/logo.png",
    "revision": "6eff31aa92ee6d233df8874ac4de6b8d"
  },
  {
    "url": "index.html",
    "revision": "17d61787d684c76d8ab7286415147b27"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
