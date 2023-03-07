import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/index";
import Project from "../pages/Project/index";
import Client from "../pages/Client/index";
import Department from "../pages/Department/index";
import Employee from "../pages/Employee/index";
import SkillsAndCertifications from "../pages/SkillsAndCertifications/index";
import Timesheet from "../pages/Timesheet/index";
import Payroll from "../pages/Payroll/index";
import Profile from "../pages/Employee/Profile";
import Sidenav from "./Sidenav/Sidenav";
import Topnav from "./Topnav/Topnav";
import { Box, Grid, Paper } from "@mui/material";
import Add from "../pages/Employee/Add";
import Designation from "../pages/Designation/index.jsx";
import ProjectAdd from "../pages/Project/ProjectAdd.jsx";

const Layout = () => {
  return (
    <>
      <Box display={`flex`} minHeight={`100vh`}>
        <Paper
          elevation={0}
          component={`header`}
          sx={{
            width: "calc(100% - 17rem)",
            borderRadius: 0,
            height: "60px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            px: 3,
            position: "fixed",
            top: 0,
            left: "auto",
            right: "0",
            zIndex: "100",
            borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
          }}
        >
          <Topnav />
        </Paper>
        <Box
          component={`aside`}
          sx={{
            width: "17rem",
            display: "flex",
            height: "100%",
            position: "fixed",
            top: 0,
            outline: 0,
            left: 0,
          }}
        >
          <Sidenav />
        </Box>
        <Grid container>
          <Grid item minWidth={`17rem`}></Grid>
          <Grid item xs>
            <Box
              component={`main`}
              className={`scrollbar`}
              px={`3rem`}
              pt={`7rem`}
              minWidth={`100%`}
              minHeight={`100vh`}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/project" element={<Project />} />
                <Route path="/project/add" element={<ProjectAdd />} />
                <Route path="/client" element={<Client />} />
                <Route path="/department" element={<Department />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/designation" element={<Designation />} />
                <Route path="/employee/profile" element={<Profile />} />
                <Route path="/employee/add" element={<Add />} />
                <Route
                  path="/skills&certifications"
                  element={<SkillsAndCertifications />}
                />
                <Route path="/timesheet" element={<Timesheet />} />
                <Route path="/payroll" element={<Payroll />} />
              </Routes>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Layout;
