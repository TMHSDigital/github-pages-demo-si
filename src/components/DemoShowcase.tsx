import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowSquareOut, Code, User, Article, BookOpen, Rocket } from "@phosphor-icons/react"

const demoSites = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Showcase your work and skills with a professional portfolio site",
    category: "Portfolio",
    tags: ["React", "Responsive", "Modern"],
    icon: <User size={20} />,
    liveUrl: "https://tailwindcss.com/",
    repoUrl: "https://github.com/tailwindlabs/tailwindcss"
  },
  {
    id: "blog",
    title: "Tech Blog",
    description: "Share your thoughts and expertise with a clean, readable blog",
    category: "Blog",
    tags: ["Jekyll", "SEO", "Fast"],
    icon: <Article size={20} />,
    liveUrl: "https://jekyllrb.com/",
    repoUrl: "https://github.com/jekyll/jekyll"
  },
  {
    id: "docs",
    title: "Project Documentation",
    description: "Create comprehensive documentation for your open source project",
    category: "Documentation",
    tags: ["VitePress", "Search", "Mobile"],
    icon: <BookOpen size={20} />,
    liveUrl: "https://vitepress.dev/",
    repoUrl: "https://github.com/vuejs/vitepress"
  },
  {
    id: "landing",
    title: "Product Landing",
    description: "Launch your product with a compelling landing page",
    category: "Landing",
    tags: ["HTML", "CSS", "Optimized"],
    icon: <Rocket size={20} />,
    liveUrl: "https://vercel.com/",
    repoUrl: "https://github.com/vercel/vercel"
  }
]

export function DemoShowcase() {
  return (
    <section id="demos" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Live Examples
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what's possible with GitHub Pages. Each demo is a real, working website 
            with source code you can examine and adapt.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="docs">Docs</TabsTrigger>
            <TabsTrigger value="landing">Landing</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {demoSites.map((site) => (
                <Card key={site.id} className="group hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-md text-primary">
                          {site.icon}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {site.category}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{site.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {site.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {site.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="default" asChild>
                        <a href={site.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ArrowSquareOut size={14} className="mr-1" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={site.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Code size={14} className="mr-1" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {["portfolio", "blog", "docs", "landing"].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {demoSites
                  .filter((site) => site.category.toLowerCase() === category)
                  .map((site) => (
                    <Card key={site.id} className="group hover:shadow-lg transition-shadow duration-200">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-primary/10 rounded-md text-primary">
                              {site.icon}
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {site.category}
                            </Badge>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{site.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {site.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {site.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="default" asChild>
                            <a href={site.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ArrowSquareOut size={14} className="mr-1" />
                              Live Demo
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href={site.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Code size={14} className="mr-1" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}