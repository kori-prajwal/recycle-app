import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-listings',
  templateUrl: './view-listings.page.html',
  styleUrls: ['./view-listings.page.scss'],
  standalone:false
})
export class ViewListingsPage implements OnInit {
  listings: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchListings();
  }

  fetchListings() {
    this.loading = true;
    this.http.get<any>('https://aietvs2uw8.execute-api.us-east-1.amazonaws.com/v1/GetListings')
      .subscribe(response => {
        this.listings = response.Items || [];
        this.loading = false;
      }, error => {
        console.error('Error fetching listings:', error);
        this.loading = false;
      });
  }
}
