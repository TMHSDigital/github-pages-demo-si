import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, MagicWand, Copy } from "@phosphor-icons/react"
import { useKV } from '@github/spark/hooks'

// Spark runtime API declaration
declare global {
  const spark: {
    llmPrompt: (strings: TemplateStringsArray, ...values: any[]) => string
    llm: (prompt: string, modelName?: string, jsonMode?: boolean) => Promise<string>
  }
}

interface TemplateConfig {
  type: string
  name: string
  features: string[]
  styling: string
}

const templateTypes = [
  { value: "portfolio", label: "Personal Portfolio", description: "Showcase your work and skills" },
  { value: "blog", label: "Blog Site", description: "Share articles and thoughts" },
  { value: "docs", label: "Documentation", description: "Project or API documentation" },
  { value: "landing", label: "Landing Page", description: "Product or service landing page" }
]

const availableFeatures = [
  { id: "responsive", label: "Responsive Design", description: "Mobile-friendly layout" },
  { id: "dark-mode", label: "Dark Mode Toggle", description: "Theme switching capability" },
  { id: "contact-form", label: "Contact Form", description: "Contact form with validation" },
  { id: "analytics", label: "Google Analytics", description: "Built-in analytics tracking" },
  { id: "seo", label: "SEO Optimized", description: "Meta tags and structured data" },
  { id: "blog-support", label: "Blog Support", description: "Markdown blog posts" }
]

const stylingOptions = [
  { value: "minimal", label: "Minimal", description: "Clean and simple design" },
  { value: "modern", label: "Modern", description: "Contemporary with animations" },
  { value: "classic", label: "Classic", description: "Traditional and professional" },
  { value: "creative", label: "Creative", description: "Bold and artistic" }
]

export function TemplateGenerator() {
  const [config, setConfig] = useKV<TemplateConfig>("template-config", {
    type: "",
    name: "",
    features: [],
    styling: ""
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCode, setGeneratedCode] = useState("")

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
      // Use LLM to generate a more sophisticated template
      const prompt = spark.llmPrompt`Generate a complete, production-ready HTML template for a ${config.type} website with the following specifications:

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

      const generatedTemplate = await spark.llm(prompt, "gpt-4o-mini")
      setGeneratedCode(generatedTemplate.trim())
    } catch (error) {
      console.error('Template generation failed:', error)
      
      // Fallback to basic template
      const fallbackTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.name || 'My GitHub Pages Site'}</title>
    <style>
        /* ${config.styling} styling */
        body { 
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            margin: 0; 
            padding: 20px;
            ${config.features.includes('dark-mode') ? 'background: var(--bg-color, #fff);' : 'background: #fff;'}
        }
        .container { max-width: 1200px; margin: 0 auto; }
        ${config.features.includes('responsive') ? '@media (max-width: 768px) { .container { padding: 10px; } }' : ''}
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>${config.name || 'Welcome to My Site'}</h1>
        </header>
        <main>
            ${config.type === 'portfolio' ? '<section><h2>My Work</h2><p>Portfolio content will go here...</p></section>' : ''}
            ${config.type === 'blog' ? '<section><h2>Latest Posts</h2><p>Blog posts will go here...</p></section>' : ''}
            ${config.type === 'docs' ? '<section><h2>Documentation</h2><p>Documentation content will go here...</p></section>' : ''}
            ${config.type === 'landing' ? '<section><h2>Welcome</h2><p>Product information will go here...</p></section>' : ''}
            ${config.features.includes('contact-form') ? '<section><h2>Contact</h2><form><input type="email" placeholder="Your email" required><textarea placeholder="Your message" required></textarea><button type="submit">Send</button></form></section>' : ''}
        </main>
    </div>
    ${config.features.includes('analytics') ? '<script>/* Google Analytics code will go here */</script>' : ''}
</body>
</html>`
      setGeneratedCode(fallbackTemplate)
    }
    
    setIsGenerating(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode)
  }

  const downloadTemplate = () => {
    const blob = new Blob([generatedCode], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'index.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {templateTypes.map((type) => (
            <Card key={type.value} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{type.label}</CardTitle>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full"
                      onClick={() => setConfig((current) => {
                        const currentConfig = current || { type: "", name: "", features: [], styling: "" }
                        return { ...currentConfig, type: type.value }
                      })}
                    >
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
                          className="flex-1"
                        >
                          {isGenerating ? "Generating..." : "Generate Template"}
                        </Button>
                        {generatedCode && (
                          <>
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
                          <Label>Generated Code</Label>
                          <div className="mt-2 p-4 bg-muted rounded-md">
                            <pre className="text-xs font-mono overflow-auto max-h-64">
                              <code>{generatedCode}</code>
                            </pre>
                          </div>
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