export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#111] px-5 py-10 text-center text-sm text-[#ccc]">
      <p className="mb-2 font-bold text-white">Higher Standard Coaching LLC</p>
      <p className="mb-1">Clearwater, FL</p>
      <p className="mb-1">
        <a href="tel:+14632690012" className="text-[#ccc] transition hover:text-white">
          +1 (463) 269-0012
        </a>
      </p>
      <p className="mb-4">
        <a href="mailto:ctfit1999@gmail.com" className="text-[#ccc] transition hover:text-white">
          ctfit1999@gmail.com
        </a>
      </p>
      <p className="flex justify-center gap-4">
        <a href="/privacy-policy" className="text-[#aaa] transition hover:text-white">
          Privacy Policy
        </a>
        <a href="/terms" className="text-[#aaa] transition hover:text-white">
          Terms of Service
        </a>
      </p>
      <p className="mt-4 text-xs text-[#666]">
        © {new Date().getFullYear()} Higher Standard Coaching LLC. All rights reserved.
      </p>
    </footer>
  );
}
