import { Component } from '@angular/core';
import { LogService } from './shared/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDoApp';

  constructor(private myLog: LogService) {
    
    this.myLog.log("caricamento app component");
  
  }

  // union type
  filter: 'all' | 'active' | 'done' = 'all';

  // elementi hard-coded nell'array che raccoglie tutti gli elementi
  allItems = [
    { description: 'Imparare angular', done: true, priorita:'N' },
    { description: 'Sviluppare il progetto', done: true, priorita:'N' },
    { description: 'Farlo funzionare', done: true, priorita:'N' },
    { description: 'Superare il modulo', done: true, priorita:'N' },
  ];

  get items() {
    // log accesso al metodo.
    // commentata perchè genera troppo logging...
    // this.myLog.log("ritorna gli elementi");

    // se il filtro è impostato su tutti restituisce tutto l'array...
    if (this.filter === 'all') {
      return this.allItems;
    }

    // ...altrimenti restituisce gli elementi contrassegnati come fatti o non fatti con ternary conditional operator
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem(description: string, priorita: string) {
    // la descrizione deve essere immessa
    if (!description) {

      // log
      this.myLog.log("descrizione non immessa, termina");

      alert("Descrizione elemento non immessa!");
      return;
    }

    // log
    this.myLog.log("aggiungo l'elemento " + JSON.stringify(description));

    // aggiunge in cima all'array
    this.allItems.unshift({
      description,
      done: false,
      priorita: priorita,
    });
  }

  remove(item: any) {
    // log
    this.myLog.log("elimina l'elemento " + JSON.stringify(item.description));

    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  removeAll() {
    // log
    this.myLog.log("elimina tutto");
    this.allItems = [];
  }
}
