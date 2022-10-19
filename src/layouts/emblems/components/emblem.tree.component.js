import { Divider, Grid } from "@mui/material";
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
      <Grid container direction="row" justifyContent="center" alignItems="stretch">
        {this.groups.map((group, i) => (
          <Grid item p={2} xs={12} sm={4} key={group.name}>
            <h2>{group.name}</h2>
            <EmblemTreeGroup {...group} tree={i} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default EmblemTree;
