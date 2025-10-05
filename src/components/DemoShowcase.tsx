import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Article, BookOpen, Rocket, ShoppingCart, FileText, Globe, MagicWand } from "@phosphor-icons/react"

const demoSites = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Showcase your work and skills with a professional portfolio site featuring project galleries, skills sections, and contact forms",
    category: "Portfolio",
    tags: ["React", "Responsive", "Modern"],
    icon: <User size={20} />,
    features: ["Project Gallery", "Skills Timeline", "Contact Form", "Responsive Design"]
  },
  {
    id: "blog",
    title: "Personal Blog",
    description: "Share your thoughts and expertise with a clean, readable blog featuring article listings, categories, and search functionality",
    category: "Blog",
    tags: ["Markdown", "SEO", "Categories"],
    icon: <Article size={20} />,
    features: ["Article Archive", "Categories", "Search", "SEO Optimized"]
  },
  {
    id: "docs",
    title: "API Documentation",
    description: "Create comprehensive technical documentation for your APIs with endpoint listings, examples, and interactive playgrounds",
    category: "Documentation",
    tags: ["API Reference", "Interactive", "Examples"],
    icon: <BookOpen size={20} />,
    features: ["API Endpoints", "Code Examples", "Interactive Playground", "Version History"]
  },
  {
    id: "landing",
    title: "SaaS Landing Page",
    description: "Launch your SaaS product with a compelling landing page featuring feature highlights, pricing, and call-to-action sections",
    category: "Landing",
    tags: ["Features", "Pricing", "CTA"],
    icon: <Rocket size={20} />,
    features: ["Feature Showcase", "Pricing Table", "Testimonials", "Newsletter Signup"]
  },
  {
    id: "ecommerce",
    title: "Online Store",
    description: "Sell products online with a modern e-commerce platform featuring product catalogs, shopping cart, and payment integration",
    category: "E-commerce",
    tags: ["Products", "Cart", "Payments"],
    icon: <ShoppingCart size={20} />,
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Inventory Management"]
  },
  {
    id: "resume",
    title: "Interactive Resume",
    description: "Stand out with an interactive resume website featuring timeline, skills visualization, and downloadable PDF options",
    category: "Resume",
    tags: ["Timeline", "Skills", "Downloadable"],
    icon: <FileText size={20} />,
    features: ["Experience Timeline", "Skills Matrix", "Project Portfolio", "PDF Export"]
  },
  {
    id: "wiki",
    title: "Knowledge Base",
    description: "Create a comprehensive wiki for your organization featuring structured content, search, and collaborative editing",
    category: "Wiki",
    tags: ["Structured", "Search", "Collaborative"],
    icon: <Globe size={20} />,
    features: ["Content Hierarchy", "Full-Text Search", "Version Control", "User Permissions"]
  }
]

interface DemoShowcaseProps {
  onTemplateSelect?: (templateType: string) => void
}

export function DemoShowcase({ onTemplateSelect }: DemoShowcaseProps) {
  const handleGenerateTemplate = (templateType: string) => {
    if (onTemplateSelect) {
      onTemplateSelect(templateType)
    }
  }

  return (
    <section id="demos" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Site Type Examples
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore different types of websites you can create with GitHub Pages. Each example shows
            the key features and structure you can generate with our template system.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-8 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="docs">Docs</TabsTrigger>
            <TabsTrigger value="landing">Landing</TabsTrigger>
            <TabsTrigger value="e-commerce">E-commerce</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
            <TabsTrigger value="wiki">Wiki</TabsTrigger>
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
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2 text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {site.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {site.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="default"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm"
                        onClick={() => handleGenerateTemplate(site.id)}
                      >
                        <MagicWand size={14} className="mr-1" />
                        Generate Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {["portfolio", "blog", "docs", "landing", "e-commerce", "resume", "wiki"].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {demoSites
                  .filter((site) => site.category.toLowerCase() === category.replace('-', ' '))
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
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2 text-foreground">Key Features:</h4>
                          <div className="flex flex-wrap gap-1">
                            {site.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {site.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="default"
                            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm"
                            onClick={() => handleGenerateTemplate(site.id)}
                          >
                            <MagicWand size={14} className="mr-1" />
                            Generate Template
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