import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent implements OnInit {
  @Output() dropDownData = new EventEmitter<string>();
  //-----Job type Filtered Array----//
  jobType: any;
  jobs_data: any;
  formData = new FormGroup({
    filteredJobType: new FormControl('', Validators.required),
  });
  constructor(private jobsService: JobsService) {}
  jobTypesArray(data: any) {
    const jobs = data.map((job: any) => job.job_type);
    const completeJobType = [...new Set(jobs)];
    return completeJobType;
  }

  ngOnInit() {
    this.jobsService.GetJsonData().subscribe((data) => {
      this.jobs_data = this.jobTypesArray(data);
      this.jobType = ['All', ...this.jobs_data];
    });
  }
  filteredJobs() {
    const filteredValue: any = this.formData.value.filteredJobType;
    this.dropDownData.emit(filteredValue);
  }
}
