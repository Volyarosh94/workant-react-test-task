import React, { createContext } from "react";
import { IUser } from "../models/user";
import usersMock from '@/mock/users.json'

export type UsersContextData = {
  users: IUser[];
  selectedUser: IUser | undefined;
  handleSelectUser: (user: IUser) => void;
}

export const UsersContext = createContext<UsersContextData>({
  users: [],
  selectedUser: undefined,
  handleSelectUser: () => { },
} as UsersContextData);

export const UsersProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children
}) => {
  const [users] = React.useState<IUser[]>(usersMock);
  const [selectedUser, setSelectedUser] = React.useState<IUser | undefined>(undefined);

  const handleSelectUser = (user: IUser) => {
    setSelectedUser(user);
  }

  return (
    <UsersContext.Provider value={{
      users,
      selectedUser,
      handleSelectUser,
    }}>
      {children}
    </UsersContext.Provider>
  );
}

export const useUsers = () => React.useContext(UsersContext);
export const useUser = (userId: string | undefined) => {
  const { users } = useUsers();
  if (!userId)
    return undefined;
  return users.find(user => user.id === userId);
}
