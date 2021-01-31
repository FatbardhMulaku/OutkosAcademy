import React from "react";
import Divider from "../Divider"

function editor() {
  return (
    <div className="container py-16">
		<Divider width="16%"/>
		<h2 className="text-center text-3xl my-4 mb-10 font-bold text-gray-800	">Try in Real-Time</h2>
      <iframe
        height="500px"
        width="100%"
        src="https://stackblitz.com/edit/react-jecbka?embed=1&file=src/App.js&hideExplorer=1&hideNavigation=1"
        scrolling="no"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
      ></iframe>
    </div>
  );
}

export default editor;
