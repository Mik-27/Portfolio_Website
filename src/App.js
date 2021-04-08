import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Footer from "./components/footer/footer";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
