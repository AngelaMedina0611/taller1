let edad = 11
let estatura = 1.10
let discapacidad = false

if (edad <= 12 && estatura >= 1.20 && !discapacidad ){
    console.log('Bienvenidos a la zona infantil')
}
else if(edad > 13  && estatura == 1.40 && !discapacidad){
    console.log('bienvenidos a la zona juvenil')
}
else if(edad >= 18 && estatura >= 1.50 && !discapacidad){
    console.log('Bienvenidos a la zona adulta')
}
else{
    console.log('No tiene acceso al parque')
}