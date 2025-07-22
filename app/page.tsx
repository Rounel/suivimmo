"use client"

import { ChartArea, CreditCard, FileArchive, House, MessageCircle, User } from "lucide-react";

const features = [
  {
    icon: House,
    title: 'Locations',
    description: 'Recherche les locations à proximité et/ou expose les tiennes.',
  },
  {
    icon: User,
    title: 'Locataires',
    description: 'Gère tes locataires et garde un historique commenté des passages dans ta propriété.',
  },
  {
    icon: FileArchive,
    title: 'Documents',
    description: 'Numérise et stock tous les documents utiles à ta gestion.',
  },
  {
    icon: CreditCard,
    title: 'Paiements',
    description: 'Gère les paiements et garde un historique de toutes les transactions.',
  },
  {
    icon: ChartArea,
    title: 'Dashboard',
    description: 'Déduis la rentabilité de ton business et analyse les tendances en visualisant tes données.',
  },
  {
    icon: MessageCircle,
    title: 'Communication & Relance',
    description: 'Discute avec les locataires actuels ou potentiels et programme des relances.',
  },
];

export default function AlfredHero() {
  return (
    <div className="min-h-[100dvh] max-h-[100dvh] flex flex-col overflow-hidden">
        {/* Geometric line decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top left lines */}
          <div className="absolute top-0 left-0 w-96 h-96">
            <div className="absolute top-48 left-12 w-80 h-px bg-gray-300 rotate-45 origin-left"></div>
            <div className="absolute top-64 left-28 w-64 h-px bg-gray-300 rotate-45 origin-left"></div>
          </div>

          {/* Top right lines */}
          <div className="absolute top-0 right-0 w-96 h-96">
            <div className="absolute top-48 right-12 w-80 h-px bg-gray-300 -rotate-45 origin-right"></div>
            <div className="absolute top-64 right-28 w-64 h-px bg-gray-300 -rotate-45 origin-right"></div>
          </div>

          {/* Bottom lines */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <div className="absolute bottom-0 left-1/4 w-64 h-px bg-gray-300 rotate-12"></div>
            <div className="absolute bottom-0 left-1/3 w-48 h-px bg-gray-300 -rotate-12"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-px bg-gray-300 -rotate-12"></div>
            <div className="absolute bottom-0 right-1/3 w-48 h-px bg-gray-300 rotate-12"></div>
          </div>

          {/* Center radiating lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-32 h-px bg-gray-300 rotate-45 -translate-x-16 -translate-y-8"></div>
            <div className="absolute w-24 h-px bg-gray-300 -rotate-45 translate-x-8 -translate-y-12"></div>
            <div className="absolute w-28 h-px bg-gray-300 rotate-12 -translate-x-20 translate-y-16"></div>
            <div className="absolute w-20 h-px bg-gray-300 -rotate-12 translate-x-12 translate-y-20"></div>
          </div>
        </div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-16 py-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br from-purple-900 to-indigo-500">SUIVIMMO</span>
          </div>

          <div className="flex gap-3">
            <button className="bg-violet-800 text-white px-6 py-3 rounded-lg flex items-center space-x-2 font-medium">
              Se connecter
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 font-medium">
              S'inscrire
            </button>
          </div>
        </header>

        {/* Main Hero Content */}
        <main className="relative z-10 px-16 py-2 flex-1 flex flex-col">
          {/* Purple diamond background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 opacity-30 rotate-45 rounded-3xl"></div>

          <div className="grid md:grid-cols-3 gap-10 flex-1 relative z-20">
            <div className="col-span-2 flex flex-col justify-between">
              <div className="flex flex-col gap-8">
                <h1 className="text-7xl font-bold text-black leading-tight">
                  Recherchez les locations,
                  <br />
                  Gerez vos biens de A à Z,
                  <br />
                  <span className=" bg-clip-text text-transparent bg-gradient-to-br from-purple-900 to-indigo-500">
                    Sans effort
                  </span>
                </h1>

                <div className="">
                  <button className="bg-violet-800 text-white px-8 py-3 rounded-lg flex items-center font-medium">
                    C'est parti !!!
                  </button>
                </div>
              </div>

              <div className="w-full">

                {/* Feature Cards */}
                <div className="grid grid-cols-3 gap-16">
                {features.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex flex-col gap-2">
                    <div className="">{Icon && <Icon className="size-10" />}</div>
                    <h3 className="text-xl font-medium text-black">{title}</h3>
                    <p className="text-gray-600 text-base ">{description}</p>
                  </div>
                ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat rounded-2xl">
              {/* Search Bar */}
              <div className="bg-white border-2 border-gray-300 px-6 py-4 flex items-center justify-between shadow-sm">
                <form
                  className="flex flex-col w-full gap-2"
                  onSubmit={e => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const params = new URLSearchParams();
                    const mainInput = form.querySelector('input[name="search"]');
                    if (mainInput && mainInput.value.trim()) {
                      params.set('query', mainInput.value.trim());
                    }
                    // Ajout des autres champs
                    [
                      'nom', 'description', 'adresse', 'superficie', 'etage', 'nb_pieces', 'nb_toilettes', 'nb_sdb', 'nb_combine', 'nb_chambres', 'nb_salons', 'type', 'loyer', 'loyer_negociable', 'key_features', 'caution', 'longitude', 'latitude', 'disponibilite', 'derniere_occupation'
                    ].forEach(name => {
                      const el = form.querySelector(`[name="${name}"]`);
                      if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement) {
                        const value = el.value;
                        if (value && value !== '') {
                          params.set(name, value);
                        }
                      }
                    });
                    window.location.href = `/search?${params.toString()}`;
                  }}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {/* Filtres avancés */}
                    <input name="adresse" type="text" placeholder="Adresse" className="px-2 py-1 rounded border border-gray-200" />
                    <input name="superficie" type="number" min="0" placeholder="Superficie (m²)" className="px-2 py-1 rounded border border-gray-200 w-24" />
                    <input name="etage" type="number" min="0" placeholder="Étage" className="px-2 py-1 rounded border border-gray-200 w-16" />
                    <input name="nb_pieces" type="number" min="0" placeholder="Pièces" className="px-2 py-1 rounded border border-gray-200 w-16" />
                    <input name="nb_chambres" type="number" min="0" placeholder="Chambres" className="px-2 py-1 rounded border border-gray-200 w-16" />
                    <input name="nb_salons" type="number" min="0" placeholder="Salons" className="px-2 py-1 rounded border border-gray-200 w-16" />
                    <input name="nb_toilettes" type="number" min="0" placeholder="Toilettes" className="px-2 py-1 rounded border border-gray-200 w-16" />
                    <input name="nb_sdb" type="number" min="0" placeholder="Salles de bain" className="px-2 py-1 rounded border border-gray-200 w-20" />
                    <input name="nb_combine" type="number" min="0" placeholder="Combiné s" className="px-2 py-1 rounded border border-gray-200 w-16" />
                    <select name="type" className="px-2 py-1 rounded border border-gray-200">
                      <option value="">Type</option>
                      <option value="residence">Résidence</option>
                      <option value="studio">Studio</option>
                      <option value="appartement">Appartement</option>
                      <option value="commerce">Commerce</option>
                    </select>
                    <input name="loyer" type="number" min="0" placeholder="Loyer max" className="px-2 py-1 rounded border border-gray-200 w-24" />
                    <select name="loyer_negociable" className="px-2 py-1 rounded border border-gray-200">
                      <option value="">Loyer négociable ?</option>
                      <option value="true">Oui</option>
                      <option value="false">Non</option>
                    </select>
                    <input name="key_features" type="text" placeholder="Caractéristiques clés" className="px-2 py-1 rounded border border-gray-200" />
                    <input name="caution" type="number" min="0" placeholder="Caution max" className="px-2 py-1 rounded border border-gray-200 w-24" />
                    <input name="longitude" type="text" placeholder="Longitude" className="px-2 py-1 rounded border border-gray-200 w-24" />
                    <input name="latitude" type="text" placeholder="Latitude" className="px-2 py-1 rounded border border-gray-200 w-24" />
                    <select name="disponibilite" className="px-2 py-1 rounded border border-gray-200">
                      <option value="">Disponibilité</option>
                      <option value="disponible">Disponible</option>
                      <option value="indisponible">Indisponible</option>
                    </select>
                    <input name="derniere_occupation" type="text" placeholder="Dernière occupation" className="px-2 py-1 rounded border border-gray-200" />
                  </div>
                  <button
                    type="submit"
                    className="ml-2 bg-violet-800 text-white px-6 py-2 rounded-full font-medium hover:bg-violet-900 transition"
                  >
                    Rechercher
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}
