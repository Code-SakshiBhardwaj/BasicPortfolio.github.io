import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience=[
    {
    "company":"Mad Crayons, Delhi",
    "duration":"June'21 - August'21",
    "description":"Worked as Web Development Intern "
  },
  {
    "company":"Accolite Digital, Bangalore",
    "duration":"Feb'22 - August'22",
    "description":"Worked as Software Development Intern "
  },
  {
    "company":"Accolite Digital, Bangalore",
    "duration":"September'22 - Present",
    "description":"Worked as Software Development Engineer "
  },

]
  constructor() { }

  ngOnInit(): void {
  }

}
