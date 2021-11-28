import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Talleres from "../pages/Talleres";
import Rincones from "../pages/Rincones";
import NavBar from "../components/NavBar";

function RoutesApp() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Talleres />
				</Route>
				<Route path="/rincones">
					<Rincones />
				</Route>
			</Switch>
		</Router>
	);
}

export default RoutesApp;
