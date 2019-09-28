import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header.components";
import DashBoard from "../components/DashBoard.components";
import AddExpense from "../components/AddExpense.components";
import EditExpense from "../components/EditExpense.components";
import HelpPage from "../components/HelpPage.components";
import NotFoundPage from "../components/NotFoundPage.components";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashBoard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit" component={EditExpense} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
