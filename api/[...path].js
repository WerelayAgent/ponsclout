export default async function handler(req, res) {
  try {
    const targetUrl = 'https://www.cloutfun.xyz' + req.url;
    
    const options = {
      method: req.method,
      headers: {
        'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0',
        'Accept': 'application/json',
      }
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      let body = '';
      for await (const chunk of req) {
        body += chunk;
      }
      options.body = body;
      options.headers['Content-Type'] = req.headers['content-type'] || 'application/json';
    }

    const fetchRes = await fetch(targetUrl, options);
    const data = await fetchRes.text();
    
    res.status(fetchRes.status);
    
    const contentType = fetchRes.headers.get('content-type');
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.send(data);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy failed', message: String(err) });
  }
}
