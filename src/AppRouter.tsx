import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import UserTimesheetsPage from './pages/UserTimesheets';
import UserDetailsModal from './components/UserDetailsModal';

const AppRouter = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path=":userId" element={<UserDetailsModal />} />
      </Route>
      <Route path="/timesheets/:userId" element={<UserTimesheetsPage />} />
    </Routes>
  </Router>
}

export default AppRouter;
