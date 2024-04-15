import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import AboutUs from "./views/AboutUs/AboutUs";
import Services from "./views/Services/Services";
import Porjects from "./views/Projects/Projects";
import Project from "./views/Project/Project";
import Porto from "./views/Porto/Porto";
import "./App.css"
function App() {
  return (
    <div className="font-glacial">
      <Route exact path="/" component={Home} />
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/proyectos" component={Porjects} />
      <Route exact path="/servicios" component={Services} />
      <Route exact path="/quienes-somos" component={AboutUs} />
      <Route exact path="/proyecto/:id" component={Project} />
      <Route exact path="/porto" component={Porto} />

    </div>
  );
}

export default App;
