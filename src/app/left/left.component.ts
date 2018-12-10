import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
	menu:any = [{CML_TITLE:'Reports',CML_IMAGE:'/assets/images/menu.png'},{CML_TITLE:'Add Clients',CML_IMAGE:'/assets/images/client.png'}]
	selectedIndex : any = 0;
	
	constructor() { }
	ngOnInit() {
		
	}

}
