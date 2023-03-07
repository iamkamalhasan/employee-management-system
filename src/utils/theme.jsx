import { createTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const theme = createTheme({
  palette: {
    primary: {
      lighter: "#C8FACD",
      light: "#5BE584",
      main: "#00AB55",
      dark: "#007B55",
      darker: "#005249",
    },
    secondary: {
      lighter: "#D6E4FF",
      light: "#84A9FF",
      main: "#3366FF",
      dark: "#1939B7",
      darker: "#091A7A",
    },
    grey: {
      0: "#FFFFFF",
      100: "#F9FAFB",
      200: "#F4F6F8",
      300: "#DFE3E8",
      400: "#C4CDD5",
      500: "#919EAB",
      600: "#637381",
      700: "#454F5B",
      800: "#212B36",
      900: "#161C24",
      500_8: alpha("#919EAB", 0.08),
      500_12: alpha("#919EAB", 0.12),
      500_16: alpha("#919EAB", 0.16),
      500_24: alpha("#919EAB", 0.24),
      500_32: alpha("#919EAB", 0.32),
      500_48: alpha("#919EAB", 0.48),
      500_56: alpha("#919EAB", 0.56),
      500_80: alpha("#919EAB", 0.8),
    },
    error: {
      lighter: "#FFE7D9",
      light: "#FFA48D",
      main: "#FF4842",
      dark: "#B72136",
      darker: "#7A0C2E",
    },
    warning: {
      lighter: "#FFF7CD",
      light: "#FFE16A",
      main: "#FFC107",
      dark: "#B78103",
      darker: "#7A4F01",
    },
    info: {
      lighter: "#D0F2FF",
      light: "#74CAFF",
      main: "#1890FF",
      dark: "#0C53B7",
      darker: "#04297A",
    },
    success: {
      lighter: "#E9FCD4",
      light: "#AAF27F",
      main: "#54D62C",
      dark: "#229A16",
      darker: "#08660D",
    },
    text: {
      primary: "#212529",
      secondary: "#adb5bd",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    gradient: {
      primary: createGradient("primary.light", "primary.main"),
      info: createGradient("info.light", "info.main"),
      success: createGradient("success.light", "success.main"),
      warning: createGradient("warning.light", "warning.main"),
      error: createGradient("error.light", "error.main"),
    },
    chart: {
      violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
      blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
      green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
      yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
      red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
