import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import InitiativeMap from "@/components/InitiativeMap";

export default async function HomePage() {
    const supabase = createServerComponentClient({ cookies })
    const { data: initiatives, error } = await supabase
        .from('initiatives')
        .select('*')
        .order('name', { ascending: true })

    if (error) {
        console.error('Fehler beim Laden der Initiativen:', error.message)
        return <div>Fehler beim Laden der Daten.</div>
    }

    return (
        <main className="p-6 max-w-3xl mx-auto">

            <h1 className="text-3xl font-bold mb-6">Initiativen</h1>
            <InitiativeMap initiatives={initiatives || []} />

            <ul className="space-y-4">
                {initiatives?.map((initiative) => (
                    <li key={initiative.id} className="border rounded p-4 shadow">
                        <h2 className="text-xl font-semibold">{initiative.name}</h2>
                        <p className="text-gray-700">{initiative.description}</p>
                        {initiative.website_url && (
                            <a
                                href={initiative.website_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm block mt-2"
                            >
                                Zur Website
                            </a>
                        )}
                        <a href={`/admin/edit/${initiative.id}`} className="text-sm text-blue-600 underline">
                            Bearbeiten
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    )
}
