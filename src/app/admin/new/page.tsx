'use client'

import {useState} from 'react'
import {supabase} from '@/lib/supabase/client'
import {useRouter} from 'next/navigation'
import RequireAuth from '@/components/RequireAuth'

export default function NewInitiativePage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        latitude: '',
        longitude: '',
        website_url: '',
        video_url: '',
    })
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const {error} = await supabase.from('initiatives').insert([
            {
                name: formData.name,
                description: formData.description,
                latitude: parseFloat(formData.latitude),
                longitude: parseFloat(formData.longitude),
                website_url: formData.website_url,
                video_url: formData.video_url,
            },
        ])
        if (error) {
            setError(error.message)
        } else {
            router.push('/')
        }
    }

    return (
        <RequireAuth>
            <main className="max-w-xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Neue Initiative anlegen</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-2"
                           required/>
                    <textarea name="description" placeholder="Beschreibung" onChange={handleChange}
                              className="w-full border p-2" required/>
                    <div className="flex gap-4">
                        <input name="latitude" placeholder="Breitengrad" onChange={handleChange}
                               className="w-full border p-2" required/>
                        <input name="longitude" placeholder="Längengrad" onChange={handleChange}
                               className="w-full border p-2" required/>
                    </div>
                    <input name="website_url" placeholder="Website (optional)" onChange={handleChange}
                           className="w-full border p-2"/>
                    <input name="video_url" placeholder="Video-URL (optional)" onChange={handleChange}
                           className="w-full border p-2"/>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Speichern</button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </main>
        </RequireAuth>
    )
}
