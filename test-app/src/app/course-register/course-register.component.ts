import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-course-register',
  templateUrl: './course-register.component.html',
  styleUrls: ['./course-register.component.css'],
})
export class CourseRegisterComponent {
  @Output() courseCreated = new EventEmitter<{
    courseName: string;
    courseInstructor: string;
    courseCreditPoints: number;
    courseDescription: string;
  }>();

  @ViewChild('description') courseDescription: ElementRef;

  onAddCourse(course: {
    name: HTMLInputElement;
    instructor: HTMLInputElement;
    creditPoints: HTMLInputElement;
  }) {
    if (this.areInputsValid(course)) {
      this.courseCreated.emit({
        courseName: course.name.value,
        courseInstructor: course.instructor.value,
        courseCreditPoints: Number(course.creditPoints.value),
        courseDescription: this.courseDescription.nativeElement.value,
      });
    }
  }

  areInputsValid(course: {
    name: HTMLInputElement;
    instructor: HTMLInputElement;
    creditPoints: HTMLInputElement;
  }) {
    if (
      course.name.value &&
      course.instructor.value &&
      course.creditPoints.value &&
      Number(course.creditPoints.value) > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}
