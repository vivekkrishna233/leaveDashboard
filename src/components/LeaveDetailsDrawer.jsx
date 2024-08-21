import React from 'react'
import { Drawer, Box, Typography } from '@mui/material'

export default function LeaveDetailsDrawer({
  open,
  toggleDrawer,
  selectedRow,
}) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
    >
      <Box className="w-[600px] p-6 bg-white rounded-lg shadow-md">
        <Box className="flex justify-between items-center">
          <Typography
            variant="h6"
            className="font-semibold text-lg"
          >
            Leave Details
          </Typography>
          {/* Close Button */}
          <button
            onClick={toggleDrawer(false)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            &#x2715;
          </button>
        </Box>
        {selectedRow && (
          <Box className="mt-4">
            {/* Column Layout */}
            <Box className="grid grid-cols-2 gap-4">
              {/* Labels */}
              <Box className="space-y-4">
                {' '}
                {/* Increased space between rows */}
                <Typography
                  variant="body1"
                  className="text-sm font-semibold text-gray-800"
                >
                  Leave Type:
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm font-semibold text-gray-800"
                >
                  Date:
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm font-semibold text-gray-800"
                >
                  Status:
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm font-semibold text-gray-800"
                >
                  Requested By:
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm font-semibold text-gray-800"
                >
                  Requested Date:
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm font-semibold text-gray-800"
                >
                  Approved By:
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm font-semibold text-gray-800"
                >
                  Approved Date:
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm font-semibold text-gray-800"
                >
                  Reason:
                </Typography>
              </Box>
              {/* Values */}
              <Box className="space-y-4">
                {' '}
                {/* Increased space between rows */}
                <Typography
                  variant="body1"
                  className="text-sm text-gray-600"
                >
                  Casual Leave to 21-08-2024
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm text-gray-600"
                >
                  20-08-2024
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm text-gray-600"
                >
                  <span className="inline-block px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                    Approve
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm text-gray-600"
                >
                  Suresh
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm text-gray-600"
                >
                  04 -June-2024 to 11:05:00 AM
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm text-gray-600"
                >
                  Komaraval
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm text-gray-600"
                >
                  04 -June-2024 to 01:05:00 PM
                </Typography>
                <Typography
                  variant="body1"
                  className="text-sm text-gray-600"
                >
                  Personal Leave "this test can go up to 2-3 lines"
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer>
  )
}
