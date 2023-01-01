import React from 'react'
import Home from "./pages/Home"
import Login from "./pages/Login"

const logged_in = false;

const renderPage = () => {
  if (logged_in === true) {
    return <Home />
  } else {
    return <Login />
  }
}

function App() {
  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
