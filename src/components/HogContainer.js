import React, { useState } from "react"
import hogs from "../porkers_data"
import HogDetails from "./HogDetails.js"

function HogContainer({ hogs, onHogClick, selectedHog }){
	
	
    return(

		
        <div className="hog-container">
				{hogs.map((hog) => (
					<div key={hog.id} 
						 className="hog-tile" 
						 >
						<h2>{hog.name}</h2>
						<img src={hog.image} alt={hog.name} onClick={()=> onHogClick(hog)}/>
						{selectedHog && selectedHog.name === hog.name && (
						<HogDetails selectedHog={selectedHog}/>
					)}
				    </div>
				))}
		</div>

  )
	
}



export default HogContainer