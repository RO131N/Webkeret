import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  DocumentReference
} from '@angular/fire/firestore';
import { Car } from '../interfaces/car';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarService {
  private collectionName = 'cars';

  constructor(private firestore: Firestore) {}

  // CREATE
  addCar(car: Car): Promise<DocumentReference> {
    const carRef = collection(this.firestore, this.collectionName);
    return addDoc(carRef, car);
  }

  // READ ALL
  getCars(): Observable<Car[]> {
    const carRef = collection(this.firestore, this.collectionName);
    return collectionData(carRef, { idField: 'id' }) as Observable<Car[]>;
  }

  // READ FILTERED (Firestore lekérdezés!)
  getFilteredCars(brand: string): Observable<Car[]> {
    const carsRef = collection(this.firestore, this.collectionName);
    const q = query(
      carsRef,
      where('brand', '==', brand),
      orderBy('year', 'desc'),
      limit(10)
    );
    return collectionData(q, { idField: 'id' }) as Observable<Car[]>;
  }

  // UPDATE
  updateCar(car: Car): Promise<void> {
    const carDoc = doc(this.firestore, `${this.collectionName}/${car.id}`);
    return updateDoc(carDoc, { ...car });
  }

  // DELETE
  deleteCar(id: string): Promise<void> {
    const carDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    return deleteDoc(carDoc);
  }
}
