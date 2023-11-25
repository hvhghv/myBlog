'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1260cd6037b098a8c046cd47df33334d",
".git/config": "d8d1283cca1bc40cf0c8c6a87870ef52",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3196c9502ad9c86c089663edb61e26c3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ca5ba3f9b8e505535a8e98bfd9df6f56",
".git/logs/refs/heads/master": "ca5ba3f9b8e505535a8e98bfd9df6f56",
".git/logs/refs/remotes/origin/HEAD": "22a543cbd4c298ad2f523c4ac480b129",
".git/logs/refs/remotes/origin/master": "71f1e5c75de01149eb0712486d595470",
".git/objects/00/4d9b0865828eb2d6bcff1cb55f7ab592fbb025": "692080bd27fec6a2b200a90e6aadabf7",
".git/objects/02/d44cfda41d9f68c625989e39136104f59ccf0d": "d50be8cd074576e180e02bacb88d71e0",
".git/objects/04/7941f7463572ec452d54c483f3e57c0739c889": "b2a11c1b561e3846ef9ef0edbcf9ae62",
".git/objects/05/bae2149004ce4afec27a41b0727a03ccbae0a4": "4ae75178b12ccd816bf0cd07b0db9cd0",
".git/objects/0a/7050e908c6a0580919d8b1a8f7f49d3bda88b5": "6a82907ea8c1e1bd1f703dbda6ef29ce",
".git/objects/10/5ce2da2d6447d11dfe32bfb846c3d5b199fc99": "52406f7269ec07e02bb4758835db462e",
".git/objects/11/8e36f884dcefba0756e50f222b74cafc28311c": "6b6e831e87d8bd24912c48984d44a032",
".git/objects/15/aa3a2f631dffa2c0a0dc81a3106ede51f04a7e": "2a9c8124bbba9f1ff730ef19a3370fff",
".git/objects/1a/d792b22e885caaa8c247562925167fcacbf06f": "7be0706b751e0f353bde22da6c312ab5",
".git/objects/1c/f75a1a186c7ef1d59ceb2c0a6cb04d513af827": "dd7ab1ef7586cadb5dfd4d2fd4d76d19",
".git/objects/1d/3c57e1575c137f86a087f0e3f4e8ee960042c7": "a88778afe7b46dd66a9e1520df45105f",
".git/objects/1e/6e51d685f01ba214cc320b683611f0f7ea0a0c": "998808de04bf9c115f1e0683ebfc9a7b",
".git/objects/1e/8c0070e921b95ed321c00f1c9b606661eb55e3": "56a89406175f1caaeaa7e9037337e1c7",
".git/objects/1e/a5ef0f76f6c6c9f7392ece7acadc4ee7e423c5": "3ce5c13fc5f7e4ebae7ac1314ed600ee",
".git/objects/21/68d49992b63a2161baa3577e6b097748806f40": "0c7bca094f8e399ac5e18f484ae19570",
".git/objects/24/d2ca60cc2e0ae6ca028a10778f68c385c9d6ad": "b2952dc414cada4a910a8d643f491dc4",
".git/objects/29/5989c2e6d855a79a61bbf621c52008379ab965": "8e6bc39bbfd3e380ecdd27e7c9d7892d",
".git/objects/3a/251761491bb83f06557be0367bee7378015916": "dde50c5ec4fd500e9008545decccf047",
".git/objects/3e/468b40792844ecc8d0af070d4ea8fbf00f1b41": "cba4723280dfea4c91f8393465cee835",
".git/objects/3e/8ebf94eaeac2c57f6a2b40282ed8c866782b73": "67ac18b8819bfc1ad4dd493d6604b790",
".git/objects/48/f969c4ac9603042befea2d72663d169de53747": "f81baeec9ff2ffb9dbda0f4448867651",
".git/objects/49/80dad237ca8e188f592cc5ede2dcd7ded895f6": "7bd9c81bc6e1ecee9551e78afba652f9",
".git/objects/4a/8584f13e94649304827673712df124192e742e": "eaaff5e12b4140dac73bde64c7437144",
".git/objects/51/842b4cbbbdad623fb6fdf6ee4a2c3fa48c4bfb": "a0a085b719c859bb8d5d4014587e4cad",
".git/objects/51/8e791e16f58836d518f5e88570133ee423986d": "c4c22159656cb11d69aff4107de48190",
".git/objects/52/c62ec976fc55fdaef766b4f83a1950644d4c8d": "a0fb9f1a830746825d60120d5f2e70f7",
".git/objects/55/fd0c80a0299b85c8613ee95fbfa31e9c2cbeb2": "995282dc51d39545aeb729a0fbf4198e",
".git/objects/56/e405d7c32b5a5d36576cd8c08e877b68546b42": "523dedf5171c86650b4752bb0f650337",
".git/objects/59/fa5cddc36bc9ea2f772ed34cb772ca05fed7d9": "0f1c150457a3b0d39d6c2d7078bbde3d",
".git/objects/5f/11d882500a24bb1b8395b3b98de139ff5eaac1": "133081d21fb78c47e1371131c96bf01b",
".git/objects/65/4938909940d2a1764fb4b6c9632d26a01f667d": "431946f0a5cff9d64c5a27fc7a2b0b6d",
".git/objects/66/4cf911923daec8400be0997612197536717806": "036b1875980eaf1e6c05232e809e3977",
".git/objects/6b/ebf28c61fdd9a4bfd01c2a17f9ef4e124650c2": "d730c43ebb2dcfb1be5e294d8a90b84b",
".git/objects/6d/4d0251edca45680d8e9e5a217490e7846c7cd6": "4d8f906ffbc5acb9b1196b50cee874be",
".git/objects/6d/93b67f32ab2003c60a9883f94f5c43f6958bbe": "89ce77dedd22aa39c9e52f1c888967d3",
".git/objects/74/dc796937a8b1b4985b807244febe11ee3d4873": "f16632b311363d15883cff58a3a91e13",
".git/objects/77/2d62f4193f0426214e63b258174af22aae6989": "94dc5940a2afa8105d3afd570e05ae22",
".git/objects/7d/0a3ef4e18ff90ae00d6fa3b0fdac3e8a5c6b70": "e57f07383aa9949a6175335fd2a20fdc",
".git/objects/80/ccac506126098c41546c507e322c1b2c43006d": "4cec61dfdb6a05dd24c2395dab9af23d",
".git/objects/83/7bed13d43cdfe8abbf4afd7a1ca06e4ddb6a04": "172beadd41ddcbd36a857c56f3aa5a66",
".git/objects/84/47359bcc15057598a9de2b2562ad87008ffd6f": "5bcdf787b48d55ca204e5ca1eed963d8",
".git/objects/84/d32a5a1182367b0b61fec7974f31d02766f069": "41df972563c7bc8404ec479399912273",
".git/objects/88/a6beb924c0a80be69ad35323b15a4ac7a2f4ff": "88a2e186125b4335f3701e03a0bfe797",
".git/objects/89/4d47f1cdf03d942786dba6e2e0cf64459773a5": "d1b1b265a9aa0cbdcb397fc0a9e25410",
".git/objects/8c/384e0e5c3b691653e6884aa77e83b8c5d11996": "8d1e9fc317e19a6fd681b8e2de68f73b",
".git/objects/90/29f516d9dfada1929e96b648fbd326ff5be553": "9d3b65fa31d5fc83dad2c7bd7b277806",
".git/objects/94/cc44311bcf8b71960080330a0ab9813d4ebf53": "833f641df3371624e8b38d2e709ab2cc",
".git/objects/9b/16e209a08c56b485def5847cfd7cb8c0a1d54d": "a4b77dd5b7743384398fdd40dc4faa36",
".git/objects/9b/a21a58ddafd1ee1ec5c0e9650999a73869d7cc": "c8f71b59b5aa8b9cad67560cf083e625",
".git/objects/9f/a0eb4b90e49776fcb06cf0eefc1dd9e44d21e2": "e95c376df088d6661bc5bd697d8cf006",
".git/objects/a3/e5b019eb6202a818a5365be1b5a850e7ad137c": "479864539af3590b4953d9f3e37e26e1",
".git/objects/a4/b39f4f3f1c3cf2e9987a213e95137ec66265ef": "ebcc4859cbe4342c90082593236737fb",
".git/objects/b0/4d47d6bed8deb29dceb0848abdc69f0ed91a79": "a610c3d503f5ab3de86ee5cb02c5d053",
".git/objects/b2/8f0d2cbc684c3abaa2d9ccccc1d88e52f07632": "356a6cfc919597a3f939c2a0486d73dc",
".git/objects/b5/9851f12aa9f1d997efb255a264f5221b5b9f3b": "87ad5c1afd3daff5aff66089afad23e6",
".git/objects/b6/ff1b53700cbc0eb1b4c962680cd198b0946387": "3aed7fc0bc5df8cb0ab88ae7414b8e14",
".git/objects/bc/5f087f868a8f0e040da0993525da0dfbe05c4e": "51bfe569d75af1fed26f80b986932114",
".git/objects/c0/ce40265f4a265313d78b3b4338e3085247ba8f": "62f9e23fb3f609b69ee37532697ce630",
".git/objects/c2/ab7db8e5deefff05c6c81476a9b143fb19ed97": "0cf68a1417345fe264f7acb4ad91f09a",
".git/objects/c4/1edfbc8ae6268d33628289d13fc0782830b74b": "62b9ea8c43b21ce52e6d02f8d323983c",
".git/objects/c6/31c726e0033416538763f8cd82acc127d4e075": "ad1e5a35cc49a8b7c388aec28e2fc149",
".git/objects/c9/f8dc25b37e8b53a0e3eb9cab23d13a562e7bfe": "da7870e132ec9da06f1648711c9cc5bf",
".git/objects/ca/617402be5e47bbbc6a8ef3507ba4fe0263176d": "3148c1b05e9eb7800d41c08849a9f8c7",
".git/objects/d0/876a78d06ac03b5d78c8dcdb95570281c6f1d6": "10192b2673680d54d2540c6c32dc7b9b",
".git/objects/d1/3ac93d3d4784ba9e17e6fe2192b0b7655de6c0": "3a9b1305c88c32757584bd11a019a285",
".git/objects/d2/2a11fa69f938ff8b128240cd16b7a4c7b7202c": "24f45a62f6634b8946b24990d7580957",
".git/objects/d3/0acf6949a7b56ca0c5266627153a99eed58618": "31c4a86ab1f59e84d6b1cd442c67de0f",
".git/objects/d3/d091cde7ac57f828c2ace59f80b562d3a7b28e": "9b589337605f1b6412cd81448d91db5d",
".git/objects/d4/dd85816fa80b39f767b0e78862205719a5e2bd": "dd5c6483e671490c25ba16da58f8a3f9",
".git/objects/d5/a48c17be9bb6633d29f1b70c91927a1469818b": "2f6388676fda1fd0ee0ef76d7f3d6727",
".git/objects/d7/ba2d7236a98b59768146fd81c8e1f28a3c02a7": "0b872417d3fac39eac81a988f5a3c546",
".git/objects/d9/d1657433f861f9defca5bfa40cf676419e935b": "9df7613441e4ff4fe9f4fe048bdbe35f",
".git/objects/e0/b9adddc9f3d48848d5069b6247ed143560ca98": "1852a393ff15713dc2c2f214a575d7c3",
".git/objects/e1/7ea60289f8fa2df8df1c3a3a3e42cf9c97c536": "b3ba4a26eeed01e856bc125610f8abfd",
".git/objects/e4/bd50fa787893519bc98a2b9aadeb19e48c550c": "8410fc0ab2b4155b09d92f8243e20442",
".git/objects/e5/3d049e70cc43fcb26d3d591c7f42f574b8091f": "38fe340adf8d92f135a066d36f7df96a",
".git/objects/e5/fe1dc5665a4b0365c90416edbfc4e48752fd9c": "8e579f6150d100b05477bb4252cefef8",
".git/objects/e8/efc5c6264b34935937022760f79017936f6558": "14aabc236ff85104f3266d70de927a8e",
".git/objects/f1/1bc5c3dbeb797c6b4de7b3143aa228d89cb5ca": "b299623688cc7fc191ab6cb6117ad21a",
".git/objects/fb/007f515083d21994a0e9d17e5e7f20556357a6": "499d29a5d0f3d6527817266ac604915b",
".git/objects/fc/6054f69dd10b4fe84f362329818e4420490d72": "165b78a510ffd96908030b84afa6b3d7",
".git/objects/fe/7113c7eeef5ca48bdad33f003fbb010f886562": "92bb867654b395765bff7250c02db4e7",
".git/objects/ff/6a2b1c906e6c676c554b906685b6401f60366d": "5774aef6f7d71dae6c81d8e2720f1c24",
".git/objects/pack/pack-e72b88f16b43fd8d594c2fa60f1dc0ef62950bbb.idx": "2df454767182cc5f00604f190825ead4",
".git/objects/pack/pack-e72b88f16b43fd8d594c2fa60f1dc0ef62950bbb.pack": "6cbdac912dccf6d126ce53d510bef1a9",
".git/packed-refs": "bba81fa9d964a5568e63e989407b3626",
".git/refs/heads/master": "bba3d25cdd30ce14c3b26540382ef489",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "bba3d25cdd30ce14c3b26540382ef489",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "4c9d355a6e0e9436263549b009b6b274",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/page/diary/.idea/diary.iml": "d40b6ba9cef7ecf4623cbe6056b99d6b",
"assets/page/diary/.idea/inspectionProfiles/profiles_settings.xml": "05dbe611f5bdb7a801adb3f064d4bfa9",
"assets/page/diary/.idea/inspectionProfiles/Project_Default.xml": "4a917a3d4a315d8fa1389b0e6c2cbcb5",
"assets/page/diary/.idea/modules.xml": "f727c05ce49656d47fd52a06ffc1feaa",
"assets/page/diary/.idea/workspace.xml": "35629564976f6add51b079a809f37d19",
"assets/page/diary/2023-10-23.md": "021241f90abc52d92354f3b78b5fe359",
"assets/page/diary/2023-6-12.md": "231495267eb81e461293d2c9edae15cd",
"assets/page/diary/2023-6-16.md": "911b2e93413a3910f503f6f9ef83ca5e",
"assets/page/diary/2023-6-25.md": "412fddc09db09074c4d46f5b1160b7cf",
"assets/page/diary/2023-9-10.md": "96b27aa55fb1672c01b56d37874aba64",
"assets/page/diary/2023-9-7.md": "13fa22c3733c1b0847a67ceb65f3e5dd",
"assets/page/diary/firstTry.md": "c76993eb97862300f6d958e1725fb0fc",
"assets/page/draw/1.md": "576c45dae0d0fb58bfe7904f7aed2ba0",
"assets/page/work/2023-11-14.md": "fb9c7a35d9d9ae12ee5969f599c1fedd",
"assets/page/work/CompilationNote1.md": "302dc423837f59ae7d822ed5287acd98",
"assets/page/work/cython1.md": "75143eedccbafc53a0e9ef58c87f1b42",
"assets/page/work/cython2.md": "35cfef31a66a7d3f6b453ec7d2768fda",
"assets/page/work/cython3.md": "f981ed3a7ce1394bf8c6a91f28760275",
"assets/page/work/MarkDownTest.md": "7634f3d127fa93f4da96e59b27809644",
"assets/page/work/null.md": "8c3205cee817fc7c6c407eda926ede7c",
"assets/page/work/RichTextAndSelectText.md": "cf5e3dc08765e64ee04d3c6146ad1157",
"assets/page/worklist/2023-11-14.md": "72181445aeef9bc7f9e7156d377d89ab",
"assets/page/worklist/CompilationNote1.md": "03aa6f96e6be1507004eff26e6274a3f",
"assets/page/worklist/cython1.md": "d1fbefb51adea74bc8c20655da3a6c64",
"assets/page/worklist/cython2.md": "a37744c030d3b630cc6d840ca8b78ccf",
"assets/page/worklist/cython3.md": "2b77ed2a946575d8b0b41f799594376b",
"assets/page/worklist/MarkDownTest.md": "d1bce33b43589eda3c50c5720708b230",
"assets/page/worklist/RichTextAndSelectText.md": "fbab74c6ed9c3e2f272f1b513bab1f99",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"debug.cmd": "79d1a161b80d04ddbd9a9192ca65c375",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"git_change.cmd": "be2a84831a1b516218fb87ee41c25a3d",
"icon.ico": "9300936f165f60bb741910cc8d3410a6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c78402bf2f8c08de019c5ff50e7db26b",
"/": "c78402bf2f8c08de019c5ff50e7db26b",
"main.dart.js": "03c04a7488d25b95c6b8a138f3031c3c",
"manifest.json": "420abf8164e6fb7f51ef3107860b6a74",
"README.md": "bea07e6d2b8dce396fe21baa61b34956",
"version.json": "dd8c0c1dc62095f7cddd73e17ec6c9f9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
