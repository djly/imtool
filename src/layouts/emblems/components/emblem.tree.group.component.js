import Grid from "@mui/material/Grid";
import EmblemTreeTier from "./emblem.tree.tier.component";

function EmblemTreeGroup(props) {
  const { name, tiers, tree } = props;
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      {tiers.map((tier, i) => (
        <Grid item xs={4} key={tier.tier}>
          <EmblemTreeTier {...tier} tier={i} tree={tree} />
        </Grid>
      ))}
    </Grid>
  );
}

export default EmblemTreeGroup;
