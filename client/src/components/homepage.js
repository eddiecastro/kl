import React from "react";
import Grid from "@material-ui/core/Grid";

import PersonList from "./person-list";

export default function HomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <PersonList />
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}
