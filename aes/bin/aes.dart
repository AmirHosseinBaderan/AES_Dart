import 'package:aes/aes.dart';

void main(List<String> arguments) {
  print('hello welcome to AES Encryption from dart');

  var text = "amir hossein";
  var key = "Coffe-lastkey1-1";
  print('Text is : [$text] and key is : [$key]');

  var encText = enc(text, key);
  var decText = dec(encText, key);

  print('Enc : $encText');
  print('Dec : $decText');
}
