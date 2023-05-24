// The resultant values after each character of the password is added to 0xCAFE
var resultant_values = [51999, 52046, 52030, 52081, 52081, 52085, 52014, 52080, 52034];

var password = "";
for (var i = 0; i < resultant_values.length; i++) {
    // Subtract 0xCAFE from each value to get the ASCII code of the character
    var ascii_code = resultant_values[i] - 0xCAFE;

    // Convert the ASCII code to the character and add it to the password string
    password += String.fromCharCode(ascii_code);
}

console.log(password);
