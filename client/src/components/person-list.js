import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Alert, AlertTitle } from "@material-ui/lab";

import Person from "./person";
import * as PeopleService from "../services/people/people-service";

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
  const [showError, setShowError] = useState(false);

  // Called every time component is mounted or updated
  useEffect(() => {
    var nextPage;
    const fetchData = async () => {
      const result = await PeopleService.getPeople(page);
      if (result) {
        setShowError(false);
        nextPage = result.metadata.paging.next_page; // set the next page based on response
        setPeople(people.concat(result.data));
      } else {
        setShowError(true);
      }
    };
    fetchData(page);

    const onScroll = () => {
      // detects scroll to bottom of page, triggers loading more people if there is a next page
      if (
        nextPage &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        setPage(nextPage);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      // remove the event listener when the component is unmounted
      window.removeEventListener("scroll", onScroll);
    };
  }, [page]); // re-run the hook when the page changes

  const Error = () => {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Failed to retrieve people — <strong>check network logs</strong>
      </Alert>
    );
  };

  return (
    <div>
      {showError ? <Error /> : null}
      <List className={classes.root}>
        {people.map((person) => (
          <Person person={person} key={person.id} />
        ))}
      </List>
    </div>
  );
}

export default PersonList;
