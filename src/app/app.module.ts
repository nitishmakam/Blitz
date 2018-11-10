import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule } from '@angular/material';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HomeComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionDialogComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    QuestionDialogComponent,
    SnackbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
