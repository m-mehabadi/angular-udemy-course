import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseName = "";
  courseInstructor = "";
  courseCreditPoints = "";

  onAddCourse () {
    console.log("Course added!");
  }
}
