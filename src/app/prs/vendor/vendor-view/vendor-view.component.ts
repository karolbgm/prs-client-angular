import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrl: './vendor-view.component.css'
})
export class VendorViewComponent {

  isReadonly = true;
  vendor: Vendor = new Vendor();
  verifyRemove: boolean = false;

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  toggleVerifyRemove(): void {
    this.verifyRemove = !this.verifyRemove;
   }
  
   remove(): void {
   this.vendorsvc.remove(this.vendor.id).subscribe({
      next: (res) => {
        console.log("Vendor deleted successfully");
        this.router.navigateByUrl("/vendor/list"); //redirect
        },
      error: (err) => {
        console.error(err);
      }  
    })
   }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vendorsvc.get(id).subscribe({
      next: (res) => {
      this.vendor = res as Vendor;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
