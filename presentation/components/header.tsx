"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Search,
  Clock,
  X,
  Home,
  ChevronDown,
  Building,
  Users,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [activeTab, setActiveTab] = useState("properties")

  const navigationItems = [
    { id: "search", label: "Global Search", icon: Search, href: "/search" },
    { id: "properties", label: "Properties", icon: Building, href: "/properties" },
    { id: "tenants", label: "Tenants", icon: Users, href: "/tenants" },
  ]

  return (
    <div className="w-full flex items-center justify-between p-4 border-b fixed top-0 left-0">
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <Link href={'/'} className="">
                    <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br from-purple-900 to-indigo-500">SUIVIMMO</span>
                </Link>
                {/* <span className="text-gray-400 text-lg"></span> */}
            </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-1">
            {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                    <Link 
                        key={item.id}
                        href={item.href}
                        className={`flex items-center gap-2 py-2 px-3 rounded-md ${
                        activeTab === item.id
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "text-gray-600 hover:text-purple-600"
                        }`}
                    >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                    </Link>
                )
            })}
        </div>

        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs">?</span>
                </div>
            </div>

            <Button variant="ghost" className="flex items-center gap-2 text-purple-600">
                <Home className="w-4 h-4" />
                <span>For Rent</span>
                <ChevronDown className="w-4 h-4" />
            </Button>

            <Button variant="ghost" className="flex items-center gap-2 text-teal-600">
                <Clock className="w-4 h-4" />
                <span>Today</span>
                <span className="text-gray-400">Available</span>
                <ChevronDown className="w-4 h-4" />
            </Button>
        </div>
    </div>
  )
}
