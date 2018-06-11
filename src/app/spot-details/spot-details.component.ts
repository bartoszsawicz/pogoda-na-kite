import { Component, OnInit } from '@angular/core';
import { SpotService } from '../spot.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { getPreviousOrParentNode } from '@angular/core/src/render3/instructions';
import { SpotDetails } from '../model/SpotDetails';

@Component({
  selector: 'app-spot-details',
  templateUrl: './spot-details.component.html',
  styleUrls: ['./spot-details.component.css']
})
export class SpotDetailsComponent implements OnInit {

  spotDetails: SpotDetails;

  constructor(private spotService: SpotService,
    private route: ActivatedRoute,
    private location: Location,
  ) { 
    route.params.subscribe((routeParams) => {
      this.getSpotSubscribe();
    })
  }

  ngOnInit() {
  }

  getSpotSubscribe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.spotService.getSpotDetails(id).subscribe(spot => this.spotDetails = spot);
  }

}
