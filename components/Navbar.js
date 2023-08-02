import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Box sx={{ my: 2}}>
        <img src='../logo.png' className='h-20 mx-auto' />
      </Box>
      <Divider />
      <List className='flex flex-col gap-4'>
      <Link  href={"/"} className='text-gray-800'>
                Home
              </Link>
              <Link  href={"/buyUsedCars"} className='text-gray-800'>
                Buy Used Car
              </Link>
              <Link  href={"/sellUsedCars"} className='text-gray-800'>
                Sell Used Car
              </Link>
              <Link href={"/about"}  className='text-gray-800'>
                About
              </Link>
              <Link href={"/contact"}  className='text-gray-800'>
                Contact
              </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}  >
      <AppBar component="nav" position='static' className='bg-gray-100'>
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' ,color:"#000" } }}
          >
            <img src='../logo.png' className='h-20' /> 
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            
              <Link  href={"/"} className='text-gray-800 mx-4 text-xl hover:text-orange-500 '>
                Home
              </Link>
              <Link  href={"/buyUsedCars"} className='text-gray-800 mx-4 text-xl hover:text-orange-500'>
                Buy Used Car
              </Link>
              <Link  href={"/sellUsedCars"} className='text-gray-800 mx-4 text-xl hover:text-orange-500'>
                Sell Used Car
              </Link>
              <Link href={"/about"}  className='text-gray-800 mx-4 text-xl hover:text-orange-500'>
                About
              </Link>
              <Link href={"/contact"}  className='text-gray-800 mx-4 text-xl hover:text-orange-500'>
                Contact
              </Link>
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;