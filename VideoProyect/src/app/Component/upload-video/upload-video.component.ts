import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FileService } from 'src/app/service/file.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  SERVER_URL = "https://us-central1-fir-test-1fbec.cloudfunctions.net/main/api/video";
  uploadForm: FormGroup; 
  loading = false;
  finished = false;
  fileName:string ='';
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });
  
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.fileName = event.target.files[i].name;
      
      }
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    this.loading = true;
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => {console.log(res); this.loading = false; this.finished = true;},
      (err) => {console.log(err); this.loading = false}
    );
  }


}
