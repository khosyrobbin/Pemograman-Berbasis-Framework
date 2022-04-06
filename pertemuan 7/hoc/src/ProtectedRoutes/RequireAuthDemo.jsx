import React, { Component } from 'react';
import { Link, Route, Routes, HashRouter  } from 'react-router-dom';
import RequireAuth from './RequireAuthHOC';
class RequireAuthDemo extends Component {
    constructor(props) {
        super(props);
        /* Initialize state to false */
        this.state = {
            authenticated: false,
        }
    }
    render() {
        const AuthContacts = HashRouter(RequireAuth(Contacts));
        const { match } = this.props;
        console.log(match);
        return (
            <div>
                <ul className="nav navbar-nav">
                    <li><Link to={`${match.url}/home/`}>Home</Link></li>
                    <li><Link to={`${match.url}/contacts`}>Contacts(Protected Route)</Link></li>
                </ul>

                <Routes>
                    <Route exact path={`${match.path}/home/`} component={Home} />
                    <Route path={`${match.path}/contacts`} render={() => <AuthContacts authenticated={this.state.authenticated} {...this.props} />} />
                </Routes>
            </div>

        );
    }
}
const Home = () => {
    return (<div> Navigating to the protected route gets redirected to /login </div>);
}
const Contacts = () => {
 return(<div> Contacts </div>);
 
}
export default RequireAuthDemo;