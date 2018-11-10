import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  private message: string;

  constructor(public snackBarRef: MatSnackBarRef<SnackbarComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data;
  }

  ngOnInit() {
  }
  close() {
    this.snackBarRef.dismiss();
  }
}
