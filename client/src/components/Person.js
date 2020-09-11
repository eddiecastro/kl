import React from "react";
import ListItemText from "@material-ui/core/ListItemText";

function Person({ person }) {
  return <ListItemText primary={person.name} secondary={person.detail} />;
}

export default Person;
