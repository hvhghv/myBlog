'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1bce1b432c1c3b9ede471e8f3cde0291",
".git/config": "40008da9634e5ece499ca6479debb65a",
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
".git/index": "01a65835a2af3d9671a85da7d903c993",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "72babb44e55dc7c4c458d59376162f6a",
".git/logs/refs/heads/main": "b516deb82e0069047b1ee7bc7932a5ef",
".git/logs/refs/heads/master": "f3b14b3261d1b97a8f1f0cb1cef1e713",
".git/logs/refs/remotes/origin/main": "e6b21d8a4d054f82d927f2fddc2182ff",
".git/logs/refs/remotes/origin/master": "a2832c280548b031dd4ffbc327ef598e",
".git/objects/00/d4f3852c46f6b6a7a5d91d83cef329a6b691bb": "75cbbb624b97b2b9394292ff77415ce5",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/b3cf8b018b6145c43d0efe9225e526d9ab349e": "91ae61be2a739480fddfe78587ca3232",
".git/objects/0d/2da6b55117ddf0a66aac78ff0ad1f88e917de3": "74fb60c49319ac0892235f61790b1ea4",
".git/objects/0d/7ed93e1b1ba4182ac6ed65e442868eab29e281": "b90484a66e1639f127a7a6aef24d9f46",
".git/objects/12/2a04def20c66bad1cfcae4719cbfb339832693": "208246f5a6d3bac4978115adfd896fe5",
".git/objects/16/958ae403f2fd5a1b77a87caeb28dbdfe33ddb0": "a7805cd44e0f43433b38cd585cf79683",
".git/objects/17/43ad7908eed5fa7c67baaa1a3347d1a8c14ff9": "c15dcf207e087d0decbf0a70dc4e3b76",
".git/objects/18/01c4e5e6ed3475797c73a204a09404b9f0e3c8": "1e23417dfe7e2d6371ebbbbda8fb4e66",
".git/objects/1a/c06a059a1c98b75eb1bed69504b592147f70b5": "d6d96eb61c5d5cf00dd1170f00a39c66",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/0878e5e7ca4cfdc4924d8330d21010effb6a4d": "b9985cf59ab6f4507b910c50754469c9",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/960cf18c4031bfc7581541ec5a46fa24c7441b": "7662a52ac1493f8317fe46728dd05efc",
".git/objects/21/85b92bf87488d125bd5846ac0cbadc35437ecd": "c4eedb728b27c252de52d8a535d1aa7f",
".git/objects/22/92559dc029b788cf5a610088b7df656e9257fb": "24154c38b8d22bae3205a2e07dcc28df",
".git/objects/2f/4f1246e24b0fc217f749ea80dc83f962be59bb": "b0ad34d0974ebeb121c7f94403bbefc2",
".git/objects/2f/854583eabe3d70a25a5ae26916f6e47c0fd064": "d5e87a12fc3a862a65a3d7c18d87c61a",
".git/objects/33/47119a821026cf644b358650c91790b06d47b2": "f223d22d034cce943c0ff2926b24b863",
".git/objects/33/599702b3a18109c5049170e7c511ab607b976a": "0089038d28d39eca5577a06d52a517c2",
".git/objects/34/8a20385e46e731f840579f9c1b25108a44d7a1": "613376c5f7fdf71f2f149d2f3bfae270",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/0b64e9885ab7932adb996c3361baf6f86ca69a": "4113aaa96aaacd79a0d28a6231d3bf9d",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/42dc2c70d146a5044b5c91349c315e68819923": "4be5a0b07d58c06e81e0247e18a9dd17",
".git/objects/3a/8429e1cda71e974cd357de6d352a78d16e4d3f": "e5b5c474785084a4fcc88497bf89b399",
".git/objects/3d/987a1db1731ecb70c383b970402281e47dc0e1": "c93ed9a0cabeb4db04b5f487051ee638",
".git/objects/43/a514dba500f625bbd8581c762e07543ef903a2": "4cfda8632e0618bf211722338b6ef875",
".git/objects/45/b5d007e20f028eb62be73c8beef5996234173a": "96c2a55a3cec11798e9f7e85a5789435",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d3f25f2376b62860ff6239b47d8a147d61c780": "7939518bac53856d247aa6cc364957e9",
".git/objects/49/cc8ef0e116cef009fe0bd72473a964bbd07f9b": "5847d0ee35f7753cd2c6047adc7e1b6e",
".git/objects/4a/7541d3c93d8d804844bff3e1a552b69a851419": "a98cc2728da6f150326bac22bf656604",
".git/objects/4b/44620e4174f0c09fcf6a97819d4d3107e43b48": "7d23a1b4c83bd9b173f1df8d9f9f8101",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/4edfce108b2ae3089b8f18cac26944dddec7f3": "ec5f9bdd397bd07ba0052c30d9d55cf0",
".git/objects/4e/987a7976a2725091dab9e89c4352106a59e49a": "a6f3f82b15b84c4c53795cb4c55e5b33",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5c/59323f7755f1f0d116d14ee09664234f692965": "48847a1fd30af099f3406bc496c7974a",
".git/objects/5c/c903cee9c4b1f7265f777cf704291dc677f0fe": "2e79e2635cd8d74f2c62433c4f46c33c",
".git/objects/62/9ecadc42f71cf0fd50f3b496e9bd2d87451a43": "0a322a61575171442136306945f5b67f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/b8320039a5ce4031da5c71ea4005ff2a1c3fe3": "71df9782f5a0ced7dbdac05c34fa8f5d",
".git/objects/64/5b51e6b27a2dc9a32db4b8e89351e9eef731ca": "889cf68f4ad472621df0bb037cb29aa0",
".git/objects/66/faac5da041d3e5b3bc97676ce8a68af5bc55b6": "7dc9921a6a3429fac6a9b918c4ba4576",
".git/objects/67/0cfaa5e62a22b25d17b60ee1b304a3571a1af8": "8ca7d563fc7ad65dbb6d474a19e653a7",
".git/objects/68/d9ea64940b365ae40c9812dad2fdcd46a94413": "12772888e8238833f437f491ccfcf78d",
".git/objects/69/c64d637e78a6f8aea83474aa4e4b1d4b78df9a": "fe0b88f917ed816c606b9aca20adebf0",
".git/objects/6a/5f8d2c673f7c138d03f41d81b80262b9621d1f": "fc5f9c8750331c8cd8b0aa3380d79468",
".git/objects/6a/7dfcb035e1ca27ac44db6802eaf0964b24a14e": "60f7085a40146a1098bfc018f7c31227",
".git/objects/6c/f1a4ab1ce8984e6fddb7a3fc8cca193d24dd10": "3c572285abcf77ccd54ac0c3cde62548",
".git/objects/6e/c1895d2c0a84c6046a5681d284561ac7793094": "58e2394a4f94bb6c58829254261397d6",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/dbc298d5f99cfa4f71049d7b09649850b53a39": "fcc76e72b97c011fb72da68ef4d36add",
".git/objects/72/2127d2e8eed3ad515dfbd731873e924003624f": "8bd1e8fd490bca7adb7c5a5ff7f6024c",
".git/objects/73/835bb5433c8ac4c2efacc2092f0ab2f4be665e": "e49ed9171a36e8781849e70025d64c72",
".git/objects/77/76231021ddda83743fb44adc1491632b5a53ff": "54fcf4f72a72b16146fd47503419d8f6",
".git/objects/78/f77b0c5108a9895c79afc0c1cfc381b21a3bb8": "571a7c1689c26d41021585f7ed594e24",
".git/objects/79/a07d36dd4f6a57ce005d8bb7554494e84c1355": "38ac8b982e3d89679baafb7a5cac4754",
".git/objects/7a/4b79c2ed041ee9cd1224a6fc6a7ec8685028d7": "0dcaf70f25900d0999268d03f66dd523",
".git/objects/7b/0bceb3398a590451e4dd40308e21553629e048": "7cfcb14bd749eafece8a8e25f1058b56",
".git/objects/80/75e0b71df7715d75f6674e698a7f735204c767": "40a0b01a55b46d24c858b735374612fc",
".git/objects/80/fcda86322d4535b14c02c2e41a2c817b62e118": "2ee5a045b08a0182650800c961668f91",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2f25ce129435c37ec62ae45083ae62ad312894": "248be31096c97130f992ca78429d35c8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b952d200938e4f7a3cab7ce29a8a60755f17a7": "34fb2c01aa4734e34539572fece240df",
".git/objects/8c/e50c2441be6149616ea47437e891fb38abaaba": "4ef2c594f47f8966fe2b4964eb1b5e14",
".git/objects/8d/bf92ffa6f3d2bf8f1f9bfaaf8102460093dfbe": "c3a4c4175cda8fcb6415d23c37b661b3",
".git/objects/8e/196d80d9cc9415c618fed2fc99d95c23854f74": "358d1829ddce2270f3cc3a877ef35232",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/0dca684008ac43df060965dbe5267765149a34": "4403f5435c5ce72e101dc75b806c3456",
".git/objects/95/198d8d72532254e873feb02cfeed244a594e45": "0b921c54b4a87806fc8df81e3d7aec14",
".git/objects/9d/e1de351c4889cfd585f6f8871c3aff76704bee": "acf89bff8c169bde54d2e0fc721a9a25",
".git/objects/9e/fc7127be08a317da1851664358ef5b8766c8a4": "b9ffc88f1741dbad43ba67433785f892",
".git/objects/a6/d920aa3ac20de7198d476845cd9236d64f5cb6": "041d164d12559ab1f77b883cd71d5c7d",
".git/objects/a8/10021c65eda6694bb10443ba58cde4faccea9c": "7c75c7f2c37d756e2225afd418dcba66",
".git/objects/ac/6b9dbc75b5b1cf3e1e14f74f922c371aef5211": "3f2f6880e19920036d3c9e42da7acc21",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/088d2a7811e52eb636d026d3513b14830bfbb4": "156631aefd275ddd6a3781af8c1d0b28",
".git/objects/af/181dc3cfa9b836faa0f2ab0eea0efea881960a": "77d2c8f77fdbf5a214439c74572f0ac4",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/61a12957a9374e04f1041668af2f6c7c48dc60": "4b66a9548723d22b7953f22d5476810b",
".git/objects/b6/65a619d1cd42dffc6145bcc3d7b3234a96ff7f": "f6f41a8490cbdd7985729fbba2428caf",
".git/objects/b6/acfd5ac2a6a6bffa76dce81696111e139f6b2a": "154af6490af9c56d1a9a01c49746a856",
".git/objects/b6/de1a599798901f13ec9725ca004c258038ca98": "63b6c3d82068cde354f10255253df3b1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/b16b0bb0754de2f3ef6b2da10ee0a765f85ea1": "1bf1c14c1e7fc9122754045d8a7db761",
".git/objects/c8/14f62cc4bb94b1cb19f618bb450fd3eb293756": "3d04e5c587f7caea64b1f38fb02fcafa",
".git/objects/cb/7ca3430cf95372cfba1b5f51cbff92d9cff03f": "95d3fa2dc0050d9fe107ed9a2b48a6e6",
".git/objects/ce/b4592686a530d7d95aab2d2e661008090bb0a3": "e74ab1147f45151eb19e7f190f9c4e6e",
".git/objects/d3/2607c4760dc1c5ef11bdf99ea1010b082881bc": "9daccbad72c8485423a12756bb18c267",
".git/objects/d3/b456198e0379084d7a891dd219063010bb15ee": "d473f6eddd98d10844d804af6f26e8d8",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b20e82b40c50fa9424ca589ed88cdcdd5ed214": "e01885a1601f4a12348429615f237489",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/d2af4489e4ab3bc3c5b1a33de02184d0291338": "2a1cdbb18c82a73c07add64ac7c43e0a",
".git/objects/de/ec3966dcbabcb4b0352cdb9e91f0c6fb083e92": "5bad1e758dcbfef3469b3ad8309bb21e",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e3/dce93908113e37c513c0a88af6ab442fd291a9": "1f9f49254e8d854cff25af775b61be57",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/c38c4153056fe1d0cd485b92133d25425005ee": "a9c453d8cc850cf0ab5dc5f9f748b589",
".git/objects/e8/ef56bff943e903da6317ae36709938d9138aa6": "27ee58aa8769154a83ba35d3b38efa1c",
".git/objects/e8/f22c3e2497f0c9226555c71328f8a0316c20ca": "272f69f1d042314cc072ce55113ae46a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/71505e7ec45df8625f3c217a16a4fc3a7f5c18": "739dc68eac6a50ae3a5b123e5841a749",
".git/objects/ee/6c4f7ca4a83c5821f2f3a084bded51f4e7294c": "4fba8e560cfeedb2dd8362b545990c94",
".git/objects/f1/3089da44dc53db63214936d86ec12c721bc4f9": "fa8c852e79a5bb212efadd3708f47b37",
".git/objects/f2/11c603b22f44ad59a1bcb28cd9eafe613452c4": "f4f9981b32347527c051ee9a5137c26e",
".git/objects/f2/78a0dfe087d47016f6ab2abef2855069ae9731": "6ce3afce270b0cce8749d0adab94e3a5",
".git/objects/f2/9970ed848c605f02834c5fc1a4698cc30a7c32": "00b8c800e2c91f3f3594ae7eaa097afe",
".git/objects/f3/19eb02e3516d8cf614650790e5b2f733120721": "6691ceb028337139ddb473dee3eb58b3",
".git/objects/f4/04b64dba1b2cdb31c0cd039a7acc466585bccf": "4f8f29c316fd3fd5e0b8808cec5bfd1d",
".git/objects/f6/74df90d8bb3963275dbfdcb79e7d57424ec080": "5af9326c057f3f3c397ff7ffbedf02a1",
".git/objects/f6/772897ed6865559d31a0c4e740c8f9a73b9d0f": "9de8f3030325ed98c43d5905f8959dbe",
".git/objects/f7/373ab08d7758d89bc51320622f373d461e1813": "1ba55eefa173bba7a5ca5d8ff7ed600b",
".git/objects/f7/5d39cf3157a4421dd14bce7d2fac6a122dcfcb": "6c4cf6a552cab5c3315e0e706ec42ef5",
".git/objects/f8/70208a6c3f470336741a631e2e69c21b5cfe71": "08159a97006dc6006713e3838f4638bc",
".git/objects/f9/11076961512ff0cc3db08ef98d01b896bb44ea": "ecb3ab4d042e3b2e93c7ba3504892572",
".git/objects/fb/d854e38e9d353fd68b97c64b4f78343833a297": "6e33ff5c76cf05789d9348bf4bb2da53",
".git/objects/fc/4293ab774442853a89dd26eac75e055e5b28f8": "21a672f473df1498a7cd9aa834a9e267",
".git/ORIG_HEAD": "424e4adba7930748c84db45286e98081",
".git/refs/heads/main": "da2076df245d0102bae7dee55a5ba991",
".git/refs/heads/master": "b99eef66fbcb0c2db843d5ed55ec5cef",
".git/refs/remotes/origin/main": "15246646ff01cada6560cd384f88a123",
".git/refs/remotes/origin/master": "b99eef66fbcb0c2db843d5ed55ec5cef",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "014e5e3e29b9a705ae67286161f95713",
"assets/NOTICES": "8a0d7a280d7aeecd6790101a7c32ca28",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/page/diary/2023-6-12.md": "231495267eb81e461293d2c9edae15cd",
"assets/page/diary/2023-6-16.md": "911b2e93413a3910f503f6f9ef83ca5e",
"assets/page/diary/2023-6-25.md": "412fddc09db09074c4d46f5b1160b7cf",
"assets/page/diary/firstTry.md": "c76993eb97862300f6d958e1725fb0fc",
"assets/page/draw/1.md": "576c45dae0d0fb58bfe7904f7aed2ba0",
"assets/page/work/MarkDownTest.md": "7634f3d127fa93f4da96e59b27809644",
"assets/page/work/null.md": "8c3205cee817fc7c6c407eda926ede7c",
"assets/page/work/RichTextAndSelectText.md": "e2d71a48cdb0e7f610c5e80d3458d976",
"assets/page/worklist/MarkDownTest.md": "d1bce33b43589eda3c50c5720708b230",
"assets/page/worklist/RichTextAndSelectText.md": "fbab74c6ed9c3e2f272f1b513bab1f99",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"debug.cmd": "79d1a161b80d04ddbd9a9192ca65c375",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"git_change.cmd": "be2a84831a1b516218fb87ee41c25a3d",
"icon.ico": "9300936f165f60bb741910cc8d3410a6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "16617b18230ce2c3391226fdda245e31",
"/": "16617b18230ce2c3391226fdda245e31",
"main.dart.js": "4d7bddc22f0dd79ebb4054d8e4d4f7d8",
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
