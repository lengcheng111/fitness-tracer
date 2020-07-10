import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject } from 'rxjs/Subject';
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  registerUser (auth: AuthData) {
    this.user = {
      email: auth.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
  }

  login (auth: AuthData) {
    this.user = {
      email: auth.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
  }

  logout () {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth () {
    return this.user != null;
  }

}
