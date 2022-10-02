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

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function SpeedCalc() {
  // const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [hero1, setHero1] = useState("");
  // const [hero2, setHero2] = useState("");
  // const [hero3, setHero3] = useState("");
  // const [hero4, setHero4] = useState("");
  // const [hero5, setHero5] = useState("");

  const handleChange = (event, func) => {
    func(event.target.value);
  };

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

  const columns = [
    { Header: "project", accessor: "project", width: "30%", align: "left" },
    { Header: "budget", accessor: "budget", align: "left" },
    { Header: "status", accessor: "status", align: "center" },
    { Header: "completion", accessor: "completion", align: "center" },
    { Header: "action", accessor: "action", align: "center" },
  ];

  const rows = [
    {
      project: <Project image={LogoAsana} name="Asana" />,
      budget: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          $2,500
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      completion: <Progress color="info" value={60} />,
      action: (
        <MDTypography component="a" href="#" color="text">
          <Icon>more_vert</Icon>
        </MDTypography>
      ),
    },
    {
      project: <Project image={logoGithub} name="Github" />,
      budget: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          $5,000
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          done
        </MDTypography>
      ),
      completion: <Progress color="success" value={100} />,
      action: (
        <MDTypography component="a" href="#" color="text">
          <Icon>more_vert</Icon>
        </MDTypography>
      ),
    },
    {
      project: <Project image={logoAtlassian} name="Atlassian" />,
      budget: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          $3,400
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          canceled
        </MDTypography>
      ),
      completion: <Progress color="error" value={30} />,
      action: (
        <MDTypography component="a" href="#" color="text">
          <Icon>more_vert</Icon>
        </MDTypography>
      ),
    },
    {
      project: <Project image={logoSpotify} name="Spotify" />,
      budget: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          $14,000
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          working
        </MDTypography>
      ),
      completion: <Progress color="info" value={80} />,
      action: (
        <MDTypography component="a" href="#" color="text">
          <Icon>more_vert</Icon>
        </MDTypography>
      ),
    },
    {
      project: <Project image={logoSlack} name="Slack" />,
      budget: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          $1,000
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          canceled
        </MDTypography>
      ),
      completion: <Progress color="error" value={0} />,
      action: (
        <MDTypography component="a" href="#" color="text">
          <Icon>more_vert</Icon>
        </MDTypography>
      ),
    },
    {
      project: <Project image={logoInvesion} name="Invesion" />,
      budget: (
        <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
          $2,300
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          done
        </MDTypography>
      ),
      completion: <Progress color="success" value={100} />,
      action: (
        <MDTypography component="a" href="#" color="text">
          <Icon>more_vert</Icon>
        </MDTypography>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          {/* Arena Team */}
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Arena Calculator
                </MDTypography>
              </MDBox>
              <MDBox pt={3} display="flex" alignItems="center" lineHeight={1}>
                <MDBox ml={6} lineHeight={1}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Hero</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={hero1}
                      label="Hero"
                      onChange={(e) => handleChange(e, setHero1)}
                    >
                      <MenuItem value={9}>
                        <img src="test.jpg" alt="hero portrait" />
                        &nbps;Hero
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </MDBox>
                <MDBox ml={6} lineHeight={1}>
                  <FormControl fullWidth>
                    <MDInput label="Speed Stat" />
                  </FormControl>
                </MDBox>
              </MDBox>
              <MDBox pt={3}>Arena Slot 1</MDBox>
              <MDBox pt={3}>Arena Slot 2</MDBox>
              <MDBox pt={3}>Arena Slot 3</MDBox>
              <MDBox pt={3}>Arena Slot 4</MDBox>
              <MDBox pt={3}>Arena Slot 5</MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          {/* Project Table */}
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
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
