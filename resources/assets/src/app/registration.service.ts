import { Subject } from 'rxjs/Subject';

export class RegistrationService {
    showUser = new Subject<boolean>();
    userName = new Subject();

}