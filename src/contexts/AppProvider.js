import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);
export const AppSetterContext = createContext(null);

const AppProvider = ({ children }) => {
  const [app, setApp] = useState({
    page: "home",
    transactions: [
      {
        id: "1",
        iconName: "airplane",
        iconColor: "#feb931",
        title: "Fly to Paris",
        date: "May 12 at 9:30PM",
        amount: "$523",
        isIncome: false,
      },
      {
        id: "2",
        iconName: "fruit-cherries",
        iconColor: "#5e44e1",
        title: "Groceries",
        date: "May 12 at 9:30PM",
        amount: "$523",
        isIncome: false,
      },
      {
        id: "3",
        iconName: "wallet",
        iconColor: "#04c79c",
        title: "Salary + Bonus",
        date: "May 12 at 9:30PM",
        amount: "$523",
        isIncome: true,
      },
      {
        id: "4",
        iconName: "tshirt-crew",
        iconColor: "#4274f7",
        title: "Clothes",
        date: "May 12 at 9:30PM",
        amount: "$523",
        isIncome: false,
      },
      {
        id: "5",
        iconName: "home",
        iconColor: "#e382d3",
        title: "Home Rent",
        date: "May 12 at 9:30PM",
        amount: "$523",
        isIncome: false,
      },

      {
        id: "6",
        iconName: "airplane",
        iconColor: "#feb931",
        title: "Fly to Paris",
        date: "May 12 at 9:30PM",
        amount: "$523",
        isIncome: false,
      },
      {
        id: "7",
        iconName: "fruit-cherries",
        iconColor: "#5e44e1",
        title: "Groceries",
        date: "May 12 at 9:30PM",
        amount: "$523",
        isIncome: false,
      },
      {
        id: "8",
        iconName: "wallet",
        iconColor: "#04c79c",
        title: "Salary + Bonus",
        date: "May 12 at 9:30PM",
        amount: "$523",
        isIncome: true,
      },
      {
        id: "9",
        iconName: "tshirt-crew",
        iconColor: "#4274f7",
        title: "Clothes",
        date: "May 12 at 9:30PM",
        amount: "$523",
        isIncome: false,
      },
      {
        id: "10",
        iconName: "home",
        iconColor: "#e382d3",
        title: "Home Rent",
        date: "May 12 at 9:30PM",
        amount: "$523",
        isIncome: false,
      },
    ],
  });

  return (
    <AppContext.Provider value={app}>
      <AppSetterContext.Provider value={setApp}>
        {children}
      </AppSetterContext.Provider>
    </AppContext.Provider>
  );
};

export default AppProvider;
