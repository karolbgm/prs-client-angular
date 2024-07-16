import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrl: './vendor-create.component.css'
})
export class VendorCreateComponent {
  isReadonly = false;
  vendor: Vendor = new Vendor();

  constructor(
    private vendorsvc: VendorService,
    private router: Router
  ) {}

  save(): void {
    this.vendorsvc.create(this.vendor).subscribe({
      next: (res) => {
        console.log("Vendor created successfully!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }
}
