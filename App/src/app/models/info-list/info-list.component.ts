import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Infomation } from '../models/info';
import { InfoService } from '../service/info.service';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {

  info: Infomation[];
  oneInfo: Infomation;

  constructor(private router: Router,
    private infoService: InfoService) { }

  ngOnInit() { this.getInfos(); }

  getInfos(){
    //Observable
    this.infoService.getInfomations()
    .subscribe(info => this.info = info);
    
    // Promise
    // this.infoService.getInfomations()
    // .then(info=>this.info=info);
  }

  getId(info :Infomation) {
    this.oneInfo = info;
  }
  deleteInfo(){
    this.infoService.deleteInfo(this.oneInfo)
    .then(info=>this.getInfos())
    .catch(error=>console.log(error));
  }

}
