import { Injectable, Inject } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private storage: AngularFireStorage
  ) { }

  //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }
}
