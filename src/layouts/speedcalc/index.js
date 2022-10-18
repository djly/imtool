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

import React, { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

import Icon from "@mui/material/Icon";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Material Dashboard 2 React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

import Heroes from "data/heroes";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import EmblemTree from "../emblems/components/emblem.tree.component";

function handleChange(event, func) {
  const s = `Selected event ${event.target.value}`;
  console.log(s, func);
  func(event.target.value);
}

function SkillSelect({ hero, value, setSkill }) {
  return (
    <MDBox display="flex" alignItems="center">
      <Box sx={{ minWidth: 120 }}>
        <InputLabel id="select-skill">Skill</InputLabel>
        <Select
          labelId="select-skill"
          id="demo-simple-select"
          value={value}
          label="Skill"
          onChange={(e) => handleChange(e, setSkill)}
        >
          <MenuItem value={1}>
            <MDAvatar src="https://bit.ly/34BY10g" alt="Avatar" variant="circular" size="xs" />
            &nbsp;Skill 1: {hero.skill1}
          </MenuItem>
          <MenuItem value={2}>
            <MDAvatar src="https://bit.ly/34BY10g" alt="Avatar" variant="circular" size="xs" />
            &nbsp;Skill 2: {hero.skill2}
          </MenuItem>
          <MenuItem value={3}>
            <MDAvatar src="https://bit.ly/34BY10g" alt="Avatar" variant="circular" size="xs" />
            &nbsp;Skill 3: {hero.skill3}
          </MenuItem>
          <MenuItem value={4}>
            <MDAvatar src="https://bit.ly/34BY10g" alt="Avatar" variant="circular" size="xs" />
            &nbsp;Skill 4: {hero.skill4}
          </MenuItem>
        </Select>
      </Box>
    </MDBox>
  );
}

function HeroSelect({ value, setHero }) {
  return (
    <MDBox display="flex" alignItems="center">
      <Box sx={{ minWidth: 120 }}>
        <InputLabel id="select-hero">Hero</InputLabel>
        <Select
          labelId="select-hero"
          id="demo-simple-select"
          value={value}
          label="Hero"
          onChange={(e) => handleChange(e, setHero)}
        >
          {Heroes.map((hero) => (
            <MenuItem key={hero.id} value={hero.id}>
              <MDAvatar src={hero.img} alt="Avatar" variant="circular" size="xs" />
              &nbsp;{hero.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </MDBox>
  );
}

function HeroConfig(heroSelected, heroHandler, skillSelected, skillHandler) {
  return (
    <Grid container spacing={1} xs={6}>
      <Grid item xs={6}>
        <MDBox pt={1}>Select Hero</MDBox>
      </Grid>
      <Grid item xs={6}>
        <MDBox pt={1}>
          <HeroSelect value={heroSelected} setHero={heroHandler} />
        </MDBox>
      </Grid>
      <Grid item xs={6}>
        <MDBox pt={1}>Select Skill</MDBox>
      </Grid>
      <Grid item xs={6}>
        <MDBox pt={1}>
          <SkillSelect
            hero={{
              name: "heroesnamehere",
              skill1: "test",
              skill2: "test2",
              skill3: "test3",
              skill4: "test4",
            }}
            value={skillSelected}
            setSkill={skillHandler}
          />
        </MDBox>
      </Grid>
    </Grid>
  );
}

function SpeedCalc() {
  // const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [hero1, setHero1] = useState("");
  const [hero2, setHero2] = useState("");
  const [hero3, setHero3] = useState("");
  const [hero4, setHero4] = useState("");
  const [hero5, setHero5] = useState("");

  const [hero1Skill, setHero1Skill] = useState("");
  const [hero2Skill, setHero2Skill] = useState("");
  const [hero3Skill, setHero3Skill] = useState("");
  const [hero4Skill, setHero4Skill] = useState("");
  const [hero5Skill, setHero5Skill] = useState("");

  const Project = React.memo(({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  ));

  const Progress = React.memo(({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  ));

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        In order to use this calculator you must list the units you plan to use in order of speed.
        The fastest hero goes in hero slot 1.
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          {/* Arena Team */}
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-2}
                py={1}
                px={1}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Hero 1
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={1}>
                <HeroConfig
                  heroSelected={hero1}
                  heroHandler={setHero1}
                  skillSelected={hero1Skill}
                  skillHandler={setHero1Skill}
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-2}
                py={1}
                px={1}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Hero 2
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={1}>
                <HeroConfig
                  heroSelected={hero2}
                  heroHandler={setHero2}
                  skillSelected={hero2Skill}
                  skillHandler={setHero2Skill}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SpeedCalc;
