import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import PersonList from "./person-list";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  main: {
    "margin-top": "1px",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <AppBar position="static" data-testid="appbar">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Salesloft People
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} className={classes.main}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <PersonList />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Grid>
  );
}
