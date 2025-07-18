"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  MapPin,
  Edit,
  Download,
  Upload,
  DollarSign,
  Users,
  Wrench,
  FileText,
  TrendingUp,
  Plus,
  Eye,
  Filter,
  Heart,
  Bed,
  Bath,
  Square,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"

type Locataire = {
  id: string;
  nomComplet: string;
  dateNaissance?: Date;
  email: string;
  telephone?: string;
  adressePostale?: any; // Remplace par le vrai type si tu l'as
  typeLocataire: 'physique' | 'entreprise';
  documents: any[];
  garanties: any[];
  statut: 'actif' | 'suspendu' | 'expulsé' | 'litige';
  notes: string[];
  dateEntree?: string; // Date d'entrée
  dateSortie?: string; // Date de sortie
};

export default function PropertyDetails() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isFavorite, setIsFavorite] = useState(false)

  const property = {
    id: 1,
    name: "Modern Dimond House",
    address: "9100 Reading Rd, Los Angeles, CA 90045",
    price: 848000,
    beds: 4,
    baths: 2,
    sqft: 4680,
    type: "Residential",
    description:
      "At Modern Dimond House, we've taken care of all of your needs. Our pleasant and inviting apartment homes were designed with you in mind. Our great apartment amenities include air conditioning, dishwasher, carpeted floors, vertical blinds, and private balcony or patio, and so much more!",
    mainImage:
      "/house.webp",
    galleryImages: [
      "/house.webp",
      "/house.webp",
      "/house.webp",
      "/house.webp",
    ],
    nearbyLocations: [
      { name: "Carl E Nielsen Youth Park", distance: "0.5 miles" },
      { name: "LA Hill View Point", distance: "1.5 miles" },
      { name: "Westport Elementary School", distance: "2.5 miles" },
    ],
    keyFeatures: [
      "Available cooling",
      "Detached garage, covered parking",
      "Picnic area",
      "Sauna",
      "Swimming pool",
      "Dishwasher",
      "Cable TV ready",
    ],
    agent: {
      name: "Brandon Mill Subdivision",
      company: "View Profile",
      description:
        "Brandon Mill Subdivision is a company full of professional staff. You can always rely on us, call us anytime if you would like to book viewing for any apartment.",
      phone: "+1 (555) 123-4567",
      email: "contact@brandonmill.com",
    },
  }

  const contracts = [
    {
      id: "C001",
      tenant: "Cora Richards",
      unit: "Unit 543",
      startDate: "01/01/2023",
      endDate: "31/12/2023",
      rent: 1200,
      status: "Active",
      deposit: 2400,
    },
    {
      id: "C002",
      tenant: "Alistair Dunlap",
      unit: "Unit 312",
      startDate: "15/03/2023",
      endDate: "14/03/2024",
      rent: 1500,
      status: "Active",
      deposit: 3000,
    },
  ]

  const payments = [
    {
      id: "P001",
      tenant: "Cora Richards",
      unit: "Unit 543",
      amount: 1200,
      date: "01/07/2025",
      type: "Rent",
      status: "Paid",
    },
    {
      id: "P002",
      tenant: "Alistair Dunlap",
      unit: "Unit 312",
      amount: 1500,
      date: "15/07/2025",
      type: "Rent",
      status: "Paid",
    },
  ]

  const maintenanceTickets = [
    {
      id: "P-1825",
      unit: "Unit 304",
      type: "Plumbing",
      description: "Water pressure issue in bathroom",
      priority: "High",
      status: "In Progress",
      assignee: "Adela Bradford",
      created: "15/07/2025",
      updated: "17/07/2025",
    },
  ]

  const documents = [
    {
      id: "D001",
      name: "Property Diagnostic Report",
      type: "PDF",
      size: "2.4 MB",
      date: "15/06/2025",
      category: "Diagnostic",
    },
  ]

  const currentTenant = contracts.find((contract) => contract.status === "Active")
  const previousTenant = contracts.find((contract) => contract.status !== "Active") || {
    id: "C003",
    tenant: "Sarah Johnson",
    unit: "Unit 340B",
    startDate: "01/01/2022",
    endDate: "31/12/2022",
    rent: 1800,
    status: "Completed",
    deposit: 3600,
    phone: "+1 (555) 987-6543",
    email: "sarah.johnson@email.com",
    moveOutDate: "28/12/2022",
  }
  
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
      case "paid":
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
      case "in progress":
        return "bg-yellow-100 text-yellow-800"
      case "overdue":
      case "high":
        return "bg-red-100 text-red-800"
      case "open":
      case "medium":
        return "bg-blue-100 text-blue-800"
      case "low":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const tenants: Locataire[] = [
    {
      id: "T001",
      nomComplet: "Cora Richards",
      email: "cora.richards@email.com",
      telephone: "+1 (555) 123-4567",
      typeLocataire: "physique",
      documents: [],
      garanties: [],
      statut: "actif",
      notes: [],
      dateEntree: "2023-01-01",
      dateSortie: "2023-12-31",
    },
    {
      id: "T002",
      nomComplet: "Alistair Dunlap",
      email: "alistair.dunlap@email.com",
      telephone: "+1 (555) 987-6543",
      typeLocataire: "physique",
      documents: [],
      garanties: [],
      statut: "actif",
      notes: [],
      dateEntree: "2023-03-15",
      dateSortie: "2024-03-14",
    },
    // Ajoute d'autres locataires ici
  ];

  return (
    <div className="mx-auto pt-[69px] max-h-screen min-h-screen bg-white rounded-3xl shadow-2xl overflow-y-auto">
        <div className="py-2 px-2 sm:px-4 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-fit grid-cols-2 mb-8 bg-gray-100 rounded-2xl p-1">
                    <TabsTrigger value="overview" className="rounded-xl">
                        Overview
                    </TabsTrigger>
                    <TabsTrigger value="tenants" className="rounded-xl">
                        Tenants
                    </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Property Images and Details */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex flex-row gap-4">
                                {/* Main Property Image */}
                                <div className="relative w-full h-[30rem]">
                                    <Image
                                        src={property.mainImage || "/placeholder.svg"}
                                        alt={property.name}
                                        fill
                                        className="w-full h-96 object-cover rounded-2xl"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full"
                                        onClick={() => setIsFavorite(!isFavorite)}
                                    >
                                        <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                                    </Button>
                                </div>

                                {/* Image Gallery */}
                                <div className="grid gap-2">
                                    {property.galleryImages.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image || "/placeholder.svg"}
                                            alt={`Gallery ${index + 1}`}
                                            width={130}
                                            height={480/4}
                                            className="w-auto h-[112px] object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Property Description */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Description</h3>
                                <p className="text-gray-600 leading-relaxed">{property.description}</p>
                            </div>
                        </div>

                        {/* Right Column - Property Info and Agent */}
                        <div className="space-y-6">
                            {/* Property Header */}
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.name}</h1>
                                <div className="flex items-center gap-2 text-gray-600 mb-4">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{property.address}</span>
                                </div>
                                <div className="text-3xl font-bold text-blue-600 mb-4">${property.price.toLocaleString()}</div>

                                {/* Property Stats */}
                                <div className="flex items-center gap-6 mb-6">
                                <div className="flex items-center gap-2">
                                    <Bed className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm font-medium">{property.beds} beds</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Bath className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm font-medium">{property.baths} baths</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Square className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm font-medium">{property.sqft.toLocaleString()} sq ft</span>
                                </div>
                                </div>
                            </div>

                            {/* Key Features */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                                <div className="space-y-2">
                                {property.keyFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                    <span className="text-sm text-gray-700">{feature}</span>
                                    </div>
                                ))}
                                </div>
                            </div>

                            {/* Tenant Card */}
                            <Card className="bg-gray-50 border-0">
                                <CardContent className="p-6">
                                    {currentTenant ? (
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold text-lg">
                                            {currentTenant.tenant
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                        </span>
                                        </div>
                                        <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900">{currentTenant.tenant}</h4>
                                        <p className="text-sm text-green-600 mb-1">Current Tenant - {currentTenant.unit}</p>
                                        <div className="text-sm text-gray-600 mb-2">
                                            <div>
                                            Lease: {currentTenant.startDate} - {currentTenant.endDate}
                                            </div>
                                            <div>Monthly Rent: ${currentTenant.rent.toLocaleString()}</div>
                                            <div>Deposit: ${currentTenant.deposit.toLocaleString()}</div>
                                        </div>
                                        <div className="flex gap-3">
                                            <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-xl">
                                            <Phone className="w-4 h-4 mr-2" />
                                            Call Tenant
                                            </Button>
                                            <Button size="sm" variant="outline" className="rounded-xl bg-transparent">
                                            <Mail className="w-4 h-4 mr-2" />
                                            Email
                                            </Button>
                                        </div>
                                        </div>
                                    </div>
                                    ) : (
                                    <div className="text-center py-4">
                                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Users className="w-6 h-6 text-gray-500" />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Pas de locataire</h4>
                                        <p className="text-sm text-gray-600 mb-4">Cette propriété est actuellement vacante</p>
                                        <div className="flex gap-3 justify-center">
                                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                                            <Plus className="w-4 h-4 mr-2" />
                                            Nouveau locataire
                                        </Button>
                                        <Button size="sm" variant="outline" className="rounded-xl bg-transparent">
                                            <Eye className="w-4 h-4 mr-2" />
                                            Ancien locataire
                                        </Button>
                                        </div>
                                        {previousTenant && (
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <div className="text-xs text-gray-500 mb-2">Dernier locataire:</div>
                                            <div className="text-sm font-medium text-gray-700">{previousTenant.tenant}</div>
                                            <div className="text-xs text-gray-500">
                                            Parti le {"moveOutDate" in previousTenant ? previousTenant.moveOutDate : previousTenant.endDate}
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </TabsContent>

                {/* Other tabs remain the same structure but with updated styling */}
                <TabsContent value="tenants" className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Tenants</h2>
                        <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                        <Plus className="w-4 h-4 mr-2" />
                            New tenant
                        </Button>
                    </div>
                    <Card className="rounded-2xl border-0 shadow-sm py-0">
                        <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Entry Date</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Exit Date</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {tenants.map((tenant) => (
                                <tr key={tenant.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{tenant.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{tenant.nomComplet}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{tenant.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{tenant.telephone || "-"}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm capitalize">{tenant.typeLocataire}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{tenant.dateEntree || "-"}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{tenant.dateSortie || "-"}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                                        tenant.statut === "actif"
                                        ? "bg-green-100 text-green-800"
                                        : tenant.statut === "suspendu"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                    }`}>
                                        {tenant.statut}
                                    </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline" className="rounded-lg bg-transparent">
                                        <Eye className="w-4 h-4" />
                                        </Button>
                                        <Button size="sm" variant="outline" className="rounded-lg bg-transparent">
                                        <Edit className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    </div>
  )
}
