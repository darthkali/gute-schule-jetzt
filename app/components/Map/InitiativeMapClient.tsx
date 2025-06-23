'use client'

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import 'leaflet/dist/leaflet.css'
import {useState} from "react";

const isMobile = typeof window !== 'undefined' && window.innerWidth < 640


interface IconPrototypeFix {
    _getIconUrl?: unknown
}

delete (L.Icon.Default.prototype as IconPrototypeFix)._getIconUrl
L.Icon.Default.mergeOptions({
    iconUrl: '/icons/marker-icon.png',
    shadowUrl: '/icons/marker-shadow.png',
    iconRetinaUrl: '/icons/marker-icon.png', // falls du keine Retina-Variante brauchst
})

type Initiative = {
    id: string
    name: string
    description?: string
    latitude: number
    longitude: number
}

const initiatives: Initiative[] = [
    {
        id: "1",
        name: "Kiezgarten Berlin",
        description: "Ein urbanes Gartenprojekt im Herzen Berlins.",
        latitude: 52.5200,
        longitude: 13.4050,
    },
    {
        id: "2",
        name: "Hamburg Hilft",
        description: "Initiative für soziale Unterstützung in Hamburg.",
        latitude: 53.5511,
        longitude: 9.9937,
    },
    {
        id: "3",
        name: "Kölner Kulturverein",
        description: "Förderung lokaler Kunst und Kultur.",
        latitude: 50.9375,
        longitude: 6.9603,
    },
    {
        id: "4",
        name: "Münchner Umweltfreunde",
        description: "Engagement für nachhaltige Stadtentwicklung.",
        latitude: 48.1351,
        longitude: 11.5820,
    },
    {
        id: "5",
        name: "Stuttgarter Tauschring",
        description: "Nachbarschaftshilfe durch Tauschgeschäfte.",
        latitude: 48.7758,
        longitude: 9.1829,
    },
    {
        id: "6",
        name: "Leipziger Leselust",
        description: "Leseförderung für Kinder und Jugendliche.",
        latitude: 51.3397,
        longitude: 12.3731,
    },
    {
        id: "7",
        name: "Mainzer Makerspace",
        description: "Offene Werkstatt für kreative Projekte.",
        latitude: 49.9929,
        longitude: 8.2473,
    },
    {
        id: "8",
        name: "Freiburger Foodsharing",
        description: "Lebensmittel retten und teilen.",
        latitude: 47.9990,
        longitude: 7.8421,
    },
    {
        id: "9",
        name: "Aachener Radfreunde",
        description: "Förderung des Radverkehrs in Aachen.",
        latitude: 50.7753,
        longitude: 6.0839,
    },
    {
        id: "10",
        name: "Nürnberger Nähcafé",
        description: "Gemeinsames Nähen und Textilreparatur.",
        latitude: 49.4521,
        longitude: 11.0767,
    },
];


function InitiativeMapClient() {
    const [activated, setActivated] = useState(false)

    return (
        <div className="relative h-[300px] sm:h-[500px] md:h-[650px] w-full rounded shadow z-0">
            <MapContainer
                center={[51.1657, 10.4515]} // Mittelpunkt Deutschland
                zoom={6}
                scrollWheelZoom={false}
                className="h-full"
            >
                <TileLayer
                    attribution='© OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {initiatives.map((i) => (
                    <Marker key={i.id} position={[i.latitude, i.longitude]}>
                        <Popup>
                            <strong>{i.name}</strong><br/>
                            <p className="text-sm text-gray-700">{i.description?.slice(0, 80)}...</p>
                            <Link
                                href={`/initiative/${i.id}`}
                                className="text-blue-600 underline text-sm block mt-1"
                            >
                                Zur Detailseite
                            </Link>
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
            {/* Overlay */}
            {isMobile && !activated && (
                <div
                    className="absolute inset-0 bg-transparent backdrop-blur-sm cursor-pointer z-[999]"
                    onClick={() => setActivated(true)}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white text-black text-sm px-3 py-1 rounded shadow">
              Karte aktivieren
            </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InitiativeMapClient
