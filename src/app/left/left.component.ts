import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
	menu:any = [{CML_TITLE:'Reports',CML_IMAGE:'/assets/images/menu.png'},{CML_TITLE:'Add Clients',CML_IMAGE:'/assets/images/client.png'}]
	selectedIndex : any = 0;
	
	constructor(public router : Router) { }
	ngOnInit() {
		
	}

	logout(){
		this.router.navigate(["login"]);
	}

	changeMenu(iEvent,iIndex){
		iEvent && iEvent.stopPropagation();
		this.selectedIndex = iIndex;
	}
}
