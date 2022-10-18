import { Grid } from "@mui/material";
import { Component } from "react";
import EmblemTreeGroup from "./emblem.tree.group.component";
import attackTree from "../data/attackTree";
import defenseTree from "../data/defenseTree";
import supportTree from "../data/supportTree";

class EmblemTree extends Component {
  constructor() {
    super();

    this.groups = [attackTree(), defenseTree(), supportTree()];
  }

  render() {
    return (
      <Grid container direction="row" justifyContent="center" alignItems="center">
        {this.groups.map((group, i) => (
          <Grid item xs={4} key={group.name}>
            {group.name}
            <EmblemTreeGroup {...group} tree={i} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default EmblemTree;
