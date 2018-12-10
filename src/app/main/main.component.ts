import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	createReportFlag = false;
	selectedIndex : any = 0;
	dataObj : any = {
		client_Name: '',
		site_Add: '',
		Cubes : 0,
		Date: new Date()
	};
	gradesArr = ["A Grade","B Grade","C Grade"];
	isThirdParty = false;
	optionArr : any = [{CML_TITLE:'New Report'},{CML_TITLE:'My Report'}];
	menuArr: any = [{CML_TITLE:'Client Name'},{CML_TITLE:'Site Add'},{CML_TITLE:'Date (cast)'},{CML_TITLE:'Grade'},{CML_TITLE:'C.Type'},{CML_TITLE:'Cubes'},{CML_TITLE:'Third Party'}]
	dataArr: any = [{client_Name :'cell1',site_Add:'cell2',Date:'cell3',Grade:'',Type:'',Cubes:'',Third_Party:'Yes'},
	                {client_Name :'cell4',site_Add:'cell5',Date:'cell6',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell7',site_Add:'cell8',Date:'cell9',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell10',site_Add:'cell11',Date:'cell12',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell4',site_Add:'cell5',Date:'cell6',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell7',site_Add:'cell8',Date:'cell9',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell10',site_Add:'cell11',Date:'cell12',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell4',site_Add:'cell5',Date:'cell6',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell7',site_Add:'cell8',Date:'cell9',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell10',site_Add:'cell11',Date:'cell12',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell4',site_Add:'cell5',Date:'cell6',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell7',site_Add:'cell8',Date:'cell9',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell10',site_Add:'cell11',Date:'cell12',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell4',site_Add:'cell5',Date:'cell6',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell7',site_Add:'cell8',Date:'cell9',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell10',site_Add:'cell11',Date:'cell12',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell4',site_Add:'cell5',Date:'cell6',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell7',site_Add:'cell8',Date:'cell9',Grade:'',Type:'',Cubes:'',Third_Party:'No'},
	                {client_Name :'cell10',site_Add:'cell11',Date:'cell12',Grade:'',Type:'',Cubes:'',Third_Party:'No'}]
	constructor() { }

	ngOnInit() {
	}

	changeIndex(iEvent,iIndex){
	  iEvent && iEvent.stopPropagation();
	  if(this.selectedIndex == iIndex){
		  return false;
	  }
	  this.selectedIndex = iIndex;
	  this.createReportFlag = false;
	}
	
	createReport(iEvent){
		iEvent && iEvent.stopPropagation();
		this.selectedIndex = 0;
		this.createReportFlag = true;
	}
	
	submitReport(iEvent){
		iEvent && iEvent.stopPropagation();
		this.selectedIndex = 1;
		this.createReportFlag = false;
	}

	thirdParty(iEvent,iFlag){
		iEvent && iEvent.stopPropagation();
		this.isThirdParty = iFlag;

	}

}
