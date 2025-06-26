import  { useState, useEffect, useRef } from 'react';
import { Heart, Droplets, BookOpen, Bus, HeartHandshake, Play, Users,  Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const donationTiers = [
  {
    amount: '$5',
    title: 'Protect a Family',
    description: 'Support safe water and soap for basic hygiene needs',
    icon: Droplets,
    gradient: 'from-cyan-500 to-blue-500',
    impact: 'Helps 1 family stay healthy for a month'
  },
  {
    amount: '$10',
    title: 'Educate a Classroom',
    description: 'Print illustrated health education posters',
    icon: BookOpen,
    gradient: 'from-purple-500 to-pink-500',
    impact: 'Reaches 30+ students with vital health knowledge'
  },
  {
    amount: '$25',
    title: 'Send a Mobile Clinic Out',
    description: 'Sponsor a full day of community health outreach',
    icon: Bus,
    gradient: 'from-pink-500 to-purple-500',
    impact: 'Serves an entire village for one day'
  },
  {
    amount: '$50+',
    title: 'Save a Life',
    description: 'Fund a complete first aid kit for emergency care',
    icon: HeartHandshake,
    gradient: 'from-purple-500 to-cyan-500',
    impact: 'Provides life-saving emergency supplies'
  }
];

const testimonials = [
  {
    quote: "Nurse Raych's program helped me understand my pregnancy better. My baby was born healthy because of the knowledge I gained.",
    author: "Grace Wanjiku",
    role: "Mother of Two",
    avatar: "👩🏾"
  },
  {
    quote: "At 70 years old, I thought I knew everything about health. Nurse Raych taught me things that could have saved my husband.",
    author: "Mama Sarah",
    role: "Village Elder",
    avatar: "👵🏿"
  },
  {
    quote: "Every donation, no matter how small, creates ripples of change. Together, we're building healthier communities.",
    author: "Nurse Raych",
    role: "Founder & Community Health Advocate",
    avatar: "👩🏽‍⚕️"
  }
];

export function DonatePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState('$25');
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} id="donate-section" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Hero Message from Nurse Raych */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl p-12 border border-white/20 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    A Message from Nurse Raych
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Photo Placeholder */}
                  <div className="order-2 lg:order-1">
                    <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20">
                      <div className="w-full h-80 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-center">
                        <div>
                          <Heart className="w-16 h-16 mx-auto mb-4" />
                          <p className="text-lg font-semibold">Nurse Raych with Community Family</p>
                          <p className="text-sm opacity-80 mt-2">Warm photo showing care and connection</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Message */}
                  <div className="order-1 lg:order-2">
                    <Quote className="w-12 h-12 text-purple-400 mb-6" />
                    <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-light italic">
                      "I've walked through villages where a mother's love couldn't cure her child's fever, where knowledge could have prevented tragedy. Your support doesn't just fund programs—it saves lives, one family at a time."
                    </blockquote>
                    <cite className="text-cyan-300 text-xl font-semibold">— Nurse Raych</cite>
                    <p className="text-white/80 mt-4">Community Health Advocate & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Tiers */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Impact
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Every contribution creates meaningful change in underserved communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {donationTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div
                  key={index}
                  className={`backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 cursor-pointer group ${
                    selectedAmount === tier.amount ? 'ring-2 ring-purple-400 bg-white/20' : ''
                  }`}
                  onClick={() => setSelectedAmount(tier.amount)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">{tier.amount}</h3>
                    <h4 className="text-xl font-semibold text-cyan-300 mb-4">{tier.title}</h4>
                    <p className="text-white/80 mb-6 leading-relaxed">{tier.description}</p>
                    
                    <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl p-4 border border-white/20 mb-6">
                      <p className="text-white/90 text-sm font-medium">{tier.impact}</p>
                    </div>
                    
                    <button className={`w-full bg-gradient-to-r ${tier.gradient} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Donate {tier.amount}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* See the Difference Section */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See the Difference You're Making
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video Message */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
              <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold">Watch My Video</h3>
                  <p className="text-white/80">Thank You From Nurse Raych</p>
                </div>
              </div>
              <p className="text-white/90 text-center">
                "See firsthand how your donations are transforming lives in our communities."
              </p>
            </div>

            {/* Testimonial Carousel */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 relative">
              <div className="flex items-center justify-between absolute top-4 left-4 right-4 z-10">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="text-center pt-8">
                <div className="text-4xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <blockquote className="text-lg text-white/90 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <cite className="text-cyan-300 font-semibold">
                  — {testimonials[currentTestimonial].author}
                </cite>
                <p className="text-white/70 text-sm mt-1">{testimonials[currentTestimonial].role}</p>
              </div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Campaign */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl p-8 border border-white/20 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Featured Campaign
                </div>
              </div>
              
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Mental Health Awareness Week for Youth
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                  This month, we're focusing on breaking the stigma around mental health in rural communities. 
                  Your support helps us reach young people with vital mental wellness resources and counseling.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-cyan-300">500+</div>
                    <div className="text-white/80">Youth Reached</div>
                  </div>
                  <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-purple-300">15</div>
                    <div className="text-white/80">Schools Visited</div>
                  </div>
                  <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-pink-300">$2,500</div>
                    <div className="text-white/80">Goal Remaining</div>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Support Youth Mental Health
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Join the Circle of Impact */}
        <div className={`mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
              <Users className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join the Circle of Impact
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join <span className="text-cyan-300 font-bold">58 monthly supporters</span> empowering underserved communities.
              </p>
              
              {/* Progress Visualization */}
              <div className="mb-8">
                <div className="flex justify-center space-x-2 mb-4">
                  {[...Array(10)].map((_, i) => (
                    <Heart 
                      key={i} 
                      className={`w-6 h-6 ${i < 6 ? 'text-pink-400 fill-current' : 'text-white/30'}`} 
                    />
                  ))}
                </div>
                <div className="backdrop-blur-md bg-white/10 rounded-full h-4 border border-white/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full transition-all duration-1000" style={{ width: '60%' }}></div>
                </div>
                <p className="text-white/70 mt-2">60% towards our goal of 100 monthly supporters</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Become a Monthly Supporter
                </button>
                <button className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/15 transition-all duration-300">
                  Make a One-Time Gift
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl p-8 border border-white/20 text-center">
            <Quote className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-light italic">
              "You don't need millions to make a difference. Just compassion and action."
            </blockquote>
            <div className="text-right max-w-md ml-auto">
              <cite className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                — Nurse Raych
              </cite>
            </div>
            
            <div className="mt-12">
              <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}