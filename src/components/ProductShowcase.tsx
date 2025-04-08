
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "AccessControl Pro",
    category: "Beléptető rendszer",
    description: "Teljes körű beléptető rendszer vállalati környezethez, többféle azonosítási móddal és központi kezelőfelülettel.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "TimeTrack Plus",
    category: "Munkaidő-nyilvántartás",
    description: "Integrált munkaidő-nyilvántartó modul, szabadságkezelés és jelenléti ívek automatikus generálása.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "VisitorCheck",
    category: "Vendégkezelés",
    description: "Vendégregisztrációs rendszer előzetes regisztrációval, QR-kódos beléptetéssel és automatikus értesítésekkel.",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Prémium termékeink</h2>
          <p className="text-lg text-gray-600">
            Ismerje meg piacvezető beléptető rendszer megoldásainkat, melyek több ezer ügyfelünk biztonságát garantálják.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-secondary">{product.category}</span>
                <h3 className="mt-1 text-xl font-semibold">{product.name}</h3>
                <p className="mt-3 text-gray-600">{product.description}</p>
                <div className="mt-4">
                  <Link to={`/products/${product.id}`} className="inline-flex items-center text-primary font-medium">
                    Részletek
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" className="mt-6">
              Összes termék megtekintése
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
