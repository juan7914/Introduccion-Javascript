/* tipos de datos:
numericos
cadena de texto
booleanos
funciones
arreglos
objetos*/

var numero1= 5;
var numero2= 2;
alert(numero1+numero2);

/* tipos de operadores
asignacion
 matematicos o aritmeticos
 incremento y decremento
 operadores logicos de comparacion
     Negacion
     AND
     OR
*/

// ASIGNACION

var nombre;
    nombre='carlos'

//matematicos o aritmeticos  suma (+), resta(-), multiplicacion(*), divicion(/) y porcentaje(%) example:
var numero1=10;
var numero2=5;
var resultado=(numero1+numero2);
document.write(resultado);
document.write('<br>');

//incremento y decremento  (--), (++) example:
var numero = 5;
var resultado= (--numero)
var resultado2=(++numero)
document.write(resultado);
document.write('<br>');
document.write(resultado2);
document.write('<br>');

/*operadores logicos de comparacion
igual a                         ==
igual en valor y tipo          ===
no iguales                      !=
no iguales en valor y tipo     !==
mayor que                        >
menor que                        <
mayor o igual a que             >=
menor o igual a que             <=  exmaple: devuelve valor booleano*/


//igual a                         ==

var numero3= 5;
var numero4= 5;
var numero5= 10;
var resultado3= numero3 == numero4;//true
var resultado4= numero4 == numero5;//false
document.write(resultado3);
document.write('<br>');
document.write(resultado4);
document.write('<br>');

//igual en valor y tipo          ===
var numero6='10';
var resultado5= numero5 === numero6;
document.write(resultado5);
document.write('<br>');

//no iguales                      !=

var resultado6= numero3 != numero5;// valor booleano false  o true 
document.write(resultado6);
document.write('<br>');

//no iguales en valor y tipo     !==

var resultado7 = numero5 !== numero6;// valor booleano false  o true 
document.write(resultado6);
document.write('<br>');


/* operadores de negacion
!                       Negacion   NIEGA UN VALOR
&&                      AND        PONE DOS CONDICIONALES
||                       OR        UNA U OTRA CONDICIONAL*/

// arreglos o Array:

var meses = ['Enero','Febrero', 'Marzo','Abril','Mayo','junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
document.write(meses[0]+' ');
document.write(meses[1]);
document.write('<br>');
var amigos = [];
    amigos[0] = 'Carlos',
    amigos[1] =  'Alejo',
    amigos[2] = 'Mario';

console.log(amigos);  
document.write(amigos); 
document.write('<br>');

//metodos y propiedades de los Array

var meses = ['Enero','Febrero', 'Marzo','Abril','Mayo','junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

//Metodo length
document.write(meses.length);// este metodo me dice cuantos elementos tiene un arreglo
document.write('<br>');

//Metodo join
var cadenatexto = meses.join('**');
document.write(cadenatexto);
//otra forma es document.write(meses.join('**'));
document.write('<br>');

//Metodo pop y push          pop quita el ultimo elemento de un arreglo  
                         //  push agrega un elemento al final del arreglo
meses.pop();
console.log(meses.pop); 
console.log(meses.push('Diciembre'));

//Metodo shift y unshift     shift quita el primer elemento de un arreglo 
                         //  unshift agrega un elemento antes  del primer elemento de un arreglo
//meses.shift();
//console.log(meses.shift);
meses.unshift('Diciembre');
console.log(meses.unshift); 

//Metodo contac   nos permite concatenar dos arreglos

var dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
var mesesdias = meses.concat(dias);
console.log(mesesdias);

//Metodo sort y Reverse    sort ordena alfabeticamente un arreglo no sirve para numeros
                        // Reverse voltea el arreglo de atras hacia adelante
//meses.sort();
//document.write(meses.sort());
meses.reverse();
console.log(meses); 

//condicionales
var edad = 17;
if (edad>=18){
    document.write('eres mayor de edad');
}else {
    document.write('eres menor de edad');
}
document.write('<br>');
var pais = 'mexico';
/*if(pais == 'mexico'){
    document.write('eres mexicano');
} else if(pais == 'españa'){
    document.write('eres español');
} else{
    document.write('no sabemos de donde eres');
}*/

//otra forma de hacer condicionales asi
switch(pais){
    case 'mexico':
         document.write('eres mexicano');  
         break; 
    case 'españa':
        document.write('eres español');  
        break; 
    default:  
        document.write('no se de donde eres'); 
        break;
}

//ciclo for  estructura:
/*for(iniciacion;  condicion;  actualizacion){
    codigo###
}*/
//recorrer de 0 al 10
document.write('<br>');
for(var i=0; i<10; i++){
    document.write(i);
    document.write('<br>');


//recorrer de 10 al 0    
}
for(var i = 10; i >= 0; i--){
    document.write(i);
    document.write('<br>');
}

//vamos a recorrer un arreglo
var meses = ['Enero','Febrero', 'Marzo','Abril','Mayo','junio','Julio','Agosto',
             'Septiembre','Octubre','Noviembre','Diciembre'];
/*for(var i = 0; i < meses.length; i++){
    document.write(i+1 +'.-' +meses[i]);
    document.write('<br>');
}*/
for(mes in meses){
    document.write(meses[mes]);
    document.write('<br>');
}
//ciclo while  estructura 

//iniciacion   var i=0;
/*while(  condicion; ){
    codigo###
}
 actualizacion  i++;*/ example:
 document.write('<br>');
var i = 0;
while( i < meses.length){
    document.write(i+1 +'.-' +meses[i]);
    document.write('<br>');
    i++;
}
//ciclo para que se ejecute asi sea una solo vez
//ciclo do while  example:
var i = 11;
do {
    console.log(i);
    i++;
}while(i<=10);

//sentencia break example:

for(var i = 0; i < meses.length; i++){
    document.write(meses[i]);
    document.write('<br>');
        if(meses[i]=== 'junio'){
            break;//detiene la ejecucion del arreglo o array como le indiquemos
    }
}    
document.write('fin del ciclo en junio');
document.write('<br>');

//sentencia  continue example:
var meses = ['Enero','Febrero', 'Marzo','Abril','Mayo','junio','Julio','Agosto',
             'Septiembre','Octubre','Noviembre','Diciembre'];

for(var i = 0; i < meses.length; i++){   
    if(meses[i] == 'junio' ){
        continue;
    }   
}
document.write(meses[i]);
document.write('<br>'); 


