type InfoCardProps = {
  children: React.ReactNode;
  bgColor?: string;
};

export default function InfoCard({ children, bgColor }: InfoCardProps) {
  return (
    <div
      className={`${bgColor ?? 'bg-white'} p-4 h-full shadow break-inside-avoid `}
    >
      {children}
    </div>
  );
}
