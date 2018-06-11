import { Component, OnInit } from '@angular/core';
import { SpotService } from '../spot.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spot-list',
  templateUrl: './spot-list.component.html',
  styleUrls: ['./spot-list.component.css']
})
export class SpotListComponent implements OnInit {

  spots: Spot[];

  constructor(private spotService: SpotService, route:ActivatedRoute) {
      route.params.subscribe(routeParam => {
        
      });

   }

  ngOnInit() {
    this.getSpots();
  }

  getSpots(): void {
    this.spotService.getSpots().subscribe(spots => this.spots = spots);
  }



}
