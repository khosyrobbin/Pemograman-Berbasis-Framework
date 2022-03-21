import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import {
  Redirect, useHistory, useLocation, useParams, useRouteMatch
} from 'react-router-dom/cjs/react-router-dom.min';
import G1 from "./img/g1.png";
import G2 from "./img/g2.png";
import G3 from "./img/g3.png";

export default function AuthExample() {
    return (
      <Router>
        <div>
          <AuthButton />
          
          <ul>
            <li>
              <Link to="/public">About US</Link>
            </li>
            <li>
              <Link to="/private">Catalog Page</Link>
            </li>
          </ul>
  
          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/private">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
  
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };
  
  function AuthButton() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
    return fakeAuth.isAuthenticated ? (
      <p>
        Welcome to our Online Shop!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push(from));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>Anda masih belum login.</p>
    );
  }
  
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
  
  function PublicPage() {
    return (
      <div>
        <h3>About Us</h3>
        <h4>Online Shop - 2022</h4>
        <h5>Owner : Khosy Robbin Hood</h5>
      </div>
    );
  }
  
  function ProtectedPage() {
    return (
      <div>
        <h3>Silahkan melihat Barang-barang di Toko kami</h3>
        <ul>
            <li>Sepatu G1</li>
            <img src={G1}></img>
            <li>Sepatu G2</li>
            <img src={G2}></img>
            <li>Sepatu G3</li>
            <img src={G3}></img>
        </ul>
      </div>
    );
  }
  
  function LoginPage() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return (
      <div>
        <p>Silahkan Login untuk melihat barang {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }
  