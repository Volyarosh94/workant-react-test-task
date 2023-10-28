import TimesheetsTable from '@/components/TimesheetsTable';
import { useTimesheetsForUser } from '@/contexts/TimesheetsContext';
import { useUser } from '@/contexts/UsersContext';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UserTimesheetsPage = () => {
  const { userId } = useParams();
  const user = useUser(userId || "")
  const timesheets = useTimesheetsForUser(userId || "")

  if (!user) {
    return (
      <Container>
        <h1>User not found</h1>
      </Container>
    )
  }

  return (
    <Container>
      <h1>{user?.firstName}{" "}{user?.lastName} Timesheets</h1>
      <TimesheetsTable timesheets={timesheets} userId={userId || ""} />
    </Container>
  );
};

export default UserTimesheetsPage;
