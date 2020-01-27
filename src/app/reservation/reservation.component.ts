import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  packages = [];

  constructor( private packageService: PackageService) { }

  async ngOnInit() {
    this.packageService.getPackages().subscribe((data: any[]) => {
      this.packages = data;
      console.log(this.packages);
    });
    
  }

  selectPackageType(id) {
    console.log(id);
  }

}
