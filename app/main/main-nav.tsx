// import Link from "next/link"
import { Home, Code2, Shield, HelpCircle, Settings, LogOut } from 'lucide-react'

export const mainNavItems = [
  {
    title: "Repositories",
    icon: Home,
    href: "/repositories",
    isActive: true,
  },
  {
    title: "AI Code Review",
    icon: Code2,
    href: "/code-review",
  },
  {
    title: "Cloud Security",
    icon: Shield,
    href: "/security",
  },
  {
    title: "How to Use",
    icon: HelpCircle,
    href: "/help",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export const bottomNavItems = [
  {
    title: "Support",
    icon: HelpCircle,
    href: "/support",
  },
  {
    title: "Logout",
    icon: LogOut,
    href: "/logout",
  },
]

