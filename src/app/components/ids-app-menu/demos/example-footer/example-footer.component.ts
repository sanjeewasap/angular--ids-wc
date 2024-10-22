import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example-footer',
  templateUrl: './example-footer.component.html',
  styleUrls: ['./example-footer.component.css']
})
export class ExampleFooterComponent implements OnInit, AfterViewInit {
  @ViewChild('appMenuDrawer', { read: ElementRef }) appMenuDrawer;
  @ViewChild('appMenuTriggerBtn', { read: ElementRef }) appMenuTriggerBtn;
  public disabled: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log('example init');
  }

  ngAfterViewInit(): void {
    this.appMenuDrawer.nativeElement.target = this.appMenuTriggerBtn.nativeElement;
  }

  disableTriggerButton() {
    this.disabled = true;
  }

  enableTriggerButton() {
    this.disabled = false;
  }

  handleSelected(e: CustomEvent) {
    console.info(`Header "${(e.target as any).textContent.trim()}" was selected.`);
  }
}
