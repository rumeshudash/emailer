export interface EmailTemplate {
    (props: any): React.ReactNode;
    PreviewProps?: any;
}

export const isEmailTemplate = (val: unknown): val is EmailTemplate => {
    return typeof val === 'function';
};
