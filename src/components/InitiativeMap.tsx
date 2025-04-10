'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Link from 'next/link'
import 'leaflet/dist/leaflet.css'

// 🧙 Icon-Fix für Next.js / Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

type Initiative = {
    id: string
    name: string
    description?: string
    latitude: number
    longitude: number
}

export default function InitiativeMap({ initiatives }: { initiatives: Initiative[] }) {
    return (
        <MapContainer
            center={[51.1657, 10.4515]} // Mittelpunkt Deutschland
            zoom={6}
            scrollWheelZoom={true}
            className="h-[500px] w-full rounded shadow"
        >
            <TileLayer
                attribution='© OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {initiatives.map((i) => (
                <Marker key={i.id} position={[i.latitude, i.longitude]}>
                    <Popup>
                        <strong>{i.name}</strong><br />
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
    )
}
