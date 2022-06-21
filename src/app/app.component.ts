import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app3';

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyCXGDKvaifpA8shm93HsRyP2zKyse0tYyk",
      authDomain: "jts-instagram-clone-34f51.firebaseapp.com",
      databaseURL:"https://jts-instagram-clone-34f51-default-rtdb.firebaseio.com",
      projectId: "jts-instagram-clone-34f51",
      storageBucket: "jts-instagram-clone-34f51.appspot.com",
      messagingSenderId: "43239335190",
      appId: "1:43239335190:web:2e2e8e5e0330abef25dc37",
      measurementId: "G-V8VSV2WG3L"
    };

    firebase.initializeApp(firebaseConfig)
  }
}
