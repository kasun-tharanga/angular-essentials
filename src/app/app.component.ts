import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Kasun Code";
  users = ["Stave", "John", "Stephanie", "Kamal"];

  onAddUser() {
    console.log("function called");
    //users.push("uuu");
  }
}
