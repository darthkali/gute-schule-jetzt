'use client'

import {useEffect, useState} from 'react'
import {useParams, useRouter} from 'next/navigation'
import {supabase} from '@/lib/supabase/client'
import RequireAuth from '@/components/RequireAuth'

export default function EditInitiativePage() {
    const {id} = useParams()
    const router = useRouter()

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        latitude: '',
        longitude: '',
        website_url: '',
        video_url: '',
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // 🔄 Daten laden
    useEffect(() => {
        if (!id) return
        const fetchData = async () => {
            const {data, error} = await supabase.from('initiatives').select('*').eq('id', id).single()
            if (error) {
                setError(error.message)
            } else {
                setFormData({
                    name: data.name || '',
                    description: data.description || '',
                    latitude: String(data.latitude || ''),
                    longitude: String(data.longitude || ''),
                    website_url: data.website_url || '',
                    video_url: data.video_url || '',
                })
            }
            setLoading(false)
        }
        fetchData()
    }, [id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const {error} = await supabase.from('initiatives').update({
            name: formData.name,
            description: formData.description,
            latitude: parseFloat(formData.latitude),
            longitude: parseFloat(formData.longitude),
            website_url: formData.website_url,
            video_url: formData.video_url,
        }).eq('id', id)
        if (error) {
            setError(error.message)
        } else {
            router.push('/')
        }
    }

    if (loading) return <p className="p-6">Lade Daten…</p>

    return (
        <RequireAuth>
            <main className="max-w-xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Initiative bearbeiten</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Name"
                           className="w-full border p-2" required/>
                    <textarea name="description" value={formData.description} onChange={handleChange}
                              placeholder="Beschreibung" className="w-full border p-2" required/>
                    <div className="flex gap-4">
                        <input name="latitude" value={formData.latitude} onChange={handleChange}
                               placeholder="Breitengrad" className="w-full border p-2" required/>
                        <input name="longitude" value={formData.longitude} onChange={handleChange}
                               placeholder="Längengrad" className="w-full border p-2" required/>
                    </div>
                    <input name="website_url" value={formData.website_url} onChange={handleChange}
                           placeholder="Website (optional)" className="w-full border p-2"/>
                    <input name="video_url" value={formData.video_url} onChange={handleChange}
                           placeholder="Video-URL (optional)" className="w-full border p-2"/>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Änderungen speichern
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </main>
        </RequireAuth>
    )
}
