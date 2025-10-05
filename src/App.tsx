import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { DemoShowcase } from "./components/DemoShowcase"
import { TemplateGenerator } from "./components/TemplateGenerator"
import { SetupGuide } from "./components/SetupGuide"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DemoShowcase />
        <TemplateGenerator />
        <SetupGuide />
      </main>
      <Footer />
    </div>
  )
}

export default App