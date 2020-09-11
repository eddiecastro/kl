import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

import ErrorAlert from "./error-alert";
import Duplicate from "./duplicate";
import { ENDPOINTS } from "../config/endpoints";
import { DuplicatesListError } from "../utils/error-constants";
import PersonConverter from "../utils/person-converter";

function DuplicatesList() {
  const [showError, setShowError] = useState(false);
  const [duplicates, setDuplicates] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(ENDPOINTS.GET_DUPLICATES);
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setShowError(false);
            setDuplicates(restructureData(data));
          } else {
            setShowError(true);
          }
        } else {
          throw new Error("Unable to fetch data");
        }
      } catch (error) {
        setShowError(true);
        console.log(error);
      }
    };

    // pre-load data so it is ready when button is pressed
    if (duplicates.length < 1) {
      fetchData();
    }
  }, [duplicates.length]);

  function restructureData(data) {
    var frequencyMatches = data["frequencyMatches"];
    var localPartMatches = data["localPartMatches"];

    frequencyMatches.forEach((match) => {
      match.matchingMethod = "Email frequency comparison";
      match.people[0] = PersonConverter(match.people[0]);
      match.people[1] = PersonConverter(match.people[1]);
      match.variationPercentage = `${
        Math.round(match.variationPercentage * 10000) / 100
      } %`;
    });

    localPartMatches.forEach((match) => {
      match.matchingMethod = "Local email part";
      match.people[0] = PersonConverter(match.people[0]);
      match.people[1] = PersonConverter(match.people[1]);
    });

    return [...frequencyMatches, ...localPartMatches];
  }

  return (
    <Grid container>
      <Grid container style={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setShowList(true);
          }}
        >
          Duplicates
        </Button>
      </Grid>
      {showList ? (
        <Grid container justify="center">
          {showError ? <ErrorAlert errortext={DuplicatesListError} /> : null}
          {duplicates.length > 0 ? (
            <List>
              {duplicates.map((item) => (
                <Duplicate
                  duplicate={item}
                  key={`${item.people[0].id} - ${item.people[1].id}`}
                />
              ))}
            </List>
          ) : null}
        </Grid>
      ) : null}
    </Grid>
  );
}

export default DuplicatesList;
