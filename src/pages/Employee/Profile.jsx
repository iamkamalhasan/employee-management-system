import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ImagePlus, UserCheck } from "lucide-react";
import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Profile = () => {
  const { state: employeeState } = useLocation();
  const getEmployeeByIdUrl = `http://localhost:9091/employee/findById/${employeeState.employee_id}`;
  const getAllDepartmentUrl = "http://localhost:9091/department/findAll";
  const getAllDesignationUrl = "http://localhost:9091/designation/findAll";
  const updateEmployeeUrl = "http://localhost:9091/employee/update";
  const [employeesData, setEmployeesData] = useState([]);
  const [id, setId] = useState(employeeState.employee_id);
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [designationId, setDesignationId] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [experience, setExperience] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [status, setStatus] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [designationName, setDesignationName] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    fetchEmployee();
    fetchDepartments();
    fetchDesignations();
  }, []);

  useEffect(() => {
    departments.forEach((department) => {
      if (department.name === departmentName) {
        setDepartmentId(department.id);
      }
    });
    designations.forEach((designation) => {
      if (designation.name === designationName) {
        setDesignationId(designation.id);
      }
    });
  }, [departmentName, designationName, departments, designations]);

  const fetchEmployee = () => {
    axios.get(getEmployeeByIdUrl).then((res) => {
      setName(res.data.name);
      setPhone(res.data.phoneNumber);
      setEmail(res.data.email);
      setExperience(res.data.experience);
      setEmploymentType(res.data.employmentType);
      setStatus(res.data.status);
      setAddress(res.data.address);
      setJoinDate(res.data.joinDate);
      setDateOfBirth(res.data.dateOfBirth);
      setDepartmentName(res.data.departmentName);
      setDesignationName(res.data.designationName);
    });
  };
  const fetchDepartments = () => {
    axios.get(getAllDepartmentUrl).then((res) => {
      setDepartments(res.data);
    });
  };

  const fetchDesignations = () => {
    axios.get(getAllDesignationUrl).then((res) => {
      setDesignations(res.data);
    });
  };

  const handleSnackOpen = (message) => {
    setSnackOpen(true);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const handleAddEmployeeChange = (e) => {
    const pattern = /^[0-9\b]+$/;
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "phone":
        if (e.target.value === "" || pattern.test(e.target.value)) {
          setPhone(e.target.value);
        }
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "dateOfBirth":
        setDateOfBirth(e.target.value);
        break;
      case "departmentId":
        e.stopPropagation();
        setDepartmentId(e.target.value);
        break;
      case "designationId":
        e.stopPropagation();
        setDesignationId(e.target.value);
        console.log(designationId);
        break;
      case "employmentType":
        setEmploymentType(e.target.value);
        console.log(employmentType);
        break;
      case "experience":
        setExperience(e.target.value);
        console.log(experience);
        break;
      case "joinDate":
        setJoinDate(e.target.value);
        break;
      case "status":
        setStatus(e.target.value);
        break;
      default:
        break;
    }
  };

  const updateEmployee = () => {
    axios
      .put(`${updateEmployeeUrl}/${id}`, {
        name: name,
        email: email,
        phoneNumber: phone,
        address: address,
        joinDate: joinDate,
        status: status,
        dateOfBirth: dateOfBirth,
        experience: experience,
        employmentType: employmentType,
        departmentId: departmentId,
        designationId: designationId,
      })
      .then((res) => {
        handleSnackOpen();
        console.log("Update Success");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontWeight: "600",
            }}
          >
            Employee Profile
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} mb={8}>
        <Grid item xs={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
              borderRadius: 4,
              minHeight: "300px",
              boxShadow:
                "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 8px -4px rgb(145 158 171 / 12%)",
            }}
          >
            <IconButton
              color="grey.700"
              aria-label="upload picture"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "150px",
                height: "150px",
                bgcolor: "rgba(0, 0, 0, 0.04)",
              }}
            >
              <input hidden accept="image/*" type="file" />
              <ImagePlus />
              <Typography mt={1} fontSize={`14px`}>
                Image upload<sup>*</sup>
              </Typography>
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              boxShadow:
                "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 8px -4px rgb(145 158 171 / 12%)",
            }}
          >
            <Box>
              <form method="PUT">
                <Stack direction="row" spacing={3} mb={4}>
                  <TextField
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={name || ""}
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                  />
                  <TextField
                    id="email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    value={email || ""}
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                  />
                </Stack>
                <Stack direction="row" spacing={3} mb={4}>
                  <TextField
                    id="phone"
                    label="Phone Number"
                    variant="outlined"
                    inputProps={{ maxLength: 10, minLength: 10 }}
                    name="phone"
                    value={phone || ""}
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                  />
                  <TextField
                    id="experience"
                    name="experience"
                    label="Experience"
                    value={experience || ""}
                    variant="outlined"
                    inputProps={{ maxLength: 2, minLength: 1 }}
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                  />
                </Stack>
                <Stack direction="row" spacing={3} mb={4}>
                  <TextField
                    name="departmentId"
                    value={departmentId}
                    onChange={handleAddEmployeeChange}
                    select
                    label="Department"
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                  >
                    <MenuItem disabled>Choose Department</MenuItem>
                    {departments.map((department) => (
                      <MenuItem key={department.id} value={department.id}>
                        {department.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    name="designationId"
                    value={designationId}
                    select
                    label="Designation"
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                  >
                    <MenuItem disabled>Choose Designation</MenuItem>
                    {designations.map((designation) => (
                      <MenuItem key={designation.id} value={designation.id}>
                        {designation.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
                <Stack direction={`row`} spacing={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <InputLabel
                      htmlFor="DOB"
                      sx={{
                        marginBottom: "10px",
                      }}
                    >
                      Date of Birth
                    </InputLabel>
                    <OutlinedInput
                      name="dateOfBirth"
                      id="DOB"
                      placeholder="Date of Birth"
                      onChange={handleAddEmployeeChange}
                      type="date"
                      value={dateOfBirth}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <InputLabel
                      htmlFor="DOB"
                      sx={{
                        marginBottom: "10px",
                      }}
                    >
                      Join Date
                    </InputLabel>
                    <OutlinedInput
                      name="joinDate"
                      id="joinDate"
                      placeholder="Join Date"
                      min="1960-01-01"
                      max="2050-12-31"
                      value={joinDate}
                      onChange={handleAddEmployeeChange}
                      type="date"
                    />
                  </Box>
                </Stack>
                <Stack direction={`row`} spacing={3} mt={4}>
                  <TextField
                    name="employmentType"
                    value={employmentType}
                    onChange={handleAddEmployeeChange}
                    select
                    label="Type"
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                  >
                    <MenuItem disabled>Choose Employment Type </MenuItem>
                    <MenuItem value="Full-Time">Full Time</MenuItem>
                    <MenuItem value="Intern">Intern</MenuItem>
                  </TextField>
                  <TextField
                    name="status"
                    value={status}
                    onChange={handleAddEmployeeChange}
                    select
                    label="Status"
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                  >
                    <MenuItem disabled>Choose Status</MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </TextField>
                </Stack>
                <Stack direction={`row`} spacing={3} mt={4}>
                  <TextField
                    name="address"
                    id="address"
                    label="Address"
                    value={address || ""}
                    multiline
                    rows={4}
                    onChange={handleAddEmployeeChange}
                    sx={{ display: "flex", flex: 1 }}
                  />
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "end",
                    mt: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<UserCheck />}
                    onClick={updateEmployee}
                  >
                    Update
                  </Button>
                </Box>
              </form>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity="success"
          sx={{ width: "100%", bgcolor: "success.darker", color: "white" }}
        >
          Employee updated successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Profile;
