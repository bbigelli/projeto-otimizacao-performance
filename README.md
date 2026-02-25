# Projeto de Otimização de Performance Web - Galeria Natureza Viva

## 1. Escolha do Projeto
**Nome do Projeto:** Galeria Natureza Viva  
**Tecnologias utilizadas:** HTML5, CSS3, JavaScript Vanilla  
**Tipo:** Site de galeria de fotos com foco em imagens de natureza

## 2. Análise Inicial

### Relatório Lighthouse - Antes das Otimizações
![Lighthouse Inicial](screenshots/lighthouse-inicial.png)

**Métricas obtidas:**
- Performance: **45**
- Acessibilidade: **82**
- Boas Práticas: **75**
- SEO: **90**

### Gargalos Identificados

1. **Imagens não otimizadas (maior impacto)**
   - 7 imagens em JPEG pesadas (total: 24.5MB)
   - Sem lazy loading
   - Dimensões originais sem redimensionamento

2. **JavaScript bloqueante**
   - jQuery e Bootstrap JS carregados no head
   - Código não utilizado (~70% do JavaScript)

3. **CSS não otimizado**
   - Bootstrap CSS completo (150KB não utilizado)
   - Múltiplas requisições CSS
   - Estilos não utilizados (~60% do CSS)

4. **Requisições desnecessárias**
   - Font Awesome (ícones não utilizados)
   - jQuery (substituível por JS nativo)
   - API externa que não existe

## 3. Otimizações Aplicadas

### 📸 Imagens
```bash
npm run optimize-images