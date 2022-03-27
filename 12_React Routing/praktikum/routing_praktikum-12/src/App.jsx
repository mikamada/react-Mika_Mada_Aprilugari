import './App.css';
import Home from './components/Home';
import AboutApp from './components/AboutApp';
import AboutAuthor from './components/AboutAuthor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about/about-app/*" element={<AboutApp />} />
				<Route path="/about/about-author/*" element={<AboutAuthor />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
