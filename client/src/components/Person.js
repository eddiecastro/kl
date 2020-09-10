import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

function Person({ person }) {
  // wrapping this in a null check because unit tests were failing due to null person
  if (person) {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="photo" />
        </ListItemAvatar>
        <ListItemText primary={person.name} secondary={person.detail} />
      </ListItem>
    );
  }
  return null;
}

export default Person;
