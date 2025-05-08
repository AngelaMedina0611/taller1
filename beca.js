let promedio = 46
let materiasAprobadas = 92
let sanciones = false 
// se hace un if donde se utiliza el operador and donde el requerimiento dice que tiene 
// que cumplirse todas las comparaciones para tener la beca completa, parcial, o rechazarla
  if (sanciones === false  && promedio >= 45 && materiasAprobadas >= 90 ){
    console.log('beca completa')
  }
else if (sanciones === false && promedio >= 40 && materiasAprobadas >= 80){
    console.log('beca parcial')
}
else{
    console.log('beca rechazada')
}