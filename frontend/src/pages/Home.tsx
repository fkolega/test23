import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles, Zap, Shield, Globe, Star, ChevronDown } from 'lucide-react'
import { HealthIndicator } from '@/components/HealthIndicator'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10 backdrop-blur-md bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Lumina</span>
            </div>
            <div className="flex items-center space-x-1">
              <HealthIndicator />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge variant="outline" className="border-purple-400/30 text-purple-300 bg-purple-400/10 mb-6">
              <Star className="w-3 h-3 mr-1" />
              <span className="underline decoration-purple-400 decoration-2 underline-offset-2">New Web App</span> Experience
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Build the
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Future
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              Experience the next generation of web applications. Built with modern technologies, 
              designed for performance, crafted for excellence.
            </p>
            
            <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
              Welcome to your <span className="underline decoration-purple-400 decoration-2 underline-offset-2 text-purple-300">new web app</span>! 
              Start building amazing experiences today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl shadow-purple-500/25 text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                Learn More
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-white/50 mx-auto" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Lumina?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Built with cutting-edge technologies and modern design principles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized for speed with modern build tools and efficient bundling',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: Shield,
                title: 'Enterprise Ready',
                description: 'Built with security and scalability in mind from day one',
                gradient: 'from-green-400 to-blue-500'
              },
              {
                icon: Globe,
                title: 'Global Scale',
                description: 'Deploy anywhere with confidence and reach users worldwide',
                gradient: 'from-purple-400 to-pink-500'
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className={`p-8 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <Card className="p-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-400/20 backdrop-blur-md">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              Join thousands of developers building the future with Lumina
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl shadow-purple-500/25 text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105">
              Start Building Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-md flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">Lumina</span>
            </div>
            <span className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Lumina. Crafted with passion.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}