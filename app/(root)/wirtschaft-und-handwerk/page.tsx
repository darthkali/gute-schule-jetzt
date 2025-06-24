import React from 'react'
import ImageTextSection from "@/app/components/ImageTextComponent";

const Page = () => {
    return (
        <section>
            <div className={"innerBox"}>
                <h1>Wirtschaft und Handwerk</h1>
                <ImageTextSection
                    imageSrc="/images/hoch/crafts-3676583_1920.jpg"
                    imageAlt="Raupe, Puppe und Schmetterling"
                    imagePosition="left"
                >
                    TBD
                </ImageTextSection>
            </div>
        </section>
    )
}
export default Page
