import * as CryptoJS from "crypto-js";

function enc(text: string, encKey: string): string {
  const key = CryptoJS.enc.Utf8.parse(encKey);
  const encrypted = CryptoJS.AES.encrypt(text, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

function dec(enc: string, encKey: string): string {
  const key = CryptoJS.enc.Utf8.parse(encKey);
  const decrypted = CryptoJS.AES.decrypt(enc, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}


function main() {
    const text = 'amir hossein';
    const key = 'Coffe-lastkey1-1';

    console.log(`Text : ${text} Key : ${key}`);

    const encrypt = enc(text, key);
    console.log(`Enc : ${encrypt}`);

    const decrypt = dec(encrypt, key);
    console.log(`Dec : ${decrypt}`);
}

(() => main())();