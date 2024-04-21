import { About, Contact, Experience, Home, NavBar, Portfolio, SocialLinks, Footer } from "./components";

function App() {
  return (
    <div>
    <div className="navbar"><NavBar/></div>
    <div className="home"><Home/></div>
    <div className="about"><About/></div>
    <div className="portfolio"><Portfolio/></div>
    <div className="experience"><Experience/></div>
    <div className="contact"><Contact/></div>
    <div className="sociallinks"><SocialLinks/></div>
    <div className="footer"><Footer/></div> 
    </div>
  );
}

export default App;
