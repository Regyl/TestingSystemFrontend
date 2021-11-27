import React from 'react';

import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import Registration from "../registration/Registration";
import Authorization from "../authorization/Authorization";
import Account from "../main/account/Account";
import CreateSubject from "../main/subjectList/CreateSubject";
import HistoryPaths from "../../enums/HistoryPaths";
import CreateGroup from "../main/studentGroupList/CreateGroup";
import StudentGroupEdit from "../main/studentGroupList/StudentGroupEdit";
import TestCompilation from "../main/testList/TestCompilation";
import CreateTest from "../main/testList/CreateTest";
import EditTest from "../main/testList/EditTest";
import CreateQuestion from "../main/testList/question/CreateQuestion";
import EditQuestion from "../main/testList/question/EditQuestion";
import CreateAnswer from "../main/testList/question/answer/CreateAnswer";

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

              <Route path={HistoryPaths.QuestionCreate} component={CreateQuestion} />
              <Route path={HistoryPaths.QuestionUpdate} component={EditQuestion} />

              <Route path={HistoryPaths.AnswerCreate} component={CreateAnswer} />
            <Redirect from={'/'} to={HistoryPaths.Home}/>
          </Switch>
    );
}

export default withRouter(App);
