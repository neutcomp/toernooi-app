import { Component, inject } from "@angular/core";
import { DeelnemersService } from "./deelnemers.service";
import { DatePipe } from "@angular/common";
import { DeelnemerToevoegenComponent } from "./deelnemer-toevoegen/deelnemer-toevoegen.component";

@Component({
  selector: "app-deelnemers",
  imports: [DatePipe, DeelnemerToevoegenComponent],
  templateUrl: "./deelnemers.component.html",
  styleUrl: "./deelnemers.component.css",
})
export class DeelnemersComponent {
  deelnemerService = inject(DeelnemersService);
  toonDeelnemerToevoegen = false;

  getDeelnemers() {
    return this.deelnemerService.getDeelnemers();
  }

  calculateAge(birthdate: Date) {
    return this.deelnemerService.leeftijdBerekenen(birthdate);
  }

  deelnemerToevoegen() {
    this.toonDeelnemerToevoegen = true;
  }

  sluitDeelnemerToevoegen() {
    this.toonDeelnemerToevoegen = false;
  }

  wijzigDeelnemer(deelnemerId: number) {
    const deelnemer = this.deelnemerService.getDeelnemer(deelnemerId);
    console.log("Deelnemer wijzigen", deelnemer);
  }
}
