import { EventEmitter, Injectable } from "@angular/core";
import { Course } from "./course.model";

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // coursesChanged = new EventEmitter<{
  //   name: string;
  //   creditPoints: number;
  //   instructor: string;
  //   description: string;
  // }[]>();
  coursesChanged = new EventEmitter<Course[]>();

  private courses: Course[] = [
    {
      name: 'Angular',
      creditPoints: 3,
      instructor: 'Max',
      description: 'Angular is a platform that makes it easy to build applications with the web.',
    },
    {
      name: 'React',
      creditPoints: 3,
      instructor: 'Max',
      description: 'React makes it painless to create interactive UIs.',
    },
  ];

  constructor() {}

  getCourses() {
    return this.courses.slice();
  }

  addCourse(course: Course) {
    if (this.areInputsValid(course)) {
      this.courses.push(course);
      this.coursesChanged.emit(this.getCourses());
    }
  }

  areInputsValid(course: Course) {
    if (
      course.name &&
      course.instructor &&
      course.creditPoints &&
      course.creditPoints > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  deleteCourse(course: Course) {
    this.courses = this.courses.filter((_course) => {
      return (
        _course.name !== course.name ||
        _course.creditPoints !== course.creditPoints ||
        _course.instructor !== course.instructor
      );
    });
    this.coursesChanged.emit(this.getCourses());
  }
}
