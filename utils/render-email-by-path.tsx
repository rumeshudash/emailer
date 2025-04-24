import { EmailTemplate } from '@/types/email-template';
import { render } from '@react-email/render';
import { deepMerge } from './deep-merge';

export interface RenderedEmailMetadata {
    markup: string;
    plainText: string;
}

export type EmailRenderingResult =
    | RenderedEmailMetadata
    | {
          error: Error;
      };

export const renderEmailByPath = async (
    EmailComponent: EmailTemplate,
    props: Record<string, unknown> = {},
    pretty = true,
): Promise<EmailRenderingResult> => {
    const previewProps = deepMerge(
        (EmailComponent as any).PreviewProps || {},
        props || {},
    );

    try {
        const markup = await render(<EmailComponent {...previewProps} />, {
            pretty,
        });
        const plainText = await render(<EmailComponent {...previewProps} />, {
            plainText: true,
        });

        return {
            markup,
            plainText,
        };
    } catch (exception) {
        return {
            error: exception as Error,
        };
    }
};
