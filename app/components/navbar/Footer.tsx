import Image from 'next/image';
import Link from 'next/link';

const appVersion = process.env.APP_VERSION || '0.0.0';

export default function Footer() {
  return (
    <footer className='bg-primary text-neutral'>
      <div className='max-w-7xl mx-auto px-6 sm:px-10 md:px-16'>
        <div className='py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div className='sm:col-span-2 lg:col-span-1'>
            <Link href='/' className='inline-block mb-4'>
              <Image
                src='/logo/logo-neu-mit-text.svg'
                alt='Neue Lernkultur Jetzt Logo'
                width={120}
                height={50}
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nB3DzUvDMBgH4Pz5HgLzGASHzCEIVQYDoZeBB/G6g2zCUOqyt23SJP1IaB2+8hN84BFkScXvhNKWXHuL2hsUdMRXpXEsNVNNIGekMNao6TzBNoa9d3CugbE19Unjff/G+vMA1wUp2tAqMCN2PachIvXD/ymNaH1gZxukbpAijk79/EYQfbANGsZr+FihoD2qpmDfl0hTkGK7e1Gb1zVWT3d8v77GY36Dq9sZ1PIC80zyIrtE/vwg/wDDIq/dDmXMmgAAAABJRU5ErkJggg=='
              />
            </Link>
            <p className='text-neutral/60 text-sm leading-relaxed'>
              Eine Initiative für zeitgemäße Bildung und neue Lernkultur in
              Baden-Württemberg.
            </p>
          </div>

          <div>
            <h4 className='text-accent font-semibold text-sm uppercase tracking-wider mb-4'>
              Initiative
            </h4>
            <ul className='list-none pl-0 space-y-2'>
              <li className='mb-0'>
                <Link
                  href='/ueber-uns'
                  className='text-neutral/70 hover:text-neutral text-sm transition-colors'
                >
                  Team &amp; Netzwerk
                </Link>
              </li>
              <li className='mb-0'>
                <Link
                  href='/mitwirken'
                  className='text-neutral/70 hover:text-neutral text-sm transition-colors'
                >
                  Mitwirken
                </Link>
              </li>
              <li className='mb-0'>
                <Link
                  href='/presse-und-fakten'
                  className='text-neutral/70 hover:text-neutral text-sm transition-colors'
                >
                  Presse &amp; Fakten
                </Link>
              </li>
              <li className='mb-0'>
                <Link
                  href='/kontakt'
                  className='text-neutral/70 hover:text-neutral text-sm transition-colors'
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-accent font-semibold text-sm uppercase tracking-wider mb-4'>
              Petitionen
            </h4>
            <ul className='list-none pl-0 space-y-2'>
              <li className='mb-0'>
                <Link
                  href='/laufende-petition'
                  className='text-neutral/70 hover:text-neutral text-sm transition-colors'
                >
                  Informationen zur laufenden Petition
                </Link>
              </li>
              <li className='mb-0'>
                <Link
                  href='https://innn.it/schule-mit-zukunft-lernkultur'
                  target='_blank'
                  className='text-neutral/70 hover:text-neutral text-sm transition-colors'
                >
                  Innn.it-Petition (aktuell)
                </Link>
              </li>
              <li className='mb-0'>
                <Link
                  href='/petition'
                  className='text-neutral/70 hover:text-neutral text-sm transition-colors'
                >
                  Informationen zur Landtagspetition
                </Link>
              </li>
              <li className='mb-0'>
                <Link
                  href='https://petitionen.landtag-bw.de/Petitionen/Details/46215aff-a7ad-4de3-8b6f-0cc2bce51e0c'
                  target='_blank'
                  className='text-neutral/70 hover:text-neutral text-sm transition-colors'
                >
                  Landtagspetition (abgelaufen)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-accent font-semibold text-sm uppercase tracking-wider mb-4'>
              Rechtliches
            </h4>
            <ul className='list-none pl-0 space-y-2'>
              <li className='mb-0'>
                <Link
                  href='/impressum'
                  className='text-neutral/70 hover:text-neutral text-sm transition-colors'
                >
                  Impressum
                </Link>
              </li>
              <li className='mb-0'>
                <Link
                  href='/datenschutz'
                  className='text-neutral/70 hover:text-neutral text-sm transition-colors'
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-neutral/15 py-6 flex flex-col sm:flex-row items-center justify-between gap-2'>
          <p className='text-neutral/40 text-xs mb-0'>
            Neue Lernkultur – Jetzt! &middot; Eine BW-Initiative für zeitgemäße
            Bildung
          </p>
          <p className='text-neutral/30 text-xs mb-0'>v{appVersion}</p>
        </div>
      </div>
    </footer>
  );
}
