import "./App.css";
import MyNavbar from "./components/MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <LandingPage />
    </div>
  );
}

export default App;
