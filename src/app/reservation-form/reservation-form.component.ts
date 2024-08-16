import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  // The constructor is setting up the FormBuilder service so that it can be used to create and manage form controls within the component.
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });
    // retrieves a reservation ID from the route parameters
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id) {
      // retrieves the reservation from the service using the ID
      let reservation = this.reservationService.getRerservation(id);

      if(reservation){
        // The patchValue method in Angular's FormGroup is used to update the values of specific controls in the form group.
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  onSubmit(){
    if(this.reservationForm.valid){
      let reservation: Reservation = this.reservationForm.value;

      // retrieves a reservation ID from the route parameters
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if(id) {
        // Update
        this.reservationService.updateReservation(id, reservation);
      } else {
        //new
        this.reservationService.addReservation(reservation);
      }

      this.router.navigate(['/list']);
    }
  }
}
