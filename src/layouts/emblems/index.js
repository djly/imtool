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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import { useSkillsContext, setResetSkills, setCopiedSkills } from "context/skillsContext";

import { useState } from "react";

// Data
import EmblemTree from "layouts/emblems/components/emblem.tree.component";

function Emblems() {
  const [controller, dispatch] = useSkillsContext();
  const { copied } = controller;

  function resetTree() {
    setResetSkills(dispatch, {});
  }

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopiedSkills(dispatch);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <EmblemTree />
        <MDBox p={2} mt="auto">
          <MDButton
            component="a"
            rel="noreferrer"
            variant="gradient"
            fullWidth
            onClick={(e) => resetTree()}
            onKeyPress={(e) => resetTree()}
          >
            Reset Tree
          </MDButton>
        </MDBox>
        <MDBox p={2}>
          You can share your build with others by copying the url{" "}
          <MDButton onClick={(e) => copy()}>{!copied ? "Copy URL" : "Copied!"}</MDButton>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Emblems;
