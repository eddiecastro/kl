import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

function Person({ person }) {
  const detailText = person.job + " - " + person.email;
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="photo" />
      </ListItemAvatar>
      <ListItemText primary={person.name} secondary={detailText} />
    </ListItem>
  );
}

export default Person;
