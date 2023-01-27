import {
  Component,
} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  apiLoaded$: Observable<boolean>
  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiLoaded$ = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=AIzaSyDmaB4Y91NdEVYTHWSE6-nJ6bJqJOPJlHk&callback=initMap`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
}
