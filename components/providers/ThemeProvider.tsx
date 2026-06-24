"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"

type Theme = "dark" | "light"

interface ThemeCtx {
  theme: Theme
  toggle: () => void
  setTheme: (t: Theme) => void
}

const Ctx = createContext<ThemeCtx | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")

  // read whatever the no-flash script already applied
  useEffect(() => {
    const current = document.documentElement.classList.contains("light") ? "light" : "dark"
    setThemeState(current)
  }, [])

  const apply = useCallback((t: Theme) => {
    const root = document.documentElement
    root.classList.remove("dark", "light")
    root.classList.add(t)
    root.style.colorScheme = t
    try {
      localStorage.setItem("wac-theme", t)
    } catch {}
    setThemeState(t)
  }, [])

  const toggle = useCallback(() => {
    apply(theme === "dark" ? "light" : "dark")
  }, [theme, apply])

  return <Ctx.Provider value={{ theme, toggle, setTheme: apply }}>{children}</Ctx.Provider>
}

export function useTheme() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}

/** Blocking script that sets the theme class before first paint (no flash). */
export const themeNoFlashScript = `
(function(){
  try {
    var stored = localStorage.getItem('wac-theme');
    var t = stored || 'dark';
    var root = document.documentElement;
    root.classList.remove('dark','light');
    root.classList.add(t);
    root.style.colorScheme = t;
  } catch(e) {
    document.documentElement.classList.add('dark');
  }
})();
`
