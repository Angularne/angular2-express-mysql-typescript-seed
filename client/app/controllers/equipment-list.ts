import {Component} from 'angular2/core';
import {Equipment} from '../data_access/equipment/equipment';
import {EquipmentDetailComponent} from './equipment-detail';
import {EquipmentService} from '../data_access/equipment/equipment.service';
import {OnInit} from 'angular2/core';


@Component({
  selector: 'liste',
  template: `
  <div>

  <h1>Liste</h1>
  <input [(ngModel)]="name" placeholder="name..."><input [(ngModel)]="count" placeholder="How many?"><button (click)="addButton(name, count)">Add</button>
  <ul>
    <li *ngFor="#equipment of equipments">
      <equipment-detail [equipment]="equipment" (deleteEquipment)="deleteEquipment(equipment)">Loading equipment-detail...</equipment-detail>
    </li>
  </ul>
  </div>

  `,
  directives: [EquipmentDetailComponent],
  providers: [EquipmentService]
})
export class EquipmentListComponent implements OnInit {
  public equipments: Equipment[];
  public section: string;
  ngOnInit() {
    this.getEquipments();
  }
  constructor(private _equipmentService: EquipmentService) {}

  getEquipments(){
    this._equipmentService.getEquipments()
    .then((equipments:Equipment[]) => this.equipments = equipments);
  }
  addButton(name, count) {
    var equipment:Equipment = {
      id: this.equipments.length,
      name: name,
      count: count
    };
    this._equipmentService.addEquipment(equipment)
    .then(res=> this.equipments.push(equipment));
  }
  sectionSelect(section: string) {
    this.section = section;
  }
  deleteGear(equipment: Equipment) {
    this._equipmentService.deleteEquipment(equipment)
    .then(res => this.equipments.splice(this.equipments.indexOf(equipment), 1));
  }

}
