import { Component } from '@angular/core';
import { Member } from '../../../../../common/tables/tableTypes';

@Component({
  selector: 'app-display-members',
  templateUrl: './display-members.component.html',
  styleUrls: ['./display-members.component.css']
})
export class DisplayMembersComponent {
  members: Member[] = [{
    noMembre: 1,
    lieuOrigine: 'Havane',
    adresseElectronique: 'legpt@gmail.com',
    motDePasse: 'legit',
    permisEstValide: true,
    adressePostale: 'H4I3RT',
    age: 21,
  }];
}
