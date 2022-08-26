const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    let reversedString = string.split("").reverse().join("");
    return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
