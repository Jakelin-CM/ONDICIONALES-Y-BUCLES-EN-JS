let a = prompt("ingrese un numero del año que desea: ")
if(a<0){
    alert("ERROR")
}
else if(a%4 !=0 || (a %100==0 && a%400 !=0)){
    alert("su año no es bisiesto")
}
else {
    alert("su año si es bisiesto")
}