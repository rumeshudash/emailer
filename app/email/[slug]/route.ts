import * as Emails from '@/src/emails';
import { renderEmailByPath } from '@/utils/render-email-by-path';

export const dynamic = 'force-dynamic';

export const GET = async (
    _: Request,
    { params }: { params: Promise<{ slug: string }> },
) => {
    const slug = (await params).slug;
    return getEmailTemplate(slug);
};

export const POST = async (
    request: Request,
    { params }: { params: Promise<{ slug: string }> },
) => {
    const body = await request.json();
    const slug = (await params).slug;
    return getEmailTemplate(slug, body);
};

const getEmailTemplate = async (
    slug: string,
    props?: Record<string, unknown>,
) => {
    const template = Emails[slug as keyof typeof Emails];
    const emailRenderingResult = await renderEmailByPath(template, props);

    if ('error' in emailRenderingResult) {
        return new Response(
            JSON.stringify({ error: emailRenderingResult.error }),
            {
                status: 404,
            },
        );
    }

    return new Response(
        JSON.stringify({
            html: emailRenderingResult.markup,
            plain_text: emailRenderingResult.plainText,
        }),
    );
};
