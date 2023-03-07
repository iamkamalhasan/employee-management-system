import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { TrendingDown, TrendingUp } from "lucide-react";

const Dashboard = () => {
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
                  Total Projects
                </Typography>
                <Typography variant={`h3`} fontWeight={`medium`}>
                  7
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
                  Total Employees
                </Typography>
                <Typography variant={`h3`} fontWeight={`medium`}>
                  10
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
                  Total Spending's
                </Typography>
                <Typography variant={`h4`} fontWeight={`medium`} mb={1.75}>
                  $15,000
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
      <Grid container>
        <iframe
          width="100%"
          height="600px"
          src="https://lookerstudio.google.com/embed/reporting/66d8c07e-7741-48bd-8951-6dac35714b2b/page/qGyGD"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </Grid>
    </>
  );
};
export default Dashboard;
