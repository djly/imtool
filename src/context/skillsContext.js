/* eslint-disable no-plusplus */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import { createContext, useContext, useReducer, useMemo } from "react";
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import base62 from "base62";

const BLANK_SKILL_TREE = {
  0: {
    0: { 0: 0, 1: 0 },
    1: { 0: 0, 1: 0, 2: 0 },
    2: { 0: 0, 1: 0, 2: 0 },
    3: { 0: 0, 1: 0, 2: 0 },
    4: { 0: 0, 1: 0, 2: 0 },
    5: { 0: 0, 1: 0 },
  },
  1: {
    0: { 0: 0, 1: 0 },
    1: { 0: 0, 1: 0, 2: 0 },
    2: { 0: 0, 1: 0, 2: 0 },
    3: { 0: 0, 1: 0, 2: 0 },
    4: { 0: 0, 1: 0, 2: 0 },
    5: { 0: 0, 1: 0 },
  },
  2: {
    0: { 0: 0, 1: 0 },
    1: { 0: 0, 1: 0, 2: 0 },
    2: { 0: 0, 1: 0, 2: 0 },
    3: { 0: 0, 1: 0, 2: 0 },
    4: { 0: 0, 1: 0, 2: 0 },
    5: { 0: 0, 1: 0 },
  },
};

// Material Dashboard 2 React main context
const CurrentSkills = createContext();

// Setting custom name for the context which is visible on react dev tools
CurrentSkills.displayName = "CurrentSkillsContext";

function calculateURL(arr) {
  let output = "";
  for (let i = 0; i < 3; i++) {
    let tier = "";
    for (let ii = 0; ii < 6; ii++) {
      for (let iii = 0; iii < 3; iii++) {
        if (arr[i][ii][iii] === undefined) {
          tier += "";
        } else {
          // eslint-disable-next-line no-bitwise
          tier += (arr[i][ii][iii] >>> 0).toString(2).padStart(2, "0");
        }
      }
    }
    const base62string = base62.encode(parseInt(tier, 2));
    output += `${base62string}`;
    if (i < 2) output += "-";
  }
  return output;
}

// Material Dashboard 2 React reducer
function reducer(state, action) {
  switch (action.type) {
    case "CURRENT_SKILLS": {
      const newArray = state.currentSkills;
      newArray[action.value.tree][action.value.tier][action.value.slot] = action.value.value;
      const output = calculateURL(newArray);
      window.history.replaceState(null, "Emblems", `/imtool/emblems?tree=${output}`);
      return { ...state, currentSkills: newArray };
    }
    case "RESET_SKILLS": {
      console.log("Resetting Skills");
      const newArray = JSON.parse(JSON.stringify(BLANK_SKILL_TREE));
      const output = calculateURL(newArray);
      console.log("new value", output);
      window.history.replaceState(null, "Emblems", `/imtool/emblems?tree=${output}`);
      return { ...state, currentSkills: newArray };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function calculateStartingCurrentSkills() {
  const location = useLocation();
  const array = location.pathname.split("/");
  const lastItem = array[array.length - 1];

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const skillsbase62 = params.tree;
  const skills = JSON.parse(JSON.stringify(BLANK_SKILL_TREE));

  if (skillsbase62 === undefined || skillsbase62 === null) {
    return skills;
  }

  const trees = skillsbase62.split("-");
  trees.forEach((treebase62, i) => {
    const treebase10 = base62.decode(treebase62);
    const binary = treebase10.toString(2).padStart(32, "0");
    skills[i] = {
      0: { 0: parseInt(binary.slice(0, 2), 2), 1: parseInt(binary.slice(2, 4), 2) },
      1: {
        0: parseInt(binary.slice(4, 6), 2),
        1: parseInt(binary.slice(6, 8), 2),
        2: parseInt(binary.slice(8, 10), 2),
      },
      2: {
        0: parseInt(binary.slice(10, 12), 2),
        1: parseInt(binary.slice(12, 14), 2),
        2: parseInt(binary.slice(14, 16), 2),
      },
      3: {
        0: parseInt(binary.slice(16, 18), 2),
        1: parseInt(binary.slice(18, 20), 2),
        2: parseInt(binary.slice(20, 22), 2),
      },
      4: {
        0: parseInt(binary.slice(22, 24), 2),
        1: parseInt(binary.slice(24, 26), 2),
        2: parseInt(binary.slice(26, 28), 2),
      },
      5: { 0: parseInt(binary.slice(28, 30), 2), 1: parseInt(binary.slice(30, 32), 2) },
    };
  });
  return skills;
}

// Material Dashboard 2 React context provider
function CurrentSkillsProvider({ children }) {
  const initialState = {
    currentSkills: calculateStartingCurrentSkills(),
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <CurrentSkills.Provider value={value}>{children}</CurrentSkills.Provider>;
}

// Material Dashboard 2 React custom hook for using context
function useSkillsContext() {
  const context = useContext(CurrentSkills);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the MaterialUIControllerProvider
CurrentSkillsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setCurrentSkills = (dispatch, value) => dispatch({ type: "CURRENT_SKILLS", value });
const setResetSkills = (dispatch, value) => dispatch({ type: "RESET_SKILLS", value });

export { CurrentSkillsProvider, useSkillsContext, setCurrentSkills, setResetSkills };
