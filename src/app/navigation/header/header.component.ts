import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(data => {
      this.isAuth = data;
    });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
