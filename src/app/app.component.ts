import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "angular-recipe";
  loadedFeature: string = "recipe";

  //Which navigation feature is requested
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
