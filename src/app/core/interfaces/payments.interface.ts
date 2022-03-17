export interface IPaymentsShowFields {
    verCodigo: boolean;
    verTipoDoc: boolean;
    verNumeroDoc: boolean;
    verNameBilling: boolean;
    verNameConcepto: boolean;
    verDescripcion: boolean;
    verTelefono: boolean;
    verDireccion: boolean;
    verSubtotal: boolean;
    verTax: boolean;
    verTotal: boolean;
}
export interface IPaymentsValues {
    invoice: string | null;
    name: string | null;
    description: string | null;
    name_billing: string | null;
    address_billing: string | null;
    type_doc_billing: string | null;
    mobilephone_billing: string | null;
    number_doc_billing: string | null;
    amount: string | null;
    tax_base: string | null;
    tax: string | null;
    extra1: string | null;
    extra2: string | null;
    extra3: string | null;
    external: string | null;
    lang: string | null;
    country: string | null;
    currency: string | null;
    confirmation: string | null;
    response: string | null;
}
