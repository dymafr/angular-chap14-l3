import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public nom = "Jean";
  public date1 = new Date();
  public date2 = Date.now();

  constructor() {}

  ngOnInit(): void {}
}
