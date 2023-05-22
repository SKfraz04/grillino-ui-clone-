import "./App.css";
import MyNavbar from "./components/MyNavbar";
import LandingPage from "./pages/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <LandingPage />
    </div>
  );
}

export default App;
