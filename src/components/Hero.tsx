import  { useState, useEffect } from 'react';
import {  Heart, Users, Award, ChevronDown } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Hero Image Placeholder */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white border-4 border-white/20">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 shadow-2xl">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <p className="text-sm opacity-80">Nurse Raych speaking at community workshop</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Quote */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto hover:bg-white/15 transition-all duration-300">
            <blockquote className="text-2xl md:text-4xl font-bold text-white leading-relaxed mb-6">
              "Every underserved voice deserves the right to understand and access healthcare."
            </blockquote>
            <cite className="text-xl text-cyan-300 font-semibold">— Nurse Raych</cite>
          </div>
        </div>

        {/* Description */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Meet the visionary behind our mission. A nurse, educator, and relentless advocate for equitable care.
          </p>
        </div>

        {/* Stats Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">5,000+</div>
            <div className="text-white/80">Lives Touched</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">20+</div>
            <div className="text-white/80">Communities Served</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">9+</div>
            <div className="text-white/80">Years of Impact</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={scrollToNext}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-purple-600 hover:to-cyan-600"
          >
            Learn More About Nurse Raych
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={scrollToNext}
            className="text-white/60 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}