import React, { useState } from 'react';
import MapView from './components/MapView';
import Sidebar from './components/Sidebar';
import './App.css'; // Assuming you have some CSS for positioning
import FloatingTool from './components/FloatingTool';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  return (
    <div className="App">
    <Navbar />
    <FloatingTool />
    
    <MapView />
    
    <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(!sidebarOpen)} />
  </div>
  );
};

export default App;
