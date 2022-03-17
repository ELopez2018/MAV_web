import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PaymentsComponent } from '../payments/payments.component';
import { PaymentsService } from '../payments/payments.service';

@Component({
    selector: 'app-pay-online',
    templateUrl: './pay-online.component.html',
    styleUrls: ['./pay-online.component.scss'],
})
export class PayOnlineComponent implements OnInit {
    constructor(
        public dialog: MatDialog,
        private paymentsService: PaymentsService
    ) {}

    ngOnInit(): void {}
    payOnLine1(config?: MatDialogConfig) {
        this.dialog.open(PaymentsComponent, config);
    }
    payOnLine() {
        this.paymentsService.reset();
        const dialogRef = this.dialog.open(PaymentsComponent);
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
