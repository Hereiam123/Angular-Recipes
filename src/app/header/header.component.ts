import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html"
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(response => {
      console.log(response);
    });
  }

  onGetData() {
    this.dataStorageService.getRecipes();
  }
}
