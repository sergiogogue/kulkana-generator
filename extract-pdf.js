const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Headers CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Manejar preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { apiKey, pdfBase64 } = JSON.parse(event.body);

    // Validaciones
    if (!apiKey) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'API Key es requerida' })
      };
    }

    if (!pdfBase64) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'PDF es requerido' })
      };
    }

    if (!apiKey.startsWith('sk-ant-')) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'API Key inválida (debe empezar con sk-ant-)' })
      };
    }

    // Llamar a la API de Anthropic
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
              source: {
                type: 'base64',
                media_type: 'application/pdf',
                data: pdfBase64
              }
            },
            {
              type: 'text',
              text: `Analiza esta ficha técnica de Kulkana y extrae TODOS los datos disponibles.

Responde SOLO con un objeto JSON válido, sin explicaciones, sin markdown, sin bloques de código.

{
  "nombreProyecto": "nombre del macrolote/lote (string)",
  "identificador": "código/identificador (string)",
  "superficieTotal": número_sin_comas,
  "usoSuelo": "tipo de uso (string)",
  "precioM2": número_sin_comas,
  "precioTotal": número_sin_comas,
  "estatus": "estado del proyecto (string)",
  "fechaEntrega": "fecha de entrega (string)",
  "cos": "coeficiente de ocupación (string)",
  "cus": "coeficiente de utilización (string)",
  "nivelesMaximos": "niveles permitidos (string)",
  "topografia": "descripción topografía (string)",
  "restriccionFrontal": "restricción frontal (string)",
  "restriccionLateral": "restricción lateral (string)"
}

CRÍTICO:
- Números SIN comas, puntos, símbolos de moneda, ni separadores
- Si un dato no existe, usa null
- Responde SOLO el JSON, nada más`
            }
          ]
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic API error:', data);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: data.error?.message || 'Error al llamar a Anthropic API',
          details: data
        })
      };
    }

    // Extraer y limpiar la respuesta
    const textContent = data.content
      .filter(item => item.type === 'text')
      .map(item => item.text)
      .join('');

    // Limpiar JSON (remover markdown si existe)
    let cleanJson = textContent.trim();
    cleanJson = cleanJson.replace(/^```json\s*/gm, '');
    cleanJson = cleanJson.replace(/^```\s*/gm, '');
    cleanJson = cleanJson.trim();

    // Validar que sea JSON válido
    let extractedData;
    try {
      extractedData = JSON.parse(cleanJson);
    } catch (parseError) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Error al parsear respuesta de Claude',
          raw: textContent,
          parseError: parseError.message
        })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: extractedData,
        raw: data
      })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Error interno del servidor',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
