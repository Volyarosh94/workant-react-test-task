import { TimesheetsProvider } from "./TimesheetsContext";
import { UsersProvider } from "./UsersContext";

const ApplicationContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children
}) => {
  return <>
    <UsersProvider>
      <TimesheetsProvider>
        {children}
      </TimesheetsProvider>
    </UsersProvider>
  </>
}

export default ApplicationContextProvider;
