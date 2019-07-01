import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

    constructor(private musicService:MusicService, private route: ActivatedRoute,private location: Location,
    private router:Router) { }
    Muxiz:any=[];
  ngOnInit() {
    this.getWishList();
  }
  wishClick(music): void{
    this.musicService.wishClick(music);
    
  }
  deleteWishList(music):void{
    var track=music.trackid;
    this.router.navigateByUrl("/delete/"+track);
  }
  getWishList():void{
   this.musicService.getWishList().subscribe(data => {
    this.Muxiz = data;
   });
 }
 details(music):void{
 
    this.router.navigateByUrl("/dt/"+music.trackname+"/"+music.genre);
 }

}
