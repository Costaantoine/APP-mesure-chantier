export interface Client {
  id?: number;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  adressePrincipale: string;
  adresseChantier: string;
}

export type TypeMenuiserie = 'porte' | 'fenetre' | 'coulissant' | 'fixe';

export interface Mesures {
  largeurBas: number;
  largeurHaut: number;
  hauteurGauche: number;
  hauteurDroite: number;
  diagonaleUn: number;
  diagonaleDeux: number;
}

export interface Menuiserie {
  id?: number;
  clientId: number;
  type: TypeMenuiserie;
  mesures: Mesures;
  couleur: string;
  options: string[];
  photos: string[];
  notesAudio: string[];
  dateCreation: Date;
  dateMiseAJour: Date;
  statutSync: 'enAttente' | 'synchronise' | 'echec';
}

export type Role = 'commercial' | 'bureau' | 'client' | 'admin';

export interface Utilisateur {
  id?: number;
  email: string;
  nom: string;
  prenom: string;
  role: Role;
}