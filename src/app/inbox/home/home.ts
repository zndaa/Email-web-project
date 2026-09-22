import { Component } from '@angular/core';
import { Emailcreate } from "../emailcreate/emailcreate";
import { Emailindex } from "../emailindex/emailindex";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Emailcreate, Emailindex, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
