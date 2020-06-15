import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explorepage',
  templateUrl: './explorepage.component.html',
  styleUrls: ['./explorepage.component.css']
})
export class ExplorepageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    // Don't even bother trying to give extras
    // The router works just fine...
    // The ngModel of the forms will just keep piling up in memory.
    this.router.navigateByUrl('auth');
  }
}
