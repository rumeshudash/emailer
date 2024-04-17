import { renderEmailByPath } from "../../../utils/render-email-by-path";
import path from "path";

// export const dynamic = "force-dynamic"; // defaults to auto

export const GET = async (
    _: Request,
    { params }: { params: { slug: string } }
) => {
    return getEmailTemplate(params.slug);
};

export const POST = async (
    request: Request,
    { params }: { params: { slug: string } }
) => {
    try {
        const body = await request.json();
        return getEmailTemplate(params.slug, body);
    } catch (exception: any) {
        return new Response(JSON.stringify({ error: exception.message }), {
            status: 404,
        });
    }
};

const getEmailTemplate = async (
    slug: string,
    props?: Record<string, unknown>
) => {
    const emailRenderingResult = await renderEmailByPath(
        path.join(process.cwd(), `/emails/${slug}.tsx`),
        props
    );

    if ("error" in emailRenderingResult) {
        return new Response(
            JSON.stringify({ error: emailRenderingResult.error }),
            { status: 404 }
        );
    }

    return new Response(
        JSON.stringify({
            html: emailRenderingResult.markup,
            plain_text: emailRenderingResult.plainText,
        })
    );
};
