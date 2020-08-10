import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/service/auth.service';
=======
import { AngularFireStorage } from '@angular/fire/storage';
import { storage } from 'firebase';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
>>>>>>> origin/videoUpload

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor(private auth: AuthService) { }



  ngOnInit(): void {
      
  }


=======

  storageVideos = [];

  constructor(private storage:AngularFireStorage, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getStorageVideos();
 
  }

  getStorageVideos(){
    var storage = firebase.storage();
    var storageRef = storage.ref();
   
    storageRef.child('/').listAll().then(result=>{
        result.items.forEach(videoRef => {
            this.getVideoData(videoRef);
        });
        
    })


  }

  getVideoData(videoRef){
      let videoData = {name: '', url: ''}

      videoData.name = videoRef.name

      videoRef.getDownloadURL().then(function(url){
        videoData.url = url
      })

      this.storageVideos.push(videoData);
  }

  goToVideo(video)
  {  
    window.location.href = video.url;
    console.log("clicked")
  }

  
>>>>>>> origin/videoUpload

}
