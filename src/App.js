import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import AskPage from "./pages/ask";
import JobsPage from "./pages/jobs";
import NewestPage from "./pages/newest";
import NewsPage from "./pages/news";
import PastPage from "./pages/past";
import ShowsPage from "./pages/show";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={NewsPage} />
        <Route exact path={ROUTES.NEWEST} component={NewestPage} />
        <Route exact path={ROUTES.PAST} component={PastPage} />
        <Route exact path={ROUTES.ASK} component={AskPage} />
        <Route exact path={ROUTES.SHOW} component={ShowsPage} />
        <Route exact path={ROUTES.JOBS} component={JobsPage} />
      </Switch>
    </Router>
  );
};

export default App;
