import { Component, inject, input, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DeelnemersService } from "../deelnemers.service";

@Component({
  selector: "app-deelnemer-toevoegen",
  imports: [FormsModule],
  templateUrl: "./deelnemer-toevoegen.component.html",
  styleUrl: "./deelnemer-toevoegen.component.css",
})
export class DeelnemerToevoegenComponent {
  close = output<void>();

  naam = "";
  geboortedatum = "";
  rating = "";

  private deelnemersService = inject(DeelnemersService);

  deelnemerToevoegen() {
    console.log("Deelnemer toevoegen");

    this.deelnemersService.deelnemerToevoegen({
      naam: this.naam,
      geboortedatum: new Date(this.geboortedatum),
      rating: parseInt(this.rating),
    });

    this.close.emit();
  }
}
