import {
  Badge,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Paper,
  TextField,
  Tooltip,
} from "@mui/material";
import { BellRing, LogOut, Search } from "lucide-react";

const Topnav = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item xs={8}>
          <InputBase
            type="search"
            sx={{
              width: "500px",
              border: 2,
              borderColor: "var(--gray-400)",
              px: 2,
              py: 1,
              borderRadius: 2,
              height: "40px",
              "&:hover": {
                border: "2px solid var(--green-500)",
              },
              "&.Mui-focused": {
                border: "2px solid var(--green-500)",
              },
            }}
            endAdornment={
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            }
            placeholder="Search..."
            inputProps={{ "aria-label": "search ..." }}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{
              justifyContent: "end",
              pr: 3,
            }}
          >
            <Grid item>
              <Tooltip title="Notification">
                <IconButton
                  color="var(--gray-700)"
                  component="label"
                  sx={{
                    "&:hover,&:focus": {
                      bgcolor: "var(--green-100)",
                      color: "success.dark",
                    },
                  }}
                >
                  <Badge color="primary" badgeContent={7}>
                    <BellRing />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Logout">
                <IconButton
                  color="var(--gray-700)"
                  component="label"
                  sx={{
                    "&:hover,&:focus": {
                      bgcolor: "var(--green-100)",
                      color: "success.dark",
                    },
                  }}
                >
                  <LogOut />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Topnav;
