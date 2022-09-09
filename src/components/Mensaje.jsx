import moment from 'moment'

// const Mensaje = (props) => {
const Mensaje = ({mensaje, parrafo, color:backgroundColor}) => {
    
    // console.log(props)
    // const {mensaje} = props;
    return ( 
        // <h1>Hola desde src/components/Mensaje.jsx</h1>
        // <h1>Hola desde Mensaje</h1>
        // <h1>{props.mensaje}</h1>
        // <h1>{mensaje}</h1>
        <div className="mensaje">
            <div className="bg-opacity-25 rounded-3 p-4 m-3" style={{backgroundColor: backgroundColor}}>
                <h3>{mensaje}</h3>
                <p>{moment().format('Do MMM YY')}</p>
                <p>{parrafo}</p>
            </div>
        </div>
    );
}
 
export default Mensaje;