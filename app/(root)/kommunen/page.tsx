import React from 'react'
import Image from "next/image";

const Page = () => {
    return (
        <section>
            <div className={"innerBox"}>
                <h1 className={"text-center text-[color:var(--color-text)]"}>Kommunen/ Schulträger und Vereine</h1>
                <div className="flex flex-col xl:flex-row gap-4 mt-4 items-stretch">
                    <div className="md:basis-2/3 text-[color:var(--color-text)]">
                        <p className={"font-semibold"}>
                            TBD
                        </p>

                    </div>
                    <div className="hidden xl:block xl:basis-1/3 relative h-[600px] rounded overflow-hidden">
                        <Image
                            src="/images/hoch/street-coffee-444922_1920.jpg"
                            alt="Hero Background"
                            fill
                            className="object-cover object-bottom pointer-events-none"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Page
