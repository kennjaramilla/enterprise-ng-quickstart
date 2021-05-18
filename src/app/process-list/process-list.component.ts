import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
// @ts-ignore
import {
  SohoDataGridComponent,
  SohoModalDialogService,
  SohoDataGridService
 } from 'ids-enterprise-ng';
import {
  PAGING_COLUMNS,
  PAGING_DATA
} from './process-list-paging-data';
import { ProcessUploadComponent } from './process-upload/process-upload.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiGatewayService } from '../services/api-gateway.service';

@Component({
  selector: 'app-process',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessListComponent implements OnInit, AfterViewInit {
  @ViewChild(SohoDataGridComponent) sohoDataGridComponent?: SohoDataGridComponent;
  @ViewChild('dialogPlaceholder', { read: ViewContainerRef, static: true })
  placeholder?: ViewContainerRef;

  gridOptions?: SohoDataGridOptions = undefined;

  /**
   * Constructor.
   *
   * @param dialogService - the modal dialog service.
   */
  constructor(
    private modalService: SohoModalDialogService,
    private router: Router,
    private route: ActivatedRoute,
    private apiGatewayService: ApiGatewayService
  ) { }

  ngOnInit(): void {
    const columns: SohoDataGridColumn[] = [];

    PAGING_COLUMNS.forEach(element => columns.push(element));

    if (columns.length > 2) {
      columns[2].href = 'http://www.google.com';
      columns[2].target = '_blank';
    }

    this.gridOptions = {
      cellNavigation: false,
      clickToSelect: true,
      columns,
      dataset: PAGING_DATA,
      disableRowDeselection: false,
      isList: true,
      selectable: false,
      paging: true,
      pagesize: 10,
      toolbar: { title: 'Process List', collapsibleFilter: true, keywordFilter: true, actions: true, rowHeight: true }
    };
  }

  ngAfterViewInit(): void {
    /* This is a sample use of GET method in API Gateway Service */
    this.loadUsers();
    /* This is a sample use of POST method in API Gateway Service */
    this.createUser();
    /* This is a sample use of PUT method in API Gateway Service */
    this.updatePutUser();
    /* This is a sample use of PATCH method in API Gateway Service */
    this.updatePatchUser();
    /* This is a sample use of DLETE method in API Gateway Service */
    this.deleteUser();
  }

  loadUsers() {
    const apiService = 'users';
    this.apiGatewayService.get(apiService).subscribe(data => {
      console.log(`loadUsers: ${data}`);
    });
  }

  createUser() {
    const apiService = 'users';
    const body = {
      name: 'morpheus',
      job: 'leader'
    };
    this.apiGatewayService.post(
      apiService,
      JSON.stringify(body)
    ).subscribe(data => {
      console.log(`createUsers: ${data}`);
    });
  }

  updatePutUser() {
    const id = 3;
    const apiService = `users/${id}`;
    const body = {
      name: 'morpheus',
      job: 'zion resident'
    };
    this.apiGatewayService.put(
      apiService,
      JSON.stringify(body)
    ).subscribe(data => {
      console.log(`updatePutUsers: ${data}`);
    });
  }

  updatePatchUser() {
    const id = 4;
    const apiService = `users/${id}`;
    const body = {
      name: 'morpheus',
      job: 'zion resident'
    };
    this.apiGatewayService.patch(
      apiService,
      JSON.stringify(body)
    ).subscribe(data => {
      console.log(`updatePatchUsers: ${data}`);
    });
  }

  deleteUser() {
    const id = 1;
    const apiService = `users/${id}`;
    this.apiGatewayService.delete(apiService).subscribe(data => {
      console.log(`deleteUser: ${data}`);
    });
  }

  onUpload() {
    const dialogRef = this.modalService
      .modal<ProcessUploadComponent>(ProcessUploadComponent, this.placeholder, { fullsize: 'responsive' })
      .title('Upload Process')
      .buttons(
        [{
          text: 'Cancel', click: () => {
            dialogRef.close();
          }
        },
        {
          text: 'Submit', click: () => {
            dialogRef.close();
          }, isDefault: true
        }])
      .open()
      .afterClose((result: any) => {
        // do something here
      });
  }

  onListSelect(event: SohoDataGridRowClicked) {
    const { id, name } = event.item;
    console.log('this.route', this.route);
    this.router.navigate(['designer', id, name]/*, {relativeTo: this.route}*/);
  }
}
