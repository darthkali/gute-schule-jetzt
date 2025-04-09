'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminMenu() {
    const [userEmail, setUserEmail] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        const getUser = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (session?.user?.email) {
                setUserEmail(session.user.email)
            }
        }
        getUser()

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user?.email) {
                setUserEmail(session.user.email)
            } else {
                setUserEmail(null)
            }
        })

        return () => {
            listener?.subscription.unsubscribe()
        }
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    if (!userEmail) return null

    return (
        <div className="bg-gray-100 text-sm p-3 flex justify-between items-center">
            <div className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/admin/new" className="text-blue-600 font-semibold">Neue Initiative</Link>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-gray-600">Angemeldet als: {userEmail}</span>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
