import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Entete } from './composants/commun/Entete';
import { GestionClients } from './pages/clients/GestionClients';
import { NouveauClient } from './pages/clients/NouveauClient';
import { NouvelleMenuiserie } from './pages/menuiseries/NouvelleMenuiserie';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Entete />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<div>Tableau de bord</div>} />
            <Route path="/clients" element={<GestionClients />} />
            <Route path="/clients/nouveau" element={<NouveauClient />} />
            <Route path="/menuiseries" element={<div>Gestion des menuiseries</div>} />
            <Route path="/menuiseries/nouvelle" element={<NouvelleMenuiserie />} />
            <Route path="/devis" element={<div>Gestion des devis</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;