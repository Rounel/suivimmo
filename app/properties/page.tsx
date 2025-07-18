"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Clock,
  Plus,
  Minus,
  X,
  Home,
  ChevronDown,
  RotateCcw,
  Building,
  Filter,
  Users,
  FileText,
  Check,
  Grid3X3,
  List,
  MapPin,
  Edit,
  Eye,
  CreditCard,
  AlertTriangle,
  Wrench,
} from "lucide-react"
import MapPage from "@/presentation/components/Map/MapPage"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const [activeTab, setActiveTab] = useState("properties")
  const [selectedCategory, setSelectedCategory] = useState("Places")
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState(["Residential", "Commercial"])
  const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false)
  const [minPrice, setMinPrice] = useState(1000)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [searchAsMove, setSearchAsMove] = useState(true)
  const [showMap, setShowMap] = useState(true)
  const [showFilters, setShowFilters] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const propertyTypes = ["Residential", "Commercial", "Industrial", "Mixed"]

  const togglePropertyType = (type: string) => {
    setSelectedPropertyTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const properties = [
    {
      id: 1,
      name: "Copa Vida Commercial Space",
      address: "12 rue Victor Hugo, 75016 Paris",
      shortAddress: "Victor Hugo, Paris 16e",
      type: "Commercial",
      surface: 120,
      status: "Occupied",
      rent: 4500,
      tenant: "M. Dupont",
      lastUpdate: "15/07/2025",
      lastMaintenance: "12/07/2025",
      hasMaintenanceAlert: false,
      image: "/house.webp",
    },
    {
      id: 2,
      name: "ABC Coffee Bar",
      address: "25 avenue des Champs, 75008 Paris",
      shortAddress: "Champs-Élysées, Paris 8e",
      type: "Commercial",
      surface: 85,
      status: "Available",
      rent: 1200,
      tenant: "Mme Martin",
      lastUpdate: "14/07/2025",
      lastMaintenance: "10/07/2025",
      hasMaintenanceAlert: true,
      image: "/house.webp",
    },
    {
      id: 3,
      name: "La Redoute Apartment",
      address: "8 boulevard Saint-Germain, 75005 Paris",
      shortAddress: "Saint-Germain, Paris 5e",
      type: "Residential",
      surface: 75,
      status: "Under Renovation",
      rent: 2900,
      tenant: "M. Bernard",
      lastUpdate: "13/07/2025",
      lastMaintenance: "08/07/2025",
      hasMaintenanceAlert: false,
      image: "/house.webp",
    },
    {
      id: 4,
      name: "Sunset Plaza",
      address: "45 rue de la Paix, 75001 Paris",
      shortAddress: "Rue de la Paix, Paris 1er",
      type: "Residential",
      surface: 95,
      status: "Available",
      rent: 3200,
      tenant: "Mme Dubois",
      lastUpdate: "16/07/2025",
      lastMaintenance: "15/07/2025",
      hasMaintenanceAlert: false,
      image: "/house.webp",
    },
    {
      id: 5,
      name: "Business Center",
      address: "78 avenue Montaigne, 75008 Paris",
      shortAddress: "Montaigne, Paris 8e",
      type: "Commercial",
      surface: 200,
      status: "Occupied",
      rent: 5800,
      tenant: "SCI Montaigne",
      lastUpdate: "17/07/2025",
      lastMaintenance: "05/07/2025",
      hasMaintenanceAlert: true,
      image: "/house.webp",
    },
    {
      id: 6,
      name: "Garden Apartments",
      address: "33 rue du Faubourg, 75011 Paris",
      shortAddress: "Faubourg, Paris 11e",
      type: "Residential",
      surface: 65,
      status: "Occupied",
      rent: 2100,
      tenant: "M. Leroy",
      lastUpdate: "12/07/2025",
      lastMaintenance: "20/06/2025",
      hasMaintenanceAlert: false,
      image: "/house.webp",
    },
  ]

  const navigationItems = [
    { id: "search", label: "Global Search", icon: Search },
    { id: "properties", label: "Properties", icon: Building },
    { id: "tenants", label: "Tenants", icon: Users },
    { id: "invoices", label: "Invoices", icon: FileText },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800"
      case "Occupied":
        return "bg-blue-100 text-blue-800"
      case "Under Renovation":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Commercial":
        return <Building className="w-4 h-4" />
      case "Residential":
        return <Home className="w-4 h-4" />
      default:
        return <Building className="w-4 h-4" />
    }
  }

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
                      {minPrice.toLocaleString()} FCFA - {maxPrice.toLocaleString()} FCFA
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
              <div className="flex items-center gap-2">
                <div className="flex items-center border rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-purple-600 text-white" : ""}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-purple-600 text-white" : ""}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Grid View */}
            {viewMode === "grid" && (
              <div
                className={`grid gap-4 ${
                  showMap ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {properties.map((property) => (
                  <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-all duration-200 gap-0 py-0">
                    <div className="relative w-full h-32">
                      <Image
                        src={property.image || "/house.webp"}
                        alt={property.name}
                        fill
                        className="object-cover"
                      />
                      {property.hasMaintenanceAlert && (
                        <div className="absolute top-2 left-2 bg-orange-500 rounded-full p-1">
                          <AlertTriangle className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div
                        className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}
                      >
                        {property.status}
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {getTypeIcon(property.type)}
                          <span className="text-xs text-gray-500">{property.type}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{property.surface} m²</span>
                        </div>
                      </div>
                      <h3 className="font-medium text-sm mb-1 line-clamp-1">{property.shortAddress}</h3>
                      <div className="text-lg font-bold text-purple-600 mb-2">
                        FCFA{property.rent.toLocaleString()}/mois
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                        <Wrench className="w-3 h-3" />
                        <span>Maintenance : {property.lastMaintenance}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline" className="p-1 h-7 w-7 bg-transparent">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="p-1 h-7 w-7 bg-transparent">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="p-1 h-7 w-7 bg-transparent">
                            <CreditCard className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <div className="space-y-2">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 p-3 bg-gray-50 rounded-lg text-xs font-medium text-gray-600">
                  <div className="col-span-3">Adresse</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-1">Surface</div>
                  <div className="col-span-2">Statut</div>
                  <div className="col-span-2">Loyer</div>
                  <div className="col-span-1">Locataire</div>
                  <div className="col-span-1">Actions</div>
                </div>

                {/* Rows */}
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="grid grid-cols-12 gap-4 p-3 bg-white border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="col-span-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <div>
                          <div className="font-medium text-sm">{property.shortAddress}</div>
                          <div className="text-xs text-gray-500">{property.lastUpdate}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(property.type)}
                        <span className="text-sm">{property.type}</span>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <span className="text-sm font-medium">{property.surface} m²</span>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}
                        >
                          {property.status}
                        </span>
                        {property.hasMaintenanceAlert && <AlertTriangle className="w-4 h-4 text-orange-500" />}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-sm font-bold text-purple-600">FCFA{property.rent.toLocaleString()}/mois</span>
                    </div>
                    <div className="col-span-1">
                      <span className="text-xs text-gray-600">{property.tenant}</span>
                    </div>
                    <div className="col-span-1">
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline" className="p-1 h-6 w-6 bg-transparent">
                          <Link href={"/properties/1"}>
                            <Eye className="w-3 h-3" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" className="p-1 h-6 w-6 bg-transparent">
                          <Link href={"/properties/1"}>
                            <Edit className="w-3 h-3" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" className="p-1 h-6 w-6 bg-transparent">
                          <Link href={"/properties/1"}>
                            <CreditCard className="w-3 h-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
  )
}
