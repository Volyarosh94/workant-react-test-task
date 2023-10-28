import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ITimesheet } from '@/models/timesheet'; // Import the ITimesheet type from your model file
import Dropdown from 'react-bootstrap/Dropdown';
import moment from 'moment';

type TimesheetsTableProps = {
  timesheets: ITimesheet[];
  userId: string;
};

const TimesheetsTable: React.FC<TimesheetsTableProps> = ({ timesheets, userId }) => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const handleMonthFilter = (month: string | null) => {
    setSelectedMonth(month);
  };

  const filteredTimesheets = timesheets.filter((timesheet) => {
    // If month is not selected, show all timesheets
    if (!selectedMonth) return true;
    const timesheetMonth = moment(timesheet.startTime).format('MMMM YYYY');
    return timesheetMonth === selectedMonth;
  });

  const months = Array.from(new Set(timesheets.map((ts) => moment(ts.startTime).format('MMMM YYYY'))));

  return (
    <div>
      <Dropdown onSelect={handleMonthFilter} className='mb-2'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedMonth || 'Filter by Month'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {months.map((month) => (
            <Dropdown.Item key={month} eventKey={month}>
              {month}
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item>Clear Filter</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Minutes</th>
            <th>Break Minutes</th>
            <th>Status</th>
            <th>Assessment</th>
          </tr>
        </thead>
        <tbody>
          {filteredTimesheets.map((timesheet) => (
            <tr key={timesheet.id}>
              <td>{timesheet.id}</td>
              <td>{moment(timesheet.startTime).format('MMMM DD, YYYY HH:mm')}</td>
              <td>{moment(timesheet.endTime).format('MMMM DD, YYYY HH:mm')}</td>
              <td>{timesheet.minutes}</td>
              <td>{timesheet.breakMinutes}</td>
              <td>{timesheet.status}</td>
              <td>{timesheet.assessment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TimesheetsTable;
