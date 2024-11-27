import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../lib/db';
import { Bouton } from '../../composants/commun/Bouton';
import { ListeClients } from '../../composants/clients/ListeClients';

export function GestionClients() {
  const navigate = useNavigate();
  const clients = useLiveQuery(() => db.clients.toArray());

  const handleSupprimer = async (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      await db.clients.delete(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des Clients</h1>
        <Bouton
          variant="primary"
          onClick={() => navigate('/clients/nouveau')}
        >
          <Plus className="h-5 w-5 mr-2" />
          Nouveau Client
        </Bouton>
      </div>

      {clients?.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun client enregistré</p>
        </div>
      ) : (
        <ListeClients
          clients={clients || []}
          onSupprimer={handleSupprimer}
        />
      )}
    </div>
  );
}