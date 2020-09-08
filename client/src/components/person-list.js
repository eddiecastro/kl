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
  const [page, setPage] = useState(1);

  // Called once component is mounted or updated
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data for page " + page);
      var result = await getPeople(page);
      if (people.length > 0) {
        result = people.concat(result);
      }
      setPeople(result);
    };
    fetchData();

    const onScroll = () => {
      // detects scroll to bottom of page, triggers loading more people
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      // remove the event listener when the component is unmounted
      window.removeEventListener("scroll", onScroll);
    };
  }, [page]); // re-run the hook when the page changes

  return (
    <List className={classes.root}>
      {people.map((person) => (
        <Person person={person} key={person.id} />
      ))}
    </List>
  );
}

export default PersonList;
