'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

export function Manage() {
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
    <section id='manage' className='py-10'>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 content-center justify-items-center">
          <div className='col-span-6'>
            <Image
              src='/images/manage/management.jpg'
              alt='payment'
              width={600}
              height={500}
              className='rounded-md'
            />
          </div>
          <div className='col-span-6 mx-1 flex flex-col gap-5 justify-center'>
            <div className="flex items-start gap-4">
              <div className="w-2 bg-sky-950 mt-2" style={{ height: lineHeight }}></div>
              <h2
                ref={h2Ref} // Assign the ref
                className='text-midnight_text text-center lg:text-start sm:leading-14 leading-12'
              >
                MANAGE YOUR PAYMENT EASILY
              </h2>
            </div>
            <ul className='list-disc pl-5'>
              <li>Pay your fee through Loca EV.</li>
              <li>Top Up your account anytime.</li>
              <li>Lao Banks and Credit/Debit Cards are all accepted.</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}