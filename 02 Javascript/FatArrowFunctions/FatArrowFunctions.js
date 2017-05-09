/**
 * Created by julio_000 on 09/05/2017.
 */
//FAT ARROW FUNCTIONS
var holaMundo=function(){
    console.log('Hola Mundo')
}

holaMundo()

var holamundo2= ()=>{
    return 'Hola mundo 2'
}
holamundo2()

var holamundo3= ()=>holamundo2()
holamundo3()

var holamundo4= (nombre)=>`hola ${nombre}`
holamundo4('Julio')

var holamundo5= apellido=>`hola ${apellido}`
holamundo5('Mora')
var holamundo6= (nombre,apellido)=>`hola Sr. ${apellido} ${nombre}`
holamundo6('Mora','Julio')