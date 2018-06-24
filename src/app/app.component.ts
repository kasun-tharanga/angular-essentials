import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Kasun Code";
  newUser: string;
  users = ["Stave", "John", "Stephanie", "Kamal"];

  onAddUser($scope) {
    console.log("function called ");
    this.users.push(this.newUser);
  }
}
