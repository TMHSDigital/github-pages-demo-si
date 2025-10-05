import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight, Code } from "@phosphor-icons/react"

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Free • Open Source • Easy Setup
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
          Build Amazing Websites with{" "}
          <span className="text-primary">GitHub Pages</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover how to create and deploy beautiful, fast websites for free using GitHub Pages. 
          Explore templates, learn best practices, and launch your project in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="text-base px-8" asChild>
            <a href="#demos">
              <Play className="mr-2" size={16} weight="fill" />
              View Live Demos
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8" asChild>
            <a href="#templates">
              <Code className="mr-2" size={16} />
              Browse Templates
              <ArrowRight className="ml-2" size={16} />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-card p-6 rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm font-medium text-foreground mb-1">Ready Templates</div>
            <div className="text-xs text-muted-foreground">Portfolio, blog, docs & more</div>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <div className="text-2xl font-bold text-accent mb-2">0$</div>
            <div className="text-sm font-medium text-foreground mb-1">Hosting Cost</div>
            <div className="text-xs text-muted-foreground">Completely free with GitHub</div>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <div className="text-2xl font-bold text-primary mb-2">5min</div>
            <div className="text-sm font-medium text-foreground mb-1">Setup Time</div>
            <div className="text-xs text-muted-foreground">From code to live website</div>
          </div>
        </div>
      </div>
    </section>
  )
}