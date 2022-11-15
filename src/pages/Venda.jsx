import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import VendaTable from "../components/VendaTable";
import DeleteModal from "../components/DeleteModal";
import { useNavigate } from "react-router-dom";

const Venda = () => {
  const [IsOpenDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDeleteModal = (isOpen) => {
    setOpenDeleteModal(isOpen);
  };

  const navigate = useNavigate();

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
            Vendas Realizadas
          </Typography>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              navigate("/novavenda");
            }}
          >
            Inserir nova Venda
          </Button>
        </Box>
        <Box>
          <VendaTable
            onDelete={() => handleDeleteModal(true)}
            onEdit={() => navigate("/novavenda")}
          />
        </Box>
      </Box>
      <DeleteModal
        open={IsOpenDeleteModal}
        handleClose={() => handleDeleteModal(false)}
      />
    </Container>
  );
};

export default Venda;
