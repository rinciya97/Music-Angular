import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {

  constructor(private musicService:MusicService ,private route: ActivatedRoute,private router :Router) { }
  info:any;
  ngOnInit() {
      this.details();
  }
  details():any{
    const trackname = this.route.snapshot.paramMap.get('trackname');
    const genre = this.route.snapshot.paramMap.get('genre');
    console.log("trackname    "+trackname);
    console.log("genre  "+genre);
    this.musicService.fullDetails(trackname,genre).subscribe( data => {  
      console.log("This too works.."+data);
      this.info=data;
      
    });
  }

}
