let temperatura = 19
let nivelRio = 39
let humSuelo = 34

if (temperatura > 40 && nivelRio > 80 && humSuelo > 50){
    console.log('Rojo')
}
else if(temperatura > 30 && nivelRio > 60 && humSuelo > 45){
    console.log('naranja')
}
else if (temperatura > 20 && nivelRio > 40 && humSuelo > 35 ){
    console.log('precaución')
}
else {
    console.log('Verde')
}