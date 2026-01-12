import React from 'react'

export default function HeroSection() {
    return (
        <div className="relative h-screen overflow-hidden bg-neutral-950 text-neutral-50 flex items-center justify-center">
            <h1 className="absolute w-full right-0 rotate-45 bg-neutral-50 py-6 text-neutral-800 text-4xl font-normal tracking-tight">
                <div className="flex justify-evenly items-center">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <React.Fragment key={i}>
                            <span>Hello {i}</span>
                            {i !== 5 && <span className="text-emerald-600">◆</span>}
                        </React.Fragment>
                    ))}
                </div>
            </h1>
        </div>
    )
}