import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import ErrorAlert from "./error-alert";
import { ENDPOINTS } from "../config/endpoints";
import { FrequencyListError } from "../utils/error-constants";

/**
 * Fetdh frequency data on component load but dont display until use clicks button
 */
function FrequencyList() {
  const [showError, setShowError] = useState(false);
  const [frequency, setFrequency] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(ENDPOINTS.GET_FREQUENCY);
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setShowError(false);
            setFrequency(sortToArray(data));
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
    if (frequency.length < 1) {
      fetchData();
    }
  }, [frequency.length]);

  /**
   * Convert an object of {letter: count} properties to an array of [letter, count] pairs sorted by count desc
   * @param {*} characterMap
   */
  function sortToArray(characterMap) {
    var sorted = [];
    if (Object.keys(characterMap).length) {
      sorted = Object.entries(characterMap);

      sorted.sort((a, b) => {
        return b[1] - a[1];
      });
    }

    return sorted;
  }

  return (
    <Grid container>
      <Grid container style={{ justifyContent: "center", marginBottom: 10 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setShowTable(true);
          }}
        >
          Frequency
        </Button>
      </Grid>
      {showTable ? (
        <Grid container justify="center">
          {showError ? <ErrorAlert errortext={FrequencyListError} /> : null}
          {frequency.length > 0 ? (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Character</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right">Count</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {frequency.map((item) => (
                    <TableRow key={item[0]}>
                      <TableCell>{item[0]}</TableCell>
                      <TableCell></TableCell>
                      <TableCell align="right">{item[1]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
        </Grid>
      ) : null}
    </Grid>
  );
}

export default FrequencyList;
