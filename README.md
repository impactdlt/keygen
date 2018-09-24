# [KEYGEN](https://impactdlt.github.io/keygen/)

[![Build Status](https://travis-ci.org/impactdlt/keygen.svg?branch=master)](https://travis-ci.org/impactdlt/keygen)
<a href="https://david-dm.org/impactdlt/keygen"><img src="https://david-dm.org/impactdlt/keygen.svg" alt="Dependency Status"></a>
[![Coverage Status](https://coveralls.io/repos/github/impactdlt/keygen/badge.svg?branch=master)](https://coveralls.io/github/impactdlt/keygen?branch=master)

## Manual IOTA SEED generation, IOTA deposit address, and encryption for IOTA NFC Wallet Coin
### Each coin needs an Encrypted SEED and a corresponding IOTA Deposit Address. 
This is a offline command line script written in [NodeJs](https://nodejs.org/).
The instructions will help to generate an IOTA SEED, then generate an IOTA deposit address using the SEED, and lastly encrypt SEED.
This process requires you to have either NodeJS installed or a Linux/MacOsX system. 
Follow the instructions below to run the script.


## Step 1: Generate IOTA SEED (skip if you already have one)
You must generate a random 81 character seed using only A-Z and the number 9. It is imperative that your seed be an 81 character random assortment of A-Z and 9.

### Create SEED on Linux Terminal
```
cat /dev/urandom |tr -dc A-Z9|head -c${1:-81}
```

### Create SEED on Mac OsX Terminal
```
cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1
```

### [Create SEED offline on browser](https://impactdlt.github.io/seedgen/)

Please keep the IOTA SEED private, if someone else obtains your SEED,  they can access your funds. 
You will need to use this SEED to generate deposit address and for the encryption process. 


## Step 2: Generate IOTA Deposit Address
Every SEED can generate a deposit address which corresponds to that SEED.
Each IOTA coin wallet needs an encrypted SEED and it's corresponding IOTA deposit address.
Do not mix up different SEEDs with different deposit addresses. 

### [Create Address offline on browser](https://impactdlt.github.io/IOTA-Paper-Wallet/)
This tool will create an IOTA Deposit Address using the IOTA SEED. 
Copy and paste IOTA deposit address to ImpactDLT Coin Configuration Page. 


## Step 3: Encrypting the SEED
This script will encrypt your IOTA SEED with a master password and AES256bit encryption.
This password is known only to you and no one else.

### Download Repository to Local Disk
Open command prompt (if using NodeJS: "node.js command prompt")
Navigate to folder that holds the repository. 

### Setup: `npm install` to install dependencies for app.js script

### Run: `node app.js` or `npm start` to run script.

Enter your SEED and Password when asked for. The script will return your encrypted SEED.
Copy encrypted SEED to ImpactDLT Coin Configuration Page.
Be sure to copy the ENCRYPTED SEED and the corresponding IOTA DEPOSIT ADDRESS to configuration page. 

** **Please note the above script is written for unix based system. If you are using windows and faced any issue, feel free to report the issue by clicking [here](https://github.com/impactdlt/keygen/issues/new?template=bug_report.md).**
