import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    // Don't even bother trying to give extras
    // The router works just fine...
    // The ngmodel of the forms will just keep piling up in memory.
    this.router.navigateByUrl('explore');
  }

}
