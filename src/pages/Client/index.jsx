import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Modal,
  TableBody,
  TableRow,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { objectIsEmpty } from "../../utils/objectIsEmpty";


const Client = () => {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});
  const [modalAberto, setModalAberto] = useState(false);
  const [submited, setSubmited] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  let haveError = objectIsEmpty(errors) || false;

  const buscarCliente = async () => {
    const response = await axios.get(
      "https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060"
    );

    setClientes(response.data);
  };

  useEffect(() => {
    buscarCliente();
  }, []);

  const excluirCliente = (id) => {
    const novosClientes = clientes.filter((cliente) => cliente.id !== id);
    setClientes(novosClientes);
  };

  const carregarDados = (id) => {
    const cliente = clientes.find((item) => item.id === id);

    setValue("id", cliente.id);
    setValue("first_name", cliente.first_name);
    setValue("last_name", cliente.last_name);
    setValue("email", cliente.email);
    setValue("gender", cliente.gender);
    setValue("birthday", cliente.birthday);
    setValue("language", cliente.language);
    setCliente(cliente);

    setModalAberto(true);
  };

  const confirmarSubmit = () => {
    setSubmited(true);
  };

  const submit = (cliente) => {
    const itemExist = clientes.find((item) => item.id === cliente.id);

    const client = {
      id: uuidv4(),
      first_name: cliente.first_name,
      last_name: cliente.last_name,
      email: cliente.email,
      gender: cliente.gender,
      birthday: cliente.birthday,
      language: cliente.language,
    };

    itemExist
      ? setClientes(
          clientes.map((x) => {
            if (x.id === cliente.id) {
              x = client;
            }
            return x;
          })
        )
      : setClientes((old) => [...old, client]);

    setSubmited(false);

    fecharModal();
  };

  const confirmarExclusao = (id) => {
    if (window.confirm("Confirmar exclusão?")) {
      excluirCliente(id);
    } else return;
  };

  const resetValuesForm = () => {
    setValue("id", "");
    setValue("first_name", "");
    setValue("last_name", "");
    setValue("email", "");
    setValue("gender", "");
    setValue("birthday", "");
    setValue("language", "");
  };

  const fecharModal = () => {
    setModalAberto(false);
    resetValuesForm();
  };

  return (
    <>
      <Box padding="10px">
        <Button
          variant="contained"
          color="success"
          onClick={() => setModalAberto(true)}
        >
          Novo
        </Button>
      </Box>
      <Box sx={{ padding: "1rem", overflowX: "auto" }}>
        <Table
          sx={{ minWidth: "650px" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: 1 }} align="left">
                Nome
              </TableCell>
              <TableCell align="left">Sobrenome</TableCell>
              <TableCell align="left">email</TableCell>
              <TableCell align="left">Gênero</TableCell>
              <TableCell align="left">Aniversário</TableCell>
              <TableCell align="left">Idioma</TableCell>
              <TableCell align="left">Opções</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes &&
              clientes.map((client) => {
                return (
                  <TableRow key={client.id}>
                    <TableCell align="left">{client.first_name}</TableCell>
                    <TableCell align="left">{client.last_name}</TableCell>
                    <TableCell align="left">{client.email}</TableCell>
                    <TableCell align="left">{client.gender}</TableCell>
                    <TableCell align="left">{client.birthday}</TableCell>
                    <TableCell align="left">{client.language}</TableCell>
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
                        onClick={() => carregarDados(client.id)}
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
                        onClick={() => confirmarExclusao(client.id)}
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
      </Box>
      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={modalAberto}
        onClose={fecharModal}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            width: "600px",
            minHeight: "40vh",
            borderRadius: "4px",
            padding: "1rem",
          }}
        >
          <form onSubmit={handleSubmit(submit)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">Dados do cliente</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <FormControl fullWidth>
                  <TextField
                    label="Nome"
                    fullWidth
                    defaultValue={cliente.first_name}
                    {...register("first_name", { required: true })}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Sobrenome"
                    fullWidth
                    defaultValue={cliente.last_name}
                    {...register("last_name", { required: true })}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Email"
                    fullWidth
                    defaultValue={cliente.email}
                    {...register("email", { required: true })}
                  />
                </FormControl>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gênero</FormLabel>
                  <Controller
                    rules={{ required: true }}
                    control={control}
                    name="promoting2"
                    {...register("gender")}
                    render={({ field }) => (
                      <RadioGroup {...field}>
                        <FormControlLabel
                          value="F"
                          control={<Radio />}
                          label="Feminino"
                        />
                        <FormControlLabel
                          value="M"
                          control={<Radio />}
                          label="Masculino"
                        />
                      </RadioGroup>
                    )}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <Typography>Data de Nascimento</Typography>
                  <TextField
                    type="date"
                    fullWidth
                    defaultValue={cliente.birthday}
                    {...register("birthday", { required: true })}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Linguagem
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Linguagem"
                    defaultValue={cliente.language}
                    {...register("language", { required: true })}
                  >
                    {countries.map((country, i) => {
                      return (
                        <MenuItem key={String(i + 1)} value={country}>
                          {country}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {!haveError && (
                  <Typography color="red">Preencha todos os dados!</Typography>
                )}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {!submited && (
                  <Button
                    onClick={confirmarSubmit}
                    type="button"
                    variant="contained"
                  >
                    Salvar
                  </Button>
                )}
                {submited && (
                  <Button variant="contained" type="submit">
                    Confirmar
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="error"
                  onClick={fecharModal}
                  type="button"
                >
                  Fechar
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

const countries = [
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

export default Client;
