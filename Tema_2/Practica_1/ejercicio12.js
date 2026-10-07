function colorearTriangulo(texto) {
  let textoCopia = texto; //Copia del texto para no alterar el original.
  let textoCopiaIntroduciendo = ""; //Texto que se ira preparando para luego introducirse en el textoCopia.

  while (textoCopia.length > 1) {
    textoCopiaIntroduciendo = ""; //Reseteo de la introduccion.
    for (let i = 0; i < textoCopia.length - 1; i++) {
      let num1 = 0; //Reseteo de los numeros que se sumaran para comprobar si poner R, G o B.
      let num2 = 0;

      switch (textoCopia[i]) { //Conversion de la letra a numero para facilitar que letra sacar luego.
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
      let letraAnadir = ""; //Letra que luego se añadira al textoCopiaIntroducir.
      switch (num1 + num2) { //Debido a que R y R es igual 1+1, 2 que seria el resultado, daria R, es la forma de sacar por medio de numeros que letra seria el conjunto de 2 letras.
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
      textoCopiaIntroduciendo += letraAnadir; //Se introduce la letra en textoCopiaIntroduciendo.
    }
    textoCopia = textoCopiaIntroduciendo; //Se introduce al textoCopia el nuevo conjunto de letras.
  }
  return textoCopia;
}
