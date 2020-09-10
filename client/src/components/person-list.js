import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Alert, AlertTitle } from "@material-ui/lab";

import Person from "./person";
import { ENDPOINTS } from "../config/endpoints";

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
      try {
        const res = await fetch(`${ENDPOINTS.GET_PEOPLE}?page=${page}`);
        const data = await handleResponse(res);
        if (data) {
          setShowError(false);
          nextPage = data.metadata.paging.next_page; // set the next page based on response
          setPeople([...people, ...data.data]);
        } else {
          setShowError(true);
        }
      } catch (error) {
        setShowError(true);
        console.log(error);
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

  const handleResponse = async (res) => {
    if (res.ok) {
      const json = await res.json();
      const mappedData = json.data.map((x) => {
        return {
          id: x.id,
          name: `${x.first_name} ${x.last_name}`,
          detail: `${x.email_address} - ${x.title}`,
        };
      });
      json.data = mappedData;
      return json;
    } else {
      console.log(res);
    }
  };

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
          // key attribute allows react to render only the data that has changed
          <Person person={person} key={person.id} />
        ))}
      </List>
    </div>
  );
}

export default PersonList;
