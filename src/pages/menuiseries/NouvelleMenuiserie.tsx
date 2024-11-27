import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../lib/db';
import { TypeMenuiserie } from '../../composants/menuiseries/TypeMenuiserie';
import { MesuresMenuiserie } from '../../composants/menuiseries/MesuresMenuiserie';
import { SelecteurCouleur } from '../../composants/menuiseries/SelecteurCouleur';
import { Bouton } from '../../composants/commun/Bouton';
import type { Menuiserie, TypeMenuiserie as TypeMenuiserieEnum, Mesures } from '../../types';
import type { CouleurRAL } from '../../lib/constants/colors';

export function NouvelleMenuiserie() {
  const navigate = useNavigate();
  const [type, setType] = React.useState<TypeMenuiserieEnum>('fenetre');
  const [mesures, setMesures] = React.useState<Mesures>({
    largeurBas: 0,
    largeurHaut: 0,
    hauteurGauche: 0,
    hauteurDroite: 0,
    diagonaleUn: 0,
    diagonaleDeux: 0
  });
  const [couleurRAL, setCouleurRAL] = React.useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const nouvelleMenuiserie: Menuiserie = {
      clientId: 1, // À remplacer par l'ID du client sélectionné
      type,
      mesures,
      couleur: couleurRAL,
      options: [],
      photos: [],
      notesAudio: [],
      dateCreation: new Date(),
      dateMiseAJour: new Date(),
      statutSync: 'enAttente'
    };

    try {
      await db.menuiseries.add(nouvelleMenuiserie);
      navigate('/menuiseries');
    } catch (error) {
      console.error('Erreur lors de la création de la menuiserie:', error);
      alert('Une erreur est survenue lors de la création de la menuiserie');
    }
  };

  const handleCouleurChange = (couleur: CouleurRAL) => {
    setCouleurRAL(couleur.code);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Nouvelle Menuiserie</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Type de menuiserie</h2>
          <TypeMenuiserie selected={type} onChange={setType} />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Mesures</h2>
          <MesuresMenuiserie mesures={mesures} onChange={setMesures} />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Couleur RAL</h2>
          <SelecteurCouleur
            couleurSelectionnee={couleurRAL}
            onChange={handleCouleurChange}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <Bouton
            type="button"
            variant="outline"
            onClick={() => navigate('/menuiseries')}
          >
            Annuler
          </Bouton>
          <Bouton type="submit" variant="primary">
            Enregistrer
          </Bouton>
        </div>
      </form>
    </div>
  );
}