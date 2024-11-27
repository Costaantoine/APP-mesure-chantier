import Dexie, { type Table } from 'dexie';

export interface Customer {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mainAddress: string;
  siteAddress: string;
}

export interface Project {
  id?: number;
  customerId: number;
  type: string;
  measurements: {
    widthBottom: number;
    widthTop: number;
    heightLeft: number;
    heightRight: number;
    diagonalOne: number;
    diagonalTwo: number;
  };
  color: string;
  options: string[];
  photos: string[];
  audioNotes: string[];
  createdAt: Date;
  updatedAt: Date;
  syncStatus: 'pending' | 'synced' | 'failed';
}

class MenuiserieDB extends Dexie {
  customers!: Table<Customer>;
  projects!: Table<Project>;

  constructor() {
    super('menuiserieDB');
    this.version(1).stores({
      customers: '++id, email',
      projects: '++id, customerId, syncStatus',
    });
  }
}

export const db = new MenuiserieDB();