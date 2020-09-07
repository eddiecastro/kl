import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Person from "./Person";
import PersonModel from "../model/PersonModel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function PersonList() {
  const people = [
    new PersonModel("Kody Laseter", "kody@gmail.com", "Software Engineer"),
    new PersonModel("blah", "blah@blah", "blah"),
  ];

  const classes = useStyles();

  return (
    <List className={classes.root}>
      {people.map((person) => (
        <Person person={person} />
      ))}
    </List>
  );
}

export default PersonList;
