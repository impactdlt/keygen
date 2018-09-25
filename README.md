# [KEYGEN](https://impactdlt.github.io/keygen/)

[![Build Status](https://travis-ci.org/impactdlt/keygen.svg?branch=master)](https://travis-ci.org/impactdlt/keygen)
<a href="https://david-dm.org/impactdlt/keygen"><img src="https://david-dm.org/impactdlt/keygen.svg" alt="Dependency Status"></a>
[![Coverage Status](https://coveralls.io/repos/github/impactdlt/keygen/badge.svg?branch=master)](https://coveralls.io/github/impactdlt/keygen?branch=master)

# Manual Configuration of IOTA Coin NFC Wallet
## www.ImpactDLT.com
## These instructions will create an IOTA deposit address, and encrypt your IOTA SEED.
### Everything is completed on your system, please make sure it is secure. 
This is a offline command line script written in [NodeJs](https://nodejs.org/).

The instructions will help to generate an IOTA deposit address using your SEED, and then encrypt the IOTA SEED.

This process requires you to have either NodeJS installed or a Linux/MacOsX system. 

Follow the instructions below to run the script.

## Step 1: Generate IOTA Deposit Address using your SEED
### If you don't have a SEED, follow link below and click "Generate SEED"
### [Create IOTA Deposit Address offline on browser](https://impactdlt.github.io/IOTA-Paper-Wallet/)
This tool will create an IOTA Deposit Address using the IOTA SEED and can also create a SEED. 

Copy and paste IOTA deposit address to ImpactDLT Coin Configuration Page. 

Copy IOTA SEED to be used in step 2. 

## Step 2: Encrypting the SEED
This script will encrypt your IOTA SEED with a master password and AES256bit encryption.

This password is known only to you and no one else.

### Download Repository to Local Disk
Open command prompt (if using NodeJS: "node.js command prompt")

Navigate to folder that holds the repository. 

Unzip file if you downloaded the file as a zip file. 

### Setup: `npm install` to install dependencies for app.js script

### Run: `node app.js` or `npm start` to run script.

Enter your SEED (same one as Step 1) and Password when prompted. 

The script will return your encrypted SEED.

Copy encrypted SEED to ImpactDLT Coin Configuration Page.

Be sure to copy the ENCRYPTED SEED and the corresponding IOTA DEPOSIT ADDRESS to configuration page. 

** **Please note the above script is written for unix based system. If you are using windows you must download NodeJS and use nodejs command prompt. If you have any issue, feel free to report the issue by clicking [here](https://github.com/impactdlt/keygen/issues/new?template=bug_report.md).**
