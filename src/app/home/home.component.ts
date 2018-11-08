import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(
      QuestionDialogComponent,
      {}
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
