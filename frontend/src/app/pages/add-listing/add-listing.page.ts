import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.page.html',
  styleUrls: ['./add-listing.page.scss'],
  standalone:false
})
export class AddListingPage {

  listing = {
    itemName: '',
    description: '',
    category: '',
    quantity: null,
  };

  private apiUrl = 'https://aietvs2uw8.execute-api.us-east-1.amazonaws.com/v1/AddListing';

  constructor(private http: HttpClient) { }

  onSubmit() {
    console.log('Submitting:', this.listing);

    this.http.post(this.apiUrl, this.listing).subscribe({
      next: (res) => {
        console.log('Success:', res);
        alert('Listing added successfully!');
        this.listing = { itemName: '', description: '', category: '', quantity: null };
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Failed to add listing. Check console.');
      }
    });
  }
}
