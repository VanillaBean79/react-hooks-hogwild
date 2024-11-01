import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer"

function App() {
	const[selectedHog, setSelectedHog] = useState(null)
	const[showGreased, setShowGreased] = useState(false)
	const[sortBy, setSortBy] = useState("name")

	const handleHogClick = (hog)=>{
		setSelectedHog(hog)
	}

	const toggleGreasedFilter = () => {
		setShowGreased((hog)=> !hog)
	}

	const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs

	const sortedHogs = filteredHogs.sort((a, b)=>{
		if ( sortBy === "name"){
			return a.name.localeCompare(b.name)
		} else {
			return a.weight - b.weight
		}
	})	

	const handleSortChange = (e)=>{
		setSortBy(e.target.value)
	}
	
	return (
		<div className="App">
			<Nav  />
			<button onClick={toggleGreasedFilter}>
			{showGreased ? "Show All Hogs" : "Show Greased Hogs"}
				</button>
				<select onChange={handleSortChange} value={sortBy}>
					<option value="name">Sort by Name</option>
					<option value="weight">Sort by Weight</option>
				</select>
			<HogContainer
				hogs={sortedHogs}
				onHogClick={handleHogClick}
				selectedHog={selectedHog}
			 />
			
		</div>
	);
}

export default App;
