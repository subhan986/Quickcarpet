import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative flex h-24 w-24 animate-pulse items-center justify-center">
        <Image src="/LOGO.png" alt="Loading..." fill className="object-contain" />
      </div>
    </div>
  );
}
