import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

function ErrorAlert({ errortext }) {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {errortext}
      <strong>check network logs</strong>
    </Alert>
  );
}

export default ErrorAlert;
