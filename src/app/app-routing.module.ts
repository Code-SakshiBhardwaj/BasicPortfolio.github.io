import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContentComponent } from './components/content/content.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';


const routes: Routes = [
  {path:'',
  component:ContentComponent,
  pathMatch:'full'
  },
  {path:'content',
  component:ContentComponent,
  pathMatch:'full'
  },
  {path:'about',
  component:AboutComponent,
  pathMatch:'full'
  },
  {path:'project',
  component:ProjectComponent,
  pathMatch:'full'
  },
  {
    path:'contact',
    component:ContactComponent,
    pathMatch:'full'
  },
  {
    path:'experience',
    component:ExperienceComponent,
    pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
