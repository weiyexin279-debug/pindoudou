/**
 * 拼豆图纸生成器 - 主程序
 */

// ==================== 全局变量 ====================
let currentImage = null;
let currentStandard = null;
let standardsRegistry = null;
let selectedCellSize = 30; // 默认高清

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', async () => {
    await loadStandardsRegistry();
    initEventListeners();
});

// 加载色号标准注册表
async function loadStandardsRegistry() {
    try {
        const response = await fetch('../references/颜色库/standards.json');
        standardsRegistry = await response.json();
        renderStandardSelect();
    } catch (error) {
        console.error('加载色号标准失败:', error);
        // 使用默认配置
        standardsRegistry = getDefaultRegistry();
        renderStandardSelect();
    }
}

// 默认注册表（离线备用）
function getDefaultRegistry() {
    return {
        standards: [
            { id: 'mard-standard', name: 'MARD 标准', total_colors: 221, brand: 'MARD', description: 'MARD品牌拼豆标准色卡，共221色' },
            { id: 'perler-standard', name: 'Perler 中粒', total_colors: 57, brand: 'Perler', description: 'Perler品牌中粒拼豆标准色卡，共57色' },
            { id: 'hama-standard', name: 'Hama 中粒', total_colors: 53, brand: 'Hama', description: 'Hama品牌中粒拼豆标准色卡，共53色' },
            { id: 'artkal-s-standard', name: 'Artkal-S 细粒', total_colors: 159, brand: 'Artkal', description: 'Artkal-S品牌细粒拼豆标准色卡，共159色' },
            { id: 'nabbi-standard', name: 'Nabbi 中粒', total_colors: 30, brand: 'Nabbi', description: 'Nabbi品牌中粒拼豆标准色卡，共30色' },
            { id: 'ikea-standard', name: 'IKEA Pyssla', total_colors: 18, brand: 'IKEA', description: 'IKEA Pyssla品牌拼豆标准色卡，共18色' }
        ]
    };
}

// 渲染色号标准选择器
function renderStandardSelect() {
    const select = document.getElementById('standardSelect');
    select.innerHTML = '';
    
    // 直接列出所有颜色库，按颜色数量排序（多的在前）
    const sortedStandards = [...standardsRegistry.standards].sort((a, b) => 
        (b.total_colors || 0) - (a.total_colors || 0)
    );
    
    sortedStandards.forEach(standard => {
        const option = document.createElement('option');
        option.value = standard.id;
        const colorCount = standard.total_colors || standard.colorCount || 0;
        option.textContent = `${standard.name} (${colorCount}色)`;
        select.appendChild(option);
    });
    
    // 更新提示文字
    updateStandardHint();
    select.addEventListener('change', updateStandardHint);
}

// 更新色号标准提示
function updateStandardHint() {
    const select = document.getElementById('standardSelect');
    const hint = document.getElementById('standardHint');
    const selectedId = select.value;
    const standard = standardsRegistry.standards.find(s => s.id === selectedId);
    
    if (standard) {
        hint.textContent = standard.description || `${standard.brand || ''}拼豆色号体系`;
    }
}

// ==================== 事件监听 ====================
function initEventListeners() {
    // 上传区域
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    
    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    fileInput.addEventListener('change', handleFileSelect);
    
    // 删除图片
    document.getElementById('removeImage').addEventListener('click', removeImage);
    
    // 快捷尺寸按钮
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const [w, h] = btn.dataset.size.split('x').map(Number);
            document.getElementById('widthInput').value = w;
            document.getElementById('heightInput').value = h;
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // 精度预设
    document.querySelectorAll('.precision-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedCellSize = parseInt(btn.dataset.size);
            document.querySelectorAll('.precision-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // 生成按钮
    document.getElementById('generateBtn').addEventListener('click', generatePattern);
    
    // 重置按钮
    document.getElementById('resetBtn').addEventListener('click', resetAll);
    
    // 导出按钮
    document.getElementById('downloadPng').addEventListener('click', downloadPng);
    document.getElementById('copyMaterial').addEventListener('click', copyMaterialList);
}

// 拖拽处理
function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFiles(files);
    }
}

function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        handleFiles(files);
    }
}

