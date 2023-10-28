import React, { createContext } from "react";
import { ITimesheet } from "../models/timesheet";
import timesheetsMock from '@/mock/timesheets.json'

export type TimesheetsContextData = {
  timesheets: ITimesheet[];
  selectedTimesheet: ITimesheet | undefined;
  handleSelectTimesheet: (timesheet: ITimesheet) => void;
}

export const TimesheetsContext = createContext<TimesheetsContextData>({
  timesheets: [],
  selectedTimesheet: undefined,
  handleSelectTimesheet: () => { },
} as TimesheetsContextData);

export const TimesheetsProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children
}) => {
  const [timesheets] = React.useState<ITimesheet[]>(timesheetsMock);
  const [selectedTimesheet, setSelectedTimesheet] = React.useState<ITimesheet | undefined>(undefined);

  const handleSelectTimesheet = (timesheet: ITimesheet) => {
    setSelectedTimesheet(timesheet);
  }

  return (
    <TimesheetsContext.Provider value={{
      timesheets,
      selectedTimesheet,
      handleSelectTimesheet,
    }}>
      {children}
    </TimesheetsContext.Provider>
  );
}

export const useTimesheets = () => React.useContext(TimesheetsContext);

export const useTimesheetsForUser = (userId: string | undefined) => {
  const { timesheets } = useTimesheets();
  if (!userId)
    return [];
  return timesheets.filter(timesheet => timesheet.userId === userId);
}
