import { Alert } from "react-bootstrap";
export default function Cabecalho (props){

    return (
        <div> 
            <Alert ClassName="text-center"><h1>{props.texto || "Sem texto"}</h1></Alert>
        </div>
    )
} 