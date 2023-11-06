// eslint-disable-next-line react/prop-types
export default function Tarjeta( {id, nombre, imagen, handleClick} ){

    return(
        <div className="tarjeta" key={id} onClick={handleClick}>
            <img id={nombre} src={imagen} alt="imagen personaje undertale" />
            <p>{nombre}</p>
        </div>
    )
}