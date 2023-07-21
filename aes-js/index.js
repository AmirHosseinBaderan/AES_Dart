"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoJS = require("crypto-js");
function enc(text, encKey) {
    var key = CryptoJS.enc.Utf8.parse(encKey);
    var encrypted = CryptoJS.AES.encrypt(text, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
}
function dec(enc, encKey) {
    var key = CryptoJS.enc.Utf8.parse(encKey);
    var decrypted = CryptoJS.AES.decrypt(enc, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
function main() {
    var text = 'amir hossein';
    var key = 'Coffe-lastkey1-1';
    console.log("Text : ".concat(text, " Key : ").concat(key));
    var encrypt = enc(text, key);
    console.log("Enc : ".concat(encrypt));
    var decrypt = dec(encrypt, key);
    console.log("Dec : ".concat(decrypt));
}
(function () { return main(); })();
