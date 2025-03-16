import React from "react";

interface ToggleButtonProps {
  labels: {
    checked?: React.ReactNode;
    unchecked: React.ReactNode;
  };
  isChecked?: boolean;
  toExecute: () => void; 
  style?: string; 
}

const ToggleButton = ({labels, isChecked, toExecute, style = ''}: ToggleButtonProps) => {
  return (
    <button className={style} onClick={toExecute}>
      {isChecked ? labels.checked : labels.unchecked}
    </button>
  );
};

export default ToggleButton;
