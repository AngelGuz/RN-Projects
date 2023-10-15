

export default function TiposBasicos() {
    /*
        Cuando se asigna un tipo de dato al inicio y despues se agrega
        Otro tipo de dato ej a un string se quiere asignar un number
        Marcara error dado que ts trabaja de tipo estricto.

        Pero en dado caso de que se requiera el otro tipo de dato,
        solo necesitamos agregar ":" y agregar los tipos de datos que puede recibir
        separados por la linea
     */
    const nombre: string = 'Fernando';
    const edad: number = 26;
    const estaActivo:boolean = true;
    

    const poderes: string[] = [];

    return (
    <>
        <h3>Tipos báscicos</h3>
        <h2>{nombre}</h2>
        <br />
        { poderes.join(', ')}
    </>
  )
}
