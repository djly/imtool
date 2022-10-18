/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Tooltip } from "@mui/material";
import { useSkillsContext, setCurrentSkills } from "context/skillsContext";
import { useState, useContext } from "react";
import MDBox from "components/MDBox";

function EmblemTreeSkill(props) {
  const { name, desc, max, img, tier, slot, tree } = props;
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

  function skillHandler(tr, t, s) {
    const newValue = currentValue === max ? 0 : currentValue + 1;
    console.log("Skill clicked", tree, tier, slot, newValue);
    setCurrentSkills(dispatch, { tree, tier, slot, value: newValue });
  }
  return (
    <div>
      <Tooltip title={desc}>
        <MDBox alignItems="center" justifyContent="center" alignContent="center">
          {img && (
            <img
              src={img}
              alt={name}
              style={iconStyle}
              onClick={(e) => skillHandler(tree, tier, slot)}
              onKeyPress={(e) => skillHandler(tree, tier, slot)}
            />
          )}
          <span>
            {currentValue}/{max}
          </span>
        </MDBox>
      </Tooltip>
    </div>
  );
}

export default EmblemTreeSkill;
