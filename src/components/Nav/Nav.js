import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Resume from "../../assets/resume/HalleBeResume.pdf"
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const pages = ["About", "Portfolio", "Contact", "Resume"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({pageState, setPageState}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenAbout = () => {
    setPageState({...pageState, about: true, portfolio: false, contact: false, resume: false})
  };

  const handleOpenPortfolio = () => {
    setPageState({...pageState, about: false, portfolio: true, contact: false, resume: false})
  };

  const handleOpenContact = () => {
    setPageState({...pageState, about: false, portfolio: false, contact: true, resume: false})
  };

  const handleOpenResume = () => {
    setPageState({...pageState, about: false, portfolio: false, contact: false, resume: true})
  };

  return (
    <AppBar style={{ background: "#795548" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Halle Be
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleOpenAbout}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenPortfolio}>
                <Typography textAlign="center">Portfolio</Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenContact}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenResume}>
                <Typography textAlign="center">Resume</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Halle Be
          </Typography>
          <Box justifyContent="center" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleOpenAbout}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
            <Button
              onClick={handleOpenPortfolio}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Portfolio
            </Button>
            <Button
              onClick={handleOpenContact}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact
            </Button>
            {/* <a href={Resume}> */}
              <Button
                onClick={handleOpenResume}
                sx={{ my: 2, color: "white", display: "block" }}
                href={Resume}
              >
                Resume
              </Button>
            {/* </a> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
