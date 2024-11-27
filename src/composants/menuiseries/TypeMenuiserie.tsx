import React from 'react';
import { Door, Windows, ArrowLeftRight, Square } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { TypeMenuiserie as TypeMenuiserieEnum } from '../../types';

type TypeMenuiserieProps = {
  selected: TypeMenuiserieEnum;
  onChange: (type: TypeMenuiserieEnum) => void;
};

const types = [
  { id: 'porte' as const, icon: Door, label: 'Porte' },
  { id: 'fenetre' as const, icon: Windows, label: 'Fenêtre' },
  { id: 'coulissant' as const, icon: ArrowLeftRight, label: 'Coulissant' },
  { id: 'fixe' as const, icon: Square, label: 'Fixe' },
];

export function TypeMenuiserie({ selected, onChange }: TypeMenuiserieProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {types.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={cn(
            'p-4 rounded-lg border-2 flex flex-col items-center space-y-2 transition-colors',
            selected === id
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900'
          )}
        >
          <Icon className="h-8 w-8" />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
}