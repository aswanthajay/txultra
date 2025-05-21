import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event: FetchEvent) {
  try {
    // Try to serve static assets
    return await getAssetFromKV(event)
  } catch (e) {
    // If static asset not found, serve index.html
    return new Response(await getAssetFromKV(event, {
      mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req)
    }))
  }
}