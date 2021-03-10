import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-histogramm',
    templateUrl: './histogramms.component.html',
    styleUrls: ['./histogramms.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HistogrammsComponent implements OnInit {

    _distIterator = [];

    @Input() distribution = [];
    @Input() maxDistributionY = 0;
    @Input() set maxDistributionX(max) {
        this._distIterator =  Array.from(Array(max).keys());
    };

    ngOnInit() {}

    trackByWound(index, item) {
        return item;
    }
}
