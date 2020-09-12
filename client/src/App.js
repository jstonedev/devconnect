import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";

const App = () => (
	<Provider store={store}>
		<Router>
			<Fragment>
				<Navbar />
				<Route exact path="/" component={Landing} />
				<section className="container">
					<Switch>
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
					</Switch>
				</section>
			</Fragment>
		</Router>
	</Provider>
);

export default App;
