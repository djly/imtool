import Grid from "@mui/material/Grid";
import EmblemTreeSkill from "./emblem.tree.skill.component";

function EmblemTreeTier(props) {
  const { skills, maxInTier, tier, tree, maxInGroup } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      style={{ width: "100%" }}
    >
      {skills.map((skill, i) => (
        <Grid item xs={4} key={skill.name}>
          <EmblemTreeSkill
            {...skill}
            tier={tier}
            slot={i}
            tree={tree}
            maxInTier={maxInTier}
            maxInGroup={maxInGroup}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default EmblemTreeTier;
