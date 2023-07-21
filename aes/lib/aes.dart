import 'package:encrypt/encrypt.dart';

String enc(String text, String encKey) {
  Key key = Key.fromUtf8(encKey);
  var encrypter = Encrypter(AES(
    key,
    mode: AESMode.ecb,
    padding: 'PKCS7',
  ));
  IV iv = IV.fromSecureRandom(key.length);

  var encrypted = encrypter.encrypt(text, iv: iv);
  return encrypted.base64;
}

String dec(String enc, String encKey) {
  Key key = Key.fromUtf8(encKey);
  var decryptor = Encrypter(AES(
    key,
    mode: AESMode.ecb,
    padding: 'PKCS7',
  ));
  IV iv = IV.fromSecureRandom(key.length);

  return decryptor.decrypt64(enc, iv: iv);
}
