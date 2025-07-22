'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState } from 'react'
import { footerlLinksData } from '@/app/types/footerlinks'
import { socialLinksData } from '@/app/types/sociallinks'
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState<footerlLinksData[]>([])
  const [socialLinks, setSocialLinks] = useState<socialLinksData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data.FooterLinks)
        setSocialLinks(data.SocialLinks)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    // <div className='bg-midnight_text'>
    //   <div className='container p-4'>
    //     <div className='my-6 grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-y-5'>
    //       {/* COLUMN-1 */}
    //       <div className='sm:col-span-6 lg:col-span-3'>
    //         <div className='flex shrink-0 items-center border-right'>
    //           <Image
    //             src='/images/logo/logo-white.svg'
    //             alt='logo'
    //             width={214}
    //             height={55}
    //           />
    //         </div>
    //       </div>
    //       <div className='sm:col-span-6 lg:col-span-5 flex items-center'>
    //         <div className='flex gap-4'>
    //           {footerLinks.map((items, i) => (
    //             <div key={i}>
    //               <Link
    //                 href={`${items.href}`}
    //                 className='text-lg font-normal text-white/60 flex items-center justify-center hover:text-white hover:underline'>
    //                 {items.label}
    //               </Link>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <div className='sm:col-span-6 lg:col-span-4'>
    //         <div className='flex gap-4 lg:justify-end'>
    //           {socialLinks.map((items, i) => (
    //             <Link href={items.link} key={i}>
    //               <div className='bg-white/20 h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center text-white hover:text-black hover:bg-white'>
    //                 <Icon icon={items.imgSrc} className='text-2xl' />
    //               </div>
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <div className='pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-t-white/30'>
    //       <h4 className='text-lg text-center md:text-start font-normal text-white/60'>
    //         @2025.All rights reserved by{' '}
    //         <Link
    //           href='https://edl.com.la/'
    //           className='hover:text-white'>
    //           EDL ICT-Application Department
    //         </Link>
    //       </h4>
    //       <div className='flex gap-5  justify-center items-center md:justify-start'>
    //         <h4 className='text-lg font-normal text-white/60 hover:text-white'>
    //           <Link href='/' target='_blank'>
    //             Privacy policy
    //           </Link>-
    //         </h4>
    //         <div className='h-5 bg-white opacity-60 w-0.5'></div>
    //         <h4 className='text-lg font-normal text-white/60 hover:text-white'>
    //           <Link href='/' target='_blank'>
    //             Terms & conditions
    //           </Link>
    //         </h4>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='bg-midnight_text'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Section 1: Download App and Social Links */}
          <div className="flex flex-col items-start lg:pr-8"> {/* Adjusted padding for larger screens */}
            <p className="mb-4 font-medium text-white text-xl">
              ດາວໂຫຼດ EDL EV ໄດ້ແລ້ວທີ່
            </p>
            <Link href='/'>
              <Image
                src='/images/footer/download.png'
                alt='logo'
                width={306}
                height={80}
                quality={100}
              />
            </Link>

            <p className="mt-8 mb-4 max-w-xs font-medium text-white text-md">
              ຕິດຕາມຂໍ້ມູນຂ່າວສານຜ່ານຊ່ອງທາງ
            </p>

            <ul className="flex gap-4">
              {socialLinks.map((items, i) => (
                <li key={i}>
                  <Link href={items.link}>
                    <div className='bg-white/20 h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center text-white hover:text-black hover:bg-white'>
                      <Icon icon={items.imgSrc} className='text-2xl' />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Navigation Links, Contact Us, Address */}
          {/* Adjusted grid to 3 columns for large screens, spreading out remaining content */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 lg:pl-8"> {/* Changed lg:grid-cols-4 to lg:grid-cols-3 and adjusted padding */}
            <div>
              <p className="font-medium text-white mb-4">Services</p>
              <ul className="space-y-3 text-sm">
                {footerLinks.map((items, i) => (
                  <li key={i}>
                    <Link
                      href={`${items.href}`}
                      className='text-lg font-normal text-white/60 hover:text-white hover:underline'
                    >
                      {items.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-white mb-4">Contact Us</p>
              <ul className="space-y-3 text-xm">
                <li><p className="text-white/60 flex items-center"><LuPhoneCall />: +856 21 136 133</p></li> {/* Changed Link to p for static text */}
                <li><p className="text-white/60 flex items-center"> <MdOutlineAttachEmail />: edlmdo@edl.com.la</p></li> {/* Changed Link to p for static text */}
              </ul>
            </div>

            <div>
              <p className="font-medium text-white mb-4">Address</p>
              <ul className="space-y-3 text-xm">
                <li><p className="text-white/60">ບ້ານ ທົ່ງກາງ, ເມືອງ ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ</p></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <p className="mt-12 text-xm text-white text-center lg:text-left border-t border-t-white/30 pt-8">
          &copy; {new Date().getFullYear()}. All rights reserved by{' '}
          <Link
            href='https://edl.com.la/'
            className='text-amber-400 hover:text-white/60'>
            Electricite Du Laos
          </Link>.
        </p>
      </div>
    </div>
  )
}

export default Footer
