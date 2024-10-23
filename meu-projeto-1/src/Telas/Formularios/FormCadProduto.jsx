import {Button, Col, Form, Row,} from "react-bootstrap";
import { useState } from "react";
export default function FormCadProduto (props)  {

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
      <Form validated={validacao} className="border p-2" noValidate onSubmit={cadastrar}>
  
      <h4>Dados Básicos</h4>
      
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="codigoProduto">
          <Form.Label>Código do Produto:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Código do Produto"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe o código do produto!</Form.Control.Feedback>
        </Form.Group>
    
        <Form.Group as={Col} md="8" controlId="descricaoProduto">
          <Form.Label>Descrição do Produto:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Descrição do Produto"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a descrição do produto!</Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="categoriaProduto">
          <Form.Label>Categoria:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Categoria do Produto"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a categoria!</Form.Control.Feedback>
        </Form.Group>
    
        <Form.Group as={Col} md="4" controlId="marcaProduto">
          <Form.Label>Marca:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Marca do Produto"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a marca do produto!</Form.Control.Feedback>
        </Form.Group>
    
        <Form.Group as={Col} md="4" controlId="modeloProduto">
          <Form.Label>Modelo:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Modelo do Produto"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe o modelo do produto!</Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="unidadeMedidaProduto">
          <Form.Label>Unidade de Medida:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ex: kg, m, unid."
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a unidade de medida!</Form.Control.Feedback>
        </Form.Group>
    
        <Form.Group as={Col} md="4" controlId="estoqueProduto">
          <Form.Label>Estoque:</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Quantidade em Estoque"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a quantidade em estoque!</Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="precoCustoProduto">
          <Form.Label>Preço de Custo:</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Preço de Custo"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe o preço de custo!</Form.Control.Feedback>
        </Form.Group>
    
        <Form.Group as={Col} md="6" controlId="precoVendaProduto">
          <Form.Label>Preço de Venda:</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Preço de Venda"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe o preço de venda!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <h4>Dados Adicionais</h4>
    
      <Row className="mb-3">
        <Form.Group as={Col} controlId="fotoProduto">
          <Form.Label>Foto do Produto:</Form.Label>
          <Form.Control
            required
            type="file"
          />
          <Form.Control.Feedback type="invalid">Por favor, envie uma foto do produto!</Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="dimensoesProduto">
          <Form.Label>Dimensões e Peso:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ex: 20x30x10 cm, 1.5 kg"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe as dimensões e o peso!</Form.Control.Feedback>
        </Form.Group>
    
        <Form.Group as={Col} md="4" controlId="corProduto">
          <Form.Label>Cor:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Cor do Produto"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a cor!</Form.Control.Feedback>
        </Form.Group>
    
        <Form.Group as={Col} md="4" controlId="materialProduto">
          <Form.Label>Material:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Material do Produto"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe o material!</Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="garantiaProduto">
          <Form.Label>Garantia:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ex: 12 meses"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a garantia!</Form.Control.Feedback>
        </Form.Group>
    
        <Form.Group as={Col} md="6" controlId="origemProduto">
          <Form.Label>Origem:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ex: Nacional, Importado"
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a origem do produto!</Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Button type="submit">Cadastrar Produto</Button>
    </Form>
    )
}