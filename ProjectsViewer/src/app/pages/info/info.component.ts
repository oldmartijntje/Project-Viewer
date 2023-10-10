import { Component, OnInit } from '@angular/core';
import { WebsiteVersion } from 'src/assets/viewerSettings';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
    version = WebsiteVersion;
    constructor() { }

    ngOnInit(): void {
    }

}
