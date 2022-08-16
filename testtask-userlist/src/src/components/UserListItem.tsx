import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  name: string;
};

const UserListItem = ({ name = "user", id = 0 }: Props) => {
  const navigate = useNavigate();
  return (
    <ListItem key={id} component="div" disablePadding>
      <ListItemButton onClick={() => navigate("/profile/" + id)}>
        <ListItemText color="primary" primary={`${id}. ${name}`} />
      </ListItemButton>
    </ListItem>
  );
};

export default UserListItem;
