import { ErrorHandler, Injectable } from "@angular/core";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";

@Injectable({
  providedIn: 'root'
})

export class CustomErrorhandler implements ErrorHandler {

  constructor(private matSnackBar:MatSnackBar) { }
  handleError(error: any): void {

    this.matSnackBar.open("Error Was Detetced, we are Working on it!",'close',{
      duration:2000
    });


    console.warn("custom Error ", error);
  }

}
