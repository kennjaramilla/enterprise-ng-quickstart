import {
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

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessListComponent implements OnInit {
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
    private route: ActivatedRoute
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
