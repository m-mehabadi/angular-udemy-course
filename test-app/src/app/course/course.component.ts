import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoursesService } from '../courses.service';

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
  // @Output() courseDeleted = new EventEmitter<void>();

  constructor(private coursesService: CoursesService) {}

  deleteCourse() {
    // this.courseDeleted.emit();
    this.coursesService.deleteCourse(this.course);
  }
}
