import { GithubLogo, Heart } from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GithubLogo size={24} className="text-primary" weight="bold" />
              <span className="text-lg font-bold">GitHub Pages Demo</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Learn how to create and deploy beautiful websites for free using GitHub Pages. 
              From simple portfolios to complex documentation sites.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart size={16} className="text-red-500" weight="fill" /> for the developer community
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Examples</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Best Practices</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">GitHub Discussions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contributing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Issues</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Feature Requests</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 GitHub Pages Demo. Open source and free to use.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}