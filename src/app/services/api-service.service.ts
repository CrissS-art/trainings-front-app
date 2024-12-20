import { Injectable } from '@angular/core';
import { Training } from '../model/training.model.ts/training.model';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
=======
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
>>>>>>> NGClass2

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  public getTrainings() {
    return this.http.get<{listTrainings: Training[]}>(environment.host+"/trainings");
  }

  public getTraining(id : number) {
    return this.http.get<Training>(environment.host+"/trainings"+id);
  }
}
