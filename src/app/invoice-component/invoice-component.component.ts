import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../models/Invoice';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent { 
 
  id!: number;
  active!: boolean;

  constructor(private route: ActivatedRoute,private router: Router) { }
  
  ngOnInit() {this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.active = params['active'] === 'true';
  });
   
    };
    goBack(): void {
      this.router.navigate(['/main-invoice']);
    }
  }


