//Deber promedio de 3 notas
let NombreAlumno= prompt("Ingrese nombre completo del Alumno")
let Materia= prompt("Ingrese nombre de la Materia")

let Nota1= parseFloat(prompt("Ingrese nota del primer parcial (de 0 a 10)"))
let Nota2= parseFloat(prompt("Ingrese nota del segundo parcial (de 0 a 10)"))
let Nota3= parseFloat(prompt("Ingrese nota del tercer parcial (de 0 a 10)"))


if (isNaN(Nota1)|| isNaN(Nota2)|| isNaN(Nota3) ||Nota1 < 0 || Nota1 >10 || Nota2 < 0 ||Nota2 >10 ||Nota3 < 0 ||Nota3 >10){console.log("Porfavor, ingrese un número válido del 0 a 10")} 
else {
    console.log ("Nota primera parcial es ..." + Nota1)
    console.log ("Nota segunda parcial es ..." + Nota2)
    console.log ("Nota tercera parcial es ..." + Nota3)
    let promedio= (Nota1+Nota2+Nota3) / 3
    console.log( "Promedio total es ..."+ promedio )

    if (promedio>=7) { console.log (`${NombreAlumno}, ¡felicidades! Has aprobado con un promedio de ${promedio}.`)} else 
    { console.log(`${NombreAlumno} gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio}.` )}
} 
