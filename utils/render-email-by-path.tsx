import { renderAsync } from "@react-email/render";
import fs from "node:fs";
import type { ErrorObject } from "../types/error-object";
import { deepMerge } from "./deep-merge";
import { getEmailComponent } from "./get-email-component";
import { improveErrorWithSourceMap } from "./improve-error-with-sourcemap";

export interface RenderedEmailMetadata {
    markup: string;
    plainText: string;
    reactMarkup: string;
}

export type EmailRenderingResult =
    | RenderedEmailMetadata
    | {
          error: ErrorObject;
      };

export const renderEmailByPath = async (
    emailPath: string,
    props: Record<string, unknown> = {}
): Promise<EmailRenderingResult> => {
    const result = await getEmailComponent(emailPath);

    if ("error" in result) {
        return { error: result.error };
    }

    const { emailComponent: Email, sourceMapToOriginalFile } = result;

    const previewProps = deepMerge(Email.PreviewProps || {}, props || {});
    const EmailComponent = Email as React.FC;
    try {
        const markup = await renderAsync(<EmailComponent {...previewProps} />, {
            // pretty: true,
        });
        const plainText = await renderAsync(
            <EmailComponent {...previewProps} />,
            {
                plainText: true,
            }
        );

        const reactMarkup = await fs.promises.readFile(emailPath, "utf-8");

        return {
            markup,
            plainText,
            reactMarkup,
        };
    } catch (exception) {
        const error = exception as Error;

        return {
            error: improveErrorWithSourceMap(
                error,
                emailPath,
                sourceMapToOriginalFile
            ),
        };
    }
};
