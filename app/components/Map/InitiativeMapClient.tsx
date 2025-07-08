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
    link: string
}

const initiatives: Initiative[] = [
    {
        id: "1",
        name: "ASW Wutöschingen",
        description: "Selbstorganisiertes Lernen statt Unterricht (Schmetterlingspädagogik)",
        latitude: 52.5200,
        longitude: 13.4050,
        link: "https://asw-wutoeschingen.de "
    },
    {
        id: "2",
        name: "Primusschule Münster Berg Fidel Geist",
        description: "Verantwortungsteams & Länger gemeinsam lernen",
        latitude: 51.924613,
        longitude: 7.616089,
        link: "https://www.primus-muenster.de/"
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
                            <p className="text-sm text-gray-700">{i.description?.slice(0, 1500)}...</p>
                            <Link
                                href={i.link}
                                className="text-blue-600 underline text-sm block mt-1"
                                target={"_blank"}
                            >
                                Zur Webseite
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
