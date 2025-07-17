"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Plus,
  Minus,
  X,
  Home,
  ChevronDown,
  RotateCcw,
  Building,
  Filter,
  Check,
} from "lucide-react"
import MapPage from "@/presentation/components/Map/MapPage"

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("Places")
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState(["Residential", "Commercial"])
  const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false)
  const [minPrice, setMinPrice] = useState(1000)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [showMap, setShowMap] = useState(true)
  const [showFilters, setShowFilters] = useState(true)

  const propertyTypes = ["Residential", "Commercial", "Industrial", "Mixed"]

  const togglePropertyType = (type: string) => {
    setSelectedPropertyTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const properties = [
    {
      id: 1,
      name: "Copa Vida",
      availability: "45-60 days",
      rent: "$4,500/mo",
      image: "/house.webp",
      type: "Commercial",
      address: "Woodland Hills, CA",
    },
    {
      id: 2,
      name: "ABC Coffee Bar",
      availability: "15-25 days",
      rent: "$1,200/mo",
      image: "/house.webp",
      type: "Commercial",
      address: "Woodland Hills, CA",
    },
    {
      id: 3,
      name: "La Redoute",
      availability: "30-45 days",
      rent: "$2,900/mo",
      image: "/house.webp",
      type: "Residential",
      address: "Woodland Hills, CA",
    },
    {
      id: 4,
      name: "Sunset Plaza",
      availability: "Available now",
      rent: "$3,200/mo",
      image: "/house.webp",
      type: "Residential",
      address: "Woodland Hills, CA",
    },
    {
      id: 5,
      name: "Business Center",
      availability: "30 days",
      rent: "$5,800/mo",
      image: "/house.webp",
      type: "Commercial",
      address: "Woodland Hills, CA",
    },
    {
      id: 6,
      name: "Garden Apartments",
      availability: "60 days",
      rent: "$2,100/mo",
      image: "/house.webp",
      type: "Residential",
      address: "Woodland Hills, CA",
    },
  ]

  return (
      <div className="mx-auto pt-[69px] max-h-screen min-h-screen bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-80 p-6 border-r bg-gray-50 overflow-y-auto">
            {/* Map View Toggle */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="mapView"
                  checked={showMap}
                  onChange={(e) => setShowMap(e.target.checked)}
                  className="w-4 h-4 text-purple-500 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="mapView" className="flex items-center gap-2 cursor-pointer">
                  <span className="font-medium">Map</span>
                  <span className="text-gray-500">View</span>
                </label>
              </div>
            </div>

            {/* Global Filters Collapse */}
            <div className="mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full mb-4 p-3 bg-white rounded-lg shadow-sm border hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-purple-600" />
                  <span className="font-medium">Filters</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </button>

              {showFilters && (
                <div className="space-y-6 p-4 bg-white rounded-lg shadow-sm border">
                  {/* Category */}
                  <div>
                    <h3 className="font-medium mb-3">Category</h3>
                    <div className="flex gap-2">
                      <Button
                        variant={selectedCategory === "Places" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory("Places")}
                        className={selectedCategory === "Places" ? "bg-gray-800 text-white" : ""}
                      >
                        <Building className="w-4 h-4 mr-1" />
                        Places
                      </Button>
                      <Button
                        variant={selectedCategory === "Properties" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory("Properties")}
                        className="text-purple-600"
                      >
                        <Home className="w-4 h-4 mr-1" />
                        Properties
                      </Button>
                    </div>
                  </div>

                  {/* Property Type - Multiselect */}
                  <div className="relative">
                    <h3 className="font-medium mb-3">Property Type</h3>
                    <div className="relative">
                      <button
                        onClick={() => setIsPropertyTypeOpen(!isPropertyTypeOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <span className="text-gray-700">
                          {selectedPropertyTypes.length === 0
                            ? "Select property types"
                            : selectedPropertyTypes.length === 1
                              ? selectedPropertyTypes[0]
                              : `${selectedPropertyTypes.length} types selected`}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isPropertyTypeOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isPropertyTypeOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                          {propertyTypes.map((type) => (
                            <button
                              key={type}
                              onClick={() => togglePropertyType(type)}
                              className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                            >
                              <span className="text-gray-700">{type}</span>
                              {selectedPropertyTypes.includes(type) && <Check className="w-4 h-4 text-purple-600" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Selected items display */}
                    {selectedPropertyTypes.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {selectedPropertyTypes.map((type) => (
                          <span
                            key={type}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                          >
                            {type}
                            <button
                              onClick={() => togglePropertyType(type)}
                              className="hover:bg-purple-200 rounded-full p-0.5"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price Range */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">Price Range</h3>
                      <span className="text-sm text-gray-500">Per month</span>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label htmlFor="minPrice" className="block text-xs text-gray-500 mb-1">
                          Min
                        </label>
                        <input
                          id="minPrice"
                          type="number"
                          value={minPrice}
                          onChange={(e) => setMinPrice(Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Min price"
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="maxPrice" className="block text-xs text-gray-500 mb-1">
                          Max
                        </label>
                        <input
                          id="maxPrice"
                          type="number"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Max price"
                        />
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500 text-center">
                      ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Map Area */}
          {showMap && (
            <MapPage />
          )}

          {/* Right Sidebar - Property Results */}
          <div className={`${showMap ? "w-80" : "flex-1"} p-4 h-[93dvh] overflow-y-auto transition-all duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">16 Results</span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Popular first</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Responsive Grid */}
            <div
              className={`grid gap-4 ${
                showMap ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={property.image || "/house.webp"}
                      alt={property.name}
                      className="w-full h-32 object-cover"
                    />
                    <Button size="icon" variant="outline" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <Plus className="w-3 h-3 text-white" />
                      </div>
                    </Button>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium">{property.name}</h3>
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      <span>{property.availability}</span>
                      <span className="mx-1">•</span>
                      <span className="font-medium text-green-600">{property.rent}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {property.type} • {property.address}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
