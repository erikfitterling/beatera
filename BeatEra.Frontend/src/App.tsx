import { ThemeProvider } from "./context/ThemeContext";
import Card from "./components/Card";
import "./styles/styles.css";
import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <h1>BeatEra</h1>
        <ToggleButton label1="🌙" label2="☀️" />
        <Card title="Erste Karte" content="Dies ist eine Beispielkarte." />
        <Card title="Sekundäre Karte" content="Eine alternative Karte." variant="secondary" />
      </div>
    </ThemeProvider>
  );
}

export default App;
