import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = "http://localhost:3001/";

  private reservations: Reservation[] = [];

  // inject the HttpClient service
  constructor(private http: HttpClient){}

  // CRUD

  // create an observable so any component can subscribe to it (because it's an async operation)
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }
  // search a reservation by id, if not found, return undefined
  getRerservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id);
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation", reservation);
  }
  
  // <void> is a type annotation that specifies the type of the value that the Observable will emit. In this case, it indicates that the Observable will emit no value.
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl+"reservation/" + id);
  }
  
  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
  }
}
