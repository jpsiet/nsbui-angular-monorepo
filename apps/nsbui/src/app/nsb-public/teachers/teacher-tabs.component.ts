import { Component, OnInit, Input } from '@angular/core';
import { TeacherService } from '../services/teacher-service';
import { MatTab } from "@angular/material/tabs";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-teacher-tabs',
  templateUrl: './teacher-tabs.component.html',
  styleUrls: ['./teacher-tabs.component.scss'],
  imports: [MatTab, CommonModule]
})
export class TeacherTabsComponent implements OnInit {
  @Input() stream = 'Science';
  selectedStream = '';
  teachers: any[] = [];
  loading = false;

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.selectedStream = this.stream;;
    this.loadTeachers(this.selectedStream);
  }

  onTabChange(stream: string) {
    this.selectedStream = stream;
    this.loadTeachers(stream);
  }

  loadTeachers(stream: string) {
    console.log('Loading teachers for stream:', stream);
    this.loading = true;
    this.teacherService.getTeachersByStream(stream).subscribe({
      next: (data) => {
        console
        this.teachers = data;
        this.loading = false;
      },
      error: () => {
        this.teachers = [];
        this.loading = false;
      }
    });
  }
}
