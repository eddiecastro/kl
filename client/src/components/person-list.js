import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";

import Person from "./person";
import ErrorAlert from "./error-alert";
import { ENDPOINTS } from "../config/endpoints";
import { PersonListError } from "../utils/error-constants";
import PersonConverter from "../utils/person-converter";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
          setPeople((people) => [...people, ...data.data]);
        } else {
          setShowError(true);
        }
      } catch (error) {
        setShowError(true);
        console.log(error);
      }
    };
    fetchData();

    const onScroll = () => {
      /**
       * detects scroll to bottom of page, triggers loading more people if there is a next page
       * add 300px to window height to trigger next load before user actually gets to the bottom of the page
       */
      if (
        nextPage &&
        window.innerHeight + window.scrollY + 400 >= document.body.offsetHeight
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
      const mappedData = json.data.map((x) => PersonConverter(x));
      json.data = mappedData;
      return json;
    } else {
      console.log(res);
    }
  };

  return (
    <div>
      {showError ? <ErrorAlert errortext={PersonListError} /> : null}
      {people.length > 0 ? (
        <List className={classes.root}>
          {people.map((person) => (
            <ListItem
              alignItems="flex-start"
              key={person.id}
              component={Paper}
              style={{ marginBottom: 5 }}
            >
              <Person person={person} alignItems="flex-end" />
            </ListItem>
          ))}
        </List>
      ) : null}
    </div>
  );
}

export default PersonList;
