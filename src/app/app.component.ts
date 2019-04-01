import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { environment } from "../environments/environment";

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
      apiKey: environment.firebase.apiKey,
      authDomain: environment.firebase.authDomain
    });
  }

  //Which navigation feature is requested will
  //determine the overall view displayed in the app component
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
