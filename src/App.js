import React from 'react'
import Login from "./pages/Login"

// App is a function component in ReactJS that returns a div element
// containing the Login component
function App() {
  return (
    <div>
      {/* Login component is rendered inside the div element */}
      <Login />
    </div>
  );
}

// App component is exported to be used in other parts of the application
export default App;
