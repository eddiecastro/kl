import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

function Person({ person }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="photo" />
      </ListItemAvatar>
      <ListItemText primary={person.name} secondary={person.getDetailText()} />
      <Divider variant="inset" component="li" />
    </ListItem>
  );
}

export default Person;
