import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements OnInit {

  private text: string;
  constructor(public dialogRef: MatDialogRef<QuestionDialogComponent>) { }

  ngOnInit() {
  }

  ask() {
    this.dialogRef.close(this.text);
  }

  close() {
    this.dialogRef.close();
  }
}
