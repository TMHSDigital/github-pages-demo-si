import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from "./components/ThemeProvider"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { DemoShowcase } from "./components/DemoShowcase"
import { TemplateGenerator } from "./components/TemplateGenerator"
import { SetupGuide } from "./components/SetupGuide"
import { Footer } from "./components/Footer"

function ErrorFallback({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Something went wrong</h2>
        <p className="text-sm text-muted-foreground mb-4">
          {error.message}
        </p>
        <button 
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <ErrorBoundary fallback={<div className="py-16 text-center">Loading hero section...</div>}>
              <Hero />
            </ErrorBoundary>
            <ErrorBoundary fallback={<div className="py-16 text-center">Loading demo showcase...</div>}>
              <DemoShowcase />
            </ErrorBoundary>
            <ErrorBoundary fallback={<div className="py-16 text-center">Loading template generator...</div>}>
              <TemplateGenerator />
            </ErrorBoundary>
            <ErrorBoundary fallback={<div className="py-16 text-center">Loading setup guide...</div>}>
              <SetupGuide />
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App