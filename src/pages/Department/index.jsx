import { useState, useEffect } from "react";
import axios from "axios";
import {
  Paper,
  Grid,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Alert,
  Snackbar,
} from "@mui/material";
import { Plus, Edit, UserPlus } from "lucide-react";

const Department = () => {
  const getAllEmployeeUrl = "http://localhost:9091/employee/findAll";
  const getAllDepartmentUrl = "http://localhost:9091/department/findAll";
  const addDepartmentUrl = "http://localhost:9091/department/add";
  const updateDepartmentUrl = "http://localhost:9091/department/update";

  const [employeesData, setEmployeesData] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [snackAddOpen, setSnackAddOpen] = useState(false);
  const [snackUpdateOpen, setSnackUpdateOpen] = useState(false);

  useEffect(() => {
    fetchAllEmployee();
    fetchDepartment();
  }, []);

  const fetchAllEmployee = () => {
    axios.get(getAllEmployeeUrl).then((res) => setEmployeesData(res.data));
  };

  const fetchDepartment = () => {
    axios.get(getAllDepartmentUrl).then((res) => setDepartments(res.data));
  };

  const handleAddDepartmentOpen = () => {
    setAddDialogOpen(true);
  };

  const handleAddDepartmentClose = () => {
    setAddDialogOpen(false);
  };

  const handleUpdateDepartmentOpen = (e, departmentId, departmentName) => {
    setUpdateDialogOpen(true);
    setDepartmentId(departmentId);
    setDepartmentName(departmentName);
  };

  const handleUpdateDepartmentClose = () => {
    setUpdateDialogOpen(false);
  };

  const addDepartment = () => {
    axios
      .post(addDepartmentUrl, {
        departmentName: departmentName,
      })
      .then((res) => {
        console.log(res);
        fetchDepartment();
        handleSnackAddOpen();
        setAddDialogOpen(false);
        setDepartmentName("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateDepartment = () => {
    axios
      .put(`${updateDepartmentUrl}/${departmentId}`, {
        departmentName: departmentName,
      })
      .then((res) => {
        fetchDepartment();
        handleSnackUpdateOpen();
        setUpdateDialogOpen(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSnackAddOpen = (message) => {
    setSnackAddOpen(true);
  };

  const handleSnackAddClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackAddOpen(false);
  };

  const handleSnackUpdateOpen = (message) => {
    setSnackUpdateOpen(true);
  };

  const handleSnackUpdateClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackUpdateOpen(false);
  };

  return (
    <>
      <Grid container mb={4}>
        <Grid item xs={10}>
          <Typography variant={`h4`} fontWeight={`600`}>
            Departments
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            type="submit"
            variant="contained"
            startIcon={<Plus />}
            onClick={handleAddDepartmentOpen}
          >
            Add Department
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {departments
          .sort((a, b) => a.id - b.id)
          .map((department) => (
            <Grid item xs={3} key={department.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 4,
                  boxShadow:
                    "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 8px -4px rgb(145 158 171 / 12%)",
                }}
              >
                <Grid
                  container
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={10}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {department.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: ".825rem",
                        mt: 2,
                      }}
                    >
                      {
                        employeesData.filter(
                          (employee) =>
                            employee.departmentName == department.name
                        ).length
                      }{" "}
                      Employees
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      color="primary"
                      aria-label="Edit Department"
                      component="label"
                      onClick={(e) =>
                        handleUpdateDepartmentOpen(
                          e,
                          department.id,
                          department.name
                        )
                      }
                    >
                      <Edit size={20} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
      </Grid>
      <Dialog open={addDialogOpen} onClose={handleAddDepartmentClose}>
        <DialogTitle>Add Department</DialogTitle>
        <DialogContent sx={{ pt: "1rem !important" }}>
          <TextField
            autoFocus
            id="departmentName"
            label="Department Name"
            type="text"
            fullWidth
            variant="outlined"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleAddDepartmentClose}
            sx={{
              px: 4,
              mr: 2,
              ml: 2,
              mb: 2,
            }}
          >
            Cancel
          </Button>
          <Button
            variant={`contained`}
            onClick={addDepartment}
            sx={{
              px: 4,
              mr: 2,
              ml: 2,
              mb: 2,
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={updateDialogOpen} onClose={handleUpdateDepartmentClose}>
        <DialogTitle>Update Department</DialogTitle>
        <DialogContent sx={{ pt: "1rem !important" }}>
          <TextField
            autoFocus
            id="departmentName"
            label="Department Name"
            type="text"
            fullWidth
            variant="outlined"
            value={departmentName || ""}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleUpdateDepartmentClose}
            sx={{
              px: 4,
              mr: 2,
              ml: 2,
              mb: 2,
            }}
          >
            Cancel
          </Button>
          <Button
            variant={`contained`}
            onClick={updateDepartment}
            sx={{
              px: 4,
              mr: 2,
              ml: 2,
              mb: 2,
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackAddOpen}
        autoHideDuration={3000}
        onClose={handleSnackAddClose}
      >
        <Alert
          onClose={handleSnackAddClose}
          severity="success"
          sx={{ width: "100%", bgcolor: "success.darker", color: "white" }}
        >
          Department added successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={snackUpdateOpen}
        autoHideDuration={3000}
        onClose={handleSnackUpdateClose}
      >
        <Alert
          onClose={handleSnackUpdateClose}
          severity="success"
          sx={{ width: "100%", bgcolor: "success.darker", color: "white" }}
        >
          Department updated successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
export default Department;
