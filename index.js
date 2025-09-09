const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
}

async function fetch(request) {
  if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })
  return new Response('OK', { headers: corsHeaders })
}

export default { fetch }
