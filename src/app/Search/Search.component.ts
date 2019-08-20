import { Restaurant_serviceService } from './../services/restaurant_service.service';
import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-Search",
  templateUrl: "./Search.component.html",
  styleUrls: ["./Search.component.css"]
})
export class SearchComponent implements OnInit {
  // lat:any;
  // long:any;
  cityName: any;
  cityDetails: any;
  cityId: any;

  constructor(private service: Restaurant_serviceService) {}

  restaurantDetails: any;
  restaurants: any;
  restaurantArray = [];

  ngOnInit() {}

  clickSearch() {
    this.service.getCity(this.cityName).subscribe(
      next => {
        this.cityDetails = next;
        this.cityId = this.cityDetails.location_suggestions[0].id;
        this.service.getRestaurant(this.cityId).subscribe(
          next1 => {
            console.log(next);
            this.restaurantDetails = next1;

            this.restaurants = this.restaurantDetails.restaurants;
          },
          (error: Response) => {}
        );
      },
      (error: Response) => {
        if (error.status === 400) {
          alert("Restaurant not Found.");
          console.log(error);
        } else alert("Unexpected error found");
      }
    );
  }

  genaratePdfDetails(){
    this.service.genaratePdf();
  }


}
