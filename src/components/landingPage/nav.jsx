import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Grid,
  Box,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ukFlag from "../../assets/img/uk-flag.png";
import EU from "../../assets/img/EU.png";
import CZK from "../../assets/img/czk.png";
import canada from "../../assets/img/canada.png";

const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Mobile starts at 900px

  const [anchorEl, setAnchorEl] = useState(null);
  const [tradingAnchor, setTradingAnchor] = useState(null);
  const [aboutUsAnchor, setAboutUsAnchor] = useState(null);
  const [languageAnchor, setLanguageAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ code: "ENG", flag: ukFlag });

  const handleMenuOpen = (event, setter) => setter(event.currentTarget);
  const handleMenuClose = (setter) => setter(null);

  const handleLanguageChange = (lang, flag) => {
    setSelectedLanguage({ code: lang, flag });
    handleMenuClose(setLanguageAnchor);
  };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Menu items
  const menuItems = [
    { label: "How it works", hasDropdown: true, setter: setAnchorEl, anchor: anchorEl, options: ["Option 1", "Option 2"] },
    { label: "FAQ", hasDropdown: false },
    { label: "Testimonials", hasDropdown: false },
    { label: "Trading", hasDropdown: true, setter: setTradingAnchor, anchor: tradingAnchor, options: ["Option A", "Option B"] },
    { label: "About Us", hasDropdown: true, setter: setAboutUsAnchor, anchor: aboutUsAnchor, options: ["Our Team", "Contact"], link: "/about" },
    { label: "Contact Us", hasDropdown: false,link:'/contact' },
  ];

  const languageOptions = [
    { code: "ENG", flag: ukFlag },
    { code: "EU", flag: EU },
    { code: "CZK", flag: CZK },
    { code: "CAN", flag: canada },
  ];

  // Mobile Drawer Content
  const drawerContent = (
    <Box sx={{ width: 250, p: 2 }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            {item.link ? (
              <Button component={Link} to={item.link} color="inherit"  sx={{ textTransform: "none" }}>
                {item.label}
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={item.hasDropdown ? (e) => handleMenuOpen(e, item.setter) : undefined}
                sx={{ textTransform: "none" }}
              >
                {item.label}
                {item.hasDropdown && <ArrowDropDownIcon />}
              </Button>
            )}
            {item.hasDropdown && (
              <Menu anchorEl={item.anchor} open={Boolean(item.anchor)} onClose={() => handleMenuClose(item.setter)}>
                {item.options.map((option, idx) => (
                  <MenuItem key={idx} onClick={() => handleMenuClose(item.setter)}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar className="WebNav" sx={{ background: "transparent", boxShadow: "none", py: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, sm: 2, md: 4 } }}>
        {/* Logo */}
        <Box sx={{ flexGrow: { xs: 1, md: 0 }, display: "flex", alignItems: "center" }}>
          <Typography variant="h6">
            <Link to='/'><img src={logo} alt="WhaleFundr Logo" style={{ height: isMobile ? 25 : 30, marginRight: 5 }} /></Link>
            
          </Typography>
        </Box>

        {/* Mobile Menu Icon (Visible only for screens <= 900px) */}
        {isMobile && (
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Desktop Navigation (Hidden on screens <= 900px) */}
        {!isMobile && (
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={10} sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {menuItems.map((item, index) => (
                <Box key={index}>
                  {item.link ? (
              <Button component={Link} to={item.link} color="inherit"  >
                {item.label}
              </Button>
            ) :(
                  <Button
                    color="inherit"
                    onClick={item.hasDropdown ? (e) => handleMenuOpen(e, item.setter) : undefined}
                    endIcon={item.hasDropdown && <ArrowDropDownIcon />}
                  >
                    {item.label}
                  </Button>
            )}
                  {item.hasDropdown && (
                    <Menu anchorEl={item.anchor} open={Boolean(item.anchor)} onClose={() => handleMenuClose(item.setter)}>
                      {item.options.map((option, idx) => (
                        <MenuItem key={idx} onClick={() => handleMenuClose(item.setter)}>
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}
            </Grid>

            {/* Search and Language */}
            <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1 }}>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <Button
                color="inherit"
                onClick={(e) => handleMenuOpen(e, setLanguageAnchor)}
                sx={{
                  border: "1px solid white",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  px: 1,
                }}
                className="LanguageSelecBtn"
              >
                <img src={selectedLanguage.flag} alt={selectedLanguage.code} style={{ height: 20, marginRight: 5, borderRadius: "50%" }} />
                {selectedLanguage.code}
                <ArrowDropDownIcon />
              </Button>
              <Menu anchorEl={languageAnchor} open={Boolean(languageAnchor)} onClose={() => handleMenuClose(setLanguageAnchor)}>
                {languageOptions.map((lang, idx) => (
                  <MenuItem key={idx} onClick={() => handleLanguageChange(lang.code, lang.flag)}>
                    <img src={lang.flag} alt={lang.code} style={{ height: 20, marginRight: 5, borderRadius: "50%" }} />
                    {lang.code}
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>
        )}

        {/* Mobile Drawer (Only visible for screens <= 900px) */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
