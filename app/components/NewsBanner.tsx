export default function DevBanner() {
  const showNewsBanner = process.env.SHOW_NEWS_BANNER === 'true';
  const newsBannerContent = process.env.NEWS_BANNER_CONTENT || '';

  if (!showNewsBanner) {
    return null;
  }

  const className = 'mx-50';

  return (
    <div className='relative flex overflow-x-hidden bg-[color:var(--color-nlj-green)] py-2 text-white text-center font-bold text-m'>
      <div className='animate-marquee whitespace-nowrap'>
        <span className={className}>{newsBannerContent}</span>
        <span className={className}>{newsBannerContent}</span>
        <span className={className}>{newsBannerContent}</span>
        <span className={className}>{newsBannerContent}</span>
        <span className={className}>{newsBannerContent}</span>
      </div>

      <div className='absolute top-0 animate-marquee-alt py-2 whitespace-nowrap'>
        <span className={className}>{newsBannerContent}</span>
        <span className={className}>{newsBannerContent}</span>
        <span className={className}>{newsBannerContent}</span>
        <span className={className}>{newsBannerContent}</span>
        <span className={className}>{newsBannerContent}</span>
      </div>
    </div>
  );
}
