import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Actor } from 'src/app/Actors';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
  @Input() actor!: Actor
  @Output() onDeleteActor: EventEmitter<Actor> = new EventEmitter();
  
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(actor: Actor| undefined) {
    this.onDeleteActor.emit(actor);
  }

}
