
export interface UserI{
    uid: string,
    nombre:string,
    correo: string,
    edad: number,
    password: string,
    repasPassword: string,
    perfil: 'conductor'|'pasajero',
}

export interface RutasI{
    conductor:{
        nombre:string;
        patente:string;
    }
    rutas:{
        avenida1: string;
        avenida2: string;
        avenida3: string;
    }
    avenidaOpcional1?:string;
    avenidaOpcional2?:string;
    id: string;
}