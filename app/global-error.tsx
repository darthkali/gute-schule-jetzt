'use client'

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
        <body className="flex flex-col items-center justify-center h-screen bg-red-50 text-red-800">
        <h1 className="text-2xl font-bold mb-4">Uups, da ist etwas schiefgelaufen!</h1>

        <p className="mb-2 font-mono">{error.message}</p>

        <button
            onClick={() => reset()}
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
            Nochmals versuchen
        </button>
        </body>
        </html>
    )
}
