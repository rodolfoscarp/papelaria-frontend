import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

const data = [
  {
    codigo: "001",
    vendedor: "Vendedor1",
    totalVendas: "25",
    totalComissoes: 155.0,
  },
  {
    codigo: "001",
    vendedor: "Vendedor1",
    totalVendas: "25",
    totalComissoes: 155.0,
  },
  {
    codigo: "001",
    vendedor: "Vendedor1",
    totalVendas: "25",
    totalComissoes: 155.0,
  },
];

const ComissaoTable = () => {
  const columns = useMemo(
    () => [
      { header: "Cód", accessorKey: "codigo" },
      { header: "Vendedor", accessorKey: "vendedor" },
      { header: "Total de Vendas", accessorKey: "totalVendas" },
      { header: "Total Comissões", accessorKey: "totalComissoes" },
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
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
    />
  );
};

export default ComissaoTable;
