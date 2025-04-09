'use client'
import { supabase } from '@/lib/supabase/client'
import { useState } from 'react'

export const dynamic = "force-dynamic";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) {
            setError(error.message)
        } else {
            window.location.href = '/'
        }
    }

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl mb-4">Admin Login</h1>
            <input
                className="border p-2 mb-2 w-full"
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="border p-2 mb-4 w-full"
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
                Login
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    )
}
