'use client';

import { useState, useEffect } from 'react';
import { getRandomQuote } from '../lib/quotes';

export default function Home() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setQuote(getRandomQuote());
  }, []);

  const refreshQuote = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/quote');
      const data = await response.json();
      setQuote(data.quote);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching new quote:', error);
      setQuote(getRandomQuote());
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(refreshQuote, 30000);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <a 
            href="https://github.com/wjyeoh1/myrepo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full text-white text-4xl font-bold font-serif shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Q
          </a>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 font-serif">
            Wisdom Quotes
          </h1>
          <p className="text-xl text-amber-700 opacity-80">
            Inspiration at every refresh
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-amber-200">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-amber-900 italic leading-relaxed font-light">
            {mounted ? (
              <>&ldquo;{quote}&rdquo;</>
            ) : (
              <>&ldquo;Loading wisdom...&rdquo;</>
            )}
          </blockquote>
        </div>

        <div className="flex justify-center">
          <button
            onClick={refreshQuote}
            disabled={isLoading || !mounted}
            className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
          >
            <span className={`text-2xl ${isLoading ? 'animate-spin' : ''}`}>
              ↻
            </span>
          </button>
        </div>

        <div className="text-sm text-amber-600 opacity-70">
          Quotes refresh automatically every 30 seconds
        </div>
      </div>
    </div>
  );
}
