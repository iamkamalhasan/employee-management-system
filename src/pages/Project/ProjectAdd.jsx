import {
  Grid,
  Typography,
  Paper,
  TextField,
  MenuItem,
  InputLabel,
  OutlinedInput,
  Box,
  Button,
  FormControl,
  Select,
  Checkbox,
  ListItemText,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import { FolderPlus, Plus, PlusCircle, UserPlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectAdd = () => {
  const getAllEmployeesUrl =
    "http://localhost:9091/employee/findAllByDesignation";
  const getAllDesignationUrl = "http://localhost:9091/designation/findAll";
  const [employeesData, setEmployeesData] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [teamId, setTeamId] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [createTeamBtnDisabled, setCreateTeamBtnDisabled] = useState(true);

  useEffect(() => {
    fetchEmployees();
    fetchDesignations();
  }, []);

  const fetchEmployees = () => {
    axios
      .get(getAllEmployeesUrl)
      .then((res) => setEmployeesData(res.data))
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(employeesData);

  const fetchDesignations = () => {
    axios
      .get(getAllDesignationUrl)
      .then((res) => setDesignations(res.data))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChangeEmployee = (e) => {
    setSelectedEmployees(e.target.value);
  };

  const handleDeletedEmployeeChip = (e, value) => {
    e.preventDefault();
    let updatedSelectedEmployees = [];
    for (let name of selectedEmployees) {
      if (name !== value) {
        updatedSelectedEmployees.push(name);
      }
    }
    setSelectedEmployees(updatedSelectedEmployees);
  };

  console.log(selectedEmployees);
  // const handleTeamAdd = () => {
  //   setTeamList([...teamList, { team: "" }]);
  //   setCreateTeamBtnDisabled(false);
  // };
  //
  // const handleTeamRemove = (index) => {
  //   const list = [...teamList];
  //   list.splice(index, 1);
  //   setTeamList(list);
  //   if (list.length === 0) {
  //     setCreateTeamBtnDisabled(true);
  //   }
  // };
  //
  // const handleTeamChange = (e) => {
  //   setSelectedTeam(e.target.value);
  // };

  return (
    <>
      <Grid container>
        <Grid item xs={12} mb={4}>
          <Typography variant={`h4`} fontWeight="600">
            New Project
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              boxShadow:
                "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 8px -4px rgb(145 158 171 / 12%)",
            }}
          >
            <form method="POST">
              <Grid container spacing={8} mb={4}>
                <Grid item xs={3}>
                  <TextField
                    id="projectName"
                    name="projectName"
                    label="Project Name"
                    variant="outlined"
                    value={name}
                    // onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    name="projectType"
                    // value={paymentMode}
                    // onChange={handleAddEmployeeChange}
                    select
                    label="Project Type"
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  >
                    <MenuItem value="Time & Material">Time & Material</MenuItem>
                    <MenuItem value="Retainer">Retainer</MenuItem>
                    <MenuItem value="Project Based">Project Based</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    name="projectStatus"
                    // value={paymentMode}
                    // onChange={handleAddEmployeeChange}
                    select
                    label="Project Status"
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  >
                    <MenuItem value="Ongoing">Ongoing</MenuItem>
                    <MenuItem value="Upcoming">Upcoming</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="projectValuation"
                    name="projectValuation"
                    label="Project Valuation"
                    variant="outlined"
                    value={name}
                    // onChange={handleAddEmployeeChange}
                    sx={{
                      display: "flex",
                      flex: 1,
                    }}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container spacing={8} mb={4}>
                <Grid item xs={4} mt={-2}>
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
                      Start Date
                    </InputLabel>
                    <OutlinedInput
                      name="ProjectStartDate"
                      id="ProjectStartDate"
                      // value={joinDate}
                      // onChange={handleAddEmployeeChange}
                      type="date"
                      required
                    />
                  </Box>
                </Grid>
                <Grid item xs={4} mt={-2}>
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
                      Planned Date
                    </InputLabel>
                    <OutlinedInput
                      name="ProjectStartDate"
                      id="ProjectStartDate"
                      // value={joinDate}
                      // onChange={handleAddEmployeeChange}
                      type="date"
                      required
                    />
                  </Box>
                </Grid>
                <Grid item xs={4} mt={-2}>
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
                      Actual Date
                    </InputLabel>
                    <OutlinedInput
                      name="joinDate"
                      id="joinDate"
                      placeholder="Join Date"
                      // value={joinDate}
                      // onChange={handleAddEmployeeChange}
                      type="date"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    name="address"
                    id="address"
                    label="Project Description"
                    // value={address}
                    multiline
                    rows={4}
                    // onChange={handleAddEmployeeChange}
                    sx={{ display: "flex", flex: 1 }}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
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
                      startIcon={<FolderPlus />}
                    >
                      Create New Project
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Grid container mt={8} mb={8}>
        <Grid container>
          <Grid item xs={12} mb={4}>
            <Typography variant={`h4`} fontWeight="600">
              Create Team
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              boxShadow:
                "0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 8px -4px rgb(145 158 171 / 12%)",
            }}
          >
            {/*<Grid container mb={6} spacing={8} alignItems={`center`}>*/}
            {/*  <Grid item xs={4}>*/}
            {/*    <TextField*/}
            {/*      name="designationId"*/}
            {/*      value={selectedTeam}*/}
            {/*      onChange={(e) => handleTeamChange(e)}*/}
            {/*      select*/}
            {/*      label="Team List"*/}
            {/*      // onChange={handleAddEmployeeChange}*/}
            {/*      sx={{*/}
            {/*        display: "flex",*/}
            {/*        flex: 1,*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <MenuItem disabled>Choose Designation</MenuItem>*/}
            {/*      {designations*/}
            {/*        .filter(*/}
            {/*          (designation) =>*/}
            {/*            designation.name !== "CEO" &&*/}
            {/*            designation.name !== "CTO" &&*/}
            {/*            designation.name !== "COO" &&*/}
            {/*            designation.name !== "CFO"*/}
            {/*        )*/}
            {/*        .map((designation) => (*/}
            {/*          <MenuItem key={designation.id} value={designation.id}>*/}
            {/*            {designation.name}*/}
            {/*          </MenuItem>*/}
            {/*        ))}*/}
            {/*    </TextField>*/}
            {/*  </Grid>*/}
            {/*  <Grid item xs={8}>*/}
            {/*    <Button*/}
            {/*      variant="outlined"*/}
            {/*      startIcon={<Plus />}*/}
            {/*      onClick={handleTeamAdd}*/}
            {/*    >*/}
            {/*      Add*/}
            {/*    </Button>*/}
            {/*  </Grid>*/}
            {/*</Grid>*/}
            {/*<form method="POST">*/}
            {/*  <Grid container spacing={8} mb={4}>*/}
            {/*    {teamList.map((team, index) => (*/}
            {/*      <Grid key={index} item xs={4}>*/}
            {/*        <Stack direction={`row`}>*/}
            {/*          <Button*/}
            {/*            variant="outlined"*/}
            {/*            color="error"*/}
            {/*            size={`small`}*/}
            {/*            onClick={() => handleTeamRemove(index)}*/}
            {/*          >*/}
            {/*            Remove*/}
            {/*          </Button>*/}
            {/*        </Stack>*/}
            {/*      </Grid>*/}
            {/*    ))}*/}
            {/*  </Grid>*/}
            {/*  <Grid Container mb={4} mt={8}>*/}
            {/*    <Grid item xs={12}>*/}
            {/*      <Box*/}
            {/*        sx={{*/}
            {/*          display: "flex",*/}
            {/*          flex: 1,*/}
            {/*          justifyContent: "end",*/}
            {/*          mt: 4,*/}
            {/*        }}*/}
            {/*      >*/}
            {/*        <Button*/}
            {/*          type="submit"*/}
            {/*          variant="contained"*/}
            {/*          startIcon={<Plus />}*/}
            {/*          disabled={createTeamBtnDisabled}*/}
            {/*        >*/}
            {/*          Create Team*/}
            {/*        </Button>*/}
            {/*      </Box>*/}
            {/*    </Grid>*/}
            {/*  </Grid>*/}
            {/*</form>*/}
            <form method="POST">
              <Grid container spacing={8} mb={4}>
                {designations
                  .filter(
                    (designation) =>
                      designation.name !== "CEO" &&
                      designation.name !== "CTO" &&
                      designation.name !== "COO" &&
                      designation.name !== "CFO"
                  )
                  .map((designation) => (
                    <Grid item xs={4}>
                      <FormControl
                        key={designation.id}
                        sx={{
                          display: "flex",
                          flex: 1,
                        }}
                      >
                        <InputLabel id="team-name">
                          {designation.name}
                        </InputLabel>
                        <Select
                          labelId="teamName"
                          id="teamNameChip"
                          multiple
                          value={selectedEmployees}
                          onChange={handleChangeEmployee}
                          input={
                            <OutlinedInput
                              id="select-employee-chip"
                              label={designation.name}
                            />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
                              {selected.map((value) => (
                                <Chip
                                  key={value}
                                  label={value}
                                  clickable
                                  deleteIcon={
                                    <X
                                      onMouseDown={(event) =>
                                        event.stopPropagation()
                                      }
                                    />
                                  }
                                  onDelete={(e) =>
                                    handleDeletedEmployeeChip(e, value)
                                  }
                                  onClick={() => console.log("Clicked Chip")}
                                />
                              ))}
                            </Box>
                          )}
                        >
                          {employeesData
                            .filter(
                              (employee) =>
                                employee.designationName === designation.name
                            )
                            .map((employee) => (
                              <MenuItem key={employee.id} value={employee.name}>
                                <Checkbox
                                  checked={selectedEmployees.includes(
                                    employee.id
                                  )}
                                />
                                <ListItemText primary={employee.name} />
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  ))}
              </Grid>
              <Grid container>
                <Grid item xs={12}>
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
                      startIcon={<Plus />}
                    >
                      Create Team
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectAdd;
