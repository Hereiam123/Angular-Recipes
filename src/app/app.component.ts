import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: string = "angular-recipe";
  loadedFeature: string = "recipe";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCDx0hPQM3ABu_Pdr6Atc5mESQnD6ibKi8",
      authDomain: "angular-recipe-9640e.firebaseapp.com"
    });
  }

  //Which navigation feature is requested will
  //determine the overall view displayed in the app component
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
