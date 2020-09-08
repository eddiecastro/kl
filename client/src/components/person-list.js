import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Person from "./person";
import { getPeople } from "../services/people/people-service";

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

  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPeople();
      setPeople(result);
    };
    fetchData();
  }, []);

  return (
    <List className={classes.root}>
      {people.map((person) => (
        <Person person={person} />
      ))}
    </List>
  );
}

export default PersonList;
