import Pagina from "../templates/Pagina";
import FormCadProduto from "../Telas/Formularios/FormCadProduto";
export default function TelaCadastroProduto (props)  {
    return (
        <Pagina>
            <h1>Cadastro de Produtos</h1>
            <FormCadProduto />
        </Pagina>
    )
}