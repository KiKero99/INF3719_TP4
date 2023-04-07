import { Component, Input } from '@angular/core';
import { Member } from '../../../../../common/tables/tableTypes';

@Component({
  selector: 'app-member-input',
  templateUrl: './member-input.component.html',
  styleUrls: ['./member-input.component.css']
})
export class MemberInputComponent {
  //(1, 'Montreal' , 'winnattoitripa-9557@yopmail.com', 'mdp1', true, 'N6B3L5', 25),
  @Input() member: Member = {
    noMembre: 1,
    lieuOrigine: 'Havane',
    adresseElectronique: 'legpt@gmail.com',
    motDePasse: 'legit',
    permisEstValide: true,
    adressePostale: 'H4I3RT',
    age: 21,
  };
}
