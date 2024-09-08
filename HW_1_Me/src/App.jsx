import './App.css'
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';

function App() {
  return (
    <>
      <div className="App">
      <Header />
      <Profile />
      <div className="content-container">
        <div className="experience-section">
          <Experience />
        </div>
        <div className="skills-section">
          <Skills />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
