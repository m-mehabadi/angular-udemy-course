import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  @Input() courses: Course[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
    this.coursesService.coursesChanged.subscribe((courses) => {
      this.courses = courses;
    });
  }
}
