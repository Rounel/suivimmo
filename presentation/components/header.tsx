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

export default function Header() {
  const [activeTab, setActiveTab] = useState("properties")

  const navigationItems = [
    { id: "search", label: "Global Search", icon: Search },
    { id: "properties", label: "Properties", icon: Building },
    { id: "tenants", label: "Tenants", icon: Users },
    { id: "invoices", label: "Invoices", icon: FileText },
  ]

  return (
    <div className="w-full flex items-center justify-between p-4 border-b fixed top-0 left-0">
        <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">SUIVIMMO</span>
                {/* <span className="text-gray-400 text-lg"></span> */}
            </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-1 mx-8">
        {navigationItems.map((item) => {
            const Icon = item.icon
            return (
            <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 ${
                activeTab === item.id
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "text-gray-600 hover:text-purple-600"
                }`}
            >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
            </Button>
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
