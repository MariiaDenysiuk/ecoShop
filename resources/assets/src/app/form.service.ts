import { Subject } from 'rxjs/Subject';

export class FormService {
    showUser = new Subject<boolean>();
    userName = new Subject();
    
    
}
