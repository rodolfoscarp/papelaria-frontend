import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Button, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";
import { IconButton } from "@material-ui/core";

const data = [
  {
    notaFiscal: "00001005",
    cliente: "Cliente1",
    vendedor: "Vendedor1",
    dataVenda: "19/10/2022 - 14:00",
    valorTotal: 15.0,
    opcoes: "",
    items: [
      {
        produto: "Mouse",
        quatidade: 10,
        precoUnitario: 10.0,
        totalProdutos: 100.0,
        percentComissao: 0.05,
        comissao: 20,
      },
      {
        produto: "Teclado",
        quatidade: 10,
        precoUnitario: 10.0,
        totalProdutos: 100.0,
        percentComissao: 0.05,
        comissao: 20,
      },
    ],
  },
  {
    notaFiscal: 0,
    cliente: "Cliente1",
    vendedor: "Vendedor1",
    dataVenda: "19/10/2022 - 14:00",
    valorTotal: 15.0,
    opcoes: "",
    items: [
      {
        produto: "Mouse",
        quatidade: 10,
        precoUnitario: 10.0,
        totalProdutos: 100.0,
        percentComissao: 0.05,
        comissao: 20,
      },
      {
        produto: "Teclado",
        quatidade: 10,
        precoUnitario: 10.0,
        totalProdutos: 100.0,
        percentComissao: 0.05,
        comissao: 20,
      },
    ],
  },
];

const DetalheTable = ({ itensVenda }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Produto</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Preço Unitario</TableCell>
            <TableCell align="right">Total Produtos</TableCell>
            <TableCell align="right">Percentual Comissão</TableCell>
            <TableCell align="right">Comissão</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itensVenda.map((item) => (
            <TableRow
              key={item.produto}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="item">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.quatidade}</TableCell>
              <TableCell align="right">{item.precoUnitario}</TableCell>
              <TableCell align="right">{item.totalProdutos}</TableCell>
              <TableCell align="right">{item.percentComissao}</TableCell>
              <TableCell align="right">{item.comissao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Opcoes = ({ onDelete, onEdit }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Button variant="text">Ver Itens</Button>
      <IconButton onClick={onEdit}>
        <SvgIcon viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
          />
        </SvgIcon>
      </IconButton>
      <IconButton onClick={onDelete}>
        <SvgIcon viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
          />
        </SvgIcon>
      </IconButton>
    </Box>
  );
};

const DataTable = ({ onDelete, onEdit }) => {
  const columns = useMemo(
    () => [
      { header: "Nota Fiscal", accessorKey: "notaFiscal" },
      { header: "Cliente", accessorKey: "cliente" },
      { header: "Vendedor", accessorKey: "vendedor" },
      { header: "Data da Venda", accessorKey: "dataVenda" },
      { header: "Valor Total", accessorKey: "valorTotal" },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableRowActions={true}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
      renderDetailPanel={({ row }) => (
        <DetalheTable itensVenda={row.original.items} />
      )}
      renderRowActions={(row, index) => (
        <Opcoes onDelete={onDelete} onEdit={onEdit} />
      )}
      displayColumnDefOptions={{
        "mrt-row-actions": {
          header: "Opções",
        },
      }}
      positionActionsColumn="last"
    />
  );
};

export default DataTable;
