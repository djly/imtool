import Grid from "@mui/material/Grid";
import EmblemTreeSkill from "./emblem.tree.skill.component";

function EmblemTreeTier(props) {
  const { skills, maxInTier, tier, tree } = props;
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {skills.map((skill, i) => (
        <Grid item xs={4} key={skill.name}>
          <EmblemTreeSkill {...skill} tier={tier} slot={i} tree={tree} />
        </Grid>
      ))}
    </Grid>
  );
}

export default EmblemTreeTier;
