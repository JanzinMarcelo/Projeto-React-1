import { Container } from "react-bootstrap";
import Cabecalho from "./Cabeçalho";
import Menu from "./Menu";

export default function Pagina (props) {
    return (
       <Container>
           <Cabecalho texto="Sitema de Cadastros de Produtos" />
           <Menu />
           {
                props.children
           }
       </Container>
    )
}