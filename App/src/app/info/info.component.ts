import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap ,Route } from'@angular/router';
import { Location }                 from '@angular/common';

import { InfoService } from '../service/info.service'
import { Infomation } from '../models/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info: Infomation;

  constructor( private infoService : InfoService ,
    private router: ActivatedRoute,
    private location: Location ) { }

  ngOnInit() {
    this.info = new Infomation();
    this.router.paramMap
    .switchMap((params: ParamMap) => this.infoService.getInfoId(+params.get('id')))
    .subscribe(info => this.info = info);
  }


  addInfo(form: NgForm){
    console.log(form);
    if (form.valid) {
      this.infoService.addInfo(this.info);
      this.info = new Infomation();

    }
  }


  editInfo(form: NgForm){
    console.log(form);
    if (form.valid) {
      this.infoService.addInfo(this.info);
    }
  }

  errorInfo(form: NgForm){
    if(!this.info && form.submitted){
        return false;
      }else{
        return true;
      }
    }
  }

