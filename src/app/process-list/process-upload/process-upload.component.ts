import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
// @ts-ignore
import { SohoFileUploadComponent, SohoTrackDirtyDirective } from 'ids-enterprise-ng';

@Component({
  selector: 'app-process-upload',
  templateUrl: './process-upload.component.html',
  styleUrls: ['./process-upload.component.css']
})
export class ProcessUploadComponent implements OnInit {

  @ViewChild(SohoFileUploadComponent, { static: true }) fileupload?: SohoFileUploadComponent;
  @ViewChild(SohoTrackDirtyDirective, { static: true }) trackdirty?: SohoTrackDirtyDirective;

  public name1 = 'file-name';
  public fileUploadDisabled = false;
  public fileUploadReadOnly = false;
  public fileUploadOptions = {
    attributes: {
      name: 'data-automation-id',
      value: 'fileupload-field-automation-id'
    }
  };

  public model = {
    header: 'Full Size Modal'
  };

  constructor() { }

  ngOnInit() {
  }

  onChange(event: any) {
    console.log('onChange', event);
  }

}
