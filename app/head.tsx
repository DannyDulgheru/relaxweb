export default function Head() {
  return (
    <>
      <title>Relax Web</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Relax Web is an app with nature sounds to help you focus, sleep, relax and relieve stress."
      />
      <meta
        name="keywords"
        content="relaxweb, nature sounds, focus, sleep, relaxation, stress relief, app, soundscape, 
        mindfulness, wellness, soothing, calming, concentration, meditation, peaceful, tranquility,
        rejuvenation, harmony"
      />

      {/* <!-- Favicon --> */}
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://relaxweb.vercel.app/" />
      <meta property="og:title" content="Relax Web" />
      <meta
        property="og:description"
        content="Relax Web is an app with nature sounds to help you focus, sleep, relax and relieve stress."
      />
      <meta property="og:image" content="/assets/image.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="moodlody.vercel.app" />
      <meta property="twitter:url" content="https://moodlody.vercel.app/" />
      <meta name="twitter:title" content="Relax Web" />
      <meta
        name="twitter:description"
        content="Relax Web is an app with nature sounds to help you focus, sleep, relax and relieve stress."
      />
      <meta name="twitter:image" content="/assets/image.png" />
    </>
  )
}
