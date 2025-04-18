import React from 'react';
import { SpaceSettings } from "../../state/models/Space";
import useSpaceStore from "../../state/SpaceState"

type SettingsFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  unit?: string;
};

const SettingsField: React.FC<SettingsFieldProps> = ({ 
  label, 
  value, 
  onChange, 
  min = 0,
  unit 
}) => {
  return (
    <div className="input-container">
      <label htmlFor={`setting-${label.toLowerCase()}`}>{label}</label>
      <div className="input-wrapper">
        <input
          id={`setting-${label.toLowerCase()}`}
          type="number"
          min={min}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value) || 0)}
        />
        {unit && <span className="input-unit">{unit}</span>}
      </div>
    </div>
  );
};

const ConfigureSpace: React.FC = () => {
  const { currentSpace, updateSpace } = useSpaceStore();
  
  const updateSetting = (key: keyof SpaceSettings, value: number) => {
    if (!currentSpace) return;
    
    const updatedSpace = { ...currentSpace };
    if (!updatedSpace.settings) {
      updatedSpace.settings = new SpaceSettings();
    }
    
    updatedSpace.settings[key] = value;
    updateSpace(updatedSpace);
  };

  return (
    <div className="basic-container-c settings-container">
      <h2>Settings</h2>
      
      <SettingsField
        label="Points"
        value={currentSpace?.settings?.scoreToWin || 0}
        onChange={(value) => updateSetting('scoreToWin', value)}
        min={1}
      />
      
      <SettingsField
        label="Time Limit"
        value={currentSpace?.settings?.timeLimit || 0}
        onChange={(value) => updateSetting('timeLimit', value)}
        min={0}
        unit="seconds"
      />
    </div>
  );
};

export default ConfigureSpace;