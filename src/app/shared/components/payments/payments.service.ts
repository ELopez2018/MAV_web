import { Injectable } from '@angular/core';
import {
    IPaymentsShowFields,
    IPaymentsValues,
} from '../../../core/interfaces/payments.interface';

@Injectable({
    providedIn: 'root',
})
export class PaymentsService {
    public show!: IPaymentsShowFields;
    public values: IPaymentsValues;
    constructor() {
        this.values = {
            invoice: null,
            name: null,
            description: null,
            name_billing: null,
            address_billing: null,
            type_doc_billing: null,
            mobilephone_billing: null,
            number_doc_billing: null,
            amount: null,
            tax_base: null,
            tax: null,
            extra1: null,
            extra2: null,
            extra3: null,
            external: null,
            lang: null,
            country: null,
            currency: null,
            confirmation: null,
            response: null,
        };
        this.setValues();
    }

    setInvoiceValue(value: string) {
        this.values.invoice = value;
        this.setValues();
    }
    setType_doc_billingValue(value: string) {
        this.values.type_doc_billing = value;
        this.setValues();
    }
    setNumber_doc_billingValue(value: string) {
        this.values.number_doc_billing = value;
        this.setValues();
    }
    setName_billingValue(value: string) {
        this.values.name_billing = value;
        this.setValues();
    }
    setNameItemValue(value: string) {
        this.values.name = value;
        this.setValues();
    }
    setDescriptionValue(value: string) {
        this.values.description = value;
        this.setValues();
    }
    setMobilephone_billingValue(value: string) {
        this.values.mobilephone_billing = value;
        this.setValues();
    }
    setAddress_billingValue(value: string) {
        this.values.address_billing = value;
        this.setValues();
    }
    setTax_baseValue(value: string) {
        this.values.tax_base = value;
        this.setValues();
    }
    setTaxValue(value: string) {
        this.values.tax = value;
        this.setValues();
    }
    setAmountValue(value: string) {
        this.values.amount = value;
        this.setValues();
    }
    setValues() {
        this.show = {
            verCodigo: this.values.invoice !== null ? true : false,
            verTipoDoc: this.values.type_doc_billing !== null ? true : false,
            verNumeroDoc:
                this.values.number_doc_billing !== null ? true : false,
            verNameBilling: this.values.name_billing !== null ? true : false,
            verNameConcepto: this.values.name !== null ? true : false,
            verDescripcion: this.values.description !== null ? true : false,
            verTelefono:
                this.values.mobilephone_billing !== null ? true : false,
            verDireccion: this.values.address_billing !== null ? true : false,
            verSubtotal: this.values.tax_base !== null ? true : false,
            verTax: this.values.tax !== null ? true : false,
            verTotal: this.values.amount !== null ? true : false,
        };
    }
}
