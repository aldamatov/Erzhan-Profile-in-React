import "./App.css"
import { Footer } from "./components/footer/Footer"
import { Hero } from "./components/hero/Hero"
import { About } from "./components/section/about-me/About"
import { Projects } from "./components/section/skills/projects/Projects"
import { Skills } from "./components/section/skills/Skills"

function App() {
  return (
    <div>

      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      
{/*       <Contact/>
 */}      <Footer/>

    </div>
  );
}

export default App;
