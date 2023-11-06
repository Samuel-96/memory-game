export default function Tarjeta({id, nombre, url}){
    
    return(
        <div className="tarjeta">
            <p>{id}</p>
            <p>{nombre}</p>
            <p>{url}</p>
        </div>
    )
}