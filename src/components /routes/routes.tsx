import { Redirect, Switch, Route } from 'react-router-dom';
import Login from '../auth';
import Home from '../home';
import { Title } from '../auth/login.style';
import { useContext } from 'react';
import { AuthContext } from '../auth/authContext';

const NotFound = () => <Title>Page Not Found</Title>;

const notFoundRoute: RouteDefinition = {
  path: '*',
  component: NotFound,
  protected: false,
  exact: false,
};

export const routes: RouteDefinition[] = [
  {
    path: '/home',
    component: Home,
    protected: true,
    exact: true,
  },
  {
    path: '/',
    component: Login,
    protected: false,
    exact: true,
  },
].concat(notFoundRoute as any);

export interface RouteDefinition {
  path: string;
  protected?: boolean;
  redirect?: string;
  component?: any;
  routes?: RouteDefinition[];
  exact: boolean;
}

// Set the default redirects
const defaultRedirect = () => {
  return {
    auth: '/home',
    guest: '/',
  };
};

const getRouteRenderWithAuth = (isLoggedIn: boolean, route: RouteDefinition) => {
  const RenderComponent = <route.component />;
  if (isLoggedIn === route.protected) return () => RenderComponent;

  let defaultRedirectComponent: any;
  if (isLoggedIn) {
    defaultRedirectComponent = <Redirect to={`${defaultRedirect().auth}`} />;
  } else {
    defaultRedirectComponent = <Redirect to={`${defaultRedirect().guest}`} />;
  }

  return () => {
    return defaultRedirectComponent;
  };
};

const Routes = () => {
  const user = useContext(AuthContext);
  let isLoggedIn: boolean;
  if (user) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  return (
    <Switch>
      {routes.map((route: any, i: number) => {
        const render = getRouteRenderWithAuth(isLoggedIn, route);
        const rest = { render };

        return <Route key={i} path={route.path} exact={route.exact} {...rest} />;
      })}
    </Switch>
  );
};

export default Routes;
