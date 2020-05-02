import { Component, OnInit, ViewChild } from '@angular/core';
import { CommunityService } from '../../services/community-service/community.service'

@Component({
  selector: 'ab-muroPublicaciones',
  templateUrl: './muroPublicaciones.component.html',
  styleUrls: ['./muroPublicaciones.component.css']
})
export class MuroPublicacionesComponent implements OnInit {

  posts;

  constructor(private communityService:CommunityService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.posts = this.communityService.getPosts();
  }
}
