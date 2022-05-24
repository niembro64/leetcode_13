var romanToInt = function (s) {
    var sum = 0;
    // var ssymbol = ["M", "D", "C", "L", "X", "V", "I"];
    // var svalue = [1000, 500, 100, 50, 10, 5, 1];

    var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var symbol = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];

    for (var i = 0; i < symbol.length; i++) {
        while (symbol[i] === s[0] || symbol[i] === s[0] + s[1]) {
            // console.log(s);
            s = s.substr(symbol[i].length);
            sum += value[i]
        }
    }

    return sum;
};

var a = ["MCMXCIV", "LVIII", "III", "IV", "IX"];
// var a = [2001, 1990, 1899, 39];

for (var i = 0; i < a.length; i++) {
    console.log(a[i])
    console.log(romanToInt(a[i]));
    console.log("---------")
}
