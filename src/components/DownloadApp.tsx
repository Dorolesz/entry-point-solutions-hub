
import { Download, ShieldCheck, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadApp = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">
              Töltse le mobilalkalmazásunkat a hatékonyabb hozzáférés érdekében
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Az AccessBizto mobilalkalmazás lehetővé teszi a gyors belépést, időnyilvántartást és rendszerkezelést - bárhol, bármikor. Egyszerűsítse vállalatának beléptető rendszer kezelését alkalmazásunkkal.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 rounded-full bg-blue-100 p-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Biztonságos mobilhozzáférés</h3>
                  <p className="text-gray-600">Titkosított kommunikáció és biometrikus azonosítás a telefonján.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 rounded-full bg-blue-100 p-2">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Kiterjesztett jogosultságok</h3>
                  <p className="text-gray-600">Távoli ajtónyitás és jogosultság-delegálás egy kattintással.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 rounded-full bg-blue-100 p-2">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Valós idejű jelentések</h3>
                  <p className="text-gray-600">Azonnali értesítések és riportok közvetlenül a telefonján.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 flex items-center">
                <Download className="mr-2 h-5 w-5" />
                iOS letöltés
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 px-6 flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Android letöltés
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="AccessBizto Mobile App" 
              className="rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    alt="User"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    alt="User"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    alt="User"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-sm font-semibold">4.9/5 értékelés</p>
                  <p className="text-xs text-gray-500">1200+ letöltés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
