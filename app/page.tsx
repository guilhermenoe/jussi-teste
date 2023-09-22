import About from '@/components/About'
import BannerMain from '@/components/BannerMain'
import Brands from '@/components/Brands'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Newsletter from '@/components/Newsletter'
import ShelfProduct from '@/components/ShelfProduct'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Header />
      <BannerMain />
      <Brands />
      <ShelfProduct />
      <About />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  )
}
