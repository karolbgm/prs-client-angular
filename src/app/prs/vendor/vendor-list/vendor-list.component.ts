import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent {
vendors: Vendor[] = [];

constructor(
  private vendorsvc: VendorService
){}

ngOnInit(): void {
  this.vendorsvc.list().subscribe({
    next: (res) => {
      console.log(res);
      this.vendors = res as Vendor[]
    },
    error: (err) => {
      console.error(err);
    }
  })
}
}
