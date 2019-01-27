import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class RegisterGuard implements CanActivate {

  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // tslint:disable-next-line:whitespace
    if(this.settingsService.getSettings().allowRegistration) {
      return true;
    } else {
      this.router.navigate(['/']);
      //this.router.navigate(['/login']);
      return false;
    }
  }
}
