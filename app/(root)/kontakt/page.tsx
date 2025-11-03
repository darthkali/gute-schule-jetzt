'use client';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/app/components/Button';
import Toast from '@/app/components/Toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClassNames =
    'w-full bg-[color:var(--color-neutral)]  rounded-xl p-3 focus:ring-1 focus:ring-[color:var(--color-accent)] disabled:bg--[color:var(--color-neutral)] disabled:cursor-not-allowed';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setToast({
          message: 'Nachricht erfolgreich gesendet!',
          type: 'success',
        });
        setFormData({
          name: '',
          category: '',
          email: '',
          message: '',
          honeypot: '',
        });
      } else {
        const error = await res.json();
        setToast({
          message: error?.error || 'Fehler beim Senden.',
          type: 'error',
        });
      }
    } catch (error) {
      setToast({
        message:
          typeof error === 'string'
            ? error
            : 'Ein unbekannter Fehler ist aufgetreten.',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='innerBox  '>
      <div className=' grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-10'>
        <div className='flex flex-col '>
          <h1>Kontaktiere uns</h1>

          <a
            href='mailto:info@neue-lernkultur-jetzt.de'
            className='flex items-center gap-2  py-4'
          >
            <span>E-Mail:</span>
            <span
              className={
                'text-[color:var(--color-secondary)] hover:text-[color:var(--color-primary)]'
              }
            >
              info@neue-lernkultur-jetzt.de
            </span>
          </a>

          <form onSubmit={handleSubmit} className='space-y-4 '>
            <div>
              <select
                name='category'
                id='category'
                required
                value={formData.category}
                onChange={handleSelectChange}
                disabled={isLoading}
                className={inputClassNames}
              >
                <option value='' disabled>
                  Kategorie auswählen
                </option>
                <option value='Kommentar'>Kommentar</option>
                <option value='Mitmachen'>Mitmachen</option>
                <option value='Frage'>Frage</option>
              </select>
              {formData.category && (
                <label
                  htmlFor='category'
                  className='p-1 block text-sm font-medium text-gray-400'
                >
                  Kategorie
                </label>
              )}
            </div>

            <div>
              <input
                type='text'
                name='name'
                id='name'
                required
                placeholder={'Name'}
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                className={inputClassNames}
              />
              {formData.name && (
                <label
                  htmlFor='name'
                  className='p-1 block text-sm font-medium  text-gray-400'
                >
                  Name
                </label>
              )}
            </div>

            <div>
              <input
                type='email'
                name='email'
                id='email'
                placeholder={'E-Mail'}
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className={inputClassNames}
              />
              {formData.email && (
                <label
                  htmlFor='email'
                  className='p-1 block text-sm font-medium text-gray-400'
                >
                  E-Mail
                </label>
              )}
            </div>

            <div>
              <textarea
                name='message'
                id='message'
                placeholder={'Nachricht'}
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                className={inputClassNames}
              ></textarea>
              {formData.message && (
                <label
                  htmlFor='message'
                  className='pl-1 block text-sm font-medium text-gray-400'
                >
                  Nachricht
                </label>
              )}
            </div>

            <div className='grid grid-cols-1 place-items-center'>
              <Button
                text={'Nachricht senden'}
                bgColor='bg-[color:var(--color-accent)]'
                textColor='text-[color:var(--color-neutral)]'
                type='submit'
                disabled={isLoading}
              />
              {isLoading && (
                <div className='flex items-center mt-2'>
                  <div className='w-5 h-5 border-2 border-[color:var(--color-text)] border-t-transparent rounded-full animate-spin'></div>
                  <span className='ml-2 text-[color:var(--color-text)]'>
                    Wird gesendet...
                  </span>
                </div>
              )}
            </div>

            <input
              type='text'
              name='honeypot'
              value=''
              onChange={() => {}}
              className='hidden aria-hidden tabIndex={-1}'
              autoComplete='off'
            />
          </form>
        </div>

        <div className='relative h-64 md:h-auto '>
          <Image
            src='/images/hoch/solidarity-649713_1920.jpg'
            alt='Solidarität'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nB3DzUvDMBgH4Pz5HgLzGASHzCEIVQYDoZeBB/G6g2zCUOqyt23SJP1IaB2+8hN84BFkScXvhNKWXHuL2hsUdMRXpXEsNVNNIGekMNao6TzBNoa9d3CugbE19Enjff/G+vMA1wUp2tAqMCN2PachIvXD/ymNaH1gZxukbpAijk79/EYQfbANGsZr+FihoD2qpmDfl0hTkGK7e1Gb1zVWT3d8v77GY36Dq9sZ1PIC80zyIrtE/vwg/wDDIq/dDmXMmgAAAABJRU5ErkJggg=='
          />
        </div>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
}
