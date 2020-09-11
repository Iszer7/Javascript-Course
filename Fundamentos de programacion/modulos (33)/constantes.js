export const exportacion = 'Estoy exportando..';

export let usuario = 'Diego';
let password = 'qwerty';

//Exportacion default solo puede usarse una vez
export default function saludar () {    //Quiere decir que cuando se mande a llamar se exporta predeterminadamente
    console.log('Hola modulos +ES6');
}

export class Saludar {
    constructor() {
        console.log('Hola!! Exporto una clase C:');
    }
}