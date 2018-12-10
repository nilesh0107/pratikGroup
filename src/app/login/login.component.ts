import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user: any = '';
	password: any = '';
	constructor(private router: Router) { }

	ngOnInit() {
	}

	loginFunc(iUser,iPassword){
		  if(iUser == 'admin' && iPassword == 'aa'){
			  this.router.navigate(["/home"]);
			  return 1;
		  }
		  else{
			  return 0;
		  }
	}

}
