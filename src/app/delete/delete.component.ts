import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private musicService:MusicService, private route: ActivatedRoute,
    private router:Router) { }
   Music:any[];
  ngOnInit() {
    this.deleteTrack();
  }
  deleteTrack():void
  {
    const value = this.route.snapshot.paramMap.get('track');
    this.musicService.deleteWishList(value);
    this.router.navigateByUrl("wishlist");
  }
}
