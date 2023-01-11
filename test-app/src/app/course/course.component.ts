import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course: {name: string, creditPoints: number, instructor: string};
  @Output() courseDeleted = new EventEmitter<{name: string, creditPoints: number, instructor: string}>();

  getColor() {
    if (this.course.creditPoints < 2) {
      return 'yellow';
    }
    else if (this.course.creditPoints > 3) {
      return 'blue';
    }
    else {
      return 'green';
    }
  }

  deleteCourse() {
    this.courseDeleted.emit(this.course);
  }
}
