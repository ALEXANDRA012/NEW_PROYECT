import "./CampoTexto.css"

const CampoTexto = (datosExternos) => {
    console.log("Datos: ",datosExternos);
    return <div className="campo-texto">
        <label>Nombre</label>
        <input placeholder="Ingresar nombre"/>
    </div>
}

export default CampoTexto