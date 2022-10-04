// eslint-disable-next-line no-unused-vars

import React from "react";
import Table from "@mui/material/Table";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { v4 as uuidv4 } from "uuid";
import { Box, TableBody, TableRow } from "@mui/material";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const country = [
  "Brasil",
  "Afeganistão",
  "África do Sul",
  "Albânia",
  "Alemanha",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antilhas Holandesas",
  "Antárctica",
  "Antígua e Barbuda",
  "Argentina",
  "Argélia",
  "Armênia",
  "Aruba",
  "Arábia Saudita",
  "Austrália",
  "Áustria",
  "Azerbaijão",
  "Bahamas",
  "Bahrein",
  "Bangladesh",
  "Barbados",
  "Belize",
  "Benin",
  "Bermudas",
  "Bielorrúsia",
  "Bolívia",
  "Botswana",
  "Brunei",
  "Bulgária",
  "Burkina Faso",
  "Burundi",
  "Butão",
  "Bélgica",
  "Bósnia e Herzegovina",
  "Cabo Verde",
  "Camarões",
  "Camboja",
  "Canadá",
  "Catar",
  "Cazaquistão",
  "Chade",
  "Chile",
  "China",
  "Chipre",
  "Colômbia",
  "Comores",
  "Coreia do Norte",
  "Coreia do Sul",
  "Costa do Marfim",
  "Costa Rica",
  "Croácia",
  "Cuba",
  "Dinamarca c",
  "Djibouti",
  "Dominica",
  "Egito",
  "El Salvador",
  "Emirados Árabes Unidos",
  "Equador",
  "Eritreia",
  "Escócia",
  "Eslováquia",
  "Eslovênia",
  "Espanha",
  "Estados Federados da Micronésia",
  "Estados Unidos",
  "Estônia",
  "Etiópia",
  "Fiji",
  "Filipinas",
  "Finlândia",
  "França",
  "Gabão",
  "Gana",
  "Geórgia",
  "Gibraltar",
  "Gronelândia",
  "Grécia",
  "Guadalupe",
  "Guam",
  "Guatemala",
  "Guernesei",
  "Guiana",
  "Guiana Francesa",
  "Guiné",
  "Guiné Equatorial",
  "Guiné-Bissau",
  "Gâmbia",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungria",
  "Ilha Bouvet",
  "Ilha de Man",
  "Ilha do Natal",
  "Ilha Norfolk",
  "Ilhas Cayman",
  "Indonésia",
  "Inglaterra",
  "Índia",
  "Iraque",
  "Irlanda",
  "Irâ",
  "Islândia",
  "Israel",
  "Itália",
  "Iêmen",
  "Jamaica",
  "Japão",
  "Jersey",
  "Jordânia",
  "Letônia",
  "Lituânia",
  "Luxemburgo",
  "Líbano",
  "Libia",
  "Macau",
  "Macedônia",
  "Madagascar",
  "Malawi",
  "Maldivas",
  "Mali",
  "Malta",
  "Malásia",
  "Marrocos",
  "Mayotte",
  "Mongólia",
  "Montenegro",
  "Montserrat",
  "Moçambique",
  "México",
  "Mônaco",
  "Nicarágua",
  "Nigéria",
  "Noruega",
  "Nova Zelândia",
  "Níger",
  "Omã",
  "Palau",
  "Palestina",
  "Panamá",
  "Paquistão",
  "Paraguai",
  "Pais de Gales",
  "Países Baixos",
  "Peru",
  "Polônia",
  "Porto Rico",
  "Portugal",
  "Quênia",
  "Reino Unido",
  "República do Congo",
  "República Dominicana",
  "Romênia",
  "Rússia",
  "Singapura",
  "Somália",
  "Sudão",
  "Suriname",
  "Suécia",
  "Suíça",
  "São Cristovão e Nevis",
  "São Tomé e Príncipe",
  "Sérvia",
  "Tailândia",
  "Taiwan",
  "Tanzânia",
  "Timos-Leste",
  "Togo",
  "Tonga",
  "Trinidad e Tobago",
  "Tunísia",
  "Turcas e Caicos",
  "Turquemenistão",
  "Turquia",
  "Ucrânia",
  "Uganda",
  "Uruguai",
  "Uzbequistão",
  "Vaticano",
  "Venezuela",
  "Vietname",
  "Wallis e Futuna",
  "Zimbabwe",
  "Zâmbia",
];

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const defaultValue = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  birthday: "",
  language: "",
  clientes: [],
  modalAberta: false,
  modalSubmit: false,
};