function handleFiles(files) {
    const file = files[0];
    if (!file.type.startsWith('image/')) {
        alert('请上传图片文件');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        currentImage = new Image();
        currentImage.onload = () => {
            showPreview(e.target.result);
        };
        currentImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function showPreview(src) {
    document.getElementById('uploadArea').style.display = 'none';
    document.getElementById('previewContainer').style.display = 'block';
    document.getElementById('previewImage').src = src;
}

function removeImage() {
    currentImage = null;
    document.getElementById('uploadArea').style.display = 'block';
    document.getElementById('previewContainer').style.display = 'none';
    document.getElementById('fileInput').value = '';
    document.getElementById('resultSection').style.display = 'none';
}

function resetAll() {
    removeImage();
    document.getElementById('widthInput').value = 80;
    document.getElementById('heightInput').value = 80;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
}

// ==================== 核心算法 ====================

// RGB → XYZ 转换
function rgbToXyz(r, g, b) {
    r = r / 255;
    g = g / 255;
    b = b / 255;
    
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    
    const x = (r * 0.4124564 + g * 0.3575761 + b * 0.1804375) * 100;
    const y = (r * 0.2126729 + g * 0.7151522 + b * 0.0721750) * 100;
    const z = (r * 0.0193339 + g * 0.1191920 + b * 0.9503041) * 100;
    
    return { x, y, z };
}

// XYZ → Lab 转换
function xyzToLab(x, y, z) {
    const xn = 95.047, yn = 100.000, zn = 108.883;
    
    const fx = f(x / xn);
    const fy = f(y / yn);
    const fz = f(z / zn);
    
    const L = 116 * fy - 16;
    const a = 500 * (fx - fy);
    const b = 200 * (fy - fz);
    
    return { L, a, b };
}

function f(t) {
    const delta = 6 / 29;
    return t > delta ? Math.pow(t, 1/3) : t / (3 * delta * delta) + 4 / 29;
}

// RGB → Lab 一键转换
function rgbToLab(r, g, b) {
    const xyz = rgbToXyz(r, g, b);
    return xyzToLab(xyz.x, xyz.y, xyz.z);
}

// 计算 ΔE (CIE76)
function deltaE(lab1, lab2) {
    return Math.sqrt(
        Math.pow(lab1.L - lab2.L, 2) +
        Math.pow(lab1.a - lab2.a, 2) +
        Math.pow(lab1.b - lab2.b, 2)
    );
}

// 预计算颜色的 Lab 值（兼容数组和对象格式）
function precomputeLab(palette) {
    return palette.map(color => {
        // 兼容 rgb 数组格式 [r,g,b] 和对象格式 {r,g,b}
        const r = Array.isArray(color.rgb) ? color.rgb[0] : color.rgb.r;
        const g = Array.isArray(color.rgb) ? color.rgb[1] : color.rgb.g;
        const b = Array.isArray(color.rgb) ? color.rgb[2] : color.rgb.b;
        
        // 如果已有预计算的 Lab 值，直接使用
        if (color.lab) {
            const labL = Array.isArray(color.lab) ? color.lab[0] : (color.lab.L !== undefined ? color.lab.L : color.lab.l);
            const labA = Array.isArray(color.lab) ? color.lab[1] : color.lab.a;
            const labB = Array.isArray(color.lab) ? color.lab[2] : color.lab.b;
            return {
                ...color,
                rgb: { r, g, b },
                lab: { L: labL, a: labA, b: labB }
            };
        }
        
        return {
            ...color,
            rgb: { r, g, b },
            lab: rgbToLab(r, g, b)
        };
    });
}

// 找到最匹配的拼豆颜色（优化版）
function findClosestColor(r, g, b, paletteWithLab) {
    // 白色检测：接近白色的返回null（空白区域）
    const brightness = (r + g + b) / 3;
    if (brightness > 250) {
        return null; // 纯白色区域留空
    }
    
    // 黑色保护：深色优先匹配黑色系
    if (brightness < 30) {
        // 找黑色系颜色（L < 20）
        const blackColors = paletteWithLab.filter(c => c.lab && c.lab.L < 20);
        if (blackColors.length > 0) {
            // 在黑色系中找最接近的
            let bestBlack = blackColors[0];
            let minDiff = Infinity;
            for (const black of blackColors) {
                const dr = r - black.rgb.r;
                const dg = g - black.rgb.g;
                const db = b - black.rgb.b;
                const diff = dr*dr + dg*dg + db*db;
                if (diff < minDiff) {
                    minDiff = diff;
                    bestBlack = black;
                }
            }
            return bestBlack;
        }
    }
    
    // 普通颜色匹配：使用Lab空间
    const pixelLab = rgbToLab(r, g, b);
    
    let minDelta = Infinity;
    let closestColor = null;
    
    for (const bead of paletteWithLab) {
        // 计算Lab色差
        const labDelta = deltaE(pixelLab, bead.lab);
        
        // 额外添加RGB距离作为辅助判断
        const dr = r - bead.rgb.r;
        const dg = g - bead.rgb.g;
        const db = b - bead.rgb.b;
        const rgbDelta = Math.sqrt(dr*dr + dg*dg + db*db);
        
        // 综合评分：Lab色差为主，RGB为辅
        const score = labDelta + rgbDelta * 0.1;
        
        if (score < minDelta) {
            minDelta = score;
            closestColor = bead;
        }
    }
    
    return closestColor;
}

// ==================== 图像处理 ====================

// 像素化图片（保持原图比例，自动填充白边）
function pixelateImage(image, targetWidth, targetHeight) {
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d');
    
    // 白色背景
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, targetWidth, targetHeight);
    
    // 计算图片在目标区域内的位置和大小（保持比例居中）
    const imgRatio = image.width / image.height;
    const targetRatio = targetWidth / targetHeight;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    if (imgRatio > targetRatio) {
        // 图片更宽，以宽度为准
        drawWidth = targetWidth;
        drawHeight = Math.round(targetWidth / imgRatio);
        offsetX = 0;
        offsetY = Math.round((targetHeight - drawHeight) / 2);
    } else {
        // 图片更高，以高度为准
        drawHeight = targetHeight;
        drawWidth = Math.round(targetHeight * imgRatio);
        offsetX = Math.round((targetWidth - drawWidth) / 2);
        offsetY = 0;
    }
    
    // 关闭平滑，使用最近邻插值
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    
    // 对图像做轻微模糊处理，减少噪点和跳色
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = targetWidth;
    tempCanvas.height = targetHeight;
    const tempCtx = tempCanvas.getContext('2d');
    
    // 先绘制到临时画布
    tempCtx.drawImage(canvas, 0, 0);
    
    // 使用CSS滤镜做轻微模糊
    ctx.filter = 'blur(0.5px)';
    ctx.drawImage(tempCanvas, 0, 0);
    ctx.filter = 'none';
    
    return ctx.getImageData(0, 0, targetWidth, targetHeight);
}

// Floyd-Steinberg 抖动处理
function processPixelsWithDithering(imageData, paletteWithLab) {
    const width = imageData.width;
    const height = imageData.height;
    
    // 复制像素数据（Float数组用于误差累积）
    const pixels = new Float32Array(width * height * 4);
    for (let i = 0; i < imageData.data.length; i++) {
        pixels[i] = imageData.data[i];
    }
    
    const colorMap = new Array(width * height);
    const colorCount = {};
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            let r = Math.round(pixels[idx]);
            let g = Math.round(pixels[idx + 1]);
            let b = Math.round(pixels[idx + 2]);
            const a = pixels[idx + 3];
            
            // 跳过透明像素
            if (a < 128) {
                colorMap[y * width + x] = null;
                continue;
            }
            
            // 限制范围
            r = Math.max(0, Math.min(255, r));
            g = Math.max(0, Math.min(255, g));
            b = Math.max(0, Math.min(255, b));
            
            const matched = findClosestColor(r, g, b, paletteWithLab);
            colorMap[y * width + x] = matched;
            
            if (matched) {
                colorCount[matched.code] = (colorCount[matched.code] || 0) + 1;
                
                // 计算误差
                const errR = r - matched.rgb.r;
                const errG = g - matched.rgb.g;
                const errB = b - matched.rgb.b;
                
                // 扩散误差到周围像素
                // 右边像素: 7/16
                if (x + 1 < width) {
                    const i = idx + 4;
                    pixels[i] += errR * 7 / 16;
                    pixels[i + 1] += errG * 7 / 16;
                    pixels[i + 2] += errB * 7 / 16;
                }
                // 左下像素: 3/16
                if (y + 1 < height && x > 0) {
                    const i = ((y + 1) * width + x - 1) * 4;
                    pixels[i] += errR * 3 / 16;
                    pixels[i + 1] += errG * 3 / 16;
                    pixels[i + 2] += errB * 3 / 16;
                }
                // 下方像素: 5/16
                if (y + 1 < height) {
                    const i = ((y + 1) * width + x) * 4;
                    pixels[i] += errR * 5 / 16;
                    pixels[i + 1] += errG * 5 / 16;
                    pixels[i + 2] += errB * 5 / 16;
                }
                // 右下像素: 1/16
                if (y + 1 < height && x + 1 < width) {
                    const i = ((y + 1) * width + x + 1) * 4;
                    pixels[i] += errR * 1 / 16;
                    pixels[i + 1] += errG * 1 / 16;
                    pixels[i + 2] += errB * 1 / 16;
                }
            }
        }
    }
    
    return { colorMap, colorCount, width, height };
}

// 颜色精简：合并相近颜色，减少跳色
function reduceColors(colorMap, colorCount, paletteWithLab, threshold) {
    if (threshold <= 0) return { colorMap, colorCount };
    
    // 获取所有使用的颜色，按使用次数排序
    const usedColors = Object.keys(colorCount)
        .map(code => ({
            code,
            count: colorCount[code],
            color: paletteWithLab.find(c => c.code === code)
        }))
        .filter(c => c.color)
        .sort((a, b) => b.count - a.count);
    
    // 建立颜色映射关系
    const colorMapping = {};
    
    for (let i = 0; i < usedColors.length; i++) {
        const current = usedColors[i];
        if (colorMapping[current.code]) continue; // 已被映射
        
        // 寻找可以合并的颜色（使用次数更少且色差小于阈值）
        for (let j = i + 1; j < usedColors.length; j++) {
            const target = usedColors[j];
            if (colorMapping[target.code]) continue; // 已被映射
            
            // 计算色差
            const colorDiff = deltaE(current.color.lab, target.color.lab);
            
            if (colorDiff <= threshold) {
                // 合并到使用次数更多的颜色
                colorMapping[target.code] = current.code;
            }
        }
    }
    
    // 应用颜色映射
    const newColorMap = colorMap.map(color => {
        if (!color) return null;
        const newCode = colorMapping[color.code];
        if (newCode) {
            return paletteWithLab.find(c => c.code === newCode);
        }
        return color;
    });
    
    // 重新统计颜色
    const newColorCount = {};
    for (const color of newColorMap) {
        if (color) {
            newColorCount[color.code] = (newColorCount[color.code] || 0) + 1;
        }
    }
    
    return { colorMap: newColorMap, colorCount: newColorCount };
}

// 处理像素数据，匹配颜色（无抖动）
function processPixels(imageData, paletteWithLab) {
    const width = imageData.width;
    const height = imageData.height;
    const colorMap = new Array(width * height);
    const colorCount = {};
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const r = imageData.data[idx];
            const g = imageData.data[idx + 1];
            const b = imageData.data[idx + 2];
            const a = imageData.data[idx + 3];
            
            // 跳过透明像素
            if (a < 128) {
                colorMap[y * width + x] = null;
                continue;
            }
            
            const matched = findClosestColor(r, g, b, paletteWithLab);
            colorMap[y * width + x] = matched;
            
            // 统计
            if (matched) {
                colorCount[matched.code] = (colorCount[matched.code] || 0) + 1;
            }
        }
    }
    
    return { colorMap, colorCount, width, height };
}

// ==================== 图纸生成 ====================

// 生成网格图纸
function generatePatternGrid(colorMap, width, height, options = {}) {
    const { 
        cellSize = 20,
        showGridLines = true,
        showColorCodes = true
    } = options;
    
    // 边距用于标注坐标数字
    const margin = 30;
    const canvas = document.createElement('canvas');
    canvas.width = width * cellSize + margin;
    canvas.height = height * cellSize + margin;
    const ctx = canvas.getContext('2d');
    
    // 白色背景
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制坐标数字
    ctx.fillStyle = '#333333';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 顶部横坐标（列号）
    for (let x = 0; x < width; x++) {
        if (x % 5 === 0) { // 每5格标注一次
            const num = x + 1;
            ctx.fillText(num.toString(), margin + x * cellSize + cellSize / 2, margin / 2);
        }
    }
    
    // 左侧纵坐标（行号）
    ctx.textAlign = 'right';
    for (let y = 0; y < height; y++) {
        if (y % 5 === 0) { // 每5格标注一次
            const num = y + 1;
            ctx.fillText(num.toString(), margin - 5, margin + y * cellSize + cellSize / 2);
        }
    }
    
    // 绘制色块
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const color = colorMap[y * width + x];
            const px = margin + x * cellSize;
            const py = margin + y * cellSize;
            
            if (!color) {
                // 透明区域
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(px, py, cellSize, cellSize);
                
                // 绘制斜线表示透明
                ctx.strokeStyle = '#ddd';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(px + cellSize, py + cellSize);
                ctx.stroke();
                continue;
            }
            
            // 绘制颜色块
            ctx.fillStyle = color.hex;
            ctx.fillRect(px, py, cellSize, cellSize);
            
            // 绘制网格线
            if (showGridLines) {
                ctx.strokeStyle = '#ccc';
                ctx.lineWidth = 0.5;
                ctx.strokeRect(px, py, cellSize, cellSize);
            }
            
            // 标注色号
            if (showColorCodes && cellSize >= 15) {
                ctx.fillStyle = getContrastColor(color.rgb);
                ctx.font = `${Math.max(8, cellSize / 3)}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(color.code || color.id, px + cellSize/2, py + cellSize/2);
            }
        }
    }
    
    // 绘制10格分界线（粗线）
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 2;
    
    // 垂直分界线
    for (let x = 10; x < width; x += 10) {
        ctx.beginPath();
        ctx.moveTo(margin + x * cellSize, margin);
        ctx.lineTo(margin + x * cellSize, margin + height * cellSize);
        ctx.stroke();
    }
    
    // 水平分界线
    for (let y = 10; y < height; y += 10) {
        ctx.beginPath();
        ctx.moveTo(margin, margin + y * cellSize);
        ctx.lineTo(margin + width * cellSize, margin + y * cellSize);
        ctx.stroke();
    }
    
    // 绘制外边框
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3;
    ctx.strokeRect(margin, margin, width * cellSize, height * cellSize);
    
    return canvas;
}

// 获取对比文字颜色
function getContrastColor(rgb) {
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    return luminance > 0.5 ? '#000000' : '#ffffff';
}

// ==================== 主流程 ====================

async function generatePattern() {
    if (!currentImage) {
        alert('请先上传图片');
        return;
    }
    
    const generateBtn = document.getElementById('generateBtn');
    generateBtn.disabled = true;
    document.getElementById('loading').style.display = 'flex';
    
    try {
        // 获取设置
        const standardId = document.getElementById('standardSelect').value;
        const targetWidth = parseInt(document.getElementById('widthInput').value) || 80;
        const targetHeight = parseInt(document.getElementById('heightInput').value) || 80;
        
        const showGridLines = document.getElementById('showGridLines').checked;
        const showColorCodes = document.getElementById('showColorCodes').checked;
        const useDithering = document.getElementById('useDithering').checked;
        
        // 加载色号标准
        let palette;
        try {
            const response = await fetch(`../references/颜色库/${standardId}.json`);
            const data = await response.json();
            palette = data.colors;
        } catch (error) {
            console.error('加载色号标准失败:', error);
            alert('加载色号标准失败，请检查网络连接');
            return;
        }
        
        // 预计算 Lab 值
        const paletteWithLab = precomputeLab(palette);
        
        // 像素化
        const imageData = pixelateImage(currentImage, targetWidth, targetHeight);
        
        // 处理像素（根据抖动选项选择处理方式）
        let { colorMap, colorCount } = useDithering 
            ? processPixelsWithDithering(imageData, paletteWithLab)
            : processPixels(imageData, paletteWithLab);
        
        // 颜色精简
        const colorReduceThreshold = parseInt(document.getElementById('colorReduce').value) || 0;
        if (colorReduceThreshold > 0) {
            const reduced = reduceColors(colorMap, colorCount, paletteWithLab, colorReduceThreshold);
            colorMap = reduced.colorMap;
            colorCount = reduced.colorCount;
        }
        
        // 显示原图（保持比例居中）
        const originalCanvas = document.getElementById('originalCanvas');
        originalCanvas.width = targetWidth;
        originalCanvas.height = targetHeight;
        const originalCtx = originalCanvas.getContext('2d');
        
        // 白色背景
        originalCtx.fillStyle = '#ffffff';
        originalCtx.fillRect(0, 0, targetWidth, targetHeight);
        
        // 计算居中位置
        const imgRatio = currentImage.width / currentImage.height;
        const targetRatio = targetWidth / targetHeight;
        let drawW, drawH, offX, offY;
        
        if (imgRatio > targetRatio) {
            drawW = targetWidth;
            drawH = Math.round(targetWidth / imgRatio);
            offX = 0;
            offY = Math.round((targetHeight - drawH) / 2);
        } else {
            drawH = targetHeight;
            drawW = Math.round(targetHeight * imgRatio);
            offX = Math.round((targetWidth - drawW) / 2);
            offY = 0;
        }
        
        originalCtx.imageSmoothingEnabled = false;
        originalCtx.drawImage(currentImage, offX, offY, drawW, drawH);
        
        // 生成图纸
        const patternCanvas = generatePatternGrid(colorMap, targetWidth, targetHeight, {
            cellSize: selectedCellSize,
            showGridLines,
            showColorCodes
        });
        
        const displayCanvas = document.getElementById('patternCanvas');
        displayCanvas.width = patternCanvas.width;
        displayCanvas.height = patternCanvas.height;
        displayCanvas.getContext('2d').drawImage(patternCanvas, 0, 0);
        
        // 保存用于导出
        displayCanvas._patternCanvas = patternCanvas;
        displayCanvas._colorCount = colorCount;
        displayCanvas._palette = palette;
        
        // 显示材料清单
        renderMaterialList(colorCount, palette);
        
        // 显示结果区域
        document.getElementById('resultSection').style.display = 'block';
        document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        console.error('生成失败:', error);
        alert('生成失败: ' + error.message);
    } finally {
        generateBtn.disabled = false;
        document.getElementById('loading').style.display = 'none';
    }
}

// 渲染材料清单
function renderMaterialList(colorCount, palette) {
    const totalBeads = Object.values(colorCount).reduce((a, b) => a + b, 0);
    const colorCountNum = Object.keys(colorCount).length;
    
    document.getElementById('totalBeads').textContent = totalBeads;
    document.getElementById('colorCount').textContent = colorCountNum;
    
    // 排序
    const sorted = Object.entries(colorCount).sort((a, b) => b[1] - a[1]);
    
    const container = document.getElementById('materialItems');
    container.innerHTML = sorted.map(([code, count]) => {
        const color = palette.find(c => (c.code || c.id) === code);
        return `
            <div class="material-item">
                <div class="color-swatch" style="background-color: ${color?.hex || '#fff'}"></div>
                <span class="color-code">${code}</span>
                <span class="color-name">${color?.name || ''}</span>
                <span class="color-count">${count}颗</span>
            </div>
        `;
    }).join('');
}

// ==================== 导出功能 ====================

function downloadPng() {
    const canvas = document.getElementById('patternCanvas')._patternCanvas;
    if (!canvas) {
        alert('请先生成图纸');
        return;
    }
    
    const link = document.createElement('a');
    link.download = `拼豆图纸_${new Date().toISOString().slice(0, 10)}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function copyMaterialList() {
    const canvas = document.getElementById('patternCanvas');
    if (!canvas._colorCount) {
        alert('请先生成图纸');
        return;
    }
    
    const colorCount = canvas._colorCount;
    const palette = canvas._palette;
    
    let text = '拼豆材料清单\n';
    text += '================\n\n';
    
    const total = Object.values(colorCount).reduce((a, b) => a + b, 0);
    text += `总珠数: ${total} 颗\n`;
    text += `颜色数: ${Object.keys(colorCount).length} 种\n\n`;
    
    const sorted = Object.entries(colorCount).sort((a, b) => b[1] - a[1]);
    
    sorted.forEach(([code, count]) => {
        const color = palette.find(c => (c.code || c.id) === code);
        text += `${code}\t${color?.name || ''}\t${count}颗\n`;
    });
    
    navigator.clipboard.writeText(text).then(() => {
        alert('材料清单已复制到剪贴板');
    }).catch(err => {
        console.error('复制失败:', err);
        // 备用方案
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('材料清单已复制到剪贴板');
    });
}
