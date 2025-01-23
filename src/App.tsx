import React from 'react';
import { Plane, Construction, Calendar, Search, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Plane className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">devliegticketvergelijker.nl</h1>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Construction className="w-8 h-8 text-amber-500" />
              <h2 className="text-2xl font-semibold text-gray-700">Website in ontwikkeling</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              Binnenkort lanceren wij de slimste vliegticket vergelijker van Nederland.
              Hier vindt u straks de beste deals voor uw volgende reis!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <Search className="w-6 h-6 text-blue-500 mb-2 mx-auto" />
                <h3 className="font-medium">Vergelijk prijzen</h3>
                <p className="text-sm text-gray-500">Vind de beste deals van verschillende aanbieders</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-md">
                <Calendar className="w-6 h-6 text-blue-500 mb-2 mx-auto" />
                <h3 className="font-medium">Flexibele data</h3>
                <p className="text-sm text-gray-500">Bekijk prijzen voor verschillende reisdata</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-md">
                <Plane className="w-6 h-6 text-blue-500 mb-2 mx-auto" />
                <h3 className="font-medium">Alle airlines</h3>
                <p className="text-sm text-gray-500">Vergelijk prijzen van verschillende luchtvaartmaatschappijen</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>Contact: info@devliegticketvergelijker.nl</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} devliegticketvergelijker.nl - Alle rechten voorbehouden
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;