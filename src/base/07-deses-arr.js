const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;

export const retornaArreglo = () => {
    return ['ABC', 123];
};

// const [ letras, numeros ] = retornaArreglo();

//Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombte
const usState = ( valor )=> {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}
