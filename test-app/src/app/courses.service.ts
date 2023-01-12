import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  coursesChanged = new EventEmitter<{
    name: string;
    creditPoints: number;
    instructor: string;
    description: string;
  }[]>();

  private courses: {
    name: string;
    creditPoints: number;
    instructor: string;
    description: string;
  }[] = [
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

  addCourse(course: {
    name: string;
    creditPoints: number;
    instructor: string;
    description: string;
  }) {
    if (this.areInputsValid(course)) {
      this.courses.push(course);
      this.coursesChanged.emit(this.getCourses());
    }
  }

  areInputsValid(course: {
    name: string;
    instructor: string;
    creditPoints: number;
  }) {
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

  deleteCourse(course: {
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
    this.coursesChanged.emit(this.getCourses());
  }
}
