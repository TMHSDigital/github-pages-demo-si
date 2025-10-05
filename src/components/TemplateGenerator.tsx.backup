import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, MagicWand, Copy, Eye, Code as CodeIcon } from "@phosphor-icons/react"
import { useKV } from '@github/spark/hooks'

interface TemplateConfig {
  type: string
  name: string
  features: string[]
  styling: string
}

const templateTypes = [
  { value: "portfolio", label: "Personal Portfolio", description: "Showcase your work and skills" },
  { value: "blog", label: "Personal Blog", description: "Share articles and thoughts" },
  { value: "docs", label: "API Documentation", description: "Technical API documentation" },
  { value: "landing", label: "SaaS Landing", description: "Software as a Service landing page" },
  { value: "ecommerce", label: "Online Store", description: "E-commerce product catalog" },
  { value: "resume", label: "Interactive Resume", description: "Professional resume website" },
  { value: "wiki", label: "Knowledge Base", description: "Organizational wiki site" }
]

const availableFeatures = [
  { id: "responsive", label: "Responsive Design", description: "Mobile-friendly layout" },
  { id: "dark-mode", label: "Dark Mode Toggle", description: "Theme switching capability" },
  { id: "contact-form", label: "Contact Form", description: "Contact form with validation" },
  { id: "analytics", label: "Google Analytics", description: "Built-in analytics tracking" },
  { id: "seo", label: "SEO Optimized", description: "Meta tags and structured data" },
  { id: "blog-support", label: "Blog Support", description: "Markdown blog posts" },
  { id: "ecommerce-features", label: "E-commerce Features", description: "Product catalog and shopping cart" },
  { id: "api-integration", label: "API Integration", description: "REST API endpoints and documentation" },
  { id: "search-functionality", label: "Search Functionality", description: "Site-wide search capability" },
  { id: "user-authentication", label: "User Authentication", description: "Login and registration system" },
  { id: "cms-integration", label: "CMS Integration", description: "Content management system" }
]

const stylingOptions = [
  { value: "minimal", label: "Minimal", description: "Clean and simple design" },
  { value: "modern", label: "Modern", description: "Contemporary with animations" },
  { value: "classic", label: "Classic", description: "Traditional and professional" },
  { value: "creative", label: "Creative", description: "Bold and artistic" }
]

interface TemplateGeneratorProps {
  initialTemplateType?: string
  isOpen?: boolean
  onClose?: () => void
}

