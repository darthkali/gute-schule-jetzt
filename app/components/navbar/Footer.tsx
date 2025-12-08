import Image from 'next/image';
import Link from 'next/link';

const appVersion = process.env.APP_VERSION || '0.0.0';

export default function Footer() {
  return (
    <footer className='bg-[#2e3e50] text-white py-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-evenly flex-wrap gap-6 px-4'>
        {/* Logo */}
        <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image
              src='/logo/logo-neu-mit-text.svg'
              alt='EduUnite Logo'
              width={90}
              height={40}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nB3DzUvDMBgH4Pz5HgLzGASHzCEIVQYDoZeBB/G6g2zCUOqyt23SJP1IaB2+8hN84BFkScXvhNKWXHuL2hsUdMRXpXEsNVNNIGekMNao6TzBNoa9d3CugbE19Enjff/G+vMA1wUp2tAqMCN2PachIvXD/ymNaH1gZxukbpAijk79/EYQfbANGsZr+FihoD2qpmDfl0hTkGK7e1Gb1zVWT3d8v77GY36Dq9sZ1PIC80zyIrtE/vwg/wDDIq/dDmXMmgAAAABJRU5ErkJggg=='
            />
          </div>
        </Link>

        {/* Links */}
        <div className='flex gap-6 flex-wrap text-sm font-medium justify-center'>
          <a href='/kontakt' className='hover:underline'>
            Kontakt
          </a>
          <a href='/impressum' className='hover:underline'>
            Impressum
          </a>
          <a href='/datenschutz' className='hover:underline'>
            Datenschutz
          </a>
          <span className='text-sm  break-words'>v{appVersion}</span>
        </div>
      </div>
    </footer>
  );
}
