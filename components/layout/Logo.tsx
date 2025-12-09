import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        {/* Logo with gradient */}
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">OB</span>
        </div>
        {/* Animated dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </div>
      <div className="hidden md:block">
        <div className="font-bold text-white">Oussama Ben Marzouk</div>
        <div className="text-xs text-gray-400">Growth-Focused Designer & Developer</div>
      </div>
    </div>
  );
}