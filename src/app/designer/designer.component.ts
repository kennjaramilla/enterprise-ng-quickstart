import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit, OnDestroy {
  list: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.list = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name,
    };
    console.log(this.list);
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.list.id = params.id;
          this.list.name = params.name;
        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  navigateBack() {
    this.router.navigate(['']/*, {relativeTo: this.route}*/);
  }

}
