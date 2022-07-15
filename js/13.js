//Funciones - Function expression
//la diferencia entre function declaration y expression es que la declaration puede ir antes o despues porque js las registra en la primera vuelta de creacion
//expression no se puede llamar la funcion antes de la declaracion de la variable porque js no registra la variable hasta la 2da vuelta

//sumar()

 const sumar = function(n1 = 0, n2 = 0){
    return n1 + n2
 }

 const resu = sumar(30)
 console.log(resu)

