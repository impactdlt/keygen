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
    addRandomStrings();
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
    // let cipher = bAES.createCipher('aes-256-cbc', key)
    // let enc = (cipher.update(seed, 'utf8', 'base64') + cipher.final('base64')).replace(/\//g,'_').replace(/\+/g,'-')
    // console.log('enc:', enc)

    console.log('seed:', seed);
    console.log('key:', key);

    triplesec.encrypt ({
        data:          new triplesec.Buffer(seed),
        key:           new triplesec.Buffer(key),
        progress_hook: function (obj) { /* ... */ }
    }, function(err, buff) {
        if (! err) {
            var ciphertext = buff.toString('hex');
        }
        console.log('buff:', buff);
    });
}
