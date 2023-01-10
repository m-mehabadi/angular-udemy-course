import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courseName = 'Angular';
  courseCreditPoints = 5;
  courseInstuctor = 'Dr. John Doe';
}
