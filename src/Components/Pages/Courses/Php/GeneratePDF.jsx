import React from 'react';
import Divider from "../../../Shared/Divider";
import GeneratePDFform from "../../../Shared/Form/GeneratePDF";

function GeneratePDF() {
	return (
		<div className="GeneratePDF container">
			<Divider width="20%"/>
			<h3>Generate PDF with PHP Scripts</h3>

			<div className="GeneratePDF__wrapper">
				<div className="w-full lg:w-3/5">
					<GeneratePDFform />
				</div>
				<div className="w-full lg:w-2/5 m-auto">
					<div className="GeneratePDF__wrapper--img BG m-auto" />
				</div>
			</div>
		</div>
	)
}

export default GeneratePDF;