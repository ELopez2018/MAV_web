/**
 *
 *
 * @export
 * @interface PaymentsInterface
 */
export interface PaymentsInterface {
    //Parametros compra (obligatorio)
    name: string;
    description: string;
    invoice: string;
    currency: CurrencyEnum;
    amount: string;
    tax_base: string;
    tax: string;
    country: CountryEnum;
    lang: LangEnum;
    //Onpage="false" - Standard="true"
    external: string;
    //Atributosstring; extra1:string;
    extra2?: string;
    extra3?: string;
    extra4?: string;
    extra5?: string;
    extra6?: string;
    extra7?: string;
    extra8?: string;
    confirmation: string;
    response: string;
    //Atributosstring; name_billing:string;
    address_billing: string;
    type_doc_billing: string;
    mobilephone_billing: string;
    number_doc_billing: string;
    //atributo deshabilitación metodo de pago
    // methodsDisable: ["TDC", "PSE", "SP", "CASH", "DP"]
}

export enum LangEnum {
    es = 'es',
}
export enum CountryEnum {
    co = 'co',
}
export enum CurrencyEnum {
    cop = 'cop',
}
