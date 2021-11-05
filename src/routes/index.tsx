import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import ForgotPassWord from '../pages/ForgotPassword';
import SetPassword from '../pages/SetPassword';

const Routes = () => (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/profile" component={Profile} isPrivate/>
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassWord} />
      <Route path="/set-password" component={SetPassword} />
    </Switch>
);

export default Routes;
