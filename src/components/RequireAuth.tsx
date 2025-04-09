'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function RequireAuth({ children }: { children: React.ReactNode }) {
    const [checking, setChecking] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const checkSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()

            if (!session) {
                router.push('/login')
            } else {
                setIsAuthenticated(true)
            }

            setChecking(false)
        }

        checkSession()
    }, [router])

    if (checking) return <p className="p-6">Zugriff prüfen…</p>
    if (!isAuthenticated) return null

    return <>{children}</>
}
