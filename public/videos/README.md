# Hero Video Requirements

Para o vídeo hero funcionar corretamente, adicione os seguintes arquivos nesta pasta:

## Especificações do Vídeo

### hero.mp4
- **Resolução:** 1920x1080 (Full HD)
- **Duração:** 10-15 segundos
- **Formato:** H.264 codec, AAC audio
- **Bitrate:** ~1Mbps (target <3MB file size)
- **Conteúdo:** Renovação de alto padrão, ambiente moderno, cinematográfico

### hero.webm (opcional mas recomendado)
- **Resolução:** 1920x1080
- **Duração:** 10-15 segundos  
- **Formato:** VP9 codec
- **Bitrate:** ~800Kbps (target <2MB file size)

## Otimização com FFmpeg

Se você tiver um vídeo original, otimize com:

```bash
# MP4 otimizado
ffmpeg -i input.mp4 -vcodec h264 -acodec aac \
  -b:v 1M -maxrate 1.5M -bufsize 2M \
  -vf scale=1920:1080 -r 30 hero.mp4

# WebM otimizado
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 800k \
  -vf scale=1920:1080 -r 30 hero.webm
```

## Fontes de Vídeo

**Stock footage (gratuito):**
- Pexels: https://www.pexels.com/search/videos/luxury%20renovation/
- Pixabay: https://pixabay.com/videos/search/interior%20design/
- Videvo: https://www.videvo.net/

**Buscar por:**
- "luxury home renovation"
- "modern interior design"
- "construction timelapse"
- "premium apartment renovation"

## Comportamento Atual

- **Desktop:** Vídeo autoplay com loop (quando disponível)
- **Mobile:** Fallback para imagem estática (economia de banda)
- **Performance:** Vídeo pausa quando fora da viewport
- **Fallback:** Se vídeo não carregar, mostra poster (hero-bg.webp)
