import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course: {name: string, creditPoints: number, instructor: string};
  // courseName = 'Angular';
  // courseCreditPoints = 2;
  // courseInstuctor = 'Dr. John Doe';

  getColor() {
    if (this.course.creditPoints > 3) {
      return 'green';
    }
    else {
      return 'blue';
    }
  }
}
