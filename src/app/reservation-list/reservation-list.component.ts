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
    this.reservations = this.reservationService.getReservations();
  }
}
