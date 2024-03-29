import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  jobs_info: any[] = [];
  completeJobData: any[] = [];
  searchJob: string = '';

  constructor(private jobs: JobsService, private router: Router) {}

  ngOnInit() {
    this.jobs.GetJsonData().subscribe((data) => {
      this.jobs_info = data;
      this.completeJobData = data;
    });
  }
  gettingTheDropdownData(data: string) {
    const clonnedJobData = [...this.completeJobData];
    let newJobFiltered = [];
    if (data === 'All') {
      this.jobs_info = this.completeJobData;
    } else {
      newJobFiltered = clonnedJobData.filter((obj) => obj.job_type === data);
      this.jobs_info = newJobFiltered;
    }
  }
  viewDetails(data: any) {
    this.router.navigate(['/detail', data.id]);
  }
}
