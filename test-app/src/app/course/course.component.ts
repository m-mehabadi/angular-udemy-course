import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  // @Input() course: {
  //   name: string;
  //   creditPoints: number;
  //   instructor: string;
  //   description: string;
  // };
  @Input() course: Course;

  constructor(private coursesService: CoursesService) {}

  deleteCourse() {
    this.coursesService.deleteCourse(this.course);
  }
}
