import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

import Person from "./person";

function Duplicate({ duplicate }) {
  return (
    <ListItem component={Paper} style={{ marginBottom: 5 }}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row">
          <Person person={duplicate.people[0]} />
          <Divider orientation="vertical" flexItem style={{ margin: 3 }} />
          <Box display="flex" flexDirection="row-reverse">
            <Person person={duplicate.people[1]} />
          </Box>
        </Box>
        <ListItemText
          primary={`Matching method: ${duplicate.matchingMethod}`}
          secondary={
            duplicate.variationPercentage
              ? `Character variation: ${duplicate.variationPercentage}`
              : null
          }
        />
      </Box>
    </ListItem>
  );
}

export default Duplicate;
