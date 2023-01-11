import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  @Input() course: {
    name: string;
    creditPoints: number;
    instructor: string;
    description: string;
  };
  // @Output() courseDeleted = new EventEmitter<{
  //   name: string;
  //   creditPoints: number;
  //   instructor: string;
  //   description: string;
  // }>();
  @Output() courseDeleted = new EventEmitter<void>();

  deleteCourse() {
    // this.courseDeleted.emit(this.course);
    this.courseDeleted.emit();
  }
}
