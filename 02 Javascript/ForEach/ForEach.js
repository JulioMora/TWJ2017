//for each
// operadores

let arregloNumeros=[1,2,3,4,5,6];
let resultado= arregloNumeros.forEach((numero,indice)=>{
  console.log(indice,numero);
})

console.log('Resultado:', resultado);

let nuevoforeach= (arreglo)=>{
    for(let i=0;i<arreglo.lenght;i++){
    /*console.log(arreglo[i]);
      console.log(i);
      console.log(arreglo)*/
      funcion(arreglo[i],i,arreglo)
    }
}

nuevoforeach(arregloNumeros);