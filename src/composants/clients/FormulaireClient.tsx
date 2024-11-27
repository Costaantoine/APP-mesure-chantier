import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bouton } from '../commun/Bouton';
import type { Client } from '../../types';

const schemaClient = z.object({
  prenom: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  telephone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone invalide'),
  adressePrincipale: z.string().min(5, 'L\'adresse doit contenir au moins 5 caractères'),
  adresseChantier: z.string().min(5, 'L\'adresse doit contenir au moins 5 caractères')
});

type FormulaireClientProps = {
  clientInitial?: Client;
  onSubmit: (client: Client) => void;
};

export function FormulaireClient({ clientInitial, onSubmit }: FormulaireClientProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<Client>({
    resolver: zodResolver(schemaClient),
    defaultValues: clientInitial || {
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      adressePrincipale: '',
      adresseChantier: ''
    }
  });

  const adressePrincipale = watch('adressePrincipale');

  React.useEffect(() => {
    if (!clientInitial) {
      setValue('adresseChantier', adressePrincipale);
    }
  }, [adressePrincipale, clientInitial, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            {...register('prenom')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.prenom && (
            <p className="mt-1 text-sm text-red-600">{errors.prenom.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            {...register('nom')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.nom && (
            <p className="mt-1 text-sm text-red-600">{errors.nom.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            {...register('telephone')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.telephone && (
            <p className="mt-1 text-sm text-red-600">{errors.telephone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="adressePrincipale" className="block text-sm font-medium text-gray-700">
          Adresse Principale
        </label>
        <textarea
          id="adressePrincipale"
          {...register('adressePrincipale')}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.adressePrincipale && (
          <p className="mt-1 text-sm text-red-600">{errors.adressePrincipale.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="adresseChantier" className="block text-sm font-medium text-gray-700">
          Adresse du Chantier
        </label>
        <textarea
          id="adresseChantier"
          {...register('adresseChantier')}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.adresseChantier && (
          <p className="mt-1 text-sm text-red-600">{errors.adresseChantier.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <Bouton type="submit" variant="primary">
          {clientInitial ? 'Mettre à jour' : 'Créer le client'}
        </Bouton>
      </div>
    </form>
  );
}