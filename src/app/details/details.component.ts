import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  jobs_info: any;
  details: any;
  routePath: any;

  // job_title: string = '';
  // company_name: string = '';
  // job_location: string = '';
  // job_type: string = '';
  // job_description: string = '';

  constructor(
    private router: Router,
    private jobs: JobsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.routePath = params['id'];
    });
    this.jobs.GetJsonData().subscribe((data) => {
      this.jobs_info = [...data];
      this.jobs_info.forEach((job: any) => {
        if (job.id === Number(this.routePath)) {
          this.details = job;
        }
      });
    });
  }
  backtoHome() {
    this.router.navigate(['/']);
  }
}
