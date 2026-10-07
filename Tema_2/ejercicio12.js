function colorearTriangulo(texto) {
  let textoCopia = texto;
  let textoCopiaIntroduciendo = "";

  while (textoCopia.length > 1) {
    textoCopiaIntroduciendo = "";
    for (let i = 0; i < textoCopia.length - 1; i++) {
      let num1 = 0;
      let num2 = 0;

      switch (textoCopia[i]) {
        case "R":
          num1 = 1;
          break;
        case "G":
          num1 = 2;
          break;
        case "B":
          num1 = 3;
          break;
      }

      switch (textoCopia[i + 1]) {
        case "R":
          num2 = 1;
          break;
        case "G":
          num2 = 2;
          break;
        case "B":
          num2 = 3;
          break;
      }
      let letraAnadir = "";
      switch (num1 + num2) {
        case 2:
          letraAnadir = "R";
          break;
        case 3:
          letraAnadir = "B";
          break;
        case 4:
          letraAnadir = "G";
          break;
        case 5:
          letraAnadir = "R";
          break;
        case 6:
          letraAnadir = "B";
          break;
      }
      textoCopiaIntroduciendo += letraAnadir;
    }
    textoCopia = textoCopiaIntroduciendo;
  }
  return textoCopia;
}
