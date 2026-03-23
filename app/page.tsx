import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] px-4">
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)'
        }}
      />

      <main className="relative z-10 flex flex-col items-center gap-8 text-center">
        {/* Logo/Name */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] shadow-2xl transition-transform hover:scale-105 duration-500 p-4">
             <Image
               src="/Logo.png"
               alt="Grippy Logo"
               fill
               className="object-contain p-4"
               priority
             />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mt-4">
            Grippy
          </h1>
        </div>

        {/* Status Message */}
        <div className="flex flex-col gap-4 max-w-md">
          <p className="text-xl sm:text-2xl font-medium text-[var(--nav-color)]">
            Site is under development
          </p>
          <p className="text-sm sm:text-base text-[#888] leading-relaxed">
            We are working hard to make Grippy better. 
            Something amazing is coming soon.
          </p>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-pulse" />
           <span className="text-xs uppercase tracking-widest text-[#555] font-semibold">
             Stay Tuned
           </span>
        </div>
      </main>

      {/* Footer-like text */}
      <footer className="absolute bottom-8 text-[var(--nav-color)] text-sm opacity-50">
        &copy; {new Date().getFullYear()} Grippy. All rights reserved.
      </footer>
    </div>
  );
}
