import UserTable from "@/components/UserTable";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <h1>Home</h1>
      <UserTable />
      <Outlet />
    </Container>
  );
}

export default HomePage;
