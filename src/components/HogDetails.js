import React from "react"


function HogDetails({selectedHog}){
    
	 return(
        <div>
        {selectedHog && (
			<div className="hog-details">
				<h3>Details for {selectedHog.name}</h3>
				<p><strong>Specialty:</strong>{selectedHog.specialty}</p>
				<p><strong>Weight:</strong>{selectedHog.weight}</p>
				<p><strong>Greased:</strong>{selectedHog.greased ? "True" : "False"}</p>
				<p><strong>Hight Medal Achieved:</strong>{selectedHog["highest medal achieved"]}</p>

			</div>
		)}
		</div>
    )
}





export default HogDetails 