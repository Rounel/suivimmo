"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Edit,
  Plus,
  Eye,
} from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Link from "next/link"
import React from "react"; // Added missing import for React
import { Combobox } from "@/components/combobox"
import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

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
  house: number;
  dateEntree?: string; // Date d'entrée
  dateSortie?: string; // Date de sortie
};

export default function TenantsList() {

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
      house: 1,
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
      house: 2,
    },
    // Ajoute d'autres locataires ici
  ];

  const form = useForm({
    defaultValues: {
      nomComplet: "",
      email: "",
      dateNaissance: "",
      telephone: "",
      adressePostale: "",
      house: "",
      typeLocataire: "physique",
      statut: "actif",
      dateEntree: "",
      dateSortie: "",
    },
  });

  return (
    <div className="mx-auto pt-[73px] max-h-screen min-h-screen bg-white rounded-3xl shadow-2xl overflow-y-auto">
        <div className="py-4 px-2 sm:px-4 lg:px-8 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Tenants</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-violet-600 hover:bg-violet-700 rounded-xl">
                            <Plus className="w-4 h-4 mr-2" />
                            New tenant
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="md:min-w-4xl max-h-[70dvh] w-full">
                        <DialogHeader>
                            <DialogTitle>Add a new tenant</DialogTitle>
                        </DialogHeader>
                        <Form {...form}>
                            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit((data) => console.log(data))}>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {/* Full Name */}
                                    <FormField
                                        control={form.control}
                                        name="nomComplet"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <input type="text" {...field} className="w-full border rounded px-3 py-2" required />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* Email */}
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <input type="email" {...field} className="w-full border rounded px-3 py-2" required />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* Birth Date */}
                                    <FormField
                                        control={form.control}
                                        name="dateNaissance"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Birth Date</FormLabel>
                                                <FormControl>
                                                    <input type="date" {...field} className="w-full border rounded px-3 py-2" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* Phone */}
                                    <FormField
                                        control={form.control}
                                        name="telephone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <input type="text" {...field} className="w-full border rounded px-3 py-2" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* Adresse postale */}
                                    <FormField
                                        control={form.control}
                                        name="adressePostale"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Postal Address</FormLabel>
                                                <FormControl>
                                                    <input type="text" {...field} className="w-full border rounded px-3 py-2" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* Property select with search in select */}
                                    <Combobox
                                        label={"Propriété occupée"}
                                        name="house"
                                        data={[
                                            { value: "1", label: "Modern Dimond House - 9100 Reading Rd, Los Angeles, CA 90045" },
                                            { value: "2", label: "Sunset Villa - 1234 Sunset Blvd, Los Angeles, CA 90026" },
                                            { value: "3", label: "Oceanview Apartment - 5678 Ocean Dr, Santa Monica, CA 90401" }
                                        ]}
                                        form={form}
                                    />
                                    {/* Type de locataire */}
                                    <FormField
                                        control={form.control}
                                        name="typeLocataire"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Tenant Type</FormLabel>
                                                <FormControl>
                                                    <select {...field} className="w-full border rounded px-3 py-2">
                                                        <option value="physique">Physique</option>
                                                        <option value="entreprise">Entreprise</option>
                                                    </select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* Statut */}
                                    <FormField
                                        control={form.control}
                                        name="statut"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Status</FormLabel>
                                                <FormControl>
                                                    <select {...field} className="w-full border rounded px-3 py-2">
                                                        <option value="actif">Actif</option>
                                                        <option value="suspendu">Suspendu</option>
                                                        <option value="expulsé">Expulsé</option>
                                                        <option value="litige">Litige</option>
                                                    </select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* Dates d'entrée et de sortie */}
                                    <FormField
                                        control={form.control}
                                        name="dateEntree"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Entry Date</FormLabel>
                                                <FormControl>
                                                    <input type="date" {...field} className="w-full border rounded px-3 py-2" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="dateSortie"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Exit Date</FormLabel>
                                                <FormControl>
                                                    <input type="date" {...field} className="w-full border rounded px-3 py-2" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button type="submit" className="bg-violet-600 hover:bg-violet-700 rounded-xl mt-2">Create</Button>
                            </form>
                        </Form>
                    </DialogContent>    
                </Dialog>
            </div>
            <Card className="rounded-2xl border-0 shadow-sm py-0">
                <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                        {/* <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">ID</th> */}
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
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
                            {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{tenant.id}</td> */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{tenant.nomComplet}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{tenant.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{tenant.telephone || "-"}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <Link href={'/properties/1'}>
                                    <div className="flex flex-col underline">
                                        <p>Modern Dimond House</p>
                                        <small>9100 Reading Rd, Los Angeles, CA 90045</small>
                                    </div>
                                </Link>
                            </td>
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
        </div>

    </div>
  )
}

