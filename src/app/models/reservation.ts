export interface Reservation {
    // The lowercase string is the primitive type, while the uppercase String refers to the boxed object type, which is generally not recommended for type annotations
    id: string,
    checkInDate: Date,
    checkOutDate: Date,
    guestName: string,
    guestEmail: string,
    roomNumber: number,
}
