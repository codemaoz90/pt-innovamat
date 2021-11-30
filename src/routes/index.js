import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Talleres from "../pages/Talleres";
import Rincones from "../pages/Rincones";
import NavBar from "../components/NavBar";
import DetailCard from "../components/DetailCard";

function RoutesApp() {
	return (
		<Router>
			<NavBar />
			<div className="site-container">
				<Switch>
					<Route exact path="/">
						<Talleres />
					</Route>
					<Route path="/rincones">
						<Rincones />
					</Route>
					<Route path="/taller/:id" component={DetailCard} />
				</Switch>
			</div>
		</Router>
	);
}

export default RoutesApp;
