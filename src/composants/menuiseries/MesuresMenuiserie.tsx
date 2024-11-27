import React from 'react';
import { Ruler } from 'lucide-react';
import type { Mesures } from '../../types';

type MesuresMenuiserieProps = {
  mesures: Mesures;
  onChange: (mesures: Mesures) => void;
};

export function MesuresMenuiserie({ mesures, onChange }: MesuresMenuiserieProps) {
  const handleChange = (field: keyof Mesures) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    onChange({
      ...mesures,
      [field]: isNaN(value) ? 0 : value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Largeurs</h3>
          <div className="space-y-2">
            <div>
              <label htmlFor="largeurBas" className="block text-sm font-medium text-gray-700">
                Largeur Bas (mm)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Ruler className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="largeurBas"
                  value={mesures.largeurBas || ''}
                  onChange={handleChange('largeurBas')}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="largeurHaut" className="block text-sm font-medium text-gray-700">
                Largeur Haut (mm)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Ruler className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="largeurHaut"
                  value={mesures.largeurHaut || ''}
                  onChange={handleChange('largeurHaut')}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Hauteurs</h3>
          <div className="space-y-2">
            <div>
              <label htmlFor="hauteurGauche" className="block text-sm font-medium text-gray-700">
                Hauteur Gauche (mm)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Ruler className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="hauteurGauche"
                  value={mesures.hauteurGauche || ''}
                  onChange={handleChange('hauteurGauche')}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="hauteurDroite" className="block text-sm font-medium text-gray-700">
                Hauteur Droite (mm)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Ruler className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="hauteurDroite"
                  value={mesures.hauteurDroite || ''}
                  onChange={handleChange('hauteurDroite')}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Diagonales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="diagonaleUn" className="block text-sm font-medium text-gray-700">
              Diagonale 1 (mm)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Ruler className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="diagonaleUn"
                value={mesures.diagonaleUn || ''}
                onChange={handleChange('diagonaleUn')}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="diagonaleDeux" className="block text-sm font-medium text-gray-700">
              Diagonale 2 (mm)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Ruler className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="diagonaleDeux"
                value={mesures.diagonaleDeux || ''}
                onChange={handleChange('diagonaleDeux')}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}