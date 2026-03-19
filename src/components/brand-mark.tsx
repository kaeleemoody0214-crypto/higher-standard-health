import Image from "next/image";

export function BrandMark() {
  return (
    <div className="relative w-[150px] sm:w-[190px]">
      <Image
        src="/images/branding/higher-standard-health-logo.png"
        alt="Higher Standard Health"
        width={800}
        height={800}
        priority
        className="h-auto w-full object-contain drop-shadow-[0_14px_34px_rgba(255,49,49,0.28)]"
      />
    </div>
  );
}
