import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import HelloComponent from "./component/HelloComponent";
import reportWebVitals from './reportWebVitals';
import LoginComponent from "./component/LoginComponent";

ReactDOM.render(
  <React.StrictMode>
    <LoginComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// function HelloComponent() {
//   return HelloComponent
// }
// ReactDOM.render(<HelloComponent/>, document.getElementById('root'));

// const HelloComponent = () => {return HelloComponent}

// class StateFullComponent extends React.Component{
//   render(){
//     return <p>stateFullComponent...</p>;
//   }
// }
// ReactDOM.render(<StateFullComponent/>, document.getElementById('root'))

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hello: "World!" };
//   }

//   componentWillMount() {
//     console.log("componentWillMount()");
//   }
//   componentDidMount() {
//     console.log("componentDidMount()");
//   }

//   changeState() {
//     this.setState({ hello: "Geek!" });
//   }
//   render() {
//     return (
//       <div>
//         <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
//         <h2>
//           <a onClick={this.changeState.bind(this)}>Press Here!</a>
//         </h2>
//       </div>
//     );
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate()");
//     return true;
//   }

//   componentWillUpdate() {
//     console.log("componentWillUpdate()");
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate()");
//   }
// }

// ReactDOM.render(<Test />, document.getElementById("root"));

// ReactDOM.render(<LoginComponent />, document.getElementById("root"));

reportWebVitals();
