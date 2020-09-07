import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Person from "./Person";
import getPeople from "../services/people/GetPeople";

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
  const classes = useStyles();

  const peopleArray = getPeople();

  const [people, setPeople] = useState(peopleArray);

  // useEffect(() => {
  //   setPeople(getPeople());
  // });

  return (
    <List className={classes.root}>
      {people.map((person) => (
        <Person person={person} />
      ))}
    </List>
  );
}

export default PersonList;
