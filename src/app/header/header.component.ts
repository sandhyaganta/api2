
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService){}

  
    ngOnInit() {
      this.apiService.getData().subscribe((res: any) => {
        console.log(res);
      });
  } 

}
