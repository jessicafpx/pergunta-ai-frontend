import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import ForgotPassWord from '../pages/ForgotPassword';
import SetPassword from '../pages/SetPassword';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/login" exact component={Login} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/forgot-password" exact component={ForgotPassWord} />
    <Route path="/set-password" exact component={SetPassword} />
  </Switch>
);

export default Routes;
