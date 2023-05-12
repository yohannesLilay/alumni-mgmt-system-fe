import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  color!: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.setColor();
  }

  setColor() {
    switch (this.data.type) {
      case 'Basic':
        this.color = 'primary';
        break;
      case 'Mild':
        this.color = 'accent';
        break;
      case 'Strong':
        this.color = 'warn';
        break;
      default:
        this.color = 'warn';
    }
  }
}
