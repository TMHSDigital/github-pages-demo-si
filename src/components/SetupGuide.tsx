import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, GithubLogo, Gear, Globe } from "@phosphor-icons/react"

const steps = [
  {
    id: 1,
    title: "Create Repository",
    description: "Set up a new GitHub repository for your website",
    icon: <GithubLogo size={24} />,
    tasks: [
      "Create a new repository on GitHub",
      "Name it `username.github.io` for user pages or any name for project pages", 
      "Make sure it's public (required for free GitHub Pages)",
      "Initialize with a README if starting fresh"
    ],
    code: `git clone https://github.com/username/repository-name.git
cd repository-name`
  },
  {
    id: 2,
    title: "Enable GitHub Pages",
    description: "Configure your repository to use GitHub Pages",
    icon: <Gear size={24} />,
    tasks: [
      "Go to repository Settings > Pages",
      "Select source branch (usually 'main' or 'gh-pages')",
      "Choose root folder or /docs folder as source",
      "Save settings and note your site URL"
    ],
    code: `# Your site will be available at:
# https://username.github.io/repository-name`
  },
  {
    id: 3,
    title: "Add Your Content",
    description: "Upload your website files to the repository",
    icon: <Globe size={24} />,
    tasks: [
      "Add your HTML, CSS, and JavaScript files",
      "Ensure you have an index.html file",
      "Commit and push your changes",
      "Wait for deployment (usually 1-2 minutes)"
    ],
    code: `git add .
git commit -m "Initial website commit"
git push origin main`
  }
]

export function SetupGuide() {
  return (
    <section id="guide" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Setup Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deploy your first GitHub Pages site in minutes. Follow these simple steps 
            to get your website live and accessible to the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-md text-primary">
                      {step.icon}
                    </div>
                    <Badge variant="outline">
                      Step {step.id}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{task}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md">
                    <pre className="text-xs font-mono overflow-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="bg-background border rounded-full p-2">
                    <ArrowRight size={16} className="text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Common Issues & Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-accent">404 Page Not Found</h4>
              <p className="text-sm text-muted-foreground">
                Make sure you have an `index.html` file in your repository root or selected folder.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-accent">Changes Not Showing</h4>
              <p className="text-sm text-muted-foreground">
                GitHub Pages can take up to 10 minutes to update. Clear your browser cache if needed.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-accent">Custom Domain Issues</h4>
              <p className="text-sm text-muted-foreground">
                Add a CNAME file with your domain and configure DNS A/CNAME records.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-accent">Build Failures</h4>
              <p className="text-sm text-muted-foreground">
                Check the Actions tab for build logs and ensure all file names are lowercase.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button size="lg">
            <GithubLogo className="mr-2" size={16} />
            Start Your First Site
          </Button>
        </div>
      </div>
    </section>
  )
}