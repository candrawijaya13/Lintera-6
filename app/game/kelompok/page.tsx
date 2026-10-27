'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Users, Sparkles, Trophy, Flame, ArrowRight } from 'lucide-react';

export default function GameKelompokPlaceholderPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#FF78AE] font-sans select-none flex flex-col justify-between overflow-x-hidden p-4 sm:p-6 lg:p-8">
      {/* Decorative math background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-20 left-10 opacity-70">
          <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none">
            <rect x="15" y="4" width="10" height="32" rx="5" fill="#F34F91" />
            <rect x="4" y="15" width="32" height="10" rx="5" fill="#F34F91" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 opacity-70">
          <svg className="w-12 h-12" viewBox="0 0 36 36" fill="none">
            <rect x="14" y="2" width="8" height="32" rx="4" fill="#FFE66D" />
            <rect x="2" y="14" width="32" height="8" rx="4" fill="#FFE66D" />
          </svg>
        </div>
      </div>

      {/* Top Header */}
      <header className="relative z-20 w-full max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/game"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F34F91] hover:bg-[#E03A7F] text-white flex items-center justify-center border-[3.5px] border-white shadow-lg hover:scale-105 active:scale-95 transition-all"
          aria-label="Kembali ke Pemilihan Game"
          title="Kembali ke Pemilihan Game"
        >
          <ChevronLeft className="w-7 h-7 stroke-[3.5] -ml-0.5" />
        </Link>
        <span className="text-white font-black text-sm uppercase tracking-wider bg-white/20 px-4 py-1.5 rounded-full border border-white/40">
          Mode Permainan
        </span>
        <div className="w-12" />
      </header>

      {/* Main Card */}
      <main className="relative z-20 w-full max-w-xl mx-auto my-auto py-6">
        <div className="bg-white rounded-[36px] sm:rounded-[42px] p-6 sm:p-8 border-[6px] border-white shadow-2xl shadow-pink-950/25 text-center space-y-6">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto">
            <Image
              src="/assets/luna-game-group.png"
              alt="Luna dan teman-teman Kelompok"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#3489F5] text-xs font-black uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" />
              <span>Mode Kelompok</span>
            </div>
            <h1 className="text-2xl sm:text-3.5xl font-black text-[#123B8A]">
              Tantangan Tim Lingkaran
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-2 leading-relaxed max-w-md mx-auto">
              Halaman permainan kelompok sedang dalam tahap persiapan. Kamu dan teman-teman sekelas dapat bermain bersama menggunakan sistem kode ruangan dan pertarungan kuis matematika seru!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left space-y-2.5 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Sistem Ruang Tim (Room Code Lobby)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Flame className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Adu Cepat Tanggap Antar-Kelompok</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Papan Skor Kelas & Hadiah Kerjasama Tim</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <Link
              href="/game"
              className="w-full py-3.5 rounded-full bg-[#3489F5] hover:bg-[#2563EB] text-white font-black text-sm shadow-[0_5px_0_#1E40AF] hover:shadow-[0_6px_0_#1E40AF] active:translate-y-0.5 active:shadow-[0_2px_0_#1E40AF] transition-all flex items-center justify-center gap-2"
            >
              <span>Kembali ke Pemilihan Game</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 text-center text-white/80 text-xs font-bold py-2">
        LINTERA • Lingkaran Interaktif untuk Matematika
      </footer>
    </div>
  );
}
