import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { gsap } from 'gsap';
import { PaymentsComponent } from '../payments/payments.component';
import { PaymentsService } from '../payments/payments.service';
import { DataService } from '../../../core/services/data.service';
import { ServicesTypesModel } from '@models/services-types.model';

@Component({
    selector: 'app-form-contact-us',
    templateUrl: './form-contact-us.component.html',
    styleUrls: ['./form-contact-us.component.scss'],
})
export class FormContactUsComponent implements OnInit {
    @ViewChild('formConainer', { static: true })
    formConainer!: ElementRef<HTMLDivElement>;
    public form!: FormGroup;
    public requestTypes: ServicesTypesModel[] = [];
    public servicesTypes: ServicesTypesModel[] = [];

    constructor(
        private fb: FormBuilder,
        public dialog: MatDialog,
        private dataService: DataService,
        private paymentsService: PaymentsService
    ) {}

    ngOnInit(): void {
        this.iniAnimation();
        this.createForm();
        this.getDataServices();
    }
    public getDataServices() {
        this.dataService.getRequestTypes().subscribe((requestTypes) => {
            this.requestTypes = requestTypes;
        });
        this.dataService.getServicesTypes().subscribe((servicesTypes) => {
            this.servicesTypes = servicesTypes;
        });
    }
    public createForm(): void {
        this.form = this.fb.group({
            name: new FormControl(null, Validators.required),
            lastName: new FormControl(null),
            email: new FormControl(null, [
                Validators.required,
                Validators.email,
            ]),
            telefono: new FormControl(null, Validators.required),
            request_type_id: new FormControl(null, Validators.required),
            service_type_id: new FormControl(null, Validators.required),
            mensaje: new FormControl(null),
        });
    }
    public iniAnimation(): void {
        gsap.from(this.formConainer.nativeElement, {
            delay: 3,
            duration: 0.9,
            opacity: 0,
            y: -200,
            zIndex: 1,
        });
    }

    public send(): void {
        const dataRaw = this.form.value;
        const data = {
            ...dataRaw,
            name: dataRaw.name + ' ' + dataRaw.lastName,
        };
        console.log(data);
        const service = this.servicesTypes.filter(
            (i) => i.id == data.service_type_id
        )[0];
        const request = this.requestTypes.filter(
            (i) => i.id == data.request_type_id
        )[0];
        this.paymentsService.setName_billingValue(data.name);
        this.paymentsService.setAmountValue(10000);
        this.paymentsService.setNameItemValue(request.descripcion);
        this.paymentsService.setDescriptionValue(service.descripcion);
        this.paymentsService.show.verCodigo = true;
        const dialogRef = this.dialog.open(PaymentsComponent);
        dialogRef.afterClosed().subscribe((result) => {
            console.log(data);
            console.log({ result });
        });
    }
}
