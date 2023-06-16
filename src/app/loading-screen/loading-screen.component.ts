import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoadingScreenService } from '../loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  loadingSubscription: Subscription = Subscription.EMPTY;
  constructor(private loadingScreenService: LoadingScreenService) { }

  ngOnInit() {
    this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(50)).subscribe(value => {
      this.loading = (value as boolean);
    });    
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }


}
