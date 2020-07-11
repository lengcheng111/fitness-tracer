import { Subject } from 'rxjs';
import { OnDestroy } from "@angular/core";

export abstract class DestroyAble implements OnDestroy {

    destroyAble$ = new Subject<any>();

    ngOnDestroy() {
        this.destroyAble$.next();
        this.destroyAble$.complete();
    }
}