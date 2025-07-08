'use client'

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import L, {MarkerCluster} from 'leaflet'
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
    iconRetinaUrl: '/icons/marker-icon.png',
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
        latitude: 47.659764,
        longitude: 8.364378,
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
    {
        id: "3",
        name: "Stiftung Talenticum in CH Romanshorn",
        description: "außerschulischer Lernort für Schüler:innen, der dabei hilft, das volle Potenzial der jungen Menschen zu entfalten. Lehrkräfte können ihren Unterricht für eine Projektarbeit dorthin verlegen und Geräte, Materialien und Räumlichkeiten nutzen.",
        latitude: 47.565424,
        longitude: 9.371903,
        link: "https://www.talenticum.swiss"
    },
    {
        id: "4",
        name: "Peter Fratton, CH",
        description: `gründete 1980 das erste Haus des Lernens mit seinem Konzept des autonomen Lernens in gestalteter Umgebung."  2020 arbeiteten bereits über 140 Schulen im In- und Ausland danach und stellen die Lernenden in den Mittelpunkt. Buch „Lass mir die Welt – verschule sie nicht"`,
        latitude: 47.563747,
        longitude: 9.362589,
        link: "https://www.peterfratton.com"
    },
];

// Benutzerdefinierte Cluster-Icon-Erstellung mit Ihren CSS-Variablen
const createClusterCustomIcon = (cluster: MarkerCluster) => {
    const childCount = cluster.getChildCount()

    return L.divIcon({
        html: `<div class="cluster-icon">
            <span class="cluster-text">${childCount}</span>
        </div>`,
        className: 'custom-marker-cluster',
        iconSize: L.point(40, 40, true),
    })
}

function InitiativeMapClient() {
    const [activated, setActivated] = useState(false)
    const maxDescriptionLength = 80

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

                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createClusterCustomIcon}
                    maxClusterRadius={60}
                    spiderfyOnMaxZoom={true}
                    showCoverageOnHover={false}
                    zoomToBoundsOnClick={true}
                    spiderfyDistanceMultiplier={1}
                >
                    {initiatives.map((i) => (
                        <Marker key={i.id} position={[i.latitude, i.longitude]}>
                            <Popup className="initiative-popup">
                                <div className="p-3">
                                    <h3 className="font-semibold text-lg mb-2 text-primary">{i.name}</h3>
                                    <p className="text-sm mb-3 leading-relaxed">
                                        {i.description?.slice(0, maxDescriptionLength)}
                                        {i.description && i.description.length > maxDescriptionLength && '...'}
                                    </p>
                                    <Link
                                        href={i.link}
                                        className="text-blue-600 underline text-sm block mt-1"
                                        target={"_blank"}
                                    >
                                        Zur Webseite →
                                    </Link>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>

            {/* Overlay */}
            {isMobile && !activated && (
                <div
                    className="absolute inset-0 bg-transparent backdrop-blur-sm cursor-pointer z-[999]"
                    onClick={() => setActivated(true)}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="px-4 py-2 rounded-md shadow-lg transition-all duration-200 hover:shadow-xl"
                              style={{
                                  backgroundColor: 'var(--color-neutral)',
                                  color: 'var(--color-text)',
                                  fontFamily: 'var(--font-poppins), sans-serif',
                                  fontWeight: '500'
                              }}>
                            Karte aktivieren
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InitiativeMapClient