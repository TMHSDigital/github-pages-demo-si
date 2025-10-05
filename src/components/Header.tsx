import { Button } from "@/components/ui/button"
import { GithubLogo } from "@phosphor-icons/react"

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GithubLogo size={24} className="text-primary" weight="bold" />
            <span className="text-xl font-bold text-foreground">GitHub Pages Demo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#demos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Examples
            </a>
            <a href="#templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </a>
            <a href="#guide" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Guide
            </a>
            <Button size="sm" className="ml-4">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}