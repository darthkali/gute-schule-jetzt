export default function DevBanner() {
  const showDevBanner = process.env.SHOW_DEV_BANNER === 'true';
  const appVersion = process.env.APP_VERSION || '0.0.0';
  const buildDate = process.env.APP_BUILD_DATE || '01.01.2000';

  if (!showDevBanner) {
    return null;
  }

  return (
    <div className='sticky top-0 z-50 bg-red-500 text-white text-center py-1 text-sm'>
      Entwicklungsumgebung - Version: {appVersion} - letzte Aktualisierung am:{' '}
      {buildDate}
    </div>
  );
}
