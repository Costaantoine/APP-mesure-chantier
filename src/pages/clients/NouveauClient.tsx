import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../lib/db';
import { FormulaireClient } from '../../composants/clients/FormulaireClient';
import type { Client } from '../../types';

export function NouveauClient() {
  const navigate = useNavigate();

  const handleSubmit = async (client: Client) => {
    try {
      await db.clients.add(client);
      navigate('/clients');
    } catch (error) {
      console.error('Erreur lors de la création du client:', error);
      alert('Une erreur est survenue lors de la création du client');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Nouveau Client</h1>
      <FormulaireClient onSubmit={handleSubmit} />
    </div>
  );
}