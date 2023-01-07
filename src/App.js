import "./App.css";
import Header from "./pages/header";
import Feed from "./pages/feed";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Feed />
      </div>
    </div>
  );
}

export default App;
