import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from "../shared/item";
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  constructor(private myLog: LogService) {
    myLog.log("constructor item component");
  }

  editable = false;

  @Input() item!: Item;
  @Input() newItem: string = '';
  @Output() remove = new EventEmitter<Item>();

  saveItem(description?: any) {
    // la descrizione deve essere immessa
    // salva nel log errori
    if (!description) {
      this.myLog.log("Descrizione non immessa");
      return;
    }

    // imposta l'elemento come non modificabile e salva la descrizione
    this.editable = false;
    this.item.description = description;

    // log
    this.myLog.log("Salvataggio completato");
  }
}
