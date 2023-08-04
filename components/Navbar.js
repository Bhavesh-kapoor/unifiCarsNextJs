import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const router = useRouter()
  // useEffect(() => {
  //  console.log("navar", router)
  // }, [router])
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

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
              <Link  href={"/buy-used-cars"} className='text-gray-800'>
                Buy Used Car
              </Link>
              <Link  href={"/sell-used-cars"} className='text-gray-800'>
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
      <AppBar component="nav" sx={{ position: { xs: 'fixed', md: 'static' }}} className='bg-gray-100'>
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' ,color:"#000" } }}
          >
            <Link href={"/"}><img src='../logo.png' className='h-20' /> </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }} >
            
              <Link  href={"/"} className={`mx-4 text-xl hover:text-orange-500 ${router.pathname=="/"? "text-orange-500":"text-gray-800"}`}>
                Home
              </Link>
              <Link  href={"/buy-used-cars"} className={`mx-4 text-xl hover:text-orange-500 ${router.pathname=="/buy-used-cars"? "text-orange-500":"text-gray-800"}`}>
                Buy Used Car
              </Link>
              <Link  href={"/sell-used-cars"} className={`mx-4 text-xl hover:text-orange-500 ${router.pathname=="/sell-used-cars"? "text-orange-500":"text-gray-800"}`}>
                Sell Used Car
              </Link>
              <Link href={"/about"}  className={`mx-4 text-xl hover:text-orange-500 ${router.pathname=="/about"? "text-orange-500":"text-gray-800"}`}>
                About
              </Link>
              <Link href={"/contact"}  className={`mx-4 text-xl hover:text-orange-500 ${router.pathname=="/contact"? "text-orange-500":"text-gray-800"}`}>
                Contact
              </Link>
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav"  className='sticky top-0'>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
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