'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Explore() {
  // Explicitly define the type of the ref to HTMLHeadingElement
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const [lineHeight, setLineHeight] = useState('96px');

  useEffect(() => {
    const updateLineHeight = () => {
      // TypeScript now knows h2Ref.current is an HTMLHeadingElement (or null)
      // So, if it's not null, it will definitely have clientHeight
      if (h2Ref.current) {
        const height = h2Ref.current.clientHeight;
        setLineHeight(`${height}px`);
      }
    };

    updateLineHeight();

    window.addEventListener('resize', updateLineHeight);

    return () => {
      window.removeEventListener('resize', updateLineHeight);
    };
  }, []);

  return (
    <section id='explore' className='py-10'>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 content-center justify-items-center">
          <div className='col-span-6'>
            <Image
              src='/images/charger/ev_charger.png'
              alt='payment'
              width={500}
              height={400}
            />
          </div>
          <div className='col-span-6 flex flex-col gap-5 justify-center'>
            <div className="flex items-start gap-4">
              <div className="w-2 bg-sky-950 mt-2" style={{ height: lineHeight }}></div>
              <h2
                ref={h2Ref} // Assign the ref
                className='text-midnight_text text-center lg:text-start sm:leading-14 leading-12'
              >
                EXPLORE ALL THE EDL<br/>CHARGERS IN LAOS
              </h2>
            </div>
            <ul className='list-disc pl-5'>
              <li>See every EV charger in Laos.</li>
              <li>Check the available status.</li>
              <li>Check the type of charging gun.</li>
            </ul>

            <Link
              href={'/'}
              className='flex items-center gap-2 mx-auto lg:mx-0'>
              <br/>Accept all GB/T and CCS Type 2 EVs.
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}