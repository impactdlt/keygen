# [KEYGEN](https://impactdlt.github.io/keygen/)

[![Build Status](https://travis-ci.org/impactdlt/keygen.svg?branch=master)](https://travis-ci.org/impactdlt/keygen)
<a href="https://david-dm.org/impactdlt/keygen"><img src="https://david-dm.org/impactdlt/keygen.svg" alt="Dependency Status"></a>
[![Coverage Status](https://coveralls.io/repos/github/impactdlt/keygen/badge.svg?branch=master)](https://coveralls.io/github/impactdlt/keygen?branch=master)

This is a command line offline encrypted SEED generator, written in [NodeJs](https://nodejs.org/). 
The instructions below will create an IOTA SEED, then the script app.js will encrypt the SEED with your password and AES256bit encryption. 
Once you have encrypted the SEED, copy the SEED to your configuration page on ImpactDLT for your IOTA coin. 

## SETUP `npm install`

If you don't already have npm. 

## RUN

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

Now, you've a SEED.

### Run this app on your local system `node app.js` or `npm start`

Enter your SEED and Password when asked for. The script will return your encrypted key.

** **Please note the above script is written for unix based system. If you are using windows and faced any issue, feel free to report the issue by clicking [here](https://github.com/impactdlt/keygen/issues/new?template=bug_report.md).**
