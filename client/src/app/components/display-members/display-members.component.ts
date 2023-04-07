import { Component } from '@angular/core';
import { Member } from '../../../../../common/tables/tableTypes';
import { MOCK_MEMBERS } from '../../../../../common/constants';

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

  constructor() {
    this.members = MOCK_MEMBERS;
  }
}
