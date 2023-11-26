'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5732c4100d62ba30308a13f1c775062a",
".git/config": "d8d1283cca1bc40cf0c8c6a87870ef52",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "c20196553b5260d78fe45c90015265ce",
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
".git/index": "f58f6916b7d5e87c5bbcfd0a32902494",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7288121815b12673a8913a97aba770d1",
".git/logs/refs/heads/debug": "cc24d0d59eec122d603ee82982eb147e",
".git/logs/refs/heads/master": "77214ef2fe5fd9b09cd5482a2dff73e1",
".git/logs/refs/remotes/origin/debug": "4d0e385e3a5ba2cf9c52ef149c53d796",
".git/logs/refs/remotes/origin/HEAD": "22a543cbd4c298ad2f523c4ac480b129",
".git/logs/refs/remotes/origin/master": "a3811467a69a4de9293ae24767339362",
".git/objects/00/4d9b0865828eb2d6bcff1cb55f7ab592fbb025": "692080bd27fec6a2b200a90e6aadabf7",
".git/objects/02/d44cfda41d9f68c625989e39136104f59ccf0d": "d50be8cd074576e180e02bacb88d71e0",
".git/objects/04/6c8312de8628bebbfbaff2e455a49214ca1ba1": "def0c2d884812cc9f0a3adfb5cb6a065",
".git/objects/04/7941f7463572ec452d54c483f3e57c0739c889": "b2a11c1b561e3846ef9ef0edbcf9ae62",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/bae2149004ce4afec27a41b0727a03ccbae0a4": "4ae75178b12ccd816bf0cd07b0db9cd0",
".git/objects/06/259dce802174983f419654576d077223b9b87b": "2c72d35a577cd05083b48263302fbf2d",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/7050e908c6a0580919d8b1a8f7f49d3bda88b5": "6a82907ea8c1e1bd1f703dbda6ef29ce",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/10/5ce2da2d6447d11dfe32bfb846c3d5b199fc99": "52406f7269ec07e02bb4758835db462e",
".git/objects/11/8e36f884dcefba0756e50f222b74cafc28311c": "6b6e831e87d8bd24912c48984d44a032",
".git/objects/15/aa3a2f631dffa2c0a0dc81a3106ede51f04a7e": "2a9c8124bbba9f1ff730ef19a3370fff",
".git/objects/16/3d40ef6ba8e7734e5980224482ddbd25137cf9": "7ab360c6243cd6c4f1771c0e4d5ca15d",
".git/objects/17/5468e9e37c781d06c4b532a6166a003d3d5eee": "50467c5be8bd3db53343836b430dfd1e",
".git/objects/1a/d792b22e885caaa8c247562925167fcacbf06f": "7be0706b751e0f353bde22da6c312ab5",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1c/f75a1a186c7ef1d59ceb2c0a6cb04d513af827": "dd7ab1ef7586cadb5dfd4d2fd4d76d19",
".git/objects/1d/3c57e1575c137f86a087f0e3f4e8ee960042c7": "a88778afe7b46dd66a9e1520df45105f",
".git/objects/1e/6e51d685f01ba214cc320b683611f0f7ea0a0c": "998808de04bf9c115f1e0683ebfc9a7b",
".git/objects/1e/8c0070e921b95ed321c00f1c9b606661eb55e3": "56a89406175f1caaeaa7e9037337e1c7",
".git/objects/1e/a5ef0f76f6c6c9f7392ece7acadc4ee7e423c5": "3ce5c13fc5f7e4ebae7ac1314ed600ee",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/68d49992b63a2161baa3577e6b097748806f40": "0c7bca094f8e399ac5e18f484ae19570",
".git/objects/24/d2ca60cc2e0ae6ca028a10778f68c385c9d6ad": "b2952dc414cada4a910a8d643f491dc4",
".git/objects/25/d4f73decde2b71ef679928b2e5653899a2c884": "7d5ecda01431c8ca5b6696a61605c5e0",
".git/objects/29/5989c2e6d855a79a61bbf621c52008379ab965": "8e6bc39bbfd3e380ecdd27e7c9d7892d",
".git/objects/2b/7652c1ca3d786423427d5ca8c71d30dedfa09c": "0013f09d8fb9d8511e13a232683c2108",
".git/objects/30/4b7dbbd3b736424f619729235abeaafe7c56dd": "7787a3c3908f39597763a25fa97e4007",
".git/objects/31/52528d78b789720db921aff45fce6afaee198d": "dab840847223413000c17de6a9eef99f",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/251761491bb83f06557be0367bee7378015916": "dde50c5ec4fd500e9008545decccf047",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3e/468b40792844ecc8d0af070d4ea8fbf00f1b41": "cba4723280dfea4c91f8393465cee835",
".git/objects/3e/8ebf94eaeac2c57f6a2b40282ed8c866782b73": "67ac18b8819bfc1ad4dd493d6604b790",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/f969c4ac9603042befea2d72663d169de53747": "f81baeec9ff2ffb9dbda0f4448867651",
".git/objects/49/80dad237ca8e188f592cc5ede2dcd7ded895f6": "7bd9c81bc6e1ecee9551e78afba652f9",
".git/objects/4a/8584f13e94649304827673712df124192e742e": "eaaff5e12b4140dac73bde64c7437144",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/842b4cbbbdad623fb6fdf6ee4a2c3fa48c4bfb": "a0a085b719c859bb8d5d4014587e4cad",
".git/objects/51/8e791e16f58836d518f5e88570133ee423986d": "c4c22159656cb11d69aff4107de48190",
".git/objects/51/e75d8b422d9046653b13d30347d71e1d769c77": "342e76dcef07dcf23428872e7ba5f263",
".git/objects/52/c62ec976fc55fdaef766b4f83a1950644d4c8d": "a0fb9f1a830746825d60120d5f2e70f7",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/2ffca4244895023e8e630c0a4760bce449b8a2": "c67cf107783348648841ad8d71f0cc48",
".git/objects/55/fd0c80a0299b85c8613ee95fbfa31e9c2cbeb2": "995282dc51d39545aeb729a0fbf4198e",
".git/objects/56/e405d7c32b5a5d36576cd8c08e877b68546b42": "523dedf5171c86650b4752bb0f650337",
".git/objects/59/fa5cddc36bc9ea2f772ed34cb772ca05fed7d9": "0f1c150457a3b0d39d6c2d7078bbde3d",
".git/objects/5a/99a797604aafcb794cbc87833bb981f3c54333": "ad2d770b22dda1b8e6d456469fe49e26",
".git/objects/5f/11d882500a24bb1b8395b3b98de139ff5eaac1": "133081d21fb78c47e1371131c96bf01b",
".git/objects/61/9bef82749b7d1cccb29b6bf61230dee81163a1": "15224a038fe32f6d4e1b7452f10556e4",
".git/objects/65/4938909940d2a1764fb4b6c9632d26a01f667d": "431946f0a5cff9d64c5a27fc7a2b0b6d",
".git/objects/66/4cf911923daec8400be0997612197536717806": "036b1875980eaf1e6c05232e809e3977",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/ebf28c61fdd9a4bfd01c2a17f9ef4e124650c2": "d730c43ebb2dcfb1be5e294d8a90b84b",
".git/objects/6d/4d0251edca45680d8e9e5a217490e7846c7cd6": "4d8f906ffbc5acb9b1196b50cee874be",
".git/objects/6d/93b67f32ab2003c60a9883f94f5c43f6958bbe": "89ce77dedd22aa39c9e52f1c888967d3",
".git/objects/6d/b9b089ce3ac5443a4401b4e25ea4ca4e47c746": "24b17ab0e75b65ae3683dca5ee0120e1",
".git/objects/70/9bb489321a75a308de2931904b9a8b0939adc8": "23804e08264f2eb174997e9a230bfccd",
".git/objects/72/9e5be559bfa3d052fa19baf7f5de23b36e7d13": "41c10fe61fbce5df8cb848ce0e08bbbb",
".git/objects/73/01c73848a05a040b811b0a300eb4c9375a5c67": "a6fda007ba2f59c5f6ad5dc4d49ed4c0",
".git/objects/74/dc796937a8b1b4985b807244febe11ee3d4873": "f16632b311363d15883cff58a3a91e13",
".git/objects/77/2d62f4193f0426214e63b258174af22aae6989": "94dc5940a2afa8105d3afd570e05ae22",
".git/objects/7d/0a3ef4e18ff90ae00d6fa3b0fdac3e8a5c6b70": "e57f07383aa9949a6175335fd2a20fdc",
".git/objects/80/ccac506126098c41546c507e322c1b2c43006d": "4cec61dfdb6a05dd24c2395dab9af23d",
".git/objects/81/8325f7f87d061695fa581b12d5f2d967d813bc": "4665bb0300d7e73b1616c98b64987ba8",
".git/objects/83/7bed13d43cdfe8abbf4afd7a1ca06e4ddb6a04": "172beadd41ddcbd36a857c56f3aa5a66",
".git/objects/83/84472325e74e2f332d5db6e19190d4c58cd614": "fa6514b58aa1e4a9b647a625323e3ef9",
".git/objects/83/b9509c86a74b07c83364e480a3888bef4b4116": "d97b798b0274862883c86714a64c2e05",
".git/objects/84/47359bcc15057598a9de2b2562ad87008ffd6f": "5bcdf787b48d55ca204e5ca1eed963d8",
".git/objects/84/d32a5a1182367b0b61fec7974f31d02766f069": "41df972563c7bc8404ec479399912273",
".git/objects/84/f56ce3468525014b0c9b9287865c742d34cbb9": "bb173aa9fc7544ea23674da52ad823a3",
".git/objects/88/a6beb924c0a80be69ad35323b15a4ac7a2f4ff": "88a2e186125b4335f3701e03a0bfe797",
".git/objects/89/39a6b6be6e86280e50bab2432d2b29c9a3fa92": "0cc255d257ac64861d1d3fc7799e0a2a",
".git/objects/89/4d47f1cdf03d942786dba6e2e0cf64459773a5": "d1b1b265a9aa0cbdcb397fc0a9e25410",
".git/objects/8a/a81587e4fc52f6bee205fd58b83038c2f1d0b5": "30c1701be752a8fd9b2b2d243225d8a5",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/384e0e5c3b691653e6884aa77e83b8c5d11996": "8d1e9fc317e19a6fd681b8e2de68f73b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/29f516d9dfada1929e96b648fbd326ff5be553": "9d3b65fa31d5fc83dad2c7bd7b277806",
".git/objects/94/28e5d908769f6038938715f4433c4a893d8787": "e8596fa0925344deb0b90744add1bef0",
".git/objects/94/cc44311bcf8b71960080330a0ab9813d4ebf53": "833f641df3371624e8b38d2e709ab2cc",
".git/objects/99/7eb960246f790f65ca516590b5c7628e67a341": "030f1a393bce0e5ece4b329197a735f2",
".git/objects/9b/16e209a08c56b485def5847cfd7cb8c0a1d54d": "a4b77dd5b7743384398fdd40dc4faa36",
".git/objects/9b/a21a58ddafd1ee1ec5c0e9650999a73869d7cc": "c8f71b59b5aa8b9cad67560cf083e625",
".git/objects/9d/8b3e90df3668b647d8cef42b42cfbebcf73c38": "2b8c0b760b0bdf7aabd9134f2af46dca",
".git/objects/9f/a0eb4b90e49776fcb06cf0eefc1dd9e44d21e2": "e95c376df088d6661bc5bd697d8cf006",
".git/objects/a1/1c16336efb38923d3af5f5c8031755fea0df1b": "d8108d2ee85ed10ddb8a4d7cf437b9a3",
".git/objects/a3/e5b019eb6202a818a5365be1b5a850e7ad137c": "479864539af3590b4953d9f3e37e26e1",
".git/objects/a4/556abbd73dd5e374267e56af28577ae84094e6": "6fed800565525f779e2e2194c3ae8bd2",
".git/objects/a4/b39f4f3f1c3cf2e9987a213e95137ec66265ef": "ebcc4859cbe4342c90082593236737fb",
".git/objects/a5/1504c088309dfd4ae6e54f0f9ad967b0e9fe31": "cbd85d873d088d5c6c161f88a33bc6c2",
".git/objects/ac/460416e9e8c1fd7d01d8c7c37d932397fef59d": "d0301a987438ee54c10c127bbca764db",
".git/objects/ae/73b5569547dbbe0e879f8622c9d35329709c21": "ac2f4d5c3f11d33b3d3267e8077a5448",
".git/objects/b0/4d47d6bed8deb29dceb0848abdc69f0ed91a79": "a610c3d503f5ab3de86ee5cb02c5d053",
".git/objects/b0/a7e98789316b359bad34a10d43323f7f90322c": "aa0958e6d65ea3e4d949852012b69dd2",
".git/objects/b2/8f0d2cbc684c3abaa2d9ccccc1d88e52f07632": "356a6cfc919597a3f939c2a0486d73dc",
".git/objects/b5/9851f12aa9f1d997efb255a264f5221b5b9f3b": "87ad5c1afd3daff5aff66089afad23e6",
".git/objects/b6/c868d276697d6e7c12a008c50284d7a70267d0": "88269d7dbb1fd7c7c4628082f1044a73",
".git/objects/b6/ff1b53700cbc0eb1b4c962680cd198b0946387": "3aed7fc0bc5df8cb0ab88ae7414b8e14",
".git/objects/b7/54246de184c2b4c7c4ea0302c472c5a878e54e": "0c10a6b24ec6b53ef7e7172e75fd2232",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/4153ba32e2af959ffbc4a5bc87d9b290748912": "ab2054530683a33edcb35bbeee97fd38",
".git/objects/bc/5f087f868a8f0e040da0993525da0dfbe05c4e": "51bfe569d75af1fed26f80b986932114",
".git/objects/bc/79457fc8baeb7347adf384bd61c8e868736e9a": "81bf711616efb3c1d7cb35dcad2a1996",
".git/objects/bf/5db1cfe7c82091d476021c2471811e7b71afaa": "411e7b770a56c049f6b077c9dcb44a08",
".git/objects/bf/634400bd4fef198fd4ec5bb3891bd6cb3fcef0": "778ccdd392933114bd17b653f1c34bf4",
".git/objects/bf/ffa3c0d7b2ce3cc89946984ffee57f703add2d": "4d5ed0e11bcaa8f898de3a2d5574f603",
".git/objects/c0/cd1f3f2f5b9dc653bd53645e94b005040b2be6": "8938777788d8311064898fe9dcb1975c",
".git/objects/c0/ce40265f4a265313d78b3b4338e3085247ba8f": "62f9e23fb3f609b69ee37532697ce630",
".git/objects/c0/e4cff0675079b6b1dc18369c4aba9fefd8ac2e": "ab575648557002046d86e6bd724fffb8",
".git/objects/c2/ab7db8e5deefff05c6c81476a9b143fb19ed97": "0cf68a1417345fe264f7acb4ad91f09a",
".git/objects/c3/38caead0b47bf531358879b33116573ed19a79": "dfa662c0ad68be8bdbca0814921bfed6",
".git/objects/c4/1edfbc8ae6268d33628289d13fc0782830b74b": "62b9ea8c43b21ce52e6d02f8d323983c",
".git/objects/c6/31c726e0033416538763f8cd82acc127d4e075": "ad1e5a35cc49a8b7c388aec28e2fc149",
".git/objects/c9/11019a81fcdf29f7d8c41ec8ccbfc9a08b3c56": "65e292d32001c6d475f317831940adcb",
".git/objects/c9/f8dc25b37e8b53a0e3eb9cab23d13a562e7bfe": "da7870e132ec9da06f1648711c9cc5bf",
".git/objects/ca/617402be5e47bbbc6a8ef3507ba4fe0263176d": "3148c1b05e9eb7800d41c08849a9f8c7",
".git/objects/ca/66fbf57dced1a8f9748fe32a02df602fd75704": "c5ae5b7a6059f384fa0a86c4c8ab5329",
".git/objects/d0/876a78d06ac03b5d78c8dcdb95570281c6f1d6": "10192b2673680d54d2540c6c32dc7b9b",
".git/objects/d1/3ac93d3d4784ba9e17e6fe2192b0b7655de6c0": "3a9b1305c88c32757584bd11a019a285",
".git/objects/d2/2a11fa69f938ff8b128240cd16b7a4c7b7202c": "24f45a62f6634b8946b24990d7580957",
".git/objects/d3/0acf6949a7b56ca0c5266627153a99eed58618": "31c4a86ab1f59e84d6b1cd442c67de0f",
".git/objects/d3/d091cde7ac57f828c2ace59f80b562d3a7b28e": "9b589337605f1b6412cd81448d91db5d",
".git/objects/d4/dd85816fa80b39f767b0e78862205719a5e2bd": "dd5c6483e671490c25ba16da58f8a3f9",
".git/objects/d5/a48c17be9bb6633d29f1b70c91927a1469818b": "2f6388676fda1fd0ee0ef76d7f3d6727",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/ba2d7236a98b59768146fd81c8e1f28a3c02a7": "0b872417d3fac39eac81a988f5a3c546",
".git/objects/d8/1bdbe9234e818e253bf7bed3f9b92a0a2d0077": "f4fdf11b4be26fef43218a167437c943",
".git/objects/d9/60d11946a68609f84168fb828ed75ea6629f38": "84daf38af22cc7fe478efe33b902dde9",
".git/objects/d9/d1657433f861f9defca5bfa40cf676419e935b": "9df7613441e4ff4fe9f4fe048bdbe35f",
".git/objects/db/375131693cd2744a14c993193e27d335d7db95": "c0da77873172f9fea5194139f9b326de",
".git/objects/dc/e16bb5c4cd60687d13484484700d55b5d11b0b": "9ef1107f30e1621c24486fdd43e4893b",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/fc69789bd60895d2df5c29e477e6706b32a584": "e6574b6d396aacbcaf63f261425dad2b",
".git/objects/e0/b9adddc9f3d48848d5069b6247ed143560ca98": "1852a393ff15713dc2c2f214a575d7c3",
".git/objects/e1/7ea60289f8fa2df8df1c3a3a3e42cf9c97c536": "b3ba4a26eeed01e856bc125610f8abfd",
".git/objects/e3/343ad7fbe98f0b2e7f0b3efcb7ebc1f0492ac9": "f99de43aeea1092ab6f75ffd4dc34779",
".git/objects/e4/bd50fa787893519bc98a2b9aadeb19e48c550c": "8410fc0ab2b4155b09d92f8243e20442",
".git/objects/e5/3d049e70cc43fcb26d3d591c7f42f574b8091f": "38fe340adf8d92f135a066d36f7df96a",
".git/objects/e5/fe1dc5665a4b0365c90416edbfc4e48752fd9c": "8e579f6150d100b05477bb4252cefef8",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/efc5c6264b34935937022760f79017936f6558": "14aabc236ff85104f3266d70de927a8e",
".git/objects/ea/3b6b31e6c812f62db3be3db9a852d639d9725e": "72331258db9ea485c97ee6534f7cbfa3",
".git/objects/ea/c935bbe0dcf0bd002711baee5bf0453ada2c37": "e1656e63daaeb27ba07295d870b3ec73",
".git/objects/eb/ee846d1aad7c57b1e5d37089ca4bc479913a74": "011d2dc8f1619ff5e75a54eb44fb6f22",
".git/objects/ee/f7c3e6431ab00ef27eace538bbd0c594a87393": "822a23cde7d13a7c026c3c1cd4798ffc",
".git/objects/f1/1bc5c3dbeb797c6b4de7b3143aa228d89cb5ca": "b299623688cc7fc191ab6cb6117ad21a",
".git/objects/f5/10a2e72c3964147567b55439a3be15fd58dc02": "7c72b423dcdd1df147d9bde762cedf7d",
".git/objects/f5/908c09135a7b3ca604a5f55876cbfe39fa8220": "46471befba576cf5a2fab52be29d7e63",
".git/objects/f6/592664780dae203c2435ccab639a67764ced6d": "c211e24c481dabf02c5e5d8247044b51",
".git/objects/f9/6dd1c78e3f84cf3124e90857240f66beb43dfc": "c546bfcf011131b3198bd5fe06b8432a",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/007f515083d21994a0e9d17e5e7f20556357a6": "499d29a5d0f3d6527817266ac604915b",
".git/objects/fb/f7e743da84287b303f0c6f20859aad24db775f": "1b680d271436e50163e8c92533318ccb",
".git/objects/fc/6054f69dd10b4fe84f362329818e4420490d72": "165b78a510ffd96908030b84afa6b3d7",
".git/objects/fd/0482b73bc2589243b95f437458c43e858b354c": "cf457c3b44056892a24fa60148082fb4",
".git/objects/fe/7113c7eeef5ca48bdad33f003fbb010f886562": "92bb867654b395765bff7250c02db4e7",
".git/objects/fe/8e987727bf3738a305f22fefaf22f1b499948e": "2aea344d7b77f29f49a6cb1458f2ca02",
".git/objects/ff/6a2b1c906e6c676c554b906685b6401f60366d": "5774aef6f7d71dae6c81d8e2720f1c24",
".git/objects/pack/pack-e72b88f16b43fd8d594c2fa60f1dc0ef62950bbb.idx": "2df454767182cc5f00604f190825ead4",
".git/objects/pack/pack-e72b88f16b43fd8d594c2fa60f1dc0ef62950bbb.pack": "6cbdac912dccf6d126ce53d510bef1a9",
".git/packed-refs": "bba81fa9d964a5568e63e989407b3626",
".git/refs/heads/debug": "7f95c2d04eb1bc589a9d6b30eb736248",
".git/refs/heads/master": "99857e9a5ef6b50b75e041627ab25c95",
".git/refs/remotes/origin/debug": "7f95c2d04eb1bc589a9d6b30eb736248",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "99857e9a5ef6b50b75e041627ab25c95",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
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
"assets/page/work/CompilationNote1.md": "a1b8286976286f2f680e3d4b9feda7db",
"assets/page/work/cython1.md": "75143eedccbafc53a0e9ef58c87f1b42",
"assets/page/work/cython2.md": "9e2ccb8cc71543230e906c8e45553eb5",
"assets/page/work/cython3.md": "e3facd48ad651cd88650f5605e23884f",
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
"git_change.cmd": "280412ea462fe63da5cdfa56fd0bfb91",
"icon.ico": "9300936f165f60bb741910cc8d3410a6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c24f7639e53d3ca0db8fb0ce1a4359cb",
"/": "c24f7639e53d3ca0db8fb0ce1a4359cb",
"main.dart.js": "87adb0a00589074bc603248a420087cb",
"manifest.json": "420abf8164e6fb7f51ef3107860b6a74",
"README.md": "c396766a6ab9dcc2d7a8fac7dea56eac",
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
