import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
// use the OnInit lifecycle hook
export class ReservationListComponent implements OnInit{
  // create the reservation property
  reservations: Reservation[] = []

  // create a constructor to inject the ReservationService
  constructor(private reservationService: ReservationService){}

  ngOnInit(): void {
    // load the reservations from the service and put them in the Reservation property
    // subscribe to the observable returned by the getReservations method
      this.reservationService.getReservations().subscribe(reservations => {
        this.reservations = reservations
    });
  }

  deleteReservation(id: string){
    // call the deleteReservation method from the service
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Delete Request processed.")
    })
  }
}
