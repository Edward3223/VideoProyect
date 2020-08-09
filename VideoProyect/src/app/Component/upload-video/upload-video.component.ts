import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  constructor(private fileService:FileService) { }

  ngOnInit(): void {
  }

  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });
  
  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;
  loading = false;



  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  public subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.fileService.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.fileService.tareaCloudStorage(this.nombreArchivo, archivo);

    //Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.loading =  true;
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.loading =  false;
        this.finalizado = true;
        
      }
    });

    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
    });
  }


}
