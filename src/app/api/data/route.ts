import { NextResponse } from 'next/server'
import { headerItem } from '@/app/types/menu'
import { featureData } from '@/app/types/featuredata'
import { socialLinksData } from '@/app/types/sociallinks'
import { plansData } from '@/app/types/plans'
import { footerlLinksData } from '@/app/types/footerlinks'

const HeaderData: headerItem[] = [
  { label: 'ໜ້າຫຼັກ', href: '/#hero' },
  { label: 'ລົງທະບຽນ EV', href: '/interview-ev ' },
  { label: 'ຂ່າວສານ EV', href: '/ev-news ' },
  { label: 'ຄິດໄລ່ຄ່າໄຟ', href: '/electricite ' },
  { label: 'ສ້າງ QR Code', href: '/generate-qrcode ' },
  // { label: 'Docs', href: '/documentation' },
]

const FeatureData: featureData[] = [
  {
    imgSrc: '/images/features/time.svg',
    heading: 'Unpaid Bill Alerts',
    paragraph:
      'Never miss a due date again. Get instant alerts for upcoming payments. Stay on top of your bills, effortlessly.',
  },
  {
    imgSrc: '/images/features/signal.svg',
    heading: 'Spending Insights',
    paragraph:
      'Track where your money goes. See spending by category. Make smarter choices with clear insights.',
  },
  {
    imgSrc: '/images/features/dollar.svg',
    heading: 'Card Management',
    paragraph:
      'Link all your cards. Track balances and activity. Manage everything in one dashboard.',
  },
]

const PlansData: plansData[] = [
  {
    heading: 'Lite',
    price: {
      monthly: 19,
      yearly: 190,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'Basic invoice generation',
      'Downloadable PDF invoice',
      'Unlimited transactions',
      'Emails for all the updates',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg',
  },
  {
    heading: 'Basic',
    price: {
      monthly: 29,
      yearly: 290,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'All Lite features',
      'Custom invoice templates',
      'Tax calculation support',
      'Automatic invoice reminders',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/startwo.svg',
  },
  {
    heading: 'Plus',
    price: {
      monthly: 59,
      yearly: 590,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'All Basic features',
      'Multi-currency support',
      'Invoice payment tracking',
      'Priority customer support',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg',
  },
]

const FooterLinks: footerlLinksData[] = [
  { label: 'ໜ້າຫຼັກ', href: '/#hero' },
  { label: 'ລົງທະບຽນ EV', href: '/interview-ev ' },
  { label: 'ຂ່າວສານ EV', href: '/ev-news ' },
  { label: 'ຄິດໄລ່ຄ່າໄຟ', href: '/electricite ' },
  { label: 'ສ້າງ QR Code', href: '/generate-qrcode ' },
  // { label: 'Home', href: '/#product' },
  // { label: 'EV News', href: '/#pricing' },
  // { label: 'Features', href: '/#features ' },
  // { label: 'Features', href: '/#features ' },
  // { label: 'Contact Us', href: '/#contact ' },
]


const SocialLinks: socialLinksData[] = [
  {
    imgSrc: 'fa-brands:facebook-f',
    link: 'https://www.facebook.com/Edllao',
    width: 10,
  },
  {
    imgSrc: 'fa-brands:youtube',
    link: 'https://www.youtube.com/@EDLChannelLaos',
    width: 14,
  },
  {
    imgSrc: 'fa-brands:tiktok',
    link: 'https://www.tiktok.com/@edllaos1?_r=1&_d=e6277fjjfd6j4e&sec_uid=MS4wLjABAAAAOQCSpWIVioW1PowBAIbDL2zchWYgNiuBtNg1omxyphX5PQ__DQv5wGOrwweBjeuI&share_author_id=7098626665651766299&sharer_language=th&source=h5_t&u_code=d1l047j3d8ahd2&ug_btm=b6880,b5836&sec_user_id=MS4wLjABAAAA5wno365wa-_QxG-CN9mUsYtTWRa8lzuCcXbrfPqHXlitcBYEi4PvKZ6zyaysGjkY&utm_source=whatsapp&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=whatsapp&user_id=6594404152531664897&enable_checksum=1&share_link_id=65F9F575-28EE-4BE8-AD8C-BB1777CBBF6D&share_app_id=1180',
    width: 14,
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeatureData,
    PlansData,
    FooterLinks,
    SocialLinks,

  })
}
