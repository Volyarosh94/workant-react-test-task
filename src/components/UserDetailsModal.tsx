import { Modal } from "react-bootstrap"
import UserDetails from "./UserDetails";
import { useParams } from "react-router-dom";
import { useUser } from "@/contexts/UsersContext";
import React from "react";

const UserDetailsModal: React.FC<React.PropsWithChildren<{}>> = () => {
  const [show, setShow] = React.useState(true);
  const { userId } = useParams()
  const user = useUser(userId || "")
  if (!user) {
    return <h1>No user found</h1>;
  }
  return (
    <Modal backdrop animation centered show={show} onExited={() => {
      window.history.back();
    }}>
      <Modal.Header>
        <Modal.Title>User Details</Modal.Title>
        <button className="btn" type="button" onClick={() => {
          setShow(false);
        }}>
          <span aria-hidden="true">×</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <UserDetails user={user} />
      </Modal.Body>

    </Modal>
  )
}

export default UserDetailsModal;
