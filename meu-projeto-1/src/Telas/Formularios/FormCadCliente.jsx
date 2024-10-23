import {Button, Col, Form, Row,} from "react-bootstrap";
import { useState } from "react";
export default function FormCadCliente (props)  {

    const [validacao, setValidacao] = useState(false);
    function cadastrar (evento) {
        const form = evento.currentTarget;
        if(form.checkValidity()){
            setValidacao(false);
        }
        else{
            setValidacao(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    return (
        <Form validated={validacao} className ="border p-2" noValidate onSubmit={cadastrar}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="cpf">
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="CPF"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe o CPF!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}  controlId="nomecompleto">
          <Form.Label>Nome Completo:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome Completo"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe o nome completo</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="endereco">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Endereço"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe o endereço correto</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="Cidade">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" placeholder="Cidade" required />
          <Form.Control.Feedback type="invalid">
            Por favor, informe a Cidade.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="Estado">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="Estado" required />
          <Form.Control.Feedback type="invalid">
            Por favor, informe o estado.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="CEP">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="CEP" required />
          <Form.Control.Feedback type="invalid">
            Por favor, informe o CEP.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Cadastrar Cliente</Button>
    </Form>
    )
}