import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrl: './vendor-change.component.css'
})
export class VendorChangeComponent {
  isReadonly = false;
  vendor: Vendor = new Vendor(); //creating an empty instance

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.vendorsvc.change(this.vendor).subscribe({
      next: (res) => {
        console.log("Vendor changed successfully!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  // cancel(): void {
  //   this.router.navigateByUrl("/user/list");
  // }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]; //getting the id value from the url and assigning to id
  this.vendorsvc.get(id).subscribe({
    next: (res) => {
      console.log(res);
      this.vendor = res as Vendor;
    },
    error: (err) => {
      console.error(err);
    }
  })
}
}
