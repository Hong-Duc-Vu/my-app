import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email: string = '';
  message: string = '';
  listing: Listing | undefined = { id: '', name: '', description: '', price: Number.NaN };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find( item => item.id === id);
    this.message = `I'm interested in buying your ${this.listing?.name.toLowerCase()}`;
  }

  sendMessage(): void {
    alert('Your message has been sent !');
    this.router.navigateByUrl('/listings');
  }

}