class Client extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultValue;
  }

  componentDidMount() {
    this.buscarCliente();
  }

  componentWillUnmount() {}

  buscarCliente = () => {
    fetch("https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060")
      .then((resposta) => resposta.json())
      .then((dados) => {
        this.setState({ clientes: dados });
        console.log(this.state);
      });
  };

  excluirCliente = (id) => {
    this.setState({
      clientes: this.state.clientes.filter((item) => item.id !== id),
    });
  };
  "";

  carregarDados = (id) => {
    const cliente = this.state.clientes.filter((item) => item.id === id);
    this.setState(cliente[0]);
    this.abrirModal();
  };

  confirmarSubmit = () => {
    this.setState({ modalSubmit: !this.state.modalSubmit });
  };

  confirmarExclusao = (id) => {
    if (window.confirm("Confirmar exclusão?")) {
      this.excluirCliente(id);
    } else return;
  };

  renderTabela() {
    return (
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ padding: 1 }} align="right">
              Nome
            </TableCell>
            <TableCell align="right">Sobrenome</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Gênero</TableCell>
            <TableCell align="right">Aniversário</TableCell>
            <TableCell align="center">Idioma</TableCell>
            <TableCell align="left">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.clientes.map((client) => {
            return (
              <TableRow key={client.id}>
                <TableCell align="right">{client.first_name}</TableCell>
                <TableCell align="right">{client.last_name}</TableCell>
                <TableCell align="right">{client.email}</TableCell>
                <TableCell align="right">{client.gender}</TableCell>
                <TableCell align="right">{client.birthday}</TableCell>
                <TableCell align="center">{client.language}</TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Button
                    align="right"
                    size="small"
                    variant="contained"
                    onClick={() => this.carregarDados(client.id)}
                  >
                    Atualizar
                  </Button>

                  <Button
                    aria-label="delete"
                    variant="contained"
                    sx={{
                      background: "#ef192c",
                      "&:hover": {
                        background: "#ef192c",
                      },
                    }}
                    size="small"
                    onClick={() => this.confirmarExclusao(client.id)}
                  >
                    <DeleteIcon fontSize="inherit" />
                    Deletar
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }

  reloadId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  reloadName = (e) => {
    this.setState({
      first_name: e.target.value,
    });
  };
  reloadLastName = (e) => {
    this.setState({
      last_name: e.target.value,
    });
  };
  reloadEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  reloadGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  reloadBirthday = (e) => {
    this.setState({
      birthday: e.target.value,
    });
  };
  reloadLanguage = (e) => {
    this.setState({
      language: e.target.value,
    });
  };

  submit = () => {
    const client = {
      id: uuidv4(),
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      gender: this.state.gender,
      birthday: this.state.birthday,
      language: this.state.language,
    };

    const itemExist = this.state.clientes.find(
      (item) => item.id === this.state.id
    );

    itemExist
      ? this.setState({
          clientes: this.state.clientes.map((x) => {
            if (x.id === this.state.id) {
              x = client;
            }
            return x;
          }),
        })
      : this.setState({
          clientes: [...this.state.clientes, client],
        });

    this.setState({ modalSubmit: false });

    this.fecharModal();

    console.log(client);
  };

  reset = () => {
    this.setState({
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      birthday: "",
      language: "",
      clientes: [...this.state.clientes],
    });
  };

  fecharModal = () => {
    this.setState({
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      birthday: "",
      language: "",
      modalAberta: false,
    });
  };
  // eslint-disable-next-line no-dupe-class-members
  abrirModal = () => {
    this.setState({
      modalAberta: true,
    });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
          <Modal.Header closeButton>
            <Modal.Title>Dados do Cliente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* <Form.Group className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control
                 
                  value={this.state.id}
                  onChange={(e) => this.reloadId(e)}
                />
              </Form.Group> */}
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu nome"
                  value={this.state.first_name}
                  onChange={this.reloadName}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu Sobrenome"
                  value={this.state.last_name}
                  onChange={this.reloadLastName}
                />
              </Form.Group>

              <FormControl className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.reloadEmail}
                />
                <Form.Text className="text-muted">
                  Utilize o seu melhor e-mail.
                </Form.Text>
              </FormControl>

              <FormControl size="small">
                <FormLabel id="demo-radio-buttons-group-label">
                  Gênero
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="controlled-radio-buttons-group"
                  defaultValue="female"
                  value={this.state.gender}
                  onChange={this.reloadGender}
                >
                  <FormControlLabel
                    value={"F"}
                    control={<Radio />}
                    label="Feminino"
                  />
                  <FormControlLabel
                    value={"M"}
                    control={<Radio />}
                    label="Masculino"
                  />
                </RadioGroup>
              </FormControl>

              <Form.Group className="mb-3">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  value={this.state.birthday}
                  onChange={this.reloadBirthday}
                />

                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">Country</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={this.state.language}
                    onChange={this.reloadLanguage}
                    input={<OutlinedInput label="Country" />}
                    MenuProps={MenuProps}
                  >
                    {country.map((country) => (
                      <MenuItem key={country} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.fecharModal}>
              Fechar
            </Button>

            {this.state.modalSubmit && (
              <Button variant="primary" type="submit" onClick={this.submit}>
                Confirmar
              </Button>
            )}

            {!this.state.modalSubmit && (
              <Button
                variant="primary"
                type="submit"
                onClick={this.confirmarSubmit}
              >
                Salvar
              </Button>
            )}
          </Modal.Footer>
        </Modal>
        <Box padding="10px">
          <Button
            variant="contained"
            type="submit"
            color="success"
            onClick={this.abrirModal}
          >
            Novo
          </Button>
        </Box>

        {this.renderTabela()}
      </div>
    );
  }
}

export default Client;
