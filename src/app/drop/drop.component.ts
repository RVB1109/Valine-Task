// import { Component, OnInit } from '@angular/core';
// import { JobsService } from '../jobs.service';

// @Component({
//   selector: 'app-drop',
//   templateUrl: './drop.component.html',
//   styleUrl: './drop.component.css'
// })
// export class DropComponent implements OnInit{

//   jobs: any[];
//   jobTitles: string[];
//   jobLocations: string[];

//   selectedJobTitle: string;
//   selectedJobLocation: string;

//   constructor(private jobService: JobsService) { }

//   ngOnInit(): void {
//     this.jobService.getJobs().subscribe(data => {
//       this.jobs = data;
//       this.jobTitles = this.getUniqueJobTitles();
//     });

// }
// }
