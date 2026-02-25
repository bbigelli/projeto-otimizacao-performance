// scripts/minify-files.js
const fs = require('fs');
const path = require('path');

console.log('🔧 Iniciando minificação manual...\n');

// Função para minificar CSS básico
function minifyCSS(content) {
    return content
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários
        .replace(/\s+/g, ' ')              // Espaços múltiplos para um
        .replace(/\s*([{}:;,])\s*/g, '$1') // Remove espaços ao redor de caracteres especiais
        .replace(/;}/g, '}')                // Remove último ponto e vírgula
        .trim();
}

// Função para minificar JavaScript básico
function minifyJS(content) {
    return content
        .replace(/\/\/.*$/gm, '')           // Remove comentários de linha
        .replace(/\/\*[\s\S]*?\*\//g, '')   // Remove comentários multilinha
        .replace(/\s+/g, ' ')                // Espaços múltiplos para um
        .replace(/\s*([=+\-*/{}[\]();,.])\s*/g, '$1') // Remove espaços desnecessários
        .trim();
}

// Minifica CSS
try {
    const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    const minifiedCSS = minifyCSS(cssContent);
    
    fs.writeFileSync(path.join(__dirname, '..', 'css', 'styles.min.css'), minifiedCSS);
    console.log('✅ CSS minificado com sucesso!');
    console.log(`   Tamanho original: ${(cssContent.length / 1024).toFixed(2)} KB`);
    console.log(`   Tamanho minificado: ${(minifiedCSS.length / 1024).toFixed(2)} KB`);
} catch (error) {
    console.log('⚠️  Arquivo CSS não encontrado');
}

console.log('');

// Minifica JavaScript
try {
    const jsPath = path.join(__dirname, '..', 'js', 'main.js');
    const jsContent = fs.readFileSync(jsPath, 'utf8');
    const minifiedJS = minifyJS(jsContent);
    
    fs.writeFileSync(path.join(__dirname, '..', 'js', 'main.min.js'), minifiedJS);
    console.log('✅ JavaScript minificado com sucesso!');
    console.log(`   Tamanho original: ${(jsContent.length / 1024).toFixed(2)} KB`);
    console.log(`   Tamanho minificado: ${(minifiedJS.length / 1024).toFixed(2)} KB`);
} catch (error) {
    console.log('⚠️  Arquivo JavaScript não encontrado');
}

console.log('\n✨ Minificação concluída!');