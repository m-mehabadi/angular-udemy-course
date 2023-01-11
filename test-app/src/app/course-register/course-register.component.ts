import { Component, EventEmitter, Output } from '@angular/core';

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
  }>();

  courseName: string;
  courseInstructor: string;
  courseCreditPoints: number;

  onAddCourse() {
    if(this.areInputsValid()) {
      this.courseCreated.emit({
        courseName: this.courseName,
        courseInstructor: this.courseInstructor,
        courseCreditPoints: this.courseCreditPoints
      })
    }
  }

  areInputsValid() {
    if (
      this.courseName &&
      this.courseInstructor &&
      this.courseCreditPoints &&
      this.courseCreditPoints > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}
