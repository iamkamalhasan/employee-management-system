import Chart from "react-apexcharts";
import { alpha } from "@mui/material/styles";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import theme from "../../utils/theme.jsx";
import {
  Eye,
  PlusCircle,
  TrendingDown,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import useFetch from "../../hooks/useFetch";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const getAllEmployeeUrl = "http://localhost:9091/employee/findAll";

  const [finalClickInfo, setFinalClickInfo] = useState(null);

  const navigate = useNavigate();

  const navigateToAddEmployee = () => {
    navigate("/employee/add");
  };

  const handleOnCellClick = (params) => {
    setFinalClickInfo(params);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios.get(getAllEmployeeUrl).then((res) => {
      setEmployeesData(res.data);
    });
  };

  const employeeTable = [
    // {
    //   field: "employeeId",
    //   headerName: "ID",
    // },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "departmentName",
      headerName: "Department",
      flex: 1,
    },
    {
      field: "employmentType",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "View",
      renderCell: (cellId) => {
        return (
          <Button
            variant="contained"
            onClick={() => {
              navigate("/employee/profile", {
                state: {
                  employee_id: cellId.id,
                },
              });
            }}
          >
            View
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Grid container spacing={3} mb={6}>
        <Grid item xs={3}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              p: 2,
              boxShadow:
                "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 8px -4px rgb(145 158 171 / 12%)",
            }}
          >
            <Grid container>
              <Grid item xs={8}>
                <Typography
                  mb={2}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Total Employees
                </Typography>
                <Typography variant={`h3`} fontWeight={`medium`}>
                  {employeesData.length}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Stack
                  spacing={1}
                  justifyContent={`center`}
                  alignItems={`center`}
                >
                  <Box
                    sx={{
                      bgcolor: "primary.lighter",
                      color: "primary.main",
                      p: 1,
                      borderRadius: "50%",
                      mt: 1.5,
                    }}
                  >
                    <TrendingUp />
                  </Box>
                  <Typography>+4.2%</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              p: 2,
              boxShadow:
                "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 8px -4px rgb(145 158 171 / 12%)",
            }}
          >
            <Grid container>
              <Grid item xs={8}>
                <Typography
                  mb={2}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Active Employees
                </Typography>
                <Typography variant={`h3`} fontWeight={`medium`}>
                  {
                    employeesData.filter(
                      (employee) => employee.status === "Active"
                    ).length
                  }
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Stack
                  spacing={1}
                  justifyContent={`center`}
                  alignItems={`center`}
                >
                  <Box
                    sx={{
                      bgcolor: "info.lighter",
                      color: "info.main",
                      p: 1,
                      borderRadius: "50%",
                      mt: 1.5,
                    }}
                  >
                    <TrendingUp />
                  </Box>
                  <Typography>+0.8%</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              p: 2,
              boxShadow:
                "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 8px -4px rgb(145 158 171 / 12%)",
            }}
          >
            <Grid container>
              <Grid item xs={8}>
                <Typography
                  mb={2}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Inactive Employees
                </Typography>
                <Typography variant={`h3`} fontWeight={`medium`}>
                  {
                    employeesData.filter(
                      (employee) => employee.status == "Inactive"
                    ).length
                  }
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Stack
                  spacing={1}
                  justifyContent={`center`}
                  alignItems={`center`}
                >
                  <Box
                    sx={{
                      bgcolor: "error.lighter",
                      color: "error.main",
                      p: 1,
                      borderRadius: "50%",
                      mt: 1.5,
                    }}
                  >
                    <TrendingDown />
                  </Box>
                  <Typography>-18.2%</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              p: 2,
              boxShadow:
                "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 8px -4px rgb(145 158 171 / 12%)",
            }}
          >
            <Grid container>
              <Grid item xs={8}>
                <Typography
                  mb={2}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Inactive Employees
                </Typography>
                <Typography variant={`h3`} fontWeight={`medium`}>
                  0
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Stack
                  spacing={1}
                  justifyContent={`center`}
                  alignItems={`center`}
                >
                  <Box
                    sx={{
                      bgcolor: "error.lighter",
                      color: "error.main",
                      p: 1,
                      borderRadius: "50%",
                      mt: 1.5,
                    }}
                  >
                    <TrendingDown />
                  </Box>
                  <Typography>-18.2%</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container xs={`auto`} mb={3} mr={3} justifyContent={`flex-end`}>
        <Button
          variant="contained"
          startIcon={<UserPlus />}
          onClick={navigateToAddEmployee}
        >
          Add Employee
        </Button>
      </Grid>
      <Grid container mb={8}>
        <Grid item xs>
          <Paper
            elevation={0}
            sx={{
              height: "520px",
              borderColor: "transparent",
              borderRadius: 4,
              boxShadow:
                "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 8px -4px rgb(145 158 171 / 12%)",
            }}
            className={`scrollbar`}
          >
            <DataGrid
              columns={employeeTable}
              rows={employeesData}
              getRowId={(rows) => rows.id}
              components={{ Toolbar: GridToolbar }}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              density={"comfortable"}
              disableDensitySelector
              disableColumnSelector
              onCellClick={handleOnCellClick}
              className={`scrollbar`}
              sx={{
                border: 0,
                "& .MuiDataGrid-toolbarContainer": {
                  height: "50px",
                  px: 4,
                  py: 2,
                },
                "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
                  outline: "none !important",
                },
                "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus":
                  {
                    outline: "none !important",
                  },
                "& .MuiDataGrid-row": {
                  cursor: "pointer",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: 0,
                },
                "& .MuiDataGrid-footerContainer": {
                  height: "60px",
                },
                "& .MuiDataGrid-columnSeparator": {
                  display: "none",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  pr: 1,
                },
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Employee;
