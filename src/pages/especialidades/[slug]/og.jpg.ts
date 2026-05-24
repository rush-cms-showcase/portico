import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function getStaticPaths() {
  const especialidades = await getCollection('especialidades');
  return especialidades.map(entry => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { entry } = props;
  const { page, content } = entry.data;

  const heroBlock = content.find((block: any) => block._type === 'hero');
  const heroBgWebp = heroBlock?.data?.background_image || '/images/hero-bg.webp';

  const publicDir = path.resolve('./public');
  const bgPath = path.join(publicDir, heroBgWebp);

  let bgBase64 = '';
  try {
    const bgBuffer = await sharp(bgPath).png().toBuffer();
    bgBase64 = `data:image/png;base64,${bgBuffer.toString('base64')}`;
  } catch (error) {
    console.error('Failed to read hero background image:', error);
  }

  const logoPath = path.join(publicDir, 'portico-logo-full.png');
  let logoBase64 = '';
  try {
    const logoBuffer = await fs.readFile(logoPath);
    logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;
  } catch (error) {
    console.error('Failed to read PNG logo (ensure public/portico-logo-full.png exists):', error);
  }

  const fontPath = path.join(publicDir, 'fonts/LexendDeca-Bold.woff');
  let fontData: Buffer;
  try {
    fontData = await fs.readFile(fontPath);
  } catch (e) {
    return new Response('Font not found', { status: 500 });
  }

  const badgeText = page.og_banner?.badge || heroBlock?.data?.badge || 'Especialidades Pórtico';
  const titleText = page.og_banner?.title || page.title.split('-')[0].trim();
  const descriptionText = page.og_banner?.subtitle || page.slogan || page.description.substring(0, 120) + '...';

  const markup = html`
    <div style="display: flex; flex-direction: column; width: 1200px; height: 630px; background-image: url(${bgBase64}); background-size: cover; background-position: center; position: relative;">
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.3)); display: flex;"></div>
      
      <div style="display: flex; flex-direction: column; justify-content: flex-end; position: relative; padding: 70px; height: 100%; color: white; width: 100%;">
        
        <div style="position: absolute; top: 40px; right: 30px; display: flex;">
          <img src="${logoBase64}" style="width: 216px; height: 187px; object-fit: contain;" />
        </div>

        <div style="display: flex; flex-direction: column; max-width: 850px;">
          <div style="color: #e2e2e2; font-size: 32px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px; font-weight: 700; text-decoration: underline;">
            ${badgeText}
          </div>
          <div style="color: #eab308; font-size: 72px; font-family: 'Lexend Deca'; font-weight: 700; line-height: 1.1; display: flex;">
            ${titleText}
          </div>
          <div style="font-size: 36px; color: #d4d4d8; margin-top: 4px; line-height: 1.4; display: flex;">
            ${descriptionText}
          </div>
          <div style="width: 300px; text-align: center; border-radius: 2px; padding: 6px 16px; background-color: #eab308; color: #131313ff; font-weight: bold; font-size: 40px; margin-top: 20px; display: flex;">
            SAIBA MAIS
          </div>
        </div>

      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Lexend Deca',
        data: fontData,
        weight: 700,
        style: 'normal',
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const pngBuffer = resvg.render().asPng();

  const jpgBuffer = await sharp(pngBuffer)
    .jpeg({ quality: 80 })
    .toBuffer();

  return new Response(new Uint8Array(jpgBuffer), {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
