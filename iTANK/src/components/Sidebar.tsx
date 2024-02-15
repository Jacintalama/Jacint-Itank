import React, { useState } from 'react';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {

  const sidebarStyle: React.CSSProperties = {
    width: isOpen ? '250px' : '0',
    height: '100%',
    position: 'fixed',
    zIndex: 100,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255  , 255, 0.7)',
    overflowX: 'hidden',
    transition: 'width 0.5s ease',
    padding: isOpen ? '20px' : '0',
  };

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (itemName: string) => {
    setSelectedItems(prevItems => {
      if (prevItems.includes(itemName)) {
        return prevItems.filter(item => item !== itemName);
      } else {
        return [...prevItems, itemName];
      }
    });
  };

  const toggleButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: isOpen ? '250px' : '0px', // Adjust if sidebar width changes
    transform: 'translateY(-50%)', // Vertically center
    zIndex: 101, // Above the sidebar
    cursor: 'pointer',
    transition: 'left 0.5s ease', // Smooth transition for the button movement
  };

  const circleButtonStyle: React.CSSProperties = {
    background: 'white', // Circle background color
    borderRadius: '50%', // Make it round
    width: '40px', // Circle size
    height: '40px', // Circle size
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Optional shadow
    transition: 'transform 0.5s ease', // Smooth transition for the rotation
  };

  // Rotate the arrow smoothly on open/close
  const svgStyle: React.CSSProperties = {
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.5s ease',
  };

  
  return (
    <>
      <div style={sidebarStyle}>
        {/* Sidebar content goes here */}

        <div className="text-[#a1fff8] p-4 space-y-4"> {/* Use TailwindCSS for spacing and text color */}
          <div className="w-60 space-y-4 "> {/* Control width and spacing between items */}
            <br /><br /><h1 className="text-black text-lg font-bold mb-4">Model Elements</h1><br />
            {[
             
              'Junction',
              'Tanks',
              'Pipes',
              'Reservoir',
              // 'Valves',
              'Pumps',
            ].map((item) => (
              <div key={item}>
                <label className="flex items-center space-x-2 ">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-teal-500 rounded border-gray-300 transition duration-150 ease-in-out"
                    checked={selectedItems.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />

                  <span className="text-gray-900 font-semibold text-sm cursor-pointer">{item}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <div style={toggleButtonStyle} onClick={onClose}>
        <div style={circleButtonStyle}>
          {/* SVG arrow with rotation */}
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={svgStyle}>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
