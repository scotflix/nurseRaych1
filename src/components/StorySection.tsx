import { useState, useEffect, useRef } from 'react';
import { Quote, Heart, MapPin } from 'lucide-react';

export function StorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="story-section" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Nurse Behind the Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Quote className="w-12 h-12 text-purple-400 mb-6" />
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                "Born in a modest town, Nurse Raych began her journey in underfunded clinics. Where resources were scarce, her compassion was abundant. From those humble beginnings, she dreamed of a platform to bring healthcare knowledge to those often left behind."
              </p>
            </div>

            {/* Personal Notes */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Personal Notes from Raych</h3>
              
              <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-6 border border-white/20">
                <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-white/90 italic">
                  "I remember my first day in a rural clinic. A mother walked 10 miles with her sick child, only to find we had no medicine. That day changed everything for me."
                </p>
              </div>

              <div className="backdrop-blur-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/20">
                <Heart className="w-8 h-8 text-pink-400 mb-4" />
                <p className="text-white/90 italic">
                  "Healthcare isn't just about treating illness—it's about empowering communities with knowledge and hope."
                </p>
              </div>

              <div className="backdrop-blur-md bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                <p className="text-white/90 italic">
                  "Every village I visit teaches me something new. My patients are my greatest teachers."
                </p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              {/* Photo 1 */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-center text-sm">
                  <div>
                    <Heart className="w-8 h-8 mx-auto mb-2" />
                    Raych in uniform during training
                  </div>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-40 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-center text-sm">
                  <div>
                    <Quote className="w-8 h-8 mx-auto mb-2" />
                    Talking to community mothers
                  </div>
                </div>
              </div>

              {/* Photo 3 */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 col-span-2">
                <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-center text-sm">
                  <div>
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    First sketch of the platform idea on whiteboard
                  </div>
                </div>
              </div>

              {/* Photo 4 */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 col-span-2">
                <div className="w-full h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-center text-sm">
                  <div>
                    <Heart className="w-8 h-8 mx-auto mb-2" />
                    Helping and supporting local elders
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}