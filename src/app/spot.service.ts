import { Injectable } from '@angular/core';
import { Observable, from, of,range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { SpotDetails } from './model/SpotDetails';


@Injectable({
  providedIn: 'root'
})
export class SpotService {
  constructor() { }

  getSpotDetails(id: string): Observable<SpotDetails> {
    return this.getSpots().pipe(
      map(spots => spots.find(spot => spot.id == id)),
      map(spot => {
        let spotDetails = new SpotDetails();
        spotDetails.spot = spot;
        spotDetails.longitude = 55;
        spotDetails.latitude = 33;
        return spotDetails;
      })
    );
  }

  getSpots(): Observable<Spot[]> {
    let observables: Spot[] = [
      {id: "1", name: "Rewa"}, 
      {id: "2", name: "Osłonino"}, 
      {id: "3", name: "Rzucewo"}];
    return of(observables);
  }
}
