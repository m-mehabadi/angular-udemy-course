import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  isCoursesVisible = false;

  onShowCourses(event: Event) {
    let target = <HTMLButtonElement>event.target;
    if (this.isCoursesVisible) {
      this.isCoursesVisible = false;
      target.textContent = "Show courses";
      return;
    }
    else {
      this.isCoursesVisible = true;
      target.textContent = "Hide courses";
      return;
    }
  }
}
