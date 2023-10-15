interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Angel',
        edad: 26,
        direccion: {
            pais: 'Mexico',
            casaNo: 3700
        }
    }

    return (
      <>
          <div>ObjetosLiterales</div>
          { JSON.stringify(persona, null, 2) }
      </>
    )
}
