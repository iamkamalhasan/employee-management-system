import { Box, ButtonBase, Card, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import navStyle from "./Sidenav.module.css";
import {
  LayoutGrid,
  Users,
  CalendarCheck,
  Award,
  GitFork,
  Crown,
  FolderCog,
} from "lucide-react";
import SquareShiftLogo from "../../assets/brand/SquareShiftLogo.jsx";

const Sidenav = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  const sidenavItems = [
    {
      id: 1,
      title: "Dashboard",
      icon: <LayoutGrid size={20} />,
      link: "/",
    },
    {
      id: 2,
      title: "Project",
      icon: <FolderCog size={20} />,
      link: "/project",
    },
    // {
    //   id: 3,
    //   title: "Client",
    //   icon: <Boxes size={20} />,
    //   link: "/client",
    // },
    {
      id: 4,
      title: "Department",
      icon: <GitFork className={navStyle.rotate} size={20} />,
      link: "/department",
    },
    {
      id: 5,
      title: "Employees",
      icon: <Users size={20} />,
      link: "/employee",
    },
    {
      id: 6,
      title: "Designation",
      icon: <Crown size={20} />,
      link: "/designation",
    },
    {
      id: 7,
      title: "Skills & Certifications",
      icon: <Award size={20} />,
      link: "/skills&certifications",
    },
    {
      id: 8,
      title: "Timesheet",
      icon: <CalendarCheck size={20} />,
      link: "/timesheet",
    },
    // {
    //   id: 9,
    //   title: "Payroll",
    //   icon: <DollarSign size={20} />,
    //   link: "/payroll",
    // },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "17rem",
          flexDirection: "column",
          alignItems: "left",
          bgcolor: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1500,
          borderRight: "1px solid rgba(145, 158, 171, 0.24)",
        }}
        className={`scrollbar`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            p: 3,
            mb: 1,
          }}
        >
          <SquareShiftLogo width={`150`} />
        </Box>
        <Link key="1" to="/employee/profile">
          <Card
            elevation={0}
            sx={{
              mx: 2,
              mb: 4,
              p: 1.5,
              borderRadius: 4,
              bgcolor: "var(--gray-100)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 1,
              }}
            >
              <Box>
                <img
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                  className={`userAvatar`}
                />
              </Box>
              <Box>
                <Typography
                  fontSize="16px"
                  fontWeight="600"
                  sx={{
                    color: "var(--gray-800)",
                    mb: 0.5,
                  }}
                >
                  Jason Richard Kendrick
                </Typography>
                <Typography
                  fontSize="13px"
                  fontWeight="500"
                  sx={{
                    color: "var(--gray-600)",
                  }}
                >
                  Super Admin
                </Typography>
              </Box>
            </Box>
          </Card>
        </Link>
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              flex: "1 1 0",
              flexDirection: "column",
              rowGap: ".5rem",
              px: 2,
            }}
          >
            {sidenavItems.map((item, idx) => (
              <ButtonBase
                sx={{
                  borderRadius: "3px",
                }}
              >
                <Link
                  key={idx}
                  to={item.link}
                  className={`${navStyle.navItem} ${
                    currentPage === item.link ||
                    (item.link === "/employee" &&
                      currentPage.startsWith(item.link))
                      ? navStyle.navLinkActive
                      : navStyle.navLink
                  }`}
                >
                  {item.icon}
                  <Typography
                    fontSize={`14px`}
                    fontWeight={`500`}
                    sx={{ ml: 1.5 }}
                  >
                    {item.title}
                  </Typography>
                </Link>
              </ButtonBase>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidenav;
