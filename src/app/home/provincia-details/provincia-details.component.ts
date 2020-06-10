import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from './weather.service'

@Component({
  selector: 'app-provincia-details',
  templateUrl: './provincia-details.component.html',
  styleUrls: ['./provincia-details.component.scss'],
})
export class ProvinciaDetailsComponent implements OnInit {
  private provincia: any;
  private details;

  constructor(private router: Router, private weatherService: WeatherService) {
    this.provincia = this.router.getCurrentNavigation().extras.state.provincia;
  }

  ngOnInit() {
      this.weatherService.find(this.provincia.centroide.lat, this.provincia.centroide.lon).subscribe(res => {
        console.log(res);
        this.details = res.list;
      });
  }

}
