import "./App.css"
import { Footer } from "./components/footer/Footer"
import { Hero } from "./components/hero/Hero" 
import { About } from "./components/section/about-me/About"
import { Projects } from "./components/section/projects/Projects"
import { Skills } from "./components/section/skills/Skills"
import {Contact } from '../src/components/contact/Contact'



function App() {
  return (
    <div>
    
          <Hero/>
          <Skills/>
          <Projects/>
          <About/>
          <Contact/>
          <Footer/>

    </div>
  );
}

export default App;
