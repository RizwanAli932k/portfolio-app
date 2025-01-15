import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  IconButton,
  Drawer,
  List,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = styled(AppBar)`
  background: #c8e6c9;
  padding: 10px;
`;

const TitleTab = styled(Box)`
  margin: 0 15px;
  padding: 30px 0px;
`;

const Tab = styled(({ isActive, ...other }) => <Link {...other} />)`
  margin: 0 15px;
  padding: 30px 0px;
  font-size: 18px;
  color: #1b5e20;
  text-decoration: none;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};

  &:hover {
    color: #2e7d32;
  }
`;

const Title = styled(Tab)`
  margin: 0 0px;
  font-size: 24px;
  color: #1b5e20;
  font-weight: bold;
`;

const Navbar = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:625px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Automatically close drawer when width exceeds 600px
  useEffect(() => {
    if (!isMobile) {
      setDrawerOpen(false);
    }
  }, [isMobile]);

  const navItems = [
    {
      to: "/comics&stories",
      label: "Comics & Stories",
      isActive: location.pathname === "/comics&stories",
    },
    {
      to: "/art&concepts",
      label: "Art & Concepts",
      isActive: location.pathname === "/art&concepts",
    },
    {
      to: "/commissions",
      label: "Commissions",
      isActive: location.pathname === "/commissions",
    },
    {
      to: "/about",
      label: "About",
      isActive: location.pathname === "/about",
    },
  ];

  return (
    <Header position="static">
      <Toolbar
        className="wrap-flex"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleTab>
          <Title to="/">Sumbal Nayyab</Title>
        </TitleTab>

        {isMobile ? (
          <IconButton
            sx={{ color: "#1b5e20", margin: "0px 0px" }}
            edge="start"
            onClick={toggleDrawer(true)}
            aria-label="menu"
          >
            <MenuIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        ) : (
          <Box
            className="wrap-flex"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {navItems.map((item, index) => (
              <Tab key={index} to={item.to} isActive={item.isActive}>
                {item.label}
              </Tab>
            ))}
          </Box>
        )}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: "100vw" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
              }}
            >
              <IconButton
                sx={{
                  margin: "4px 10px",
                  color: "#1b5e20",
                }}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <ArrowBackIcon />
              </IconButton>
              <Title onClick={toggleDrawer(false)} to="/">Sumbal Nayyab</Title>
            </Box>
            <List>
              {navItems.map((item, index) => (
                <Tab
                  key={index}
                  to={item.to}
                  isActive={item.isActive}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: item.isActive ? "bold" : "normal",
                  }}
                  onClick={toggleDrawer(false)}
                >
                  {item.label}
                </Tab>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
