import Footer from '@/components/footer/Footer'
import SoundList from '@/components/sound/SoundList'

export default function Home() {
  return (
    <main className="w-ful h-full">
      <div className="flex flex-col justify-center items-center gap-[2rem] container">
        <header className="pt-[4rem] text-center text-white">
          <h1 className="text-[32px] sm:text-[48px] lg:text-[72px] font-bold">
            Moodlody
          </h1>
          <p className="text-lg">
            Relax with nature sounds to help you focus, sleep, and relieve
            stress.
          </p>
        </header>
        <section aria-label="Sound player">
          <SoundList />
        </section>
      </div>
      <Footer />
    </main>
  )
}
