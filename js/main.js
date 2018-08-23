var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

var chars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];

var button = document.querySelector("#generateKey");
var keyDisplay = document.querySelector("#key");

//Generate 5 random characters from chars array and concatenate them
function generateString() {
    var result = "";
    for (var i = 0; i < 5; i++) {
        result += chars[Math.floor(Math.random() * 36)];
    }
    return result;
}

//Generate 3 sets of 5 random characters and concatenate them together
function addRandomStrings() {
    var string = "";
    for (var i = 0; i < 3; i++) {
        if (string === "") {
            string += generateString();
        } else {
            string += "-" + generateString();
        }
    }
    //jQUERY
    // $("#key").text(string);
    keyDisplay.textContent = string;
}

button.addEventListener("click", function() {
    // addRandomStrings();
    encryptKey(document.getElementById('seed').value, document.getElementById('password').value);
});

var strength = {
    0: "Worst &#9785;",
    1: "Bad &#9785;",
    2: "Weak &#9785;",
    3: "Good &#9786;",
    4: "Strong &#9786;"
}

var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
    var val = password.value;
    var result = zxcvbn(val);

    // Update the password strength meter
    meter.value = result.score;

    // Update the text indicator
    if(val !== "") {
        text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
    }
    else {
        text.innerHTML = "";
    }
});

function encryptKey(seed, key) {
    console.log('seed:', seed, 'key:', key);
    // let cipher = createCipher('aes-256-cbc', key)
    // let enc = (cipher.update(seed, 'utf8', 'base64') + cipher.final('base64')).replace(/\//g,'_').replace(/\+/g,'-')
    // console.log('enc:', enc)

    // console.log(CryptoJS);

    // // // // // // // //
    // var textBytes = aesjs.utils.utf8.toBytes(key);
    // console.log('textBytes:', textBytes);
    // // var key_128 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    // //
    // iv = new Uint8Array(16)
    //
    // console.log('iv:', iv);
    // //
    // var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    // console.log('aesCbc:', aesCbc);
    // // // // // // // //

    // var ciphertext = CryptoJS.AES.encrypt('aes-256-cbc', key).toString();
    //
    // console.log('ciphertext:', ciphertext);
    //
    // var encodedString = btoa(ciphertext);
    // console.log('encodedString:', encodedString);
}
