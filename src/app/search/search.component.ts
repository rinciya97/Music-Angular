import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  constructor(private musicService:MusicService, private route: ActivatedRoute,private location: Location,
    private router:Router) { }
    arrayOfMusic:any=[];

  ngOnInit() {
    this.getMusic();
  }
  getMusic(): void {
    const search = this.route.snapshot.paramMap.get('id');
    this.musicService.getMusic(search).subscribe(data => {
    this.arrayOfMusic=data.results.trackmatches.track;
    });
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
