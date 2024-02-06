export default function caesarCipher(string, shift = 0) {
  if (typeof string !== "string") return "Not a string.";

  let caesarCipherString = "";
  const regex = /^[!@#$%^&*_=+`~{}'";:/><,?|\.\-\s]+$/;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i).match(regex)) {
      caesarCipherString += string.charAt(i);
    } else {
      let ASCII = string.charCodeAt(i);
      let shiftedASCII;

      if (ASCII >= 48 && ASCII <= 57) {
        shiftedASCII = ((ASCII - 48 + shift) % 26) + 48;
      } else if (ASCII >= 65 && ASCII <= 90) {
        shiftedASCII = ((ASCII - 65 + shift) % 26) + 65;
      } else if (ASCII >= 97 && ASCII <= 122) {
        shiftedASCII = ((ASCII - 97 + shift) % 26) + 97;
      }
      caesarCipherString += String.fromCharCode(shiftedASCII);
    }
  }

  return caesarCipherString;
}
