
export const Funciones = () => {
    const sumar = (a: number, b: number):number => {
        return a+b;
    }


    return (
      <>
        <div>Funciones</div>
        <span>El resultado es { sumar(1, 2) }</span>
      </>
    )
}
