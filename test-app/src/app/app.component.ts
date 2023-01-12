import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // courses: {
  //   name: string;
  //   instructor: string;
  //   creditPoints: number;
  //   description: string;
  // }[];
  courses: Course[];
  isCoursesVisible = false;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
    this.coursesService.coursesChanged.subscribe((courses) => {
      this.courses = courses;
    });
  }

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
}
