import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useNavigate } from "react-router-dom";

const NavBar = ({ isOpen, handler }) => {
  const navigate = useNavigate();

  return (
    <Drawer anchor="left" open={isOpen} onClose={() => handler(false)}>
      <List>
        <ListItem>
          <ListItemButton
            onClick={() => {
              navigate("/");
              handler(false);
            }}
          >
            <ListItemIcon>
              <AddBusinessIcon />
            </ListItemIcon>
            <ListItemText primary={"Vendas"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemButton
            onClick={() => {
              navigate("/comissao");
              handler(false);
            }}
          >
            <ListItemIcon>
              <CalculateIcon />
            </ListItemIcon>
            <ListItemText primary={"Comissões"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavBar;
