// metodo length exmaple:
var nombre = 'Juan Carlos';
var numeroCaracteres = nombre.length;
console.log(nombre + ' tiene '+ numeroCaracteres + ' caracteres ' + 'Metodo length');

//metodo substring exmple:

var nombre = 'Juan Carlos';
var segundoNombre = nombre.substring(5, 11);
console.log(segundoNombre  + ' metodo substring(5, 11)');// los digitos=(son los caracteres),
                                                        // que yo señale es lo que se va mostr

//metodo substr exmple: es lo mismo que el anterior pero se cuenta diferente ejemplo 
//substring (5 ,11) cuenta seguido los caracteres del nombre desde le espacio 5,6,7,8,9,10,11
//pero el substr(5, 6) cuenta desde uno los caracteres del nombre quequiero que se muestre 5,1,2,3,4,5,6

var nombre = 'Juan Carlos';
var segundoNombre = nombre.substr(5, 6);
console.log(segundoNombre  + ' metodo substr(5, 6)');

// metodo replace example: este metodo tiene dos parametros para remplazar 
// "la cadena de texto que indique por la que quiero colocar"
var nombre = 'Juan Carlos';
var nuevoNombre = nombre.replace('Carlos','Murillito');
console.log(nuevoNombre  + ' metodo replace(Carlos, Murillito)');

// metodo toUpperCase(): pasar a MAYUSCULA mi cadena de texto o nombre exmaple:
var nombre = 'Juan Carlos';
console.log(nombre.toUpperCase()+ ' metodo toUpperCase(MAYUSCULA)');

// metodo toLowerCase(): pasar a minuscula mi cadena de texto o nombre exmaple:
var nombre = 'Juan Carlos';
console.log(nombre.toLowerCase()+ ' metodo toLowerCase(minuscula)');

// metodo indexOf(); busca la letraque le ponemos en el parametro de izquierda a derecha
// osea de principio a fin example.
var nombre = 'Juan Carlos';
console.log(nombre.indexOf('a')+ ' metodo indexOf()');

// metodo lastIndexOf(); busca la letra que le ponemos en el parametro de  derecha A izquierda 
// osea de fin a principio  example.

var nombre = 'Juan Carlos';
console.log(nombre.lastIndexOf('a')+ ' metodo lastIndexOf()');









