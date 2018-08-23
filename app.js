'use strict'

const readline = require('readline')
const bAES = require('browserify-aes')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var seed, key, enc;

const getSeed = () => {
  return new Promise((resolve, reject) => {
    rl.question('Please enter your SEED: ', (answer) => {
      seed = answer
      resolve()
    })
  })
}

const getKey = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter your master password ', (answer) => {
      key = answer
      resolve()
    })
  })
}

const encrypt = () => {
  return new Promise((resolve, reject) => {
      let cipher = bAES.createCipher('aes-256-cbc', key)
      enc = (cipher.update(seed, 'utf8', 'base64') + cipher.final('base64')).replace(/\//g,'_').replace(/\+/g,'-')
      resolve();
  })
}

const main = async () => {
  await getSeed()
  await getKey()
  console.log('seed:', seed, ' | key:', key)
  await encrypt()
  console.log('enc:', enc);
  rl.close()
}

main()
