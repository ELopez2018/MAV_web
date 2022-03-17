import { Component, Input, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { environment } from '@environments/environment';
// import { uuid } from 'uuidv4';
import {
    CurrencyEnum,
    CountryEnum,
    LangEnum,
} from '../../../core/models/payments-model';
import {
    MAT_FORM_FIELD,
    MatFormField,
    MatFormFieldControl,
} from '@angular/material/form-field';
import { v4 as uuidv4 } from 'uuid';
import { PaymentsService } from './payments.service';
declare var ePayco: any;

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
    public form!: FormGroup;
    @Input() verCodigo: boolean = true;
    @Input() verTipoDoc: boolean = true;
    @Input() verNumeroDoc: boolean = true;
    @Input() verNameBilling: boolean = true;
    @Input() verNameConcepto: boolean = true;
    @Input() verDescripcion: boolean = true;
    @Input() verTelefono: boolean = false;
    @Input() verDireccion: boolean = false;
    @Input() verSubtotal: boolean = false;
    @Input() verTax: boolean = false;
    @Input() verTotal: boolean = true;
    public handler: any;
    constructor(
        private fb: FormBuilder,
        private paymentsService: PaymentsService
    ) {
        this.initForm();
    }
    inputAppearance = 'outline';
    ngOnInit(): void {
        this.confighandler();
        this.showFields();
        this.setValues();
    }
    reset() {
        this.verCodigo = true;
        this.verTipoDoc = true;
        this.verNumeroDoc = true;
        this.verNameBilling = true;
        this.verNameConcepto = true;
        this.verDescripcion = true;
        this.verTelefono = false;
        this.verDireccion = false;
        this.verSubtotal = false;
        this.verTax = false;
        this.verTotal = true;
    }
    initForm() {
        // const codigo = uuidv4();
        this.form = this.fb.group({
            // Datos del Producto
            invoice: new FormControl(null, [Validators.required]),
            name: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required]),

            // Datos del Cliente
            name_billing: new FormControl(null, [Validators.required]),
            address_billing: new FormControl(null, [Validators.required]),
            type_doc_billing: new FormControl(null, [Validators.required]),
            mobilephone_billing: new FormControl(null, [Validators.required]),
            number_doc_billing: new FormControl(null, [Validators.required]),

            // Valores
            amount: new FormControl(null),
            tax_base: new FormControl(0),
            tax: new FormControl(0),
            extra1: new FormControl(null),
            extra2: new FormControl(null),
            extra3: new FormControl(null),

            // Configuracion
            external: new FormControl('true'),
            lang: new FormControl(LangEnum.es, [Validators.required]),
            country: new FormControl(CountryEnum.co, [Validators.required]),
            currency: new FormControl(CurrencyEnum.cop, [Validators.required]),
            confirmation: new FormControl(
                environment.SERVER + '/payment-confirmation'
            ),
            response: new FormControl(environment.SERVER + '/payment-response'),
        });
    }
    confighandler() {
        this.handler = ePayco.checkout.configure({
            key: environment.EPAYCO_KEY,
            test: false,
        });
    }

    get code() {
        return this.form.get('invoice')?.value;
    }
    pagar() {
        const data = this.form.value;
        this.handler.open(data);
    }

    public showFields() {
        this.verCodigo = this.paymentsService.show.verCodigo;
        this.verTipoDoc = this.paymentsService.show.verTipoDoc;
        this.verNumeroDoc = this.paymentsService.show.verNumeroDoc;
        this.verNameBilling = this.paymentsService.show.verNameBilling;
        this.verNameConcepto = this.paymentsService.show.verNameConcepto;
        this.verDescripcion = this.paymentsService.show.verDescripcion;
        this.verTelefono = this.paymentsService.show.verTelefono;
        this.verDireccion = this.paymentsService.show.verDireccion;
        this.verSubtotal = this.paymentsService.show.verSubtotal;
        this.verTax = this.paymentsService.show.verTax;
        this.verTotal = this.paymentsService.show.verTotal;
    }

    public setValues() {
        const codigo = this.paymentsService.values.invoice || Date.now();
        const values = this.paymentsService.values;
        this.form.get('invoice')?.setValue(codigo);
        this.form.get('name')?.setValue(values.name);
        this.form.get('description')?.setValue(values.description);
        this.form.get('name_billing')?.setValue(values.name_billing);
        this.form.get('address_billing')?.setValue(values.address_billing);
        this.form.get('type_doc_billing')?.setValue(values.type_doc_billing);
        this.form.get('tax_base')?.setValue(values.tax_base);
        this.form.get('tax')?.setValue(values.tax);
        this.form.get('amount')?.setValue(values.amount);
    }
}
