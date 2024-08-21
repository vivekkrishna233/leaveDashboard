import React from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';

const NavigationBar = () => {
  return (
    <AppBar position="static" className="bg-white shadow-none border-b border-gray-200">
      <Toolbar className="p-0">
        <Tabs
          value={1}
          textColor="inherit"
          indicatorColor="primary"
          aria-label="navigation tabs"
          className="flex-grow"
        >
          <Tab label="Attendance" className="text-gray-700 font-semibold" />
          <Tab label="Leave" className="text-gray-700 font-semibold" />
          <Tab label="Remote" className="text-gray-700 font-semibold" />
          <Tab label="Others" className="text-gray-700 font-semibold" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
