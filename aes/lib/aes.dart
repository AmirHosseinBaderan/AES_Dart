import 'package:encrypt/encrypt.dart';

void enc(String text, String keyInput) {
  Key key = Key.fromUtf8(keyInput);
  var encrypter = Encrypter(AES(
    key,
    mode: AESMode.ecb,
    padding: 'PKCS7',
  ));
  IV iv = IV.fromSecureRandom(key.length);

  var encrypted = encrypter.encrypt(text, iv: iv);
  var decrypted = encrypter.decrypt(encrypted, iv: iv);

  print(encrypted.base64);
  print(decrypted);
}
