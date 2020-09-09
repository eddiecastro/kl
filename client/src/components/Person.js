import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

function Person({ person }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="photo" />
      </ListItemAvatar>
      <ListItemText primary={person.name} secondary={person.detail} />
    </ListItem>
  );
}

export default Person;
