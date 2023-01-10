import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courseName: string;
  courseInstructor: string;
  courseCreditPoints: number;

  courses = [{ name: 'Angular', creditPoints: 2, instructor: 'Dr. John Doe' }];

  isCoursesVisible = false;

  onShowCourses(event: Event) {
    let target = <HTMLButtonElement>event.target;
    if (this.isCoursesVisible) {
      this.isCoursesVisible = false;
      target.textContent = 'Show courses';
      return;
    } else {
      this.isCoursesVisible = true;
      target.textContent = 'Hide courses';
      return;
    }
  }

  onAddCourse() {
    if (this.areInputsValid()) {
      this.courses.push({
        name: this.courseName,
        creditPoints: this.courseCreditPoints,
        instructor: this.courseInstructor,
      });
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
