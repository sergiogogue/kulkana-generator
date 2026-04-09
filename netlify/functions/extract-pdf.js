const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { apiKey, pdfBase64 } = JSON.parse(event.body);

    if (!apiKey || !pdfBase64) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'API Key y PDF son requeridos' })
      };
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'document',
              source: { type: 'base64', media_type: 'application/pdf', data: pdfBase64 }
            },
            {
              type: 'text',
              text: `Analiza esta ficha técnica de Kulkana y extrae TODOS los datos. Responde SOLO con JSON válido sin markdown.

{
  "nombreProyecto": "string",
  "identificador": "string",
  "superficieTotal": numero,
  "usoSuelo": "string",
  "precioM2": numero,
  "precioTotal": numero,
  "estatus": "string",
  "fechaEntrega": "string",
  "cos": "string",
  "cus": "string",
  "nivelesMaximos": "string",
  "topografia": "string",
  "restriccionFrontal": "string",
  "restriccionLateral": "string"
}

Números SIN comas ni símbolos. null si no existe.`
            }
          ]
        }]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: data.error?.message || 'Error API' })
      };
    }

    const textContent = data.content.filter(i => i.type === 'text').map(i => i.text).join('');
    let cleanJson = textContent.replace(/```json|```/g, '').trim();
    
    let extractedData;
    try {
      extractedData = JSON.parse(cleanJson);
    } catch {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Error parseando JSON', raw: textContent })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, data: extractedData })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};
