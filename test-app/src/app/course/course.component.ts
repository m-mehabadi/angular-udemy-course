import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courseName = 'Angular';
  courseCreditPoints = 2;
  courseInstuctor = 'Dr. John Doe';

  getColor() {
    if (this.courseCreditPoints > 3) {
      return 'green';
    }
    else {
      return 'blue';
    }
  }
}
