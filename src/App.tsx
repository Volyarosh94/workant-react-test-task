import ApplicationContextProvider from './contexts';
import AppRouter from './AppRouter';

function App() {
  return (
    <ApplicationContextProvider>
      <AppRouter />
    </ApplicationContextProvider>
  );
}

export default App;
