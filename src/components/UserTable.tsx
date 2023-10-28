import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUsers } from '@/contexts/UsersContext';

const UserTable = () => {
  const { users } = useUsers();

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Phone</th>
          <th>Department</th>
          <th>Timesheets</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.email}</td>
            <td>{user.position}</td>
            <td>{user.phone}</td>
            <td>{user.department.title}</td>
            <td>
              <div className='d-flex gap-1'>
                <Link to={`/timesheets/${user.id}`} className="btn btn-primary">
                  View Timesheets
                </Link>
                <Link to={`/${user.id}`} className="btn btn-primary">
                  Show details
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
