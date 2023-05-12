import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';

/** rxjs Imports */
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

/** Custom Services */
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  progressBarMode!: string;
  /** Subscription to progress bar. */
  progressBar$!: Subscription;

  constructor(
    private progressBarService: ProgressBarService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.progressBar$ = this.progressBarService.updateProgressBar.subscribe(
      (mode: string) => {
        this.progressBarMode = mode;
        this.cdr.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    this.progressBar$.unsubscribe();
  }
}
