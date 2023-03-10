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
import { useEffect, useState } from "react";
import axios from "axios";
import { ImagePlus, UserPlus } from "lucide-react";
const Add = () => {
  const addEmployeeUrl = "http://localhost:9091/employee/add";
  const getAllDepartmentUrl = "http://localhost:9091/department/findAll";
  const getAllDesignationUrl = "http://localhost:9091/designation/findAll";
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [designationId, setDesignationId] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [experience, setExperience] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [status, setStatus] = useState("");
  const [bonus, setBonus] = useState();
  const [salary, setSalary] = useState();
  const [paymentMode, setPaymentMode] = useState("NEFT");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    fetchDepartments();
    fetchDesignations();
  }, []);

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
        console.log(departmentId);
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
        if (e.target.value === "" || pattern.test(e.target.value)) {
          setExperience(e.target.value);
        }
        break;
      case "joinDate":
        setJoinDate(e.target.value);
        break;
      case "status":
        setStatus(e.target.value);
        break;
      case "salary":
        if (e.target.value === "" || pattern.test(e.target.value)) {
          setSalary(e.target.value);
        }
        break;
      case "bonus":
        if (e.target.value === "" || pattern.test(e.target.value)) {
          setBonus(e.target.value);
        }
        break;
      case "paymentMode":
        setPaymentMode(e.target.value);
        break;
      case "paymentStatus":
        setPaymentStatus(e.target.value);
        break;
      default:
        break;
    }
  };

  const addEmployee = (e) => {
    e.preventDefault();
    axios
      .post(addEmployeeUrl, {
        address: address,
        dateOfBirth: dateOfBirth,
        departmentId: departmentId,
        designationId: designationId,
        email: email,
        employmentType: employmentType,
        experience: parseFloat(experience).toFixed(1),
        joinDate: joinDate,
        name: name,
        phoneNumber: phone,
        status: status,
        payroll: {
          bonus: bonus,
          salary: salary,
          status: paymentStatus,
          paymentMode: paymentMode,
        },
      })
      .then((res) => {
        handleSnackOpen();
        console.log(res);
        setName("");
        setStatus("");
        setExperience("");
        setPhone("");
        setEmploymentType("");
        setEmail("");
        setJoinDate("");
        setDesignationId("");
        setDepartmentId("");
        setDateOfBirth(" ");
        setAddress("");
        setSalary("");
        setBonus("");
        setPaymentMode("");
        setPaymentStatus("");
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
            Create an Employee
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
              <form method="POST" onSubmit={addEmployee}>
                <Stack direction="row" spacing={3} mb={4}>
                  <TextField
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  />
                  <TextField
                    id="email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    value={email}
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  />
                </Stack>
                <Stack direction="row" spacing={3} mb={4}>
                  <TextField
                    id="phone"
                    label="Phone Number"
                    variant="outlined"
                    inputProps={{ maxLength: 10, minLength: 10 }}
                    name="phone"
                    value={phone}
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  />
                  <TextField
                    id="experience"
                    name="experience"
                    label="Experience"
                    value={experience}
                    variant="outlined"
                    inputProps={{ maxLength: 2, minLength: 1 }}
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
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
                    required
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
                    required
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
                      value={dateOfBirth}
                      placeholder="Date of Birth"
                      onChange={handleAddEmployeeChange}
                      type="date"
                      required
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
                      value={joinDate}
                      onChange={handleAddEmployeeChange}
                      type="date"
                      required
                    />
                  </Box>
                </Stack>
                <Stack direction={`row`} spacing={3} mt={4} mb={4}>
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
                    required
                  >
                    <MenuItem disabled>Choose Employment Type </MenuItem>
                    <MenuItem value="Full-Time">Full Time</MenuItem>
                    <MenuItem value="Intern">Intern</MenuItem>
                  </TextField>
                  <TextField
                    name="status"
                    value={status}
                    onChange={handleAddEmployeeChange}
                    select // tell TextField to render select
                    label="Status"
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  >
                    <MenuItem disabled>Choose Status</MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </TextField>
                </Stack>
                <Stack direction="row" spacing={3} mb={4}>
                  <TextField
                    id="salary"
                    label="Salary"
                    variant="outlined"
                    name="salary"
                    value={salary}
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  />
                  <TextField
                    id="bonus"
                    name="bonus"
                    label="Bonus"
                    value={bonus}
                    variant="outlined"
                    onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  />
                </Stack>
                <Stack direction={`row`} spacing={3} mt={4} mb={4}>
                  <TextField
                    name="paymentMode"
                    value={paymentMode}
                    onChange={handleAddEmployeeChange}
                    select
                    label="Type"
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  >
                    <MenuItem disabled>Payment Mode </MenuItem>
                    <MenuItem value="NEFT">NEFT</MenuItem>
                    <MenuItem value="Check">Check</MenuItem>
                    <MenuItem value="Cash">Cash</MenuItem>
                  </TextField>
                  <TextField
                    name="paymentStatus"
                    value={paymentStatus}
                    onChange={handleAddEmployeeChange}
                    select // tell TextField to render select
                    label="Payment Status"
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  >
                    <MenuItem disabled>Payment Status</MenuItem>
                    <MenuItem value="Paid">Paid</MenuItem>
                    <MenuItem value="Yet to be paid">Yet to be paid</MenuItem>
                  </TextField>
                </Stack>
                <Stack direction={`row`} spacing={3} mt={4}>
                  <TextField
                    name="address"
                    id="address"
                    label="Address"
                    value={address}
                    multiline
                    rows={4}
                    onChange={handleAddEmployeeChange}
                    sx={{ display: "flex", flex: 1 }}
                    required
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
                    type="submit"
                    variant="contained"
                    startIcon={<UserPlus />}
                  >
                    Add Employee
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
          sx={{ width: "100%", bgcolor: "success.dark", color: "white" }}
        >
          Employee added successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
export default Add;
