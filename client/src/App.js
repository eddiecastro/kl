import React from "react";
import Grid from "@material-ui/core/Grid";

import PersonList from "./components/person-list";

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
