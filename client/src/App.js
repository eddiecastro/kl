import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import PersonList from "./components/PersonList";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <PersonList />
      </Grid>
      <Grid item xs={4}>
        <PersonList />
      </Grid>
      <Grid item xs={4}>
        <PersonList />
      </Grid>
    </Grid>
  );
}

export default App;
