import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
projList=[
  {
    "name":"Imminent",
    "src":"../../../assets/images/imminent.jpeg",
    "link":"https://github.com/Code-SakshiBhardwaj?tab=repositories"
  },{
  "name":"Portfolio",
  "src":"../../../assets/images/portfolio.png",
  "link":"https://github.com/Code-SakshiBhardwaj?tab=repositories"
},
{
  "name":"Incentive Management",
  "src":"../../../assets/images/IncentiveManagement.jpeg",
  "link":"https://github.com/Code-SakshiBhardwaj?tab=repositories"
},
{
  "name":"Referral Tracker",
  "src":"../../../assets/images/ReferralTracker.jpeg",
  "link":"https://github.com/Code-SakshiBhardwaj?tab=repositories"
},
{
  "name":"Static Portfolio",
  "src":"../../../assets/images/static_portfolio.png",
  "link":"https://code-sakshibhardwaj.github.io/Sakshi-Bhardwaj.github.io/"
},
]
  constructor() { }

  ngOnInit(): void {
  }

}
