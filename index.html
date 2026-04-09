<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kulkana - Generador de Presentaciones</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pptxgenjs/3.12.0/pptxgen.bundle.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --kulkana-green: #1a4d2e;
            --kulkana-navy: #1B3B5F;
            --kulkana-orange: #E6A333;
            --kulkana-gold: #c9a55a;
            --bg-main: #f8f9fa;
            --bg-card: #ffffff;
            --text-primary: #2c3e50;
            --text-secondary: #6c757d;
            --border: #dee2e6;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background: var(--bg-main);
            color: var(--text-primary);
            line-height: 1.6;
        }

        /* HEADER */
        .header {
            background: linear-gradient(135deg, var(--kulkana-green), var(--kulkana-navy));
            color: white;
            padding: 1rem 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: -0.5px;
        }

        .logo-subtitle {
            font-size: 0.75rem;
            opacity: 0.9;
            font-weight: 300;
        }

        .desarrollo-selector {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: rgba(255,255,255,0.15);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            backdrop-filter: blur(10px);
        }

        .desarrollo-selector select {
            background: white;
            border: none;
            padding: 0.4rem 0.8rem;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--kulkana-green);
            cursor: pointer;
        }

        .api-key-icon {
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.15);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 1.2rem;
        }

        .api-key-icon:hover {
            background: rgba(255,255,255,0.25);
            transform: scale(1.05);
        }

        /* MODAL API KEY */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(4px);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: white;
            padding: 2rem;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 500px;
            width: 90%;
        }

        .modal-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }

        .modal-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--kulkana-green);
        }

        .modal-close {
            margin-left: auto;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-secondary);
        }

        .api-input-group {
            display: flex;
            gap: 0.75rem;
            margin: 1rem 0;
        }

        .api-input {
            flex: 1;
            padding: 0.75rem;
            border: 2px solid var(--border);
            border-radius: 8px;
            font-size: 0.9rem;
        }

        .api-input:focus {
            outline: none;
            border-color: var(--kulkana-green);
        }

        .api-status {
            padding: 0.75rem;
            border-radius: 8px;
            font-size: 0.875rem;
            margin-top: 1rem;
        }

        .api-status.success {
            background: #d4edda;
            color: #155724;
        }

        .api-status.error {
            background: #f8d7da;
            color: #721c24;
        }

        /* CONTAINER */
        .container {
            max-width: 1400px;
            margin: 2rem auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: 250px 1fr;
            gap: 2rem;
        }

        /* SIDEBAR */
        .sidebar {
            background: var(--bg-card);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            height: fit-content;
            position: sticky;
            top: 100px;
        }

        .sidebar-title {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }

        .nav-item {
            padding: 0.75rem 1rem;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        .nav-item:hover {
            background: #f8f9fa;
            color: var(--text-primary);
        }

        .nav-item.active {
            background: var(--kulkana-green);
            color: white;
            font-weight: 500;
        }

        .nav-icon {
            font-size: 1.1rem;
        }

        .nav-badge {
            margin-left: auto;
            background: var(--kulkana-orange);
            color: white;
            font-size: 0.7rem;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-weight: 600;
        }

        .nav-item.active .nav-badge {
            background: rgba(255,255,255,0.3);
        }

        /* MAIN CONTENT */
        .content {
            background: var(--bg-card);
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            margin-bottom: 80px;
        }

        .section {
            display: none;
        }

        .section.active {
            display: block;
            animation: fadeIn 0.3s;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .section-header {
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid var(--border);
        }

        .section-title {
            font-size: 1.75rem;
            font-weight: 600;
            color: var(--kulkana-green);
            margin-bottom: 0.5rem;
        }

        .section-desc {
            color: var(--text-secondary);
            font-size: 0.95rem;
        }

        /* CARDS */
        .card {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            border: 1px solid var(--border);
        }

        .card-title {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        /* FORMS */
        .form-group {
            margin-bottom: 1.25rem;
        }

        .form-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .form-input, .form-textarea {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid var(--border);
            border-radius: 8px;
            font-size: 0.9rem;
            font-family: inherit;
            transition: all 0.2s;
        }

        .form-input:focus, .form-textarea:focus {
            outline: none;
            border-color: var(--kulkana-green);
        }

        .form-textarea {
            min-height: 100px;
            resize: vertical;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }

        /* FILE UPLOAD */
        .file-zone {
            border: 2px dashed var(--border);
            border-radius: 10px;
            padding: 2rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            background: white;
        }

        .file-zone:hover {
            border-color: var(--kulkana-green);
            background: #f8f9fa;
        }

        .file-zone.loaded {
            border-color: #28a745;
            background: #d4edda;
        }

        .file-icon {
            font-size: 2.5rem;
            margin-bottom: 0.75rem;
        }

        .file-text {
            font-weight: 500;
            color: var(--text-primary);
        }

        .file-hint {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-top: 0.5rem;
        }

        .file-name {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background: white;
            border-radius: 6px;
            display: inline-block;
            font-size: 0.85rem;
            color: #28a745;
            font-weight: 500;
        }

        /* BUTTONS */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            font-family: inherit;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--kulkana-green), var(--kulkana-navy));
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(26, 77, 46, 0.3);
        }

        .btn-block {
            width: 100%;
        }

        .btn-lg {
            padding: 1rem 2rem;
            font-size: 1rem;
        }

        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        /* LOADING */
        .loading {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(4px);
            z-index: 999;
            align-items: center;
            justify-content: center;
        }

        .loading.active {
            display: flex;
        }

        .loading-card {
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #f3f4f6;
            border-top-color: var(--kulkana-green);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin: 0 auto 1rem;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .loading-text {
            font-size: 1rem;
            font-weight: 500;
            color: var(--text-primary);
        }

        /* FOOTER */
        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem 2rem;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 90;
        }

        .progress-info {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        .progress-info strong {
            color: var(--text-primary);
        }

        /* ALERTS */
        .alert {
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            display: none;
        }

        .alert.active {
            display: block;
            animation: slideIn 0.3s;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .alert-success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .alert-error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .alert-warning {
            background: #fff3cd;
            color: #856404;
            border: 1px solid #ffeaa7;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
            .container {
                grid-template-columns: 1fr;
            }
            
            .sidebar {
                position: relative;
                top: 0;
            }

            .form-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- HEADER -->
    <header class="header">
        <div class="header-left">
            <div>
                <div class="logo">KULKANA</div>
                <div class="logo-subtitle">Generador de Presentaciones</div>
            </div>
            <div class="desarrollo-selector">
                <span style="font-size: 0.85rem;">📦</span>
                <select id="desarrolloSelect">
                    <option value="kulkana">Kulkana - Capital del Caribe</option>
                </select>
            </div>
        </div>
        <div class="api-key-icon" onclick="openApiModal()" title="Configurar API Key">
            🔑
        </div>
    </header>

    <!-- MODAL API KEY -->
    <div class="modal" id="apiModal">
        <div class="modal-content">
            <div class="modal-header">
                <span style="font-size: 1.5rem;">🔑</span>
                <div class="modal-title">Configuración API Key</div>
                <span class="modal-close" onclick="closeApiModal()">×</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">
                Necesitas una API Key de Anthropic para extraer datos automáticamente del PDF.
            </p>
            <div class="api-input-group">
                <input type="password" id="apiKeyInput" class="api-input" placeholder="sk-ant-api03-...">
                <button class="btn btn-primary" onclick="saveApiKey()">💾 Guardar</button>
            </div>
            <div id="apiStatus"></div>
            <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 1rem;">
                📍 Obtén tu key en: <a href="https://console.anthropic.com" target="_blank" style="color: var(--kulkana-green);">console.anthropic.com</a>
            </p>
        </div>
    </div>

    <!-- MAIN CONTAINER -->
    <div class="container">
        <!-- SIDEBAR -->
        <aside class="sidebar">
            <div class="sidebar-title">Secciones</div>
            <div class="nav-item active" onclick="showSection('extraccion')" data-section="extraccion">
                <span class="nav-icon">📄</span>
                <span>Extracción PDF</span>
                <span class="nav-badge" id="badge-extraccion">!</span>
            </div>
            <div class="nav-item" onclick="showSection('proyecto')" data-section="proyecto">
                <span class="nav-icon">🏗️</span>
                <span>Proyecto</span>
                <span class="nav-badge" id="badge-proyecto">0/12</span>
            </div>
            <div class="nav-item" onclick="showSection('planos')" data-section="planos">
                <span class="nav-icon">🗺️</span>
                <span>Planos</span>
                <span class="nav-badge" id="badge-planos">0/4</span>
            </div>
            <div class="nav-item" onclick="showSection('caracteristicas')" data-section="caracteristicas">
                <span class="nav-icon">⭐</span>
                <span>Características</span>
                <span class="nav-badge" id="badge-caracteristicas">0/6</span>
            </div>
            <div class="nav-item" onclick="showSection('pago')" data-section="pago">
                <span class="nav-icon">💰</span>
                <span>Esquema Pago</span>
                <span class="nav-badge" id="badge-pago">0/5</span>
            </div>
        </aside>

        <!-- MAIN CONTENT -->
        <main class="content">
            <!-- SECCIÓN: EXTRACCIÓN PDF -->
            <div class="section active" id="section-extraccion">
                <div class="section-header">
                    <h2 class="section-title">📄 Extracción Automática</h2>
                    <p class="section-desc">Sube la ficha técnica en PDF para extraer los datos automáticamente</p>
                </div>

                <div id="alertExtraccion" class="alert"></div>

                <div class="card">
                    <div class="card-title">📋 Ficha Técnica PDF</div>
                    <input type="file" id="pdfFile" accept="application/pdf" style="display: none;" onchange="handlePdfUpload(event)">
                    <div class="file-zone" id="pdfZone" onclick="document.getElementById('pdfFile').click()">
                        <div class="file-icon">📁</div>
                        <div class="file-text">Arrastra tu PDF o haz clic para seleccionar</div>
                        <div class="file-hint">Ficha técnica del proyecto en formato PDF</div>
                        <div id="pdfFileName" class="file-name" style="display: none;"></div>
                    </div>
                    <button class="btn btn-primary btn-block btn-lg" id="btnExtract" disabled onclick="extractDataFromPdf()" style="margin-top: 1rem;">
                        🤖 Extraer Datos Automáticamente
                    </button>
                </div>

                <div class="card" style="background: #fff3cd; border-color: #ffc107;">
                    <div class="card-title" style="color: #856404;">💡 Tip</div>
                    <p style="color: #856404; margin: 0;">
                        Asegúrate de configurar tu API Key (🔑) antes de extraer datos. 
                        Si no tienes una, obtenla gratis en console.anthropic.com
                    </p>
                </div>
            </div>

            <!-- SECCIÓN: PROYECTO -->
            <div class="section" id="section-proyecto">
                <div class="section-header">
                    <h2 class="section-title">🏗️ Datos del Proyecto</h2>
                    <p class="section-desc">Información general del terreno o macrolote</p>
                </div>

                <div class="card">
                    <div class="card-title">📍 Identificación</div>
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label">Nombre del Proyecto *</label>
                            <input type="text" id="nombreProyecto" class="form-input" placeholder="Ej: Kaax" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Identificador</label>
                            <input type="text" id="identificador" class="form-input" placeholder="Ej: KU-008" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Superficie Total (m²) *</label>
                            <input type="number" id="superficieTotal" class="form-input" step="0.01" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Uso de Suelo *</label>
                            <input type="text" id="usoSuelo" class="form-input" placeholder="Ej: Habitacional / Comercial" oninput="updateProgress()">
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-title">💵 Información Comercial</div>
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label">Precio por m² (MXN) *</label>
                            <input type="number" id="precioM2" class="form-input" step="0.01" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Precio Total (MXN) *</label>
                            <input type="number" id="precioTotal" class="form-input" step="0.01" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Estatus</label>
                            <input type="text" id="estatus" class="form-input" placeholder="Ej: LIBRE" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Fecha de Entrega</label>
                            <input type="text" id="fechaEntrega" class="form-input" placeholder="Ej: Diciembre 2028" oninput="updateProgress()">
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-title">📐 Parámetros Urbanísticos</div>
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label">C.O.S. (%)</label>
                            <input type="text" id="cos" class="form-input" placeholder="Ej: 50%" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">C.U.S.</label>
                            <input type="text" id="cus" class="form-input" placeholder="Ej: COS x niveles" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Niveles Máximos</label>
                            <input type="text" id="nivelesMaximos" class="form-input" placeholder="Ej: 20 niveles max." oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Topografía</label>
                            <input type="text" id="topografia" class="form-input" placeholder="Ej: Plano / Regular" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Restricción Frontal</label>
                            <input type="text" id="restriccionFrontal" class="form-input" placeholder="Ej: 10 m" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Restricción Lateral</label>
                            <input type="text" id="restriccionLateral" class="form-input" placeholder="Ej: 5 m" oninput="updateProgress()">
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECCIÓN: PLANOS -->
            <div class="section" id="section-planos">
                <div class="section-header">
                    <h2 class="section-title">🗺️ Planos del Proyecto</h2>
                    <p class="section-desc">Plano macro del desarrollo y plano del terreno</p>
                </div>

                <div class="card">
                    <div class="card-title">🗺️ Plano Macro del Desarrollo</div>
                    <input type="file" id="planoMacro" accept="image/*" style="display: none;" onchange="handleImageUpload(event, 'macro')">
                    <div class="file-zone" id="planoMacroZone" onclick="document.getElementById('planoMacro').click()">
                        <div class="file-icon">🖼️</div>
                        <div class="file-text">Imagen del desarrollo indicando el terreno</div>
                        <div class="file-hint">JPG, PNG • Máx 10MB</div>
                        <div id="planoMacroName" class="file-name" style="display: none;"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-title">📐 Plano del Terreno</div>
                    <input type="file" id="planoTerreno" accept="image/*" style="display: none;" onchange="handleImageUpload(event, 'terreno')">
                    <div class="file-zone" id="planoTerrenoZone" onclick="document.getElementById('planoTerreno').click()">
                        <div class="file-icon">🖼️</div>
                        <div class="file-text">Plano detallado del lote/macrolote</div>
                        <div class="file-hint">JPG, PNG • Máx 10MB</div>
                        <div id="planoTerrenoName" class="file-name" style="display: none;"></div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-title">📍 Colindancias y Lineamientos</div>
                    <div class="form-group">
                        <label class="form-label">Colindancias</label>
                        <textarea id="colindancias" class="form-textarea" placeholder="Norte: Av. Principal 45.00 ml&#10;Sur: Av. Secundaria 42.50 ml&#10;Este: Lote vecino 95.00 ml&#10;Oeste: Área verde 95.00 ml" oninput="updateProgress()"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Lineamientos</label>
                        <textarea id="lineamientos" class="form-textarea" placeholder="Altura máxima: 20 niveles&#10;Uso permitido: Mixto&#10;Densidad: 90 viviendas máx.&#10;Servicios: A pie de macrolote" oninput="updateProgress()"></textarea>
                    </div>
                </div>
            </div>

            <!-- SECCIÓN: CARACTERÍSTICAS -->
            <div class="section" id="section-caracteristicas">
                <div class="section-header">
                    <h2 class="section-title">⭐ Características y Ventajas</h2>
                    <p class="section-desc">Principales beneficios y atractivos del proyecto</p>
                </div>

                <div class="card">
                    <div class="card-title">✨ Características (6 espacios)</div>
                    <div id="caracteristicasContainer">
                        <!-- Se generarán dinámicamente 6 características -->
                    </div>
                </div>
            </div>

            <!-- SECCIÓN: ESQUEMA DE PAGO -->
            <div class="section" id="section-pago">
                <div class="section-header">
                    <h2 class="section-title">💰 Esquema de Pago</h2>
                    <p class="section-desc">Condiciones de financiamiento y estructura de pago</p>
                </div>

                <div class="card">
                    <div class="card-title">💳 Enganche</div>
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label">Porcentaje de Enganche (%)</label>
                            <input type="number" id="porcentajeEnganche" class="form-input" placeholder="Ej: 30" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Monto Enganche (MXN)</label>
                            <input type="number" id="montoEnganche" class="form-input" step="0.01" oninput="updateProgress()">
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-title">📅 Mensualidades</div>
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label">Porcentaje Mensualidades (%)</label>
                            <input type="number" id="porcentajeMensualidades" class="form-input" placeholder="Ej: 70" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Número de Mensualidades</label>
                            <input type="number" id="numeroMensualidades" class="form-input" placeholder="Ej: 18" oninput="updateProgress()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Monto Total Mensualidades (MXN)</label>
                            <input type="number" id="montoMensualidades" class="form-input" step="0.01" oninput="updateProgress()">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- FOOTER -->
    <div class="footer">
        <div class="progress-info">
            <strong id="progressText">0 de 50+ campos completados</strong>
        </div>
        <button class="btn btn-primary btn-lg" onclick="generatePresentation()">
            🎯 Generar Presentación Completa (20 slides)
        </button>
    </div>

    <!-- LOADING -->
    <div class="loading" id="loading">
        <div class="loading-card">
            <div class="spinner"></div>
            <div class="loading-text" id="loadingText">Generando presentación...</div>
        </div>
    </div>

    <script>
        // VARIABLES GLOBALES
        let apiKey = localStorage.getItem('kulkana_api_key') || null;
        let pdfBase64 = null;
        let planoMacroBase64 = null;
        let planoTerrenoBase64 = null;

        // INICIALIZACIÓN
        window.addEventListener('DOMContentLoaded', () => {
            initCaracteristicas();
            updateProgress();
        });

        // MODAL API KEY
        function openApiModal() {
            document.getElementById('apiModal').classList.add('active');
            if (apiKey) {
                document.getElementById('apiKeyInput').value = apiKey;
            }
        }

        function closeApiModal() {
            document.getElementById('apiModal').classList.remove('active');
        }

        function saveApiKey() {
            const key = document.getElementById('apiKeyInput').value.trim();
            if (!key) {
                showApiStatus('Por favor ingresa una API Key', 'error');
                return;
            }
            if (!key.startsWith('sk-ant-')) {
                showApiStatus('La API Key debe comenzar con "sk-ant-"', 'error');
                return;
            }
            localStorage.setItem('kulkana_api_key', key);
            apiKey = key;
            showApiStatus('✅ API Key guardada correctamente', 'success');
            setTimeout(closeApiModal, 1500);
        }

        function showApiStatus(message, type) {
            const status = document.getElementById('apiStatus');
            status.textContent = message;
            status.className = `api-status ${type}`;
        }

        // NAVEGACIÓN
        function showSection(sectionName) {
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            
            document.getElementById(`section-${sectionName}`).classList.add('active');
            document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
        }

        // MANEJO DE ARCHIVOS
        function handlePdfUpload(event) {
            const file = event.target.files[0];
            if (file) {
                document.getElementById('pdfZone').classList.add('loaded');
                document.getElementById('pdfFileName').textContent = `📄 ${file.name}`;
                document.getElementById('pdfFileName').style.display = 'inline-block';
                document.getElementById('btnExtract').disabled = false;
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    pdfBase64 = e.target.result.split(',')[1];
                };
                reader.readAsDataURL(file);
            }
        }

        function handleImageUpload(event, type) {
            const file = event.target.files[0];
            if (file) {
                const zoneName = type === 'macro' ? 'planoMacroZone' : 'planoTerrenoZone';
                const fileName = type === 'macro' ? 'planoMacroName' : 'planoTerrenoName';
                
                document.getElementById(zoneName).classList.add('loaded');
                document.getElementById(fileName).textContent = `🖼️ ${file.name}`;
                document.getElementById(fileName).style.display = 'inline-block';
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (type === 'macro') {
                        planoMacroBase64 = e.target.result.split(',')[1];
                    } else {
                        planoTerrenoBase64 = e.target.result.split(',')[1];
                    }
                    updateProgress();
                };
                reader.readAsDataURL(file);
            }
        }

        // EXTRACCIÓN DE DATOS - USANDO NETLIFY FUNCTIONS
        async function extractDataFromPdf() {
            if (!apiKey) {
                showAlert('extraccion', '⚠️ Configura tu API Key primero haciendo clic en 🔑', 'warning');
                openApiModal();
                return;
            }

            if (!pdfBase64) {
                showAlert('extraccion', '❌ Por favor sube un PDF primero', 'error');
                return;
            }

            showLoading('Extrayendo datos del PDF con Claude...');
            
            try {
                // LLAMADA A NETLIFY FUNCTION (no directamente a la API)
                const response = await fetch('/.netlify/functions/extract-pdf', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        apiKey: apiKey,
                        pdfBase64: pdfBase64
                    })
                });

                const result = await response.json();
                
                if (!response.ok || !result.success) {
                    if (response.status === 401) {
                        throw new Error('API Key inválida. Verifica tu key en console.anthropic.com');
                    }
                    throw new Error(result.error || 'Error en la extracción');
                }

                // La Netlify Function devuelve { success: true, data: extractedData }
                const extractedData = result.data;

                // Llenar campos
                Object.keys(extractedData).forEach(key => {
                    const elem = document.getElementById(key);
                    if (elem && extractedData[key] !== null) {
                        elem.value = extractedData[key];
                    }
                });

                hideLoading();
                showAlert('extraccion', '✅ Datos extraídos exitosamente. Revisa y completa los campos restantes.', 'success');
                updateProgress();
                setTimeout(() => showSection('proyecto'), 2000);
                
            } catch (error) {
                console.error('Error:', error);
                hideLoading();
                showAlert('extraccion', `❌ Error: ${error.message}`, 'error');
            }
        }

        // CARACTERÍSTICAS
        function initCaracteristicas() {
            const container = document.getElementById('caracteristicasContainer');
            for (let i = 1; i <= 6; i++) {
                const div = document.createElement('div');
                div.className = 'form-group';
                div.style.marginBottom = '1.5rem';
                div.innerHTML = `
                    <label class="form-label">Característica ${i}</label>
                    <input type="text" id="car-titulo-${i}" class="form-input" placeholder="Título" style="margin-bottom: 0.5rem;" oninput="updateProgress()">
                    <textarea id="car-desc-${i}" class="form-textarea" placeholder="Descripción" oninput="updateProgress()"></textarea>
                `;
                container.appendChild(div);
            }
        }

        // PROGRESO
        function updateProgress() {
            const inputs = document.querySelectorAll('.form-input, .form-textarea');
            let completed = 0;
            inputs.forEach(input => {
                if (input.value && input.value.trim() !== '') completed++;
            });
            
            if (pdfBase64) completed++;
            if (planoMacroBase64) completed++;
            if (planoTerrenoBase64) completed++;
            
            document.getElementById('progressText').textContent = `${completed} de 50+ campos completados`;
            
            // Actualizar badges
            document.getElementById('badge-proyecto').textContent = countFilledFields(['nombreProyecto', 'identificador', 'superficieTotal', 'usoSuelo', 'precioM2', 'precioTotal', 'estatus', 'fechaEntrega', 'cos', 'cus', 'nivelesMaximos', 'topografia'], 12);
            document.getElementById('badge-planos').textContent = (planoMacroBase64 ? 1 : 0) + (planoTerrenoBase64 ? 1 : 0) + '/4';
        }

        function countFilledFields(fieldIds, total) {
            let filled = 0;
            fieldIds.forEach(id => {
                const elem = document.getElementById(id);
                if (elem && elem.value && elem.value.trim() !== '') filled++;
            });
            return `${filled}/${total}`;
        }

        // LOADING
        function showLoading(text) {
            document.getElementById('loadingText').textContent = text;
            document.getElementById('loading').classList.add('active');
        }

        function hideLoading() {
            document.getElementById('loading').classList.remove('active');
        }

        // ALERTS
        function showAlert(section, message, type) {
            const alert = document.getElementById(`alert${section.charAt(0).toUpperCase() + section.slice(1)}`);
            if (alert) {
                alert.textContent = message;
                alert.className = `alert alert-${type} active`;
                setTimeout(() => alert.classList.remove('active'), 5000);
            }
        }

        // OBTENER DATOS DEL FORMULARIO
        function getFormData() {
            const caracteristicas = [];
            for (let i = 1; i <= 6; i++) {
                const titulo = document.getElementById(`car-titulo-${i}`)?.value || '';
                const desc = document.getElementById(`car-desc-${i}`)?.value || '';
                if (titulo || desc) {
                    caracteristicas.push({ titulo, descripcion: desc });
                }
            }

            return {
                nombreProyecto: document.getElementById('nombreProyecto').value,
                identificador: document.getElementById('identificador').value,
                superficieTotal: document.getElementById('superficieTotal').value,
                usoSuelo: document.getElementById('usoSuelo').value,
                precioM2: document.getElementById('precioM2').value,
                precioTotal: document.getElementById('precioTotal').value,
                estatus: document.getElementById('estatus').value,
                fechaEntrega: document.getElementById('fechaEntrega').value,
                cos: document.getElementById('cos').value,
                cus: document.getElementById('cus').value,
                nivelesMaximos: document.getElementById('nivelesMaximos').value,
                topografia: document.getElementById('topografia').value,
                restriccionFrontal: document.getElementById('restriccionFrontal').value,
                restriccionLateral: document.getElementById('restriccionLateral').value,
                colindancias: document.getElementById('colindancias').value,
                lineamientos: document.getElementById('lineamientos').value,
                caracteristicas: caracteristicas,
                porcentajeEnganche: document.getElementById('porcentajeEnganche').value,
                montoEnganche: document.getElementById('montoEnganche').value,
                porcentajeMensualidades: document.getElementById('porcentajeMensualidades').value,
                numeroMensualidades: document.getElementById('numeroMensualidades').value,
                montoMensualidades: document.getElementById('montoMensualidades').value,
                planoMacroBase64: planoMacroBase64,
                planoTerrenoBase64: planoTerrenoBase64
            };
        }

        // GENERACIÓN COMPLETA DE PRESENTACIÓN - 20 SLIDES
        async function generatePresentation() {
            const data = getFormData();
            
            // Validaciones
            if (!data.nombreProyecto) {
                alert('❌ El nombre del proyecto es requerido');
                showSection('proyecto');
                return;
            }
            
            if (!data.precioTotal || !data.superficieTotal) {
                alert('⚠️ Faltan datos importantes. Completa al menos: Precio Total y Superficie');
                return;
            }
            
            showLoading('Creando presentación Kulkana (20 slides)...');
            
            try {
                const pres = new PptxGenJS();
                pres.layout = 'LAYOUT_16x9';
                pres.author = 'Grupo Guía';
                pres.title = `Kulkana - ${data.nombreProyecto}`;
                
                // SLIDES 1-12: INSTITUCIONALES
                await generateInstitutionalSlides(pres);
                
                // SLIDES 13-20: PROYECTO
                await generateProjectSlides(pres, data);
                
                // GENERAR ARCHIVO
                const fileName = `Kulkana_${data.nombreProyecto.replace(/\s+/g, '_')}_${new Date().getTime()}.pptx`;
                hideLoading();
                showLoading(`Descargando: ${fileName}...`);
                
                await pres.writeFile({ fileName: fileName });
                
                hideLoading();
                alert(`✅ Presentación generada exitosamente:\n\n${fileName}\n\n20 slides completas con diseño profesional Kulkana.`);
                
            } catch (error) {
                console.error('Error generando PPTX:', error);
                hideLoading();
                alert(`❌ Error al generar presentación:\n\n${error.message}\n\nVerifica que todos los campos estén completos.`);
            }
        }

        // SLIDES INSTITUCIONALES (1-12)
        async function generateInstitutionalSlides(pres) {
            // SLIDE 1: Portada Kulkana
            let slide = pres.addSlide();
            slide.background = { color: '1a4d2e' };
            slide.addText('KULKANA', {
                x: 0.5, y: 2.2, w: 9, h: 0.8,
                fontSize: 72, bold: true, color: 'FFFFFF',
                align: 'center'
            });
            slide.addText('Capital del Caribe', {
                x: 0.5, y: 3.1, w: 9, h: 0.5,
                fontSize: 28, color: 'c9a55a',
                align: 'center'
            });

            // SLIDES 2-12: Institucionales con diseño básico
            const institucionalTitles = [
                'La nueva forma de hacer ciudad en Cancún',
                'MASTER PLAN',
                'KULKANA - Visión de Ciudad',
                'UN HÁBITAT NATURAL PREMIUM',
                'MÁS DE 200 PROYECTOS',
                'GRANDEZA NATURAL PRESERVADA',
                'Ubicación Estratégica',
                'LAGO KULKANA',
                'PRIVACIDAD GARANTIZADA',
                'Lotes comerciales y de usos mixtos',
                'Ubicación Privilegiada',
                'Amenidades y Servicios'
            ];

            for (let i = 0; i < institucionalTitles.length; i++) {
                slide = pres.addSlide();
                slide.background = { color: i % 2 === 0 ? 'F8F9FA' : 'FFFFFF' };
                
                slide.addShape(pres.shapes.RECTANGLE, {
                    x: 0, y: 0, w: 0.2, h: 5.625,
                    fill: { color: '1a4d2e' }
                });
                
                slide.addText(institucionalTitles[i], {
                    x: 0.5, y: 0.5, w: 9, h: 0.8,
                    fontSize: 36, bold: true, color: '1a4d2e'
                });
                
                slide.addText('KULKANA', {
                    x: 0.5, y: 5, w: 9, h: 0.4,
                    fontSize: 12, color: '6c757d',
                    align: 'right'
                });
            }
        }

        // SLIDES DEL PROYECTO (13-20)
        async function generateProjectSlides(pres, data) {
            let slide;

            // SLIDE 13: Portada del Proyecto
            slide = pres.addSlide();
            slide.background = { color: '1B3B5F' };
            
            slide.addShape(pres.shapes.RECTANGLE, {
                x: 0, y: 0, w: 0.3, h: 5.625,
                fill: { color: 'E6A333' }
            });
            
            slide.addText(data.nombreProyecto.toUpperCase(), {
                x: 1, y: 2, w: 8, h: 1,
                fontSize: 54, bold: true, color: 'FFFFFF',
                align: 'center'
            });
            
            slide.addText(`${data.identificador || ''} - MACROLOTE ${data.usoSuelo || 'MIXTO'}`, {
                x: 1, y: 3.1, w: 8, h: 0.5,
                fontSize: 18, color: 'E6A333',
                align: 'center'
            });
            
            slide.addText('Cancún, Quintana Roo - México', {
                x: 1, y: 3.7, w: 8, h: 0.4,
                fontSize: 16, color: 'FFFFFF',
                align: 'center'
            });
            
            slide.addText('GRUPO GUÍA', {
                x: 0.5, y: 5, w: 4, h: 0.4,
                fontSize: 12, bold: true, color: 'FFFFFF'
            });
            
            slide.addText('MACROLOTES', {
                x: 5.5, y: 5, w: 4, h: 0.4,
                fontSize: 12, bold: true, color: 'FFFFFF',
                align: 'right'
            });

            // SLIDE 14: Contenido/Índice
            slide = pres.addSlide();
            slide.background = { color: '1B3B5F' };
            
            slide.addShape(pres.shapes.RECTANGLE, {
                x: 9, y: 0, w: 1, h: 5.625,
                fill: { color: 'E6A333' }
            });
            
            slide.addText('CONTENIDO', {
                x: 0.5, y: 0.5, w: 8, h: 0.7,
                fontSize: 36, bold: true, color: 'FFFFFF'
            });

            const contenidoItems = [
                'Resumen Ejecutivo',
                'Ubicación y Accesos',
                'Ficha Técnica Completa',
                'Plano del Terreno',
                'Galería Fotográfica',
                'Características y Ventajas',
                'Inversión',
                'Contacto'
            ];

            contenidoItems.forEach((item, i) => {
                slide.addText([
                    { text: String(i + 1).padStart(2, '0'), options: { color: 'E6A333', bold: true } },
                    { text: `    ${item}`, options: { color: 'FFFFFF' } }
                ], {
                    x: 1, y: 1.5 + (i * 0.4), w: 8, h: 0.35,
                    fontSize: 16
                });
            });

            // SLIDE 15: Foto Plano Macro
            slide = pres.addSlide();
            slide.background = { color: 'FFFFFF' };
            
            slide.addText('PLANO MACRO DEL DESARROLLO', {
                x: 0.5, y: 0.5, w: 9, h: 0.6,
                fontSize: 24, bold: true, color: '1B3B5F',
                align: 'center'
            });
            
            if (data.planoMacroBase64) {
                slide.addImage({
                    data: `data:image/png;base64,${data.planoMacroBase64}`,
                    x: 1, y: 1.3, w: 8, h: 3.8
                });
            } else {
                slide.addShape(pres.shapes.RECTANGLE, {
                    x: 2, y: 1.8, w: 6, h: 3,
                    fill: { color: 'F8F9FA' }
                });
                slide.addText('Espacio para Plano Macro\n\n[Agregar imagen del desarrollo]', {
                    x: 2, y: 2.5, w: 6, h: 2,
                    fontSize: 18, color: '6c757d',
                    align: 'center', valign: 'middle'
                });
            }

            // SLIDE 16: Ficha Técnica
            slide = pres.addSlide();
            slide.background = { color: '1B3B5F' };
            
            slide.addShape(pres.shapes.RECTANGLE, {
                x: 0, y: 0, w: 0.3, h: 5.625,
                fill: { color: 'E6A333' }
            });
            
            slide.addText('FICHA TÉCNICA COMPLETA', {
                x: 0.5, y: 0.5, w: 9, h: 0.6,
                fontSize: 28, bold: true, color: 'FFFFFF'
            });

            const fichaRows = [
                [{text: 'IDENTIFICACIÓN', options: {bold: true, color: 'E6A333', fontSize: 14}}, {text: '', options: {fontSize: 14}}],
                [{text: 'Macrolote', options: {fontSize: 12}}, {text: data.nombreProyecto || '', options: {fontSize: 12}}],
                [{text: 'Identificador', options: {fontSize: 12}}, {text: data.identificador || '', options: {fontSize: 12}}],
                [{text: 'Superficie Total', options: {fontSize: 12}}, {text: `${data.superficieTotal || ''} m²`, options: {fontSize: 12}}],
                [{text: 'Precio por m²', options: {fontSize: 12}}, {text: `$${Number(data.precioM2 || 0).toLocaleString('es-MX')} MXN`, options: {fontSize: 12}}],
                [{text: 'Precio Total', options: {fontSize: 12, bold: true, color: 'E6A333'}}, {text: `$${Number(data.precioTotal || 0).toLocaleString('es-MX')} MXN`, options: {fontSize: 12, bold: true, color: 'E6A333'}}],
                [{text: 'Estatus', options: {fontSize: 12}}, {text: data.estatus || '', options: {fontSize: 12}}],
                [{text: 'Entrega', options: {fontSize: 12}}, {text: data.fechaEntrega || '', options: {fontSize: 12}}],
                [{text: '', options: {fontSize: 8}}, {text: '', options: {fontSize: 8}}],
                [{text: 'PARÁMETROS URBANÍSTICOS', options: {bold: true, color: 'E6A333', fontSize: 14}}, {text: '', options: {fontSize: 14}}],
                [{text: 'C.O.S.', options: {fontSize: 12}}, {text: data.cos || '', options: {fontSize: 12}}],
                [{text: 'C.U.S.', options: {fontSize: 12}}, {text: data.cus || '', options: {fontSize: 12}}],
                [{text: 'Niveles Máximos', options: {fontSize: 12}}, {text: data.nivelesMaximos || '', options: {fontSize: 12}}],
                [{text: 'Topografía', options: {fontSize: 12}}, {text: data.topografia || '', options: {fontSize: 12}}],
                [{text: 'Restricciones', options: {fontSize: 12}}, {text: `Frontal: ${data.restriccionFrontal || ''} | Lateral: ${data.restriccionLateral || ''}`, options: {fontSize: 12}}]
            ];

            slide.addTable(fichaRows, {
                x: 0.8, y: 1.3, w: 8.4, h: 3.8,
                color: 'FFFFFF',
                fill: {color: '1B3B5F'},
                border: {pt: 1, color: 'E6A333'},
                fontFace: 'Arial'
            });

            // SLIDE 17: Plano del Terreno
            slide = pres.addSlide();
            slide.background = { color: '1B3B5F' };
            
            slide.addText('PLANO DEL TERRENO', {
                x: 0.5, y: 0.5, w: 5, h: 0.6,
                fontSize: 24, bold: true, color: 'FFFFFF'
            });

            if (data.planoTerrenoBase64) {
                slide.addImage({
                    data: `data:image/png;base64,${data.planoTerrenoBase64}`,
                    x: 0.5, y: 1.3, w: 5.5, h: 4
                });
            } else {
                slide.addShape(pres.shapes.RECTANGLE, {
                    x: 0.5, y: 1.3, w: 5.5, h: 4,
                    fill: { color: '2C4F6F' }
                });
                slide.addText('Espacio para\nPlano del Terreno', {
                    x: 0.5, y: 2.5, w: 5.5, h: 2,
                    fontSize: 20, color: 'E6A333',
                    align: 'center', valign: 'middle'
                });
            }

            // Colindancias
            slide.addShape(pres.shapes.RECTANGLE, {
                x: 6.2, y: 1.3, w: 3.5, h: 1.8,
                fill: { color: 'E6A333' }
            });
            slide.addText('COLINDANCIAS', {
                x: 6.4, y: 1.5, w: 3.1, h: 0.4,
                fontSize: 14, bold: true, color: '1B3B5F'
            });
            slide.addText(data.colindancias || 'Norte: -\nSur: -\nEste: -\nOeste: -', {
                x: 6.4, y: 2, w: 3.1, h: 1,
                fontSize: 10, color: '1B3B5F'
            });

            // Lineamientos
            slide.addShape(pres.shapes.RECTANGLE, {
                x: 6.2, y: 3.3, w: 3.5, h: 1.8,
                fill: { color: 'E6A333' }
            });
            slide.addText('LINEAMIENTOS', {
                x: 6.4, y: 3.5, w: 3.1, h: 0.4,
                fontSize: 14, bold: true, color: '1B3B5F'
            });
            slide.addText(data.lineamientos || 'Altura máxima: -\nUso permitido: -\nServicios: -', {
                x: 6.4, y: 4, w: 3.1, h: 1,
                fontSize: 10, color: '1B3B5F'
            });

            // SLIDE 18: Características
            slide = pres.addSlide();
            slide.background = { color: '1B3B5F' };
            
            slide.addShape(pres.shapes.RECTANGLE, {
                x: 0, y: 0, w: 0.3, h: 5.625,
                fill: { color: 'E6A333' }
            });
            
            slide.addText('CARACTERÍSTICAS Y VENTAJAS', {
                x: 0.5, y: 0.5, w: 9, h: 0.6,
                fontSize: 28, bold: true, color: 'FFFFFF'
            });
            
            slide.addText(`Kulkana - Capital del Caribe, Cancún`, {
                x: 0.5, y: 1.1, w: 9, h: 0.4,
                fontSize: 14, color: 'E6A333'
            });

            // Grid 2x3 de características
            const caracteristicas = data.caracteristicas.slice(0, 6);
            while (caracteristicas.length < 6) {
                caracteristicas.push({ titulo: `Característica ${caracteristicas.length + 1}`, descripcion: 'Por definir' });
            }

            const rows = 2, cols = 3;
            const boxW = 2.8, boxH = 1.5;
            const startX = 0.7, startY = 1.8;
            const gapX = 0.2, gapY = 0.2;

            caracteristicas.forEach((car, i) => {
                const row = Math.floor(i / cols);
                const col = i % cols;
                const x = startX + col * (boxW + gapX);
                const y = startY + row * (boxH + gapY);

                slide.addShape(pres.shapes.RECTANGLE, {
                    x, y, w: boxW, h: boxH,
                    fill: { color: '2C4F6F' }
                });

                slide.addText(car.titulo || `Característica ${i + 1}`, {
                    x: x + 0.2, y: y + 0.2, w: boxW - 0.4, h: 0.4,
                    fontSize: 14, bold: true, color: 'FFFFFF'
                });

                slide.addText(car.descripcion || 'Por definir', {
                    x: x + 0.2, y: y + 0.7, w: boxW - 0.4, h: 0.7,
                    fontSize: 10, color: 'FFFFFF'
                });
            });

            // SLIDE 19: Esquema de Pago
            slide = pres.addSlide();
            slide.background = { color: '1B3B5F' };
            
            slide.addShape(pres.shapes.RECTANGLE, {
                x: 0, y: 0, w: 0.3, h: 5.625,
                fill: { color: 'E6A333' }
            });
            
            slide.addText('ESQUEMA DE PAGO', {
                x: 0.5, y: 0.5, w: 9, h: 0.6,
                fontSize: 28, bold: true, color: 'FFFFFF'
            });

            slide.addText(`$${Number(data.precioTotal || 0).toLocaleString('es-MX', {minimumFractionDigits: 2})} MXN`, {
                x: 1, y: 1.5, w: 8, h: 0.8,
                fontSize: 42, bold: true, color: 'FFFFFF',
                align: 'center'
            });

            // Enganche
            slide.addShape(pres.shapes.RECTANGLE, {
                x: 1, y: 2.5, w: 3.5, h: 1.5,
                fill: { color: 'E6A333' }
            });
            slide.addText(`${data.porcentajeEnganche || '30'}% - ENGANCHE`, {
                x: 1.2, y: 2.7, w: 3.1, h: 0.4,
                fontSize: 14, bold: true, color: '1B3B5F'
            });
            slide.addText(`$${Number(data.montoEnganche || 0).toLocaleString('es-MX')} MXN`, {
                x: 1.2, y: 3.2, w: 3.1, h: 0.5,
                fontSize: 20, bold: true, color: '1B3B5F'
            });

            // Mensualidades
            slide.addShape(pres.shapes.RECTANGLE, {
                x: 5.5, y: 2.5, w: 3.5, h: 1.5,
                fill: { color: 'E6A333' }
            });
            slide.addText(`${data.porcentajeMensualidades || '70'}% - ${data.numeroMensualidades || '18'} MESES`, {
                x: 5.7, y: 2.7, w: 3.1, h: 0.4,
                fontSize: 14, bold: true, color: '1B3B5F'
            });
            slide.addText(`$${Number(data.montoMensualidades || 0).toLocaleString('es-MX')} MXN`, {
                x: 5.7, y: 3.2, w: 3.1, h: 0.5,
                fontSize: 20, bold: true, color: '1B3B5F'
            });

            // SLIDE 20: Inversión
            slide = pres.addSlide();
            slide.background = { color: '1B3B5F' };
            
            slide.addShape(pres.shapes.RECTANGLE, {
                x: 0, y: 0, w: 0.3, h: 5.625,
                fill: { color: 'E6A333' }
            });
            
            slide.addText('INVERSIÓN', {
                x: 0.5, y: 0.5, w: 4, h: 0.6,
                fontSize: 28, bold: true, color: 'FFFFFF'
            });
            
            slide.addText(`${data.nombreProyecto.toUpperCase()} - ${data.identificador || ''}`, {
                x: 5, y: 0.5, w: 4.5, h: 0.6,
                fontSize: 16, color: 'E6A333',
                align: 'right'
            });

            slide.addText(`$${Number(data.precioTotal || 0).toLocaleString('es-MX', {minimumFractionDigits: 2})}`, {
                x: 1, y: 1.8, w: 8, h: 0.8,
                fontSize: 48, bold: true, color: 'FFFFFF',
                align: 'center'
            });
            
            slide.addText('MXN', {
                x: 1, y: 2.6, w: 8, h: 0.4,
                fontSize: 24, color: 'E6A333',
                align: 'center'
            });

            // Cajas de información
            const infoBoxes = [
                { label: 'SUPERFICIE', value: `${data.superficieTotal || ''} m²` },
                { label: 'PRECIO M²', value: `$${Number(data.precioM2 || 0).toLocaleString('es-MX')} MXN` },
                { label: 'ENTREGA', value: data.fechaEntrega || 'Por definir' }
            ];

            infoBoxes.forEach((box, i) => {
                const x = 1.5 + (i * 2.5);
                slide.addShape(pres.shapes.RECTANGLE, {
                    x, y: 3.5, w: 2, h: 1.2,
                    fill: { color: '2C4F6F' }
                });
                slide.addText(box.label, {
                    x: x + 0.1, y: 3.7, w: 1.8, h: 0.3,
                    fontSize: 10, bold: true, color: 'E6A333'
                });
                slide.addText(box.value, {
                    x: x + 0.1, y: 4.1, w: 1.8, h: 0.4,
                    fontSize: 12, color: 'FFFFFF'
                });
            });
        }
    </script>
</body>
</html>
