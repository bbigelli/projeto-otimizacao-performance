// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cores para o console
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    red: '\x1b[31m'
};

console.log(`${colors.blue}🔍 Iniciando otimização de imagens...${colors.reset}\n`);

// Função para garantir que a pasta images existe
function ensureImagesFolder() {
    const imagesDir = path.join(__dirname, '..', 'images');
    if (!fs.existsSync(imagesDir)) {
        console.log(`${colors.yellow}📁 Pasta 'images' não encontrada. Criando...${colors.reset}`);
        fs.mkdirSync(imagesDir, { recursive: true });
        console.log(`${colors.green}✅ Pasta 'images' criada com sucesso!${colors.reset}`);
        console.log(`${colors.yellow}⚠️  Adicione suas imagens JPG/PNG na pasta 'images' e execute novamente.${colors.reset}`);
        process.exit(0);
    }
    return imagesDir;
}

// Função principal de otimização
async function optimizeImages() {
    try {
        const imageDir = ensureImagesFolder();
        const files = fs.readdirSync(imageDir);
        
        // Filtra apenas arquivos de imagem
        const imageFiles = files.filter(file => 
            file.match(/\.(jpg|jpeg|png)$/i) && !file.includes('.webp')
        );
        
        if (imageFiles.length === 0) {
            console.log(`${colors.yellow}⚠️  Nenhuma imagem JPG/PNG encontrada na pasta 'images'.${colors.reset}`);
            console.log(`${colors.yellow}📥 Coloque suas imagens na pasta e execute novamente.${colors.reset}`);
            return;
        }
        
        console.log(`${colors.green}📸 Encontradas ${imageFiles.length} imagens para otimizar${colors.reset}\n`);
        
        let totalReduction = 0;
        let totalOriginalSize = 0;
        let totalNewSize = 0;
        
        for (const file of imageFiles) {
            const inputPath = path.join(imageDir, file);
            const outputPath = path.join(imageDir, file.replace(/\.[^.]+$/, '.webp'));
            
            // Pega informações do arquivo original
            const stats = fs.statSync(inputPath);
            const originalSize = stats.size / 1024; // KB
            
            console.log(`${colors.blue}🖼️  Processando: ${file}${colors.reset}`);
            console.log(`   Tamanho original: ${originalSize.toFixed(2)} KB`);
            
            try {
                // Otimiza e converte para WebP
                await sharp(inputPath)
                    .resize(1200, 800, { 
                        fit: 'inside', 
                        withoutEnlargement: true 
                    })
                    .webp({ 
                        quality: 80,
                        effort: 6 // Esforço de compressão (0-6)
                    })
                    .toFile(outputPath);
                
                // Pega informações do arquivo otimizado
                const newStats = fs.statSync(outputPath);
                const newSize = newStats.size / 1024; // KB
                const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);
                
                totalOriginalSize += originalSize;
                totalNewSize += newSize;
                totalReduction += parseFloat(reduction);
                
                console.log(`   ${colors.green}✅ Convertido: ${path.basename(outputPath)}${colors.reset}`);
                console.log(`   📊 Tamanho final: ${newSize.toFixed(2)} KB (${reduction}% menor)`);
                
                // Opcional: criar versão redimensionada da original
                if (originalSize > 500) { // Se for maior que 500KB
                    const resizedPath = path.join(imageDir, file.replace(/\.[^.]+$/, '_redimensionado.jpg'));
                    await sharp(inputPath)
                        .resize(1200, 800, { fit: 'inside' })
                        .jpeg({ quality: 85 })
                        .toFile(resizedPath);
                    console.log(`   ${colors.yellow}📐 Versão redimensionada criada${colors.reset}`);
                }
                
                console.log(''); // Linha em branco
                
            } catch (error) {
                console.error(`${colors.red}❌ Erro ao processar ${file}:${colors.reset}`, error.message);
            }
        }
        
        // Resumo final
        console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}`);
        console.log(`${colors.green}✅ OTIMIZAÇÃO CONCLUÍDA!${colors.reset}`);
        console.log(`${colors.blue}═══════════════════════════════════════${colors.reset}`);
        console.log(`📊 Total de imagens: ${imageFiles.length}`);
        console.log(`📦 Tamanho original total: ${totalOriginalSize.toFixed(2)} KB`);
        console.log(`📦 Tamanho final total: ${totalNewSize.toFixed(2)} KB`);
        console.log(`📉 Redução média: ${(totalReduction / imageFiles.length).toFixed(2)}%`);
        console.log(`${colors.green}✨ Arquivos WebP criados com sucesso!${colors.reset}`);
        
    } catch (error) {
        console.error(`${colors.red}❌ Erro durante a otimização:${colors.reset}`, error);
    }
}

// Executa a otimização
optimizeImages();