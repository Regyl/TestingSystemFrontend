import React from 'react';

import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import Registration from "../registration/Registration";
import Authorization from "../authorization/Authorization";
import Account from "../lk/account/Account";
import CreateSubject from "../lk/subjectList/CreateSubject";
import HistoryPaths from "../../enums/HistoryPaths";
import CreateGroup from "../lk/studentGroupList/CreateGroup";
import StudentGroupEdit from "../lk/studentGroupList/StudentGroupEdit";
import TestCompilation from "../lk/testList/TestCompilation";
import CreateTest from "../lk/testList/CreateTest";
import EditTest from "../lk/testList/EditTest";

const App = (props) => {
    const { history } = props
    return (
          <Switch history={history}>
              <Route path={HistoryPaths.Home} component={MainPage} />
              <Route path={HistoryPaths.Registration} component={Registration} />
              <Route path={HistoryPaths.Auth} component={Authorization} />
              <Route path={HistoryPaths.Account} component={Account} />

              <Route path={HistoryPaths.SubjectNew} component={CreateSubject} />

              <Route path={HistoryPaths.StudentGroupNew} component={CreateGroup} />
              <Route path={HistoryPaths.StudentGroupEdit} component={StudentGroupEdit} />

              <Route path={HistoryPaths.TestCompilation} component={TestCompilation} />
              <Route path={HistoryPaths.TestCreate} component={CreateTest} />
              <Route path={HistoryPaths.TestEdit} component={EditTest} />
            <Redirect from={'/'} to={HistoryPaths.Home}/>
          </Switch>
    );
}

export default withRouter(App);
