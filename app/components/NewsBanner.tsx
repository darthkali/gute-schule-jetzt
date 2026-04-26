import Link from 'next/link';

function BannerContent({ text }: { text: string }) {
  const urlRegex = /(https?:\/\/[^\s,]+)/g;
  const parts = text.split(urlRegex);

  return (
    <>
      {parts.map((part, i) =>
        urlRegex.test(part) ? (
          <Link
            key={i}
            href={part}
            target='_blank'
            className='underline text-accent hover:brightness-110'
          >
            {part}
          </Link>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function DevBanner() {
  const showNewsBanner = process.env.SHOW_NEWS_BANNER === 'true';
  const newsBannerContent = process.env.NEWS_BANNER_CONTENT || '';
  const marqueeSpeed = process.env.NEWS_BANNER_SPEED || '70';

  if (!showNewsBanner) {
    return null;
  }

  const className = 'mx-50';
  const durationStyle = { animationDuration: `${marqueeSpeed}s` };

  return (
    <div className='relative flex overflow-x-hidden bg-nlj-green py-2 text-white text-center font-bold text-m'>
      <div className='animate-marquee whitespace-nowrap' style={durationStyle}>
        <span className={className}>
          <BannerContent text={newsBannerContent} />
        </span>
      </div>

      <div
        className='absolute top-0 animate-marquee-alt py-2 whitespace-nowrap'
        style={durationStyle}
      >
        <span className={className}>
          <BannerContent text={newsBannerContent} />
        </span>
      </div>
    </div>
  );
}
