import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

export default function HeaderSection() {
  return (
    <AppBar position="static" className="header bg-white">
      <Toolbar className="p-0">
        <div className="flex items-center">
          <div className="bg-indigo-900 text-white p-2 rounded-full">IN</div>
        </div>
      </Toolbar>
    </AppBar>
  );
}