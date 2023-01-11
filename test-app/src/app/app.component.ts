import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = [
    {
      name: 'Angular',
      creditPoints: 2,
      instructor: 'Dr. John Doe',
      description:
        'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
    },
  ];

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
    courseDescription: string;
  }) {
    this.courses.push({
      name: event.courseName,
      instructor: event.courseInstructor,
      creditPoints: event.courseCreditPoints,
      description: event.courseDescription,
    });
  }

  OnCourseDeleted(course: {
    name: string;
    creditPoints: number;
    instructor: string;
  }) {
    this.courses = this.courses.filter((_course) => {
      return (
        _course.name !== course.name ||
        _course.creditPoints !== course.creditPoints ||
        _course.instructor !== course.instructor
      );
    });
  }
}
