import "./App.css";
import JobContextProvider from "./contexts/JobContextProvider";
import SearchJobs from "./views/searchjobview/SearchJobs";

function App() {
	return (
		<>
			<JobContextProvider>
				<SearchJobs />
			</JobContextProvider>
		</>
	);
}

export default App;
