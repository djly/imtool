/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Tooltip, Grid } from "@mui/material";
import { useSkillsContext, setCurrentSkills } from "context/skillsContext";
import { useState, useContext } from "react";
import MDBox from "components/MDBox";

const bgSkillColor = {
  0: "transparent",
  1: "#DDD",
  2: "#BBB",
  3: "#AFA",
};

function EmblemTreeSkill(props) {
  const { name, desc, max, img, tier, slot, tree, maxInGroup, maxInTier } = props;
  const iconStyle = { width: 50, height: 50 };

  const [controller, dispatch] = useSkillsContext();
  const { currentSkills } = controller;

  const currentValue =
    currentSkills === undefined ||
    currentSkills[tree] === undefined ||
    currentSkills[tree][tier] === undefined ||
    currentSkills[tree][tier][slot] === undefined
      ? 0
      : currentSkills[tree][tier][slot];

  function canSkillUp(tr, t, s) {
    // Max for group
    let groupCount = 0;
    Object.entries(currentSkills[tr][t]).forEach(([key, value]) => {
      if (value > 0 && key !== s.toString()) groupCount += 1;
    });
    // console.log("groupCount", groupCount, maxInGroup);
    if (groupCount >= maxInGroup) return false;

    // Max for tier
    let tierCount = 0;
    Object.entries(currentSkills).forEach(([groupKey, groupValue]) => {
      Object.entries(groupValue[t]).forEach(([skillKey, skillValue]) => {
        // console.log(
        //   "Same group",
        //   groupKey,
        //   tr.toString(),
        //   groupKey !== tr.toString(),
        //   "Same skill",
        //   skillKey,
        //   s.toString(),
        //   skillKey !== s.toString(),
        //   skillValue,
        //   skillValue > 0 && !(groupKey === tr.toString() && skillKey === s.toString())
        // );
        if (skillValue > 0 && !(groupKey === tr.toString() && skillKey === s.toString())) {
          // console.log("Counted", groupKey, t, skillKey);
          tierCount += 1;
        }
      });
    });
    // console.log("tierCount", tierCount, maxInTier);
    if (tierCount >= maxInTier) return false;

    return true;
  }

  function skillHandler(tr, t, s) {
    if (canSkillUp(tr, t, s)) {
      const newValue = currentValue === max ? 0 : currentValue + 1;
      // console.log("Skill clicked", tree, tier, slot, newValue);
      setCurrentSkills(dispatch, { tree, tier, slot, value: newValue });
    }
  }
  return (
    <div>
      <Tooltip title={desc}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          alignContent="center"
          style={{ background: bgSkillColor[currentValue] }}
          onClick={(e) => skillHandler(tree, tier, slot)}
          onKeyPress={(e) => skillHandler(tree, tier, slot)}
        >
          {img && <img item="true" src={img} alt={name} style={iconStyle} />}
          <div item="true">
            {currentValue}/{max}
          </div>
        </Grid>
      </Tooltip>
    </div>
  );
}

export default EmblemTreeSkill;
