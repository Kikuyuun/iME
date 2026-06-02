import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { SuggestionBox } from './components/SuggestionBox'
import { MouseIconGrid } from './components/MouseIconGrid'

function App() {
  return (
    <>
      <MouseIconGrid />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <SuggestionBox />
    </>
  )
}

export default App
