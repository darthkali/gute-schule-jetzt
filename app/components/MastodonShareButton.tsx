'use client';

import { FaMastodon } from 'react-icons/fa6';

const MastodonShareButton = ({
  text,
  shareUrl,
  className,
}: {
  text: string;
  shareUrl: string;
  className: string;
}) => {
  const handleClick = () => {
    const instance = window.prompt(
      'Bitte gib deine Mastodon-Instanz ein (z. B. mastodon.social):'
    );

    if (instance) {
      const instanceUrl = instance
        .trim()
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '');
      if (!instanceUrl.match(/^[a-z0-9.-]+\.[a-z]{2,}$/i)) {
        alert(
          'Bitte gib eine gültige Mastodon-Instanz ein (z. B. mastodon.social)'
        );
        return;
      }

      const url = `https://${instanceUrl}/share?text=${text}%20${shareUrl}`;

      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      aria-label='Teilen auf Mastodon'
    >
      <FaMastodon size={24} className='text-[#6364FF]' />
    </button>
  );
};

export default MastodonShareButton;