export function TemplateGenerator({ initialTemplateType = "", isOpen = false, onClose }: TemplateGeneratorProps) {
  const [config, setConfig] = useKV<TemplateConfig>("template-config", {
    type: initialTemplateType,
    name: "",
    features: [],
    styling: ""
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCode, setGeneratedCode] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [editedCode, setEditedCode] = useState("")

  useEffect(() => {
    if (initialTemplateType) {
      setConfig((current) => ({
        ...current,
        type: initialTemplateType
      }))
    }
  }, [initialTemplateType])

  const handleFeatureToggle = (featureId: string, checked: boolean) => {
    setConfig((current) => {
      const currentConfig = current || { type: "", name: "", features: [], styling: "" }
      return {
        ...currentConfig,
        features: checked 
          ? [...currentConfig.features, featureId]
          : currentConfig.features.filter(f => f !== featureId)
      }
    })
  }

  const generateTemplate = async () => {
    if (!config) return

    setIsGenerating(true)

    try {
      // Try LLM generation first
      const promptText = `Generate a complete, production-ready HTML template for a ${config.type} website with the following specifications:

Site Name: ${config.name || 'My GitHub Pages Site'}
Type: ${config.type}
Styling Theme: ${config.styling}
Features: ${config.features.join(', ')}

Requirements:
- Complete HTML5 structure with proper semantic elements
- Inline CSS with modern styling (flexbox/grid, clean typography, responsive design)
- Include placeholder content appropriate for a ${config.type}
- ${config.features.includes('responsive') ? 'Mobile-responsive design with media queries' : ''}
- ${config.features.includes('dark-mode') ? 'CSS variables for dark mode support' : ''}
- ${config.features.includes('contact-form') ? 'Working contact form with validation' : ''}
- ${config.features.includes('seo') ? 'SEO meta tags and structured data' : ''}
- ${config.features.includes('analytics') ? 'Google Analytics integration placeholder' : ''}
- Clean, ${config.styling} design aesthetic
- Production-ready code that can be deployed immediately to GitHub Pages

Return only the complete HTML code without any explanations or markdown formatting.`

      const generatedTemplate = await window.spark.llm(promptText, "gpt-4o-mini")
      const trimmedCode = generatedTemplate.trim()
      setGeneratedCode(trimmedCode)
      setEditedCode(trimmedCode)
    } catch (error) {
      console.error('LLM template generation failed:', error)

      // Try a more conservative fallback with better error messaging
      try {
        // Attempt a simpler prompt in case the first one was too complex
        const simplePrompt = `Create a basic ${config.type} HTML template for "${config.name || 'My Site'}". Include ${config.styling} styling and these features: ${config.features.join(', ')}.`

        const fallbackTemplate = await window.spark.llm(simplePrompt, "gpt-3.5-turbo")
        const trimmedFallback = fallbackTemplate.trim()
        setGeneratedCode(trimmedFallback)
        setEditedCode(trimmedFallback)
      } catch (secondError) {
        console.error('Fallback template generation also failed:', secondError)

        // Final fallback to static template
        const staticTemplate = generateStaticTemplate(config)
        setGeneratedCode(staticTemplate)
        setEditedCode(staticTemplate)
      }
    }

    setIsGenerating(false)
  }

  const generateStaticTemplate = (config: TemplateConfig) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.name || 'My GitHub Pages Site'}</title>
    ${config.features.includes('seo') ? `<meta name="description" content="A ${config.type} website created with GitHub Pages">
    <meta property="og:title" content="${config.name || 'My Site'}">
    <meta property="og:description" content="A ${config.type} website created with GitHub Pages">` : ''}
    <style>
        /* ${config.styling} styling */
        :root {
            ${config.features.includes('dark-mode') ? '--bg-color: #ffffff; --text-color: #000000;' : ''}
        }

        .dark {
            ${config.features.includes('dark-mode') ? '--bg-color: #1a1a1a; --text-color: #ffffff;' : ''}
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            margin: 0;
            padding: 20px;
            background: var(--bg-color, #ffffff);
            color: var(--text-color, #000000);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e5e7eb;
        }

        h1 {
            margin: 0;
            font-size: 2.5rem;
            font-weight: bold;
        }

        .content {
            display: grid;
            gap: 2rem;
        }

        ${config.features.includes('responsive') ? `
        @media (max-width: 768px) {
            body { padding: 10px; }
            h1 { font-size: 2rem; }
            .container { padding: 0 1rem; }
        }` : ''}

        ${config.features.includes('dark-mode') ? `
        .theme-toggle {
            position: fixed;
            top: 1rem;
            right: 1rem;
            background: #f3f4f6;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            padding: 0.5rem;
            cursor: pointer;
        }` : ''}
    </style>
</head>
<body>
    ${config.features.includes('dark-mode') ? '<button class="theme-toggle" onclick="document.body.classList.toggle(\'dark\')">🌙</button>' : ''}

    <div class="container">
        <header>
            <h1>${config.name || 'Welcome to My Site'}</h1>
            ${config.type === 'portfolio' ? '<p>Showcase your work and skills</p>' : ''}
            ${config.type === 'blog' ? '<p>Share your thoughts and ideas</p>' : ''}
            ${config.type === 'docs' ? '<p>Technical API documentation and guides</p>' : ''}
            ${config.type === 'landing' ? '<p>Introduce your SaaS platform</p>' : ''}
        </header>

        <main class="content">
            ${config.type === 'portfolio' ? `
            <section>
                <h2>My Work</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
                    <div style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
                        <h3>Project 1</h3>
                        <p>A brief description of your project...</p>
                    </div>
                    <div style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
                        <h3>Project 2</h3>
                        <p>Another project description...</p>
                    </div>
                </div>
            </section>` : ''}

            ${config.type === 'blog' ? `
            <section>
                <h2>Latest Posts</h2>
                <article style="border: 1px solid #e5e7eb; padding: 1rem; margin-bottom: 1rem; border-radius: 0.5rem;">
                    <h3>Blog Post Title</h3>
                    <p class="text-muted">Posted on January 1, 2024</p>
                    <p>A brief excerpt from your blog post...</p>
                </article>
            </section>` : ''}

            ${config.type === 'docs' ? `
            <section>
                <h2>Getting Started</h2>
                <p>Welcome to the project documentation. This guide will help you get started.</p>
                <nav>
                    <ul style="list-style: none; padding: 0;">
                        <li><a href="#installation">Installation</a></li>
                        <li><a href="#usage">Usage</a></li>
                        <li><a href="#api">API Reference</a></li>
                    </ul>
                </nav>
            </section>` : ''}

            ${config.type === 'landing' ? `
            <section style="text-align: center; padding: 2rem;">
                <h2>Welcome to Our SaaS Platform</h2>
                <p>Discover how our solution can help you achieve your goals.</p>
                <button style="background: #3b82f6; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer;">
                    Get Started
                </button>
            </section>` : ''}

            ${config.type === 'ecommerce' ? `
            <section>
                <h2>Featured Products</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    <div style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
                        <h3>Product Name</h3>
                        <p>$99.99</p>
                        <button style="background: #10b981; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;">Add to Cart</button>
                    </div>
                    <div style="border: 1px solid #e5e7eb; padding: 1rem; border-radius: 0.5rem;">
                        <h3>Another Product</h3>
                        <p>$149.99</p>
                        <button style="background: #10b981; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; cursor: pointer;">Add to Cart</button>
                    </div>
                </div>
            </section>` : ''}

            ${config.type === 'resume' ? `
            <section>
                <h2>Professional Experience</h2>
                <div style="border: 1px solid #e5e7eb; padding: 1rem; margin-bottom: 1rem; border-radius: 0.5rem;">
                    <h3>Senior Developer</h3>
                    <p>Tech Company | 2020 - Present</p>
                    <p>Job description and achievements...</p>
                </div>
                <div style="border: 1px solid #e5e7eb; padding: 1rem; margin-bottom: 1rem; border-radius: 0.5rem;">
                    <h3>Full Stack Developer</h3>
                    <p>Previous Company | 2018 - 2020</p>
                    <p>Previous job description and achievements...</p>
                </div>
            </section>` : ''}

            ${config.type === 'wiki' ? `
            <section>
                <h2>Knowledge Base</h2>
                <nav>
                    <ul style="list-style: none; padding: 0; display: flex; gap: 1rem; margin-bottom: 2rem;">
                        <li><a href="#getting-started" style="color: #3b82f6; text-decoration: none;">Getting Started</a></li>
                        <li><a href="#tutorials" style="color: #3b82f6; text-decoration: none;">Tutorials</a></li>
                        <li><a href="#faq" style="color: #3b82f6; text-decoration: none;">FAQ</a></li>
                    </ul>
                </nav>
                <article>
                    <h3 id="getting-started">Getting Started</h3>
                    <p>Welcome to our knowledge base. This guide will help you get started with our platform.</p>
                </article>
            </section>` : ''}

            ${config.features.includes('contact-form') ? `
            <section>
                <h2>Contact Us</h2>
                <form style="max-width: 500px; margin: 0 auto;">
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem;">Email:</label>
                        <input type="email" required style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.25rem;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem;">Message:</label>
                        <textarea required rows="4" style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.25rem;"></textarea>
                    </div>
                    <button type="submit" style="background: #10b981; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.25rem; cursor: pointer;">
                        Send Message
                    </button>
                </form>
            </section>` : ''}
        </main>
    </div>

    ${config.features.includes('analytics') ? `
    <!-- Google Analytics -->
    <script>
        // Google Analytics placeholder - replace with your tracking ID
        console.log('Analytics tracking would go here');
    </script>` : ''}
</body>
</html>`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(isEditing ? editedCode : generatedCode)
  }

  const downloadTemplate = () => {
    const blob = new Blob([isEditing ? editedCode : generatedCode], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${config?.name || 'template'}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const toggleEditMode = () => {
    if (!isEditing) {
      setEditedCode(generatedCode)
    }
    setIsEditing(!isEditing)
  }

  const saveEdits = () => {
    setGeneratedCode(editedCode)
    setIsEditing(false)
  }

  const cancelEdits = () => {
    setEditedCode(generatedCode)
    setIsEditing(false)
  }

  const renderPreview = () => {
    const codeToRender = isEditing ? editedCode : generatedCode
    if (!codeToRender) return null

    // Create a safe preview by extracting just the body content
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = codeToRender
    const bodyContent = tempDiv.querySelector('body')

    return (
      <div className="border rounded-md p-4 bg-background min-h-[400px] overflow-auto">
        <div dangerouslySetInnerHTML={{ __html: bodyContent?.innerHTML || codeToRender }} />
      </div>
    )
  }

  const currentConfig = config || { type: "", name: "", features: [], styling: "" }

  return (
    <section id="templates" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Custom Template Generator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create a personalized GitHub Pages template tailored to your needs.
            Configure features and get ready-to-deploy code.
          </p>
        </div>

        {/* Standalone template generator for direct access */}
        {!isOpen && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {templateTypes.slice(0, 3).map((type) => (
              <Card key={type.value} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{type.label}</CardTitle>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm">
                        <MagicWand className="mr-2" size={16} />
                        Customize Template
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Customize Your {type.label}</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-6 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="site-name">Site Name</Label>
                          <Input
                            id="site-name"
                            placeholder="My Awesome Site"
                            value={currentConfig.name}
                            onChange={(e) => setConfig((current) => {
                              const currentConfig = current || { type: "", name: "", features: [], styling: "" }
                              return { ...currentConfig, name: e.target.value }
                            })}
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label>Styling Theme</Label>
                          <Select
                            value={currentConfig.styling}
                            onValueChange={(value) => setConfig((current) => {
                              const currentConfig = current || { type: "", name: "", features: [], styling: "" }
                              return { ...currentConfig, styling: value }
                            })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a style" />
                            </SelectTrigger>
                            <SelectContent>
                              {stylingOptions.map((style) => (
                                <SelectItem key={style.value} value={style.value}>
                                  <div>
                                    <div className="font-medium">{style.label}</div>
                                    <div className="text-xs text-muted-foreground">{style.description}</div>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid gap-3">
                          <Label>Features</Label>
                          <div className="grid grid-cols-1 gap-3">
                            {availableFeatures.map((feature) => (
                              <div key={feature.id} className="flex items-center space-x-3">
                                <Checkbox
                                  id={feature.id}
                                  checked={currentConfig.features.includes(feature.id)}
                                  onCheckedChange={(checked) => handleFeatureToggle(feature.id, !!checked)}
                                />
                                <div className="flex-1">
                                  <Label htmlFor={feature.id} className="text-sm font-medium">
                                    {feature.label}
                                  </Label>
                                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            onClick={generateTemplate}
                            disabled={isGenerating || !currentConfig.type}
                            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm"
                          >
                            {isGenerating ? "Generating..." : "Generate Template"}
                          </Button>
                          {generatedCode && (
                            <>
                              <Button variant="outline" onClick={toggleEditMode} title="Edit template code">
                                <CodeIcon size={16} />
                              </Button>
                              <Button variant="outline" onClick={copyToClipboard} title="Copy to clipboard">
                                <Copy size={16} />
                              </Button>
                              <Button variant="outline" onClick={downloadTemplate} title="Download as HTML file">
                                <Download size={16} />
                              </Button>
                            </>
                          )}
                        </div>

                        {generatedCode && (
                          <div className="mt-4">
                            <div className="flex items-center justify-between mb-2">
                              <Label>Template</Label>
                              {isEditing && (
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline" onClick={saveEdits}>
                                    Save
                                  </Button>
                                  <Button size="sm" variant="ghost" onClick={cancelEdits}>
                                    Cancel
                                  </Button>
                                </div>
                              )}
                            </div>

                            <Tabs defaultValue="preview" className="w-full">
                              <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="preview">
                                  <Eye size={16} className="mr-1" />
                                  Preview
                                </TabsTrigger>
                                <TabsTrigger value="code">
                                  <CodeIcon size={16} className="mr-1" />
                                  Code
                                </TabsTrigger>
                              </TabsList>

                              <TabsContent value="preview" className="mt-4">
                                {renderPreview()}
                              </TabsContent>

                              <TabsContent value="code" className="mt-4">
                                {isEditing ? (
                                  <textarea
                                    value={editedCode}
                                    onChange={(e) => setEditedCode(e.target.value)}
                                    className="w-full h-96 p-4 bg-muted border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Edit your template code here..."
                                  />
                                ) : (
                                  <pre className="p-4 bg-muted rounded-md overflow-auto max-h-96">
                                    <code className="text-xs font-mono">
                                      {generatedCode}
                                    </code>
                                  </pre>
                                )}
                              </TabsContent>
                            </Tabs>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Template generator dialog for demo showcase */}
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={(open) => !open && onClose?.()}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Customize Your {templateTypes.find(t => t.value === initialTemplateType)?.label || 'Template'}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input
                    id="site-name"
                    placeholder="My Awesome Site"
                    value={currentConfig.name}
                    onChange={(e) => setConfig((current) => {
                      const currentConfig = current || { type: "", name: "", features: [], styling: "" }
                      return { ...currentConfig, name: e.target.value }
                    })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label>Styling Theme</Label>
                  <Select
                    value={currentConfig.styling}
                    onValueChange={(value) => setConfig((current) => {
                      const currentConfig = current || { type: "", name: "", features: [], styling: "" }
                      return { ...currentConfig, styling: value }
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a style" />
                    </SelectTrigger>
                    <SelectContent>
                      {stylingOptions.map((style) => (
                        <SelectItem key={style.value} value={style.value}>
                          <div>
                            <div className="font-medium">{style.label}</div>
                            <div className="text-xs text-muted-foreground">{style.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-3">
                  <Label>Features</Label>
                  <div className="grid grid-cols-1 gap-3">
                    {availableFeatures.map((feature) => (
                      <div key={feature.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={feature.id}
                          checked={currentConfig.features.includes(feature.id)}
                          onCheckedChange={(checked) => handleFeatureToggle(feature.id, !!checked)}
                        />
                        <div className="flex-1">
                          <Label htmlFor={feature.id} className="text-sm font-medium">
                            {feature.label}
                          </Label>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={generateTemplate}
                    disabled={isGenerating || !currentConfig.type}
                    className="flex-1"
                  >
                    {isGenerating ? "Generating..." : "Generate Template"}
                  </Button>
                  {generatedCode && (
                    <>
                      <Button variant="outline" onClick={toggleEditMode} title="Edit template code">
                        <CodeIcon size={16} />
                      </Button>
                      <Button variant="outline" onClick={copyToClipboard} title="Copy to clipboard">
                        <Copy size={16} />
                      </Button>
                      <Button variant="outline" onClick={downloadTemplate} title="Download as HTML file">
                        <Download size={16} />
                      </Button>
                    </>
                  )}
                </div>

                {generatedCode && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <Label>Template</Label>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={saveEdits}>
                            Save
                          </Button>
                          <Button size="sm" variant="ghost" onClick={cancelEdits}>
                            Cancel
                          </Button>
                        </div>
                      )}
                    </div>

                    <Tabs defaultValue="preview" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="preview">
                          <Eye size={16} className="mr-1" />
                          Preview
                        </TabsTrigger>
                        <TabsTrigger value="code">
                          <CodeIcon size={16} className="mr-1" />
                          Code
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="preview" className="mt-4">
                        {renderPreview()}
                      </TabsContent>

                      <TabsContent value="code" className="mt-4">
                        {isEditing ? (
                          <textarea
                            value={editedCode}
                            onChange={(e) => setEditedCode(e.target.value)}
                            className="w-full h-96 p-4 bg-muted border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Edit your template code here..."
                          />
                        ) : (
                          <pre className="p-4 bg-muted rounded-md overflow-auto max-h-96">
                            <code className="text-xs font-mono">
                              {generatedCode}
                            </code>
                          </pre>
                        )}
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  )
}
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Customize Your {type.label}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="site-name">Site Name</Label>
                        <Input
                          id="site-name"
                          placeholder="My Awesome Site"
                          value={currentConfig.name}
                          onChange={(e) => setConfig((current) => {
                            const currentConfig = current || { type: "", name: "", features: [], styling: "" }
                            return { ...currentConfig, name: e.target.value }
                          })}
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label>Styling Theme</Label>
                        <Select 
                          value={currentConfig.styling} 
                          onValueChange={(value) => setConfig((current) => {
                            const currentConfig = current || { type: "", name: "", features: [], styling: "" }
                            return { ...currentConfig, styling: value }
                          })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a style" />
                          </SelectTrigger>
                          <SelectContent>
                            {stylingOptions.map((style) => (
                              <SelectItem key={style.value} value={style.value}>
                                <div>
                                  <div className="font-medium">{style.label}</div>
                                  <div className="text-xs text-muted-foreground">{style.description}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-3">
                        <Label>Features</Label>
                        <div className="grid grid-cols-1 gap-3">
                          {availableFeatures.map((feature) => (
                            <div key={feature.id} className="flex items-center space-x-3">
                              <Checkbox
                                id={feature.id}
                                checked={currentConfig.features.includes(feature.id)}
                                onCheckedChange={(checked) => handleFeatureToggle(feature.id, !!checked)}
                              />
                              <div className="flex-1">
                                <Label htmlFor={feature.id} className="text-sm font-medium">
                                  {feature.label}
                                </Label>
                                <p className="text-xs text-muted-foreground">{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={generateTemplate}
                          disabled={isGenerating || !currentConfig.type}
                          className="flex-1"
                        >
                          {isGenerating ? "Generating..." : "Generate Template"}
                        </Button>
                        {generatedCode && (
                          <>
                            <Button variant="outline" onClick={toggleEditMode} title="Edit template code">
                              <CodeIcon size={16} />
                            </Button>
                            <Button variant="outline" onClick={copyToClipboard} title="Copy to clipboard">
                              <Copy size={16} />
                            </Button>
                            <Button variant="outline" onClick={downloadTemplate} title="Download as HTML file">
                              <Download size={16} />
                            </Button>
                          </>
                        )}
                      </div>

                      {generatedCode && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-2">
                            <Label>Template</Label>
                            {isEditing && (
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={saveEdits}>
                                  Save
                                </Button>
                                <Button size="sm" variant="ghost" onClick={cancelEdits}>
                                  Cancel
                                </Button>
                              </div>
                            )}
                          </div>

                          <Tabs defaultValue="preview" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="preview">
                                <Eye size={16} className="mr-1" />
                                Preview
                              </TabsTrigger>
                              <TabsTrigger value="code">
                                <CodeIcon size={16} className="mr-1" />
                                Code
                              </TabsTrigger>
                            </TabsList>

                            <TabsContent value="preview" className="mt-4">
                              {renderPreview()}
                            </TabsContent>

                            <TabsContent value="code" className="mt-4">
                              {isEditing ? (
                                <textarea
                                  value={editedCode}
                                  onChange={(e) => setEditedCode(e.target.value)}
                                  className="w-full h-96 p-4 bg-muted border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                                  placeholder="Edit your template code here..."
                                />
                              ) : (
                                <pre className="p-4 bg-muted rounded-md overflow-auto max-h-96">
                                  <code className="text-xs font-mono">
                                    {generatedCode}
                                  </code>
                                </pre>
                              )}
                            </TabsContent>
                          </Tabs>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}