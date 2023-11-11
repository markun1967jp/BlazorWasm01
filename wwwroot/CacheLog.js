async function saveToCache(cacheName, url, data) {
    const cache = await caches.open(cacheName);
    const response = new Response(new Blob([data], { type: 'text/plain' }));
    cache.put(url, response);
}

async function getFromCache(cacheName, url) {
    const cache = await caches.open(cacheName);
    const response = await cache.match(url);
    if (!response) throw Error('Data not found in cache');
    return await response.text();
}