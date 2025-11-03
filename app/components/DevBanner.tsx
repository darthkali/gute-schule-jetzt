export default function DevBanner() {
  // Diese Variable wird zur Laufzeit gelesen (Server-Komponente)
  const showDevBanner = process.env.NEXT_PUBLIC_SHOW_DEV_BANNER === 'true';

  if (!showDevBanner) {
    return null;
  }

  return (
    <div className='sticky top-0 z-50 bg-red-500 text-white text-center py-1'>
      Preview - Seite ist noch in Arbeit.
    </div>
  );
}
