'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Charger() {
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
       <section id='charger' className='py-10'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 content-center justify-items-center'>
          <div className='col-span-6 flex flex-col gap-5 justify-center'>
            <div className="flex items-start gap-4">
              <div className="w-2 bg-sky-950 mt-2" style={{ height: lineHeight }}></div>
              <h2
                ref={h2Ref} // Assign the ref
                className='text-midnight_text text-center lg:text-start sm:leading-14 leading-12'
              >
                ALL ABOUT CHARGING IN ONE
              </h2>
            </div>
            <ul className='list-disc pl-5'>
              <li>See the charging history.</li>
              <li>Reserve your charger 15 minutes before with one click.</li>
              <li>Check the charging percentage on your phone.</li>
            </ul>

          </div>
          <div className='lg:col-span-6 flex sm:justify-center justify-start mt-10 lg:mt-0'>
            <Image
              src='/images/charger/evcharger.webp'
              alt='business'
              width={636}
              height={805}
              className='w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
