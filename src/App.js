import './App.css';
import { Header } from "./Components/Header";

function App() {
  return (
    <div>
      <Header title="My Todo App" searchBar={true} />
    </div>
  );
}

export default App;
