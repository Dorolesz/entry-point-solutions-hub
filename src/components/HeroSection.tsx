
import { ArrowRight, Shield, Lock, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading">
              Intelligens beléptető rendszer a modern vállalkozásoknak
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Az CheckPoint beléptető rendszerével biztosítsa épületei, irodái és létesítményei biztonságos hozzáférés-kezelését. Professzionális védelem, egyszerű használat.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/demo">
                <Button size="lg" className="group">
                  Ingyenes bemutató kérése
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/download">
                <Button variant="secondary" size="lg">
                  Alkalmazás letöltése
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1614064548237-096d9c101a39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                  alt="Beléptető rendszer" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Floating cards */}
              <div className="glass-card absolute -top-6 -right-6 p-4 rounded-lg shadow-lg w-48">
                <div className="flex items-center">
                  <div className="rounded-full bg-green-500 p-2">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Biztonságos</p>
                    <p className="text-xs text-gray-600">99.9% védelmi ráta</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card absolute -bottom-6 -left-6 p-4 rounded-lg shadow-lg w-48">
                <div className="flex items-center">
                  <div className="rounded-full bg-blue-500 p-2">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">24/7 működés</p>
                    <p className="text-xs text-gray-600">Folyamatos elérés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-fadeIn stagger-item">
              <p className="text-3xl font-bold text-primary">1500+</p>
              <p className="text-gray-600">Telepített rendszer</p>
            </div>
            <div className="animate-fadeIn stagger-item">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-gray-600">Ügyfél elégedettség</p>
            </div>
            <div className="animate-fadeIn stagger-item">
              <p className="text-3xl font-bold text-primary">15 év</p>
              <p className="text-gray-600">Szakmai tapasztalat</p>
            </div>
            <div className="animate-fadeIn stagger-item">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-gray-600">Technikai támogatás</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
