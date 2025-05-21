import { Injectable } from "@angular/core";
import { Deelnemer } from "./deelnemer.module";

@Injectable({
  providedIn: "root",
})
export class DeelnemersService {
  private deelnemers: Deelnemer[] = [
    {
      id: 1,
      naam: "Bjorn",
      geboortedatum: new Date("1977-08-26T00:00:00"),
      rating: 1500,
    },
    {
      id: 2,
      naam: "Lea",
      geboortedatum: new Date("1981-07-02T00:00:00"),
      rating: 1400,
    },
  ];

  getDeelnemers() {
    this.deelnemers.sort((a, b) => b.rating - a.rating);

    return this.deelnemers;
  }

  getDeelnemer(id: number) {
    return this.deelnemers.filter((deelnemer) => id === deelnemer.id);
  }

  leeftijdBerekenen(birthdate: Date) {
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    return age;
  }

  deelnemerToevoegen(deelnemer: Deelnemer) {
    deelnemer.id = this.deelnemers.length + 1;
    console.log("Data:", deelnemer);

    this.deelnemers.push(deelnemer);
  }
}
