import 'package:aes/aes.dart';

void main(List<String> arguments) {
  print('hello welcome to AES Encryption from dart');

  var text = "amir hossein";
  var key = "first-lastkey1-1";
  print('Text is : [$text] and key is : [$key]');

  enc(text, key);
}
