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
  Snackbar,
  Alert,
} from "@mui/material";
import { Plus, Edit, UserPlus } from "lucide-react";

const Designation = () => {
  const getAllEmployeeUrl = "http://localhost:9091/employee/findAll";
  const getAllDesignationUrl = "http://localhost:9091/designation/findAll";
  const addDesignationUrl = "http://localhost:9091/designation/add";
  const updateDesignationUrl = "http://localhost:9091/designation/update";

  const [employeesData, setEmployeesData] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [designationId, setDesignationId] = useState("");
  const [designationName, setDesignationName] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [snackAddOpen, setSnackAddOpen] = useState(false);
  const [snackUpdateOpen, setSnackUpdateOpen] = useState(false);

  useEffect(() => {
    fetchAllEmployee();
    fetchDesignation();
  }, []);

  const fetchAllEmployee = () => {
    axios.get(getAllEmployeeUrl).then((res) => setEmployeesData(res.data));
  };

  const fetchDesignation = () => {
    axios.get(getAllDesignationUrl).then((res) => setDesignations(res.data));
  };

  const handleAddDesignationOpen = () => {
    setAddDialogOpen(true);
  };

  const handleAddDesignationClose = () => {
    setAddDialogOpen(false);
  };

  const handleUpdateDesignationOpen = (e, designationId, designationName) => {
    setUpdateDialogOpen(true);
    setDesignationId(designationId);
    setDesignationName(designationName);
  };

  const handleUpdateDesignationClose = () => {
    setUpdateDialogOpen(false);
  };

  const addDesignation = () => {
    axios
      .post(addDesignationUrl, {
        designationName: designationName,
      })
      .then((res) => {
        console.log(res);
        fetchDesignation();
        handleSnackAddOpen();
        setAddDialogOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateDesignation = () => {
    axios
      .put(`${updateDesignationUrl}/${designationId}`, {
        designationName: designationName,
      })
      .then((res) => {
        fetchDesignation();
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

  console.log(designationName);

  return (
    <>
      <Grid container mb={4}>
        <Grid item xs={10}>
          <Typography variant={`h4`} fontWeight={`600`}>
            Designations
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            type="submit"
            variant="contained"
            startIcon={<Plus />}
            onClick={handleAddDesignationOpen}
          >
            Add Designation
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {designations
          .sort((a, b) => a.id - b.id)
          .map((designation) => (
            <Grid item xs={3} key={designation.id}>
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
                      {designation.name}
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
                            employee.designationName == designation.name
                        ).length
                      }{" "}
                      Employees
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      color="primary"
                      aria-label="Edit Designation"
                      component="label"
                      onClick={(e) =>
                        handleUpdateDesignationOpen(
                          e,
                          designation.id,
                          designation.name
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
      <Dialog open={addDialogOpen} onClose={handleAddDesignationClose}>
        <DialogTitle>Add Designation</DialogTitle>
        <DialogContent sx={{ pt: "1rem !important" }}>
          <TextField
            autoFocus
            id="designationName"
            label="Designation Name"
            type="text"
            fullWidth
            variant="outlined"
            value={designationName}
            onChange={(e) => setDesignationName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleAddDesignationClose}
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
            onClick={addDesignation}
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
      <Dialog open={updateDialogOpen} onClose={handleUpdateDesignationClose}>
        <DialogTitle>Update Designation</DialogTitle>
        <DialogContent sx={{ pt: "1rem !important" }}>
          <TextField
            autoFocus
            id="DesignationName"
            label="Designation Name"
            type="text"
            fullWidth
            variant="outlined"
            value={designationName || ""}
            onChange={(e) => setDesignationName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleUpdateDesignationClose}
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
            onClick={updateDesignation}
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
          Designation added successfully!
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
          Designation updated successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
export default Designation;
