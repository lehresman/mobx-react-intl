export interface IMessageFormat {
    id: string;
    defaultMessage: string;
    description?: string;
}
export declare class LocaleStore {
    private _locale;
    private translations;
    constructor(defaultLocale: string, translations: {
        [key: string]: {
            [id: string]: string;
        };
    });
    value: string;
    readonly messages: {
        [key: string]: string;
    };
    formatMessage: (id: string, values?: object | undefined) => string;
    formatDefinedMessage: (message: IMessageFormat, values?: object | undefined) => string;
}
