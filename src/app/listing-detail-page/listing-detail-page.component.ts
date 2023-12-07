import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  }   from '@angular/router';
import { Listing }           from '../types';
import { fakeListings }      from '../fake-data'

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit { 

  listing: any; // actually Listing type

  
  constructor( 
    private route: ActivatedRoute // A "Provider" to help extract info from current URL
  ) { 
    /* 
  - We should use constructor() to setup Dependency Injection, 
    Initialization of class fields. 

  - Dependency Injector (DI) analyses the constructor parameters 
    and when it creates a new instance by calling new MyClass(), 
    it tries to find providers that match the types of the constructor parameters.
  */
  }

  ngOnInit(): void {
    /*
    - ngOnInit() is a better place to write “actual work code” 
      that we need to execute as soon as the class is instantiated.

    - Like loading data from Database — to show the user in your HTML template view. 
      Such code should be written in ngOnInit().  
  */
    
    // get the id from the item clicked from the current URL
    const id = this.route.snapshot.paramMap.get('id');

    // get the item corresponding to the id in the current URL
    this.listing = fakeListings.find( item => item.id === id);
     
  }
}
