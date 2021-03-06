import { ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class ChartComponent implements OnInit, OnChanges {
    private elementRef;
    chart: any;
    type: 'line' | 'bar' | 'radar' | 'pie' | 'polarArea' | 'bubble' | 'scatter';
    data: any;
    options: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
