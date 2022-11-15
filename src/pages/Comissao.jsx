import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ComissaoTable from "../components/ComissaoTable";
import SearchIcon from "@mui/icons-material/Search";

const Comissao = () => {
  const [periodoInicio, setPeriodoInicio] = useState(null);
  const [periodoFim, setPeriodoFim] = useState(null);

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography variant="h6" component="h1">
            Relatório de Comissões
          </Typography>
          <Box>
            <DatePicker
              label="Período de Início"
              value={periodoInicio}
              onChange={(newValue) => {
                setPeriodoInicio(newValue);
              }}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
            <DatePicker
              label="Período de Fim"
              value={periodoFim}
              onChange={(newValue) => {
                setPeriodoFim(newValue);
              }}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
            <Button color="primary" variant="contained">
              <SearchIcon />
            </Button>
          </Box>
        </Box>
        <Box>
          <ComissaoTable />
        </Box>
      </Box>
    </Container>
  );
};

export default Comissao;
