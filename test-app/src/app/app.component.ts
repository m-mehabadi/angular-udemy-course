import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  OnCourseCreated(event: {
    courseName: string;
    courseInstructor: string;
    courseCreditPoints: number;
  }) {
    this.courses.push({
      name: event.courseName,
      instructor: event.courseInstructor,
      creditPoints: event.courseCreditPoints,
    });
  }

  OnCourseDeleted(event: {
    name: string;
    creditPoints: number;
    instructor: string;
  }) {
    this.courses = this.courses.filter((course) => {
      return (
        course.name !== event.name ||
        course.creditPoints !== event.creditPoints ||
        course.instructor !== event.instructor
      );
    });
  }
}
