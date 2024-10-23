import Pagina from "../templates/Pagina";
import FormCadCliente from "./Formularios/FormCadCliente";

export default function TelaCadastroCliente (props)  {
    return (
        <Pagina>
            <h1 className="text-center">Cadastro de Clientes</h1>
            <FormCadCliente />
            
        </Pagina>
    )
}