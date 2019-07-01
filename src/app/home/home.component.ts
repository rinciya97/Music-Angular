import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private musicService:MusicService ,private route :Router) { }
  musicc:any=[];
  ngOnInit() {
      this.musicService.getTrendMusic().subscribe(data=>
        {
            this.musicc=data.tracks.track;
        });
  }
  click(value)
  {
   this.route.navigateByUrl("/result/"+value);
  }
   wishClick(value)
   {
      let myMusic = {
      trackid:value.listeners,
      genre: value.artist.name,
      trackname: "Album:"+value.name
    }
    this.musicService.wishClick(myMusic);
 }
}
