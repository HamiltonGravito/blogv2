import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  usuarioLogado: boolean = true;
  posts: Post[] = []
  ngOnInit(): void {
  }

}
