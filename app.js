'use strict'

const readline = require('readline')
const bAES = require('browserify-aes')
var figlet = require('figlet')

const rl = readline.createInterface({input: process.stdin, output: process.stdout})

var seed, key, enc;

const createRandomSeed = () => {
    return new Promise((resolve) => {
        let seed = new Array(81).fill(0x0000)
        for (var i = 0; i < 81; ++i) {
            seed[i] = s_rand(0,26)
        }
        Promise.each(seed, (value, index, length) => {
            seed[index] =  value === 26 ? 0x0039 : 0x0041 + value
        }).then(() => {
            assert.deepEqual(seed.length, 81)
            seed = String.fromCharCode.apply(this, seed)
            resolve(seed)
        })
    })
}

const getSeed = () => {
    return new Promise((resolve, reject) => {
        rl.question('Please enter your SEED: ', (answer) => {
            resolve(answer)
        })
    })
}

const getKey = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter your master password ', (answer) => {
            resolve(answer)
        })
    })
}

const encrypt = () => {
    return new Promise((resolve, reject) => {
        let cipher = bAES.createCipher('aes-256-cbc', key)
        enc = (cipher.update(seed, 'utf8', 'base64') + cipher.final('base64')).replace(/\//g, '_').replace(/\+/g, '-')
        resolve();
    })
}

const main = async () => {
    console.log(figlet.textSync('ImpactDLT', {font: 'train'}), '\n');
    seed = await getSeed()
    if (seed.length < 1) {
        seed = await createRandomSeed()
    }
    key = await getKey()
    console.log('seed:', seed, ' | key:', key)
    await encrypt()
    console.log('enc:', enc);
    rl.close()
}

main()
