# Scripts to get help you get your own seed and address and the encrypted key.

The Key generation can be divided into 3 parts:

## SEED
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


## Address
Every SEED can generate address which can be accessed by the unique SEED only.
To generate address use the unique SEED that you must have generated on the last part.

### [Create Address offline on browser](https://impactdlt.github.io/IOTA-Paper-Wallet/)


## Generating Encrypted Key
The encrypted key encrypts the SEED that you generated the address with a master password.
This password is known only to you and no one else. Do NOT share the password with anyone else.

### [Create Encrypted Key](https://github.com/impactdlt/keygen)


**This key can now be configured into the [NFC wallet](https://impactdlt.com/products/iotacoins).**
