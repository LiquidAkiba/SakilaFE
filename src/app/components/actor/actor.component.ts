import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ACTORS } from 'src/app/mock-actors';
import { Actor } from 'src/app/Actors';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actors : Actor[] = ACTORS;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteActor(actor: Actor){
    this.taskService
    .deleteActor(actor)
    .subscribe(
      ()=>(this.actors = this.actors.filter((t) => t.id !== actor.id))
    );
    }

  onDelete(actor: any) {
    this.onDeleteTask.emit(actor);
  }

  addActor(actor: Actor) {
    this.taskService.addActor(actor).subscribe((task) => (this.actors.push(actor)));
  }
}

