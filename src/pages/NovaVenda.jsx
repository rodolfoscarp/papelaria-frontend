import { Box, Container } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const ItemTable = () => {
  return (
    <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Produto/Serviço</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Preço Unitario(g)</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right">003 - Caneta</TableCell>
            <TableCell align="right">5</TableCell>
            <TableCell align="right">R$ 1,50</TableCell>
            <TableCell align="right">R$ 7,50</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const NovaVenda = () => {
  return (
    <Container>
      <Grid container spacing={2} paddingTop={2}>
        <Grid item container xs={7} paddingTop={2} direction="column">
          <Grid item paddingBottom={2}>
            <Typography variant="h6">Produtos</Typography>
          </Grid>
          <Grid item container>
            <Grid flexGrow={2}>
              <TextField
                fullWidth
                label="Buscar pelo Codigo de Decrição"
                size="small"
                sx={{ paddingRight: 2 }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Quantidade de Itens"
                size="small"
                sx={{ paddingRight: 2 }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="success">
                Adicionar
              </Button>
            </Grid>
          </Grid>
          <Grid item paddingTop={2}>
            <ItemTable />
          </Grid>
        </Grid>

        <Grid item xs={5} direction="row">
          <Grid item paddingBottom={2}>
            <Typography variant="h6">Dados Venda</Typography>
          </Grid>
          <Box>
            <TextField
              label="Required"
              size="small"
              select
              fullWidth
              sx={{ paddingBottom: 2 }}
            />
          </Box>
          <Box>
            <TextField
              label="Required"
              size="small"
              select
              fullWidth
              sx={{ paddingBottom: 2 }}
            />
          </Box>
          <Box>
            <TextField
              label="Required"
              size="small"
              select
              fullWidth
              sx={{ paddingBottom: 2 }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: 2,
            }}
          >
            <Box>Valor Venda:</Box>
            <Box>R$ 0,00</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: 2,
            }}
          >
            <Box>
              <Button variant="contained" color="success">
                Adicionar
              </Button>
            </Box>
            <Box>
              <Button variant="contained" color="success">
                Adicionar
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NovaVenda;
