import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-database-demo';
  countries: any[];
  constructor(private db: AngularFireDatabase) {
    this.db.list('/countries').valueChanges().subscribe(countries => {
        this.countries = countries;
        console.log(this.countries);
    });
  }
}
