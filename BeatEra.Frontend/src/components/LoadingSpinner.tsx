import "../styles/loading.css";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  overlay?: boolean;
}

const LoadingSpinner = ({ size = "medium", overlay = false }: LoadingSpinnerProps) => {
  const spinnerClass = `spinner spinner-${size}`;
  
  if (overlay) {
    return (
      <div className="spinner-overlay">
        <div className={spinnerClass}></div>
      </div>
    );
  }
  
  return <div className={spinnerClass}></div>;
};

export default LoadingSpinner;