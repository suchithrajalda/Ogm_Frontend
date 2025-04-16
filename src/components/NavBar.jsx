import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { CiSearch } from "react-icons/ci";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../pages/HomePage.scss';
const pages = ['HOME', 'TOURNAMENTS & SERIES', 'REGISTER DETAILS', 'FIND & CONNECT', 'CONTACT US'];
const dropdownItems = ['UMPIRE', 'COACH', 'TEAM', 'GROUND'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null); // track which menu is open

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setDropdownOpen(false);
      setActiveDropdown(null);
    } else {
      setDropdownOpen(true);
      setActiveDropdown(label);
    }
  };
  const [showSearch, setShowSearch] = React.useState(false);
  const searchInputRef = React.useRef(null);
  
  // Focus the input when it appears
  React.useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);
  
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none',pt:2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              ml: { xs: 1,  xl: -2,},
              mr: {xs:2,xl:14},
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Krona One',
              fontWeight: 400,
              fontSize: '24px',
              letterSpacing: '0',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            1OM
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography 
                   sx={{ fontSize: '20px', fontWeight: 300,fontFamily: 'Satoshi' }}
                  >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Krona One',
              fontWeight: 400,
              fontSize: '20px',
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            1OM
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
              const hasDropdown = page === 'REGISTER DETAILS' || page === 'FIND & CONNECT';

              return (
                <Box key={page} sx={{ position: 'relative', mr: {xl:2}}}>
                  <Button
                    onClick={() => hasDropdown ? toggleDropdown(page) : handleCloseNavMenu()}
                    sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center',                                        
                      fontSize: '20px',fontFamily:'Inter, sans-serif',fontWeight: '300',}}
                  >
                    {page}
                    {hasDropdown && (
                      activeDropdown === page && dropdownOpen ? (
                        <KeyboardArrowUpIcon sx={{ ml: 0.5 }} />
                      ) : (
                        <KeyboardArrowDownIcon sx={{ ml: 0.5 }} />
                      )
                    )}
                  </Button>

                  {/* Dropdown submenu */}
                  {hasDropdown && activeDropdown === page && dropdownOpen && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: 'white',
                        color: 'black',
                        borderRadius: 1,
                        boxShadow: 3,
                        zIndex: 10,
                        minWidth: 150,
                      }}
                    >
                      {dropdownItems.map((item) => (
                        <MenuItem
                          key={item}
                          onClick={() => {
                            setDropdownOpen(false);
                            setActiveDropdown(null);
                            console.log(`Navigate to ${item}`);
                          }}
                        >
                          {item}
                        </MenuItem>
                      ))}
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>

          {/* Right-side icons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
  <IconButton
    size="large"
    aria-label="search"
    color="inherit"
    sx={{ mr: 2, ml: { xl: 6 } }}
    onClick={() => setShowSearch((prev) => !prev)}
  >
    <CiSearch />
  </IconButton>

  {showSearch && (
    <input
      ref={searchInputRef}
      type="text"
      placeholder="Search..."
      style={{
        padding: '6px 10px',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        outline: 'none',
      }}
    />
  )}
            <IconButton
              size="large"
              aria-label="notifications"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <NotificationsIcon />
            </IconButton>
            <Button
  sx={{
    backgroundColor: '#2ecc39',
    color: 'black',
    fontSize: '1.2rem',
    fontWeight: 400,
    padding: '0.3rem 2rem',
    border: 'none',
    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
    textTransform: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    mr:{xl:-2},
    '&:hover': {
      backgroundColor: 'black',
      color: '#2ecc39',
    },
  }}
>
  Log in
</Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
