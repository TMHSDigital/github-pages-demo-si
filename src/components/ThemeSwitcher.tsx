import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "./ThemeProvider"
import { Palette, Sun, Moon, Circle, PaintBucket } from "@phosphor-icons/react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const themeOptions = [
    { value: 'light', label: 'Light', icon: <Sun size={16} />, color: 'bg-white border' },
    { value: 'dark', label: 'Dark', icon: <Moon size={16} />, color: 'bg-slate-900 border-slate-700' },
    { value: 'blue', label: 'Blue', icon: <PaintBucket size={16} />, color: 'bg-blue-500 border-blue-400' },
    { value: 'green', label: 'Green', icon: <Circle size={16} />, color: 'bg-green-500 border-green-400' },
    { value: 'purple', label: 'Purple', icon: <Circle size={16} />, color: 'bg-purple-500 border-purple-400' },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Palette size={16} className="mr-2" />
          Theme
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setTheme(option.value as any)}
            className={`flex items-center gap-2 ${theme === option.value ? 'bg-accent' : ''}`}
          >
            <div className={`w-4 h-4 rounded-full ${option.color} flex items-center justify-center`}>
              {option.icon}
            </div>
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
