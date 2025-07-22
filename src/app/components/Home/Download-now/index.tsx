'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Download() {
    return (
        <section id='download' className='py-10'>
            <div className='container mx-auto px-4'>
                <h2 className='text-midnight_text text-center sm:leading-14 leading-12'>ດາວໂຫລດໄດ້ແລ້ວ</h2>
                {/* Removed the extra text-center div as mx-auto on Image will handle centering */}
                <Link href="/">
                    <Image
                        src='/images/footer/download.png'
                        alt='download'
                        width={400}
                        height={60}
                        // Corrected classes for centering the image
                        className='block mx-auto my-10' // `block` makes it a block-level element, `mx-auto` centers it horizontally
                    />
                </Link>
                <p className='text-lg font-normal text-center text-gray-600 pt-5 max-w-2xl mx-auto mb-16'>
                    * Requires iOS 12.0 or higher *Android 6 or higher
                </p>
            </div>
        </section>
    )
}
