import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-register',
  templateUrl: './course-register.component.html',
  styleUrls: ['./course-register.component.css'],
})
export class CourseRegisterComponent {

  @ViewChild('description') courseDescription: ElementRef;

  constructor(private coursesService: CoursesService) {}

  onAddCourse(course: {
    name: HTMLInputElement;
    instructor: HTMLInputElement;
    creditPoints: HTMLInputElement;
  }) {
    this.coursesService.addCourse({
      name: course.name.value,
      instructor: course.instructor.value,
      creditPoints: Number(course.creditPoints.value),
      description: this.courseDescription.nativeElement.value,
    });
  }


}
