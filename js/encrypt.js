const bAES = require('browserify-aes')
let key = 'qwerty'
let seed = 'IMSQQMKIFQ9NSGAKXETHWZONAOWLEMSOBNSSWCI9TEXSYCBNWNNIHGEQ9GMMJBTOBEZCVMWWDNMAZFEWS'

let cipher = bAES.createCipher('aes-256-cbc', key)
let enc = (cipher.update(seed, 'utf8', 'base64') + cipher.final('base64')).replace(/\//g,'_').replace(/\+/g,'-')

console.log('enc:', enc);
