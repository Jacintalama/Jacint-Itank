import React from 'react';
import tankIcon from '../assets/icons/tankIcon.png';
import reservoir from '../assets/icons/well.png';
import pipes from '../assets/icons/pipe.png';
import pump from '../assets/icons/pump.png';
import junction from '../assets/icons/circle.png'
// import valve from '../assets/icons/valve.png'

interface SidePanelProps {
  onSelectNodeType: (nodeType: string) => void;
  onSelectLinkType: (nodeType: string) => void;
}

const FloatingTool: React.FC<SidePanelProps> = ({ onSelectNodeType, onSelectLinkType }) => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      right: '0',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      backgroundColor: 'rgba(220, 255, 255, 0.5)', // white background with 80% opacity
      padding: '10px',
      borderRadius: '8px',
    }}>
       <button onClick={() => onSelectNodeType('tank')} title="Tank" style={{ display: 'block', margin: '10px 0' }}><img src={tankIcon} alt="Tank" style={{ width: '24px', height: '24px' }} /></button>
       <button onClick={() => onSelectNodeType('reservoir')} title="Reservoir" style={{ display: 'block', margin: '10px 0' }}><img src={reservoir} alt="Reservoir" style={{ width: '24px', height: '24px' }} /></button>
       <button onClick={() => onSelectNodeType('junction')} title="Junction" style={{ display: 'block', margin: '10px 0' }}><img src={junction} alt="Junction" style={{ width: '24px', height: '24px' }} /></button>
       <button onClick={() => onSelectLinkType('pipe')} title="Pipes" style={{ display: 'block', margin: '10px 0' }}><img src={pipes} alt="Pipes" style={{ width: '24px', height: '24px' }} /></button>
       {/* <button title="Valve" style={{ display: 'block', margin: '10px 0' }}><img src={valve} alt="Valve" style={{ width: '24px', height: '24px' }} /></button> */}
       <button onClick={() => onSelectLinkType('pump')} title="Pump" style={{ display: 'block', margin: '10px 0' }}><img src={pump} alt="Pump" style={{ width: '24px', height: '24px' }} /></button>
    </div>
  );
};

export default FloatingTool;
