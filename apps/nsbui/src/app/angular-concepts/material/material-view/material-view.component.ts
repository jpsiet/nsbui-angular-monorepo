import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { HelloComponent } from '../overlay/hello.component';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.scss'],
})
export class MaterialViewComponent implements OnInit {
  overlayRef1!: OverlayRef;
  overlayRef2!: OverlayRef;
  positionStrategy1: any;
  positionStrategy2: any;
  constructor(private overlay: Overlay) {}

  ngOnInit(): void {

  }
  open1(elementRef: any) {
    this.positionStrategy1 = this.overlay
      .position()
      .flexibleConnectedTo(elementRef)
      .withLockedPosition()
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        },
      ]);
    if (this.overlayRef2) {
      this.overlayRef2.detach();
    }

    const config: any = {
      hasBackdrop: true,
      positionStrategy: this.positionStrategy1,
      panelClass: 'example-overlay1',
    };
    this.overlayRef1 = this.overlay.create(config);
    const componentPortal = new ComponentPortal(HelloComponent);
    this.overlayRef1.attach(componentPortal);
    this.overlayRef1.backdropClick().subscribe(() => {
      this.overlayRef1.dispose();
    });
  }

  open2(elementRef: any) {
    this.positionStrategy2 = this.overlay
      .position()
      .flexibleConnectedTo(elementRef)
      .withLockedPosition()
      .withPositions([
        {
          originX: 'start',
          originY: 'center',
          overlayX: 'start',
          overlayY: 'center',
        },
      ]);

    if (this.overlayRef1) {
      this.overlayRef1.detach();
    }
    const config: any = {
      hasBackdrop: true,
      positionStrategy: this.positionStrategy2,
      panelClass: 'example-overlay2',
    };
    this.overlayRef2 = this.overlay.create(config);
    const componentPortal = new ComponentPortal(HelloComponent);
    this.overlayRef2.attach(componentPortal);



    this.overlayRef2.backdropClick().subscribe(() => {
      this.overlayRef2.dispose();
    });
  }
}
