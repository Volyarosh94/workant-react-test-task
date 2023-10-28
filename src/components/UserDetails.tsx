import React from 'react';
import { IUser } from '@/models/user';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

type UserDetailsProps = {
  user: IUser;
};

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <Card>
      <Card.Img variant="top" src={user.avatar.link} alt={`${user.firstName} ${user.lastName}`} style={{
        maxHeight: "400px",
        aspectRatio: "1/1",
        objectFit: "cover",
      }} />
      <Card.Body>
        <Card.Title>{`${user.firstName} ${user.lastName}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.position}</Card.Subtitle>
        <Card.Text>{user.email}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {user.phone && <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>}
        {user.address && <ListGroup.Item>Address: {user.address}</ListGroup.Item>}
        {user.city && <ListGroup.Item>City: {user.city}</ListGroup.Item>}
        {user.country && <ListGroup.Item>Country: {user.country}</ListGroup.Item>}
        {user.department && <ListGroup.Item>Department: {user.department.title}</ListGroup.Item>}
        {user.subDepartment && <ListGroup.Item>Sub-Department: {user.subDepartment.title}</ListGroup.Item>}
        {user.division && <ListGroup.Item>Division: {user.division.title}</ListGroup.Item>}
        {user.group && <ListGroup.Item>Group: {user.group}</ListGroup.Item>}
        {user.manager && (
          <ListGroup.Item>Manager: {`${user.manager.firstName} ${user.manager.lastName}`}</ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  );
};

export default UserDetails;
