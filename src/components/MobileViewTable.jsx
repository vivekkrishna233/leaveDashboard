import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  TextField,
  Badge,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { ReactComponent as CrossIcon } from '../Assets/cross.svg'
import { ReactComponent as CheckIcon } from '../Assets/check.svg'

const leaveRequests = [
  {
    name: 'Suresh',
    leaveType: 'PL',
    from: '02 Jun 2024 - FH',
    to: '02 Jun 2024 - FH',
    days: 0.5,
  },
  {
    name: 'Logesh',
    leaveType: 'CL',
    from: '12 Jun 2024',
    to: '17 Jun 2024',
    days: 4,
  },
  {
    name: 'Ashok Kumar',
    leaveType: 'PL',
    from: '12 Jun 2024',
    to: '12 Jun 2024',
    days: 1,
  },
  {
    name: 'Suresh',
    leaveType: 'CL',
    from: '12 Jun 2024',
    to: '12 Jun 2024',
    days: 1,
  },
]

const MobileViewTable = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header with Search */}
      <Card className="rounded-lg shadow-lg">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <Typography
              variant="h6"
              className="font-bold flex items-center"
            >
              <Badge
                badgeContent={5}
                color="error"
                className="mr-2"
              >
                <Search
                  fontSize="small"
                  color="disabled"
                />
              </Badge>
              Team Leave Requests
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              Manage your team members leave requests here.
            </Typography>
          </div>
          <TextField
            fullWidth
            placeholder="Search"
            InputProps={{
              startAdornment: <Search className="text-gray-500" />,
              className: 'bg-gray-100 rounded-full pl-2',
            }}
            variant="outlined"
            size="small"
          />
        </CardContent>

        {leaveRequests.map((request, index) => (
          <Card
            key={index}
            className="rounded-lg shadow-lg"
          >
            <CardContent>
              <div className="flex justify-between items-center">
                <Typography
                  variant="h6"
                  className="font-bold"
                >
                  {request.name}
                </Typography>
                <div
                  className={`text-white px-2 py-1 rounded-full ${
                    request.leaveType === 'PL' ? 'bg-pink-500' : 'bg-blue-500'
                  }`}
                >
                  {request.leaveType}
                </div>
              </div>
              <div className="my-2">
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  From: {request.from}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  To: {request.to}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  Days: {request.days}
                </Typography>
              </div>
              <div className="flex justify-around mt-4">
                <Button
                  variant="outlined"
                  className="w-1/2 mr-2"
                  sx={{
                    color: 'black !important',
                    borderColor: 'gray !important',
                  }}
                  startIcon={<CheckIcon />}
                >
                  Approve
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: 'black !important',
                    borderColor: 'gray !important',
                  }}
                  className="w-1/2 ml-2"
                  startIcon={<CrossIcon />}
                >
                  Deny
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Pagination */}
        <div className="flex justify-between items-center pt-4">
          <Button
            variant="text"
            className="text-gray-500"
          >
            Previous
          </Button>
          <Typography variant="body2">Page 1 of 10</Typography>
          <Button
            variant="text"
            className="white"
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default MobileViewTable
