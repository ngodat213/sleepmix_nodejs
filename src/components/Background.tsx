'use client';

export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F0A1F] relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] rounded-full bg-[#6C5DD3] opacity-[0.15] blur-[80px]" />
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#8677E5] opacity-[0.1] blur-[60px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#6C5DD3] opacity-[0.1] blur-[80px]" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 