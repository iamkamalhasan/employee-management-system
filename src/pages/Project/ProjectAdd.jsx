import { Grid, Typography, Paper, TextField } from "@mui/material";

const ProjectAdd = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} mb={4}>
          <Typography variant={`h4`} fontWeight="600">
            New Project
          </Typography>
        </Grid>
      </Grid>
      <Grid Conatiner>
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
              <Grid container spacing={8}>
                <Grid item xs={4}>
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
                <Grid item xs={4}>
                  Hi
                </Grid>
                <Grid item xs={4}>
                  Hi
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
