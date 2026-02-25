# 🚀 PROJETO DE OTIMIZAÇÃO DE PERFORMANCE WEB

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![Lighthouse Performance](https://img.shields.io/badge/Performance-96%25-brightgreen)
![Lighthouse Acessibilidade](https://img.shields.io/badge/Acessibilidade-95%25-brightgreen)
![Lighthouse Boas Práticas](https://img.shields.io/badge/Boas%20Pr%C3%A1ticas-100%25-brightgreen)
![Lighthouse SEO](https://img.shields.io/badge/SEO-100%25-brightgreen)

## 📋 SUMÁRIO
- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Análise Inicial - Antes das Otimizações](#-análise-inicial---antes-das-otimizações)
- [Gargalos Identificados](#-gargalos-identificados)
- [Otimizações Aplicadas](#-otimizações-aplicadas)
- [Resultados - Depois das Otimizações](#-resultados---depois-das-otimizações)
- [Comparativo Detalhado](#-comparativo-detalhado)
- [Como Reproduzir](#-como-reproduzir)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Conclusão](#-conclusão)
- [Autor](#-autor)

---

## 🎯 SOBRE O PROJETO

Este projeto foi desenvolvido como parte dos estudos de **Performance Web**, com o objetivo de demonstrar na prática técnicas de otimização para melhorar a experiência do usuário e as métricas do **Google Lighthouse**.

**O que é o projeto?**
Uma galeria de fotos simples chamada "Natureza Viva", que exibe imagens de paisagens naturais. O projeto foi propositalmente desenvolvido com **más práticas de performance** para depois ser otimizado, demonstrando o impacto real de cada técnica.

**Objetivo principal:**
- Identificar gargalos de performance
- Aplicar técnicas de otimização
- Comparar resultados antes/depois
- Documentar todo o processo

---

## 🛠 TECNOLOGIAS UTILIZADAS

<div align="center">
  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Sharp](https://img.shields.io/badge/Sharp-99CC00?style=for-the-badge&logo=sharp&logoColor=white)

</div>

**Ferramentas de Otimização:**
- 🖼️ **Sharp** - Conversão e compressão de imagens
- ✂️ **CSS Nano** - Minificação de CSS
- 📦 **Terser** - Minificação de JavaScript
- 📊 **Lighthouse** - Medição de performance
- 📈 **PageSpeed Insights** - Análise complementar

---

## 📊 ANÁLISE INICIAL - ANTES DAS OTIMIZAÇÕES

### Relatório Lighthouse - Versão Original

<div align="center">
  <img src="./performace/performace-before.png" alt="Lighthouse Antes" width="800">
  <p><em>Figura 1: Relatório Lighthouse da versão não otimizada</em></p>
</div>

### 📉 Métricas Iniciais

| Métrica | Valor | Classificação |
|---------|-------|---------------|
| **Performance** | **45** | 🔴 Ruim |
| First Contentful Paint (FCP) | 3.2s | 🔴 Ruim |
| Speed Index | 4.5s | 🔴 Ruim |
| Largest Contentful Paint (LCP) | 4.5s | 🔴 Ruim |
| Time to Interactive (TTI) | 5.8s | 🔴 Ruim |
| Total Blocking Time (TBT) | 620ms | 🔴 Ruim |
| Cumulative Layout Shift (CLS) | 0.15 | 🟡 Médio |

### 📸 Screenshot do Carregamento Inicial
<div align="center">
  <img src="./screenshots/carregamento-antes.gif" alt="Carregamento Antes" width="600">
  <p><em>Figura 2: Sequência de carregamento da versão original</em></p>
</div>

---

## 🔍 GARGALOS IDENTIFICADOS

### 1. 🖼️ **Imagens não otimizadas** (Impacto: 🔴 ALTO)

| Problema | Detalhamento |
|----------|--------------|
| **Peso excessivo** | 7 imagens em JPG totalizando **24.5MB** |
| **Formato inadequado** | JPG sem compressão moderna |
| **Dimensões incorretas** | Imagens maiores que o necessário |
| **Sem lazy loading** | Todas as imagens carregavam de uma vez |

### 2. 📦 **Bibliotecas desnecessárias** (Impacto: 🔴 ALTO)

```javascript
// Código que estava sendo carregado sem necessidade
- jQuery (87KB) - Poderia ser substituído por JS nativo
- Bootstrap CSS (150KB) - Apenas 20% era utilizado
- Font Awesome (120KB) - Ícones não utilizados
- Google Fonts com 4 pesos - Apenas 2 eram necessários

3. 📄 CSS não utilizado (Impacto: 🟡 MÉDIO)
/* Exemplo de CSS que estava no arquivo mas não era usado */
.sidebar { display: none; }        /* Elemento não existe */
.widget { border: 1px solid #ddd; } /* Não utilizado */
.modal { display: none; }           /* Sem modal no projeto */
.alert { color: red; }              /* Não utilizado */
.notification { position: fixed; }  /* Não utilizado */
/* +15 outras classes não utilizadas */

4. ⚡ JavaScript bloqueante (Impacto: 🟡 MÉDIO)
<!-- Scripts carregados no head bloqueavam a renderização -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

5. 🗑️ Código morto (Impacto: 🟢 BAIXO)
// Funções declaradas mas nunca chamadas
function calcularMedia() { /* ... */ }
function validarEmail() { /* ... */ }
function gerarSlug() { /* ... */ }

// Arrays gigantes não utilizados
const bigArray = new Array(10000).fill().map((_, i) => ({...}));

6. 🔄 Requisições desnecessárias
// Requisição para API que nem existe
fetch('https://api.exemplo.com/dados')
  .then(response => response.json())
  .then(data => console.log(data));

⚡ OTIMIZAÇÕES APLICADAS
1. 🖼️ Otimização de Imagens
Técnicas aplicadas:

✅ Conversão de JPG/PNG para WebP

✅ Redimensionamento para 1200px de largura máxima

✅ Compressão com qualidade 80%

✅ Lazy loading para imagens abaixo da dobra

✅ Uso da tag <picture> com fallback

Código implementado:
<!-- Antes -->
<img src="images/noronha.jpg" alt="Natureza">

<!-- Depois -->
<picture>
  <source srcset="images/noronha.webp" type="image/webp">
  <img src="images/noronha.jpg" 
       alt="Natureza" 
       loading="lazy"
       width="400" 
       height="300">
</picture>

Script de otimização:
// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');

async function optimizeImages() {
  const files = fs.readdirSync('./images');
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      await sharp(`./images/${file}`)
        .resize(1200, 800, { fit: 'inside' })
        .webp({ quality: 80 })
        .toFile(`./images/${file.replace(/\.[^.]+$/, '.webp')}`);
    }
  }
}

optimizeImages();

2. ✂️ Minificação de Arquivos
CSS - Redução de 57%
# Comando utilizado
npx cssnano css/styles.css css/styles.min.cs

Antes	Depois	Economia
4.2KB	1.8KB	2.4KB
JavaScript - Redução de 84%
# Comando utilizado
npx terser js/main.js -o js/main.min.js -c -m

Antes	Depois	Economia
3.8KB	0.6KB	3.2KB
HTML - Redução de 29%
# Comando utilizado
npx html-minifier index.html -o index.min.html --collapse-whitespace --remove-comments

Antes	Depois	Economia
4.5KB	3.2KB	1.3KB
3. 🧹 Remoção de Código Não Utilizado
JavaScript removido:
// ANTES (código removido)
// jQuery (biblioteca inteira)
// Funções não utilizadas (calcularMedia, validarEmail, gerarSlug)
// Array gigante de 10.000 itens
// Timeout de 5 segundos
// Interval de 10 segundos
// Event listeners desnecessários (scroll, resize)
// Classe GalleryManager não utilizada

// DEPOIS (código mantido)
document.addEventListener('DOMContentLoaded', function() {
  // Apenas funcionalidades essenciais
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('.overlay').style.transform = 'translateY(0)';
    });
    item.addEventListener('mouseleave', () => {
      item.querySelector('.overlay').style.transform = 'translateY(100%)';
    });
  });
});

CSS removido:
/* ANTES (classes removidas) */
.sidebar, .widget, .modal, .alert, .notification, 
.tooltip, .popup, .badge, .pagination, .spinner,
.accordion, .dropdown, .tab

/* DEPOIS (apenas estilos utilizados) */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Open Sans', sans-serif; }
.hero { ... }
.gallery { ... }
.gallery-item { ... }
.overlay { ... }

4. 📦 Otimização de Bibliotecas
Antes:
<!-- 4 requisições externas -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

Depois:
<!-- 0 requisições externas desnecessárias -->
<!-- Todo código foi substituído por CSS/JS nativo -->

5. ⚡ Técnicas de Carregamento Avançadas
CSS Crítico Inline:
<head>
  <style>
    /* CSS crítico para renderização inicial */
    *{margin:0;padding:0;box-sizing:border-box}
    .hero{position:relative;height:100vh}
    .hero-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
  </style>
  
  <!-- CSS não crítico carregado após renderização -->
  <link rel="stylesheet" href="css/styles.min.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="css/styles.min.css"></noscript>
</head>

Preconnect para recursos externos:
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

JavaScript com defer:
<script src="js/main.min.js" defer></script>

📈 RESULTADOS - DEPOIS DAS OTIMIZAÇÕES
Relatório Lighthouse - Versão Otimizada
<div align="center"> <img src="./relatorios/lighthouse-depois.png" alt="Lighthouse Depois" width="800"> <p><em>Figura 3: Relatório Lighthouse após otimizações</em></p> </div>
📊 Métricas Finais
Métrica	Depois	Classificação
Performance	96	🟢 Excelente
First Contentful Paint (FCP)	1.1s	🟢 Bom
Speed Index	1.3s	🟢 Bom
Largest Contentful Paint (LCP)	1.8s	🟢 Bom
Time to Interactive (TTI)	1.8s	🟢 Bom
Total Blocking Time (TBT)	80ms	🟢 Bom
Cumulative Layout Shift (CLS)	0.02	🟢 Bom

Bom
📊 COMPARATIVO DETALHADO
📈 Gráfico de Comparação
<div align="center"> <img src="./screenshots/comparativo-grafico.png" alt="Gráfico Comparativo" width="700"> <p><em>Figura 4: Comparativo de métricas antes/depois</em></p> </div>
📋 Tabela Comparativa Completa
Métrica	Antes	Depois	Melhoria	Impacto
Performance	45	96	▲ 51 pontos	🚀 Extremo
First Contentful Paint	3.2s	1.1s	▼ 66%	🚀 Extremo
Speed Index	4.5s	1.3s	▼ 71%	🚀 Extremo
Largest Contentful Paint	4.5s	1.8s	▼ 60%	🚀 Extremo
Time to Interactive	5.8s	1.8s	▼ 69%	🚀 Extremo
Total Blocking Time	620ms	80ms	▼ 87%	🚀 Extremo
Cumulative Layout Shift	0.15	0.02	▼ 87%	📈 Alto
Peso Total da Página	24.5MB	2.1MB	▼ 91%	🚀 Extremo
Requisições	15	5	▼ 67%	📈 Alto

💾 Comparativo de Peso por Recurso
Recurso	Antes	Depois	Redução
Imagens	24.5 MB	4.2 MB	83%
CSS	4.2 KB	1.8 KB	57%
JavaScript	3.8 KB	0.6 KB	84%
HTML	4.5 KB	3.2 KB	29%
Fontes	120 KB	45 KB	63%
TOTAL	24.5 MB	2.1 MB	91%

⏱️ Timeline de Carregamento
Antes (5.8s até interatividade):
0s   1s   2s   3s   4s   5s   6s
[░░░░][███][████][████][███][░░]
├─── HTML ───┤
     ├─── CSS ───┤
          ├─── JS ───┤
               ├─── Imagens ─────────┤
                    ├─── Interativo ──┤

Depois (1.8s até interatividade):
0s   1s   2s   
[██████████][░░]
├── HTML ─┤
    ├─ CSS (não bloqueante)
    ├─ JS (defer)
    ├─ Imagens (lazy loading)
    └─ Interativo em 1.8s

🎯 Top 3 Otimizações com Maior Impacto
#	Otimização	Ganho de Performance	Explicação
1	🖼️ Imagens WebP + Lazy Loading	+25 pontos	Redução de 20.3MB no carregamento inicial
2	📦 Remoção de bibliotecas	+15 pontos	Eliminação de 357KB de código desnecessário
3	⚡ CSS crítico inline	+11 pontos	Renderização 3x mais rápida

🚀 COMO REPRODUZIR
Pré-requisitos
Node.js (versão 14 ou superior)

Navegador Chrome (para testes com Lighthouse)

Git (para clonar o repositório)

Passo a Passo
# 1. Clone o repositório
git clone https://github.com/bbigelli/projeto-otimizacao-performance.git

# 2. Entre na pasta
cd projeto-otimizacao-performance

# 3. Instale as dependências
npm install

# 4. Execute as otimizações (opcional - já estão otimizadas)
npm run build

# 5. Teste a versão ANTES
# Abra o arquivo: ./antes/index.html no Chrome

# 6. Teste a versão DEPOIS
# Abra o arquivo: ./depois/index.html no Chrome

# 7. Execute o Lighthouse
# Pressione F12 > Aba Lighthouse > "Analisar página carregada"

Scripts Disponíveis
Comando	Descrição
npm run optimize-images	Converte imagens para WebP
npm run minify-css	Minifica CSS
npm run minify-js	Minifica JavaScript
npm run minify-html	Minifica HTML
npm run build	Executa todas as otimizações

🎓 CONCLUSÃO
✅ O que foi alcançado
Aspecto	Antes	Depois	Resultado
Performance	45	96	🟢 Excelente
Tempo de carregamento	5.8s	1.8s	🟢 69% mais rápido
Peso total	24.5MB	2.1MB	🟢 91% mais leve
Requisições	15	5	🟢 67% menos
Experiência do usuário	Ruim	Ótima	🟢 100% melhor
📚 Principais Aprendizados
Imagens são o recurso mais crítico

Otimizá-las traz o maior retorno sobre investimento

WebP + lazy loading = redução de 80-90% no peso

Menos código = mais performance

Cada biblioteca removida conta

JavaScript nativo é mais leve que frameworks para projetos simples

Ferramentas são essenciais

Lighthouse orienta exatamente onde otimizar

Sharp, Terser e CSS Nano automatizam o processo

Testar em condições reais

Rede 3G revela problemas que não aparecem em desktop

Dispositivos móveis são o cenário mais crítico
