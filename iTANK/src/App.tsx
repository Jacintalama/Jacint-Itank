import React, { useState } from 'react';
import MapView from './components/MapView';
import Sidebar from './components/Sidebar';
import './App.css'; // Assuming you have some CSS for positioning

import Navbar from './components/Navbar';
import ModelJunction from './components/ModelJunction';
import ModelTank from './components/ModelTank';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App relative"> {/* This makes the App div a positioning context */}
      
      <Navbar />
     
      {/* This ModelJunction component should be positioned absolutely */}
      {/* <ModelJunction /> */}
      {/* <ModelTank /> */}
      
      {/* MapView is likely taking the rest of the space */}
      <MapView />
      
      {/* Sidebar component for additional UI */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(!sidebarOpen)} />
      
    </div>
  );
};

export default App;
