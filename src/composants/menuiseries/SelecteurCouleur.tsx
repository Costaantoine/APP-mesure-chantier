import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { couleursRAL, type CouleurRAL } from '../../lib/constants/colors';

type SelecteurCouleurProps = {
  couleurSelectionnee: string;
  onChange: (couleur: CouleurRAL) => void;
};

export function SelecteurCouleur({ couleurSelectionnee, onChange }: SelecteurCouleurProps) {
  const [recherche, setRecherche] = React.useState('');
  const [menuOuvert, setMenuOuvert] = React.useState(false);

  const couleurActuelle = couleursRAL.find(c => c.code === couleurSelectionnee);
  
  const couleursFiltered = couleursRAL.filter(couleur => 
    couleur.nom.toLowerCase().includes(recherche.toLowerCase()) ||
    couleur.code.includes(recherche)
  );

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setMenuOuvert(!menuOuvert)}
        className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
      >
        <div className="flex items-center space-x-3">
          {couleurActuelle && (
            <div
              className="w-6 h-6 rounded border border-gray-300"
              style={{ backgroundColor: couleurActuelle.hex }}
            />
          )}
          <span className="text-sm text-gray-900">
            {couleurActuelle 
              ? `RAL ${couleurActuelle.code} - ${couleurActuelle.nom}`
              : 'Sélectionner une couleur'}
          </span>
        </div>
      </button>

      {menuOuvert && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
          <div className="p-2">
            <input
              type="text"
              placeholder="Rechercher une couleur..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div className="max-h-60 overflow-auto">
            {couleursFiltered.map((couleur) => (
              <button
                key={couleur.code}
                onClick={() => {
                  onChange(couleur);
                  setMenuOuvert(false);
                }}
                className={cn(
                  'w-full flex items-center px-4 py-2 hover:bg-gray-100',
                  couleurSelectionnee === couleur.code && 'bg-blue-50'
                )}
              >
                <div className="flex items-center space-x-3 flex-1">
                  <div
                    className="w-6 h-6 rounded border border-gray-300"
                    style={{ backgroundColor: couleur.hex }}
                  />
                  <span className="text-sm">
                    RAL {couleur.code} - {couleur.nom}
                  </span>
                </div>
                {couleurSelectionnee === couleur.code && (
                  <Check className="h-4 w-4 text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}