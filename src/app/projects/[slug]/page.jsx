import Banner from '@/components/Banner';
import BottomBanner from '@/components/BottomBanner';
import { getProject } from '@/lib/projects'
import React from 'react'
import ImageGallery from './ImageGallery';

export default function project({ params }) {
    const project = getProject(params.slug)
    return (
        <div>
            <Banner
                head={project.title}
                desc="We've done hundreds of restaurants across the GTA. Check some of the highlights below!"
            />
            <section className="container py-[50px] overflow-hidden max-lg:py-[40px] max-md:py-[30px] max-sm:py-[20px]">
                <div className=" mb-[52px] max-lg:mb-[40px] max-md:mb-[40px]">
                    <ImageGallery images={project.images} />
                </div>
            </section>
            <BottomBanner />
        </div>
    )
}
