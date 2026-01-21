# Vercel 一键部署脚本
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Vercel 一键部署脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查是否已登录
Write-Host "检查 Vercel 登录状态..." -ForegroundColor Yellow
$whoami = vercel whoami 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "需要先登录 Vercel" -ForegroundColor Red
    Write-Host ""
    Write-Host "请按以下步骤操作:" -ForegroundColor Cyan
    Write-Host "1. 运行命令: vercel login" -ForegroundColor Yellow
    Write-Host "2. 在浏览器中完成登录授权" -ForegroundColor Yellow
    Write-Host "3. 登录成功后，再次运行此脚本" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "或者直接运行: vercel login" -ForegroundColor Green
    exit 1
}

Write-Host "已登录用户: $($whoami -split "`n" | Select-Object -Last 1)" -ForegroundColor Green
Write-Host ""

# 检查是否在正确的目录
if (-not (Test-Path "package.json")) {
    Write-Host "错误: 未找到 package.json，请确保在项目根目录运行此脚本" -ForegroundColor Red
    exit 1
}

Write-Host "项目信息:" -ForegroundColor Cyan
Write-Host "  项目目录: $(Get-Location)" -ForegroundColor White
Write-Host "  构建命令: npm run build" -ForegroundColor White
Write-Host "  输出目录: dist" -ForegroundColor White
Write-Host ""

# 检查是否有未提交的更改
Write-Host "检查 Git 状态..." -ForegroundColor Yellow
$gitStatus = git status --porcelain 2>&1
if ($gitStatus) {
    Write-Host "警告: 检测到未提交的更改" -ForegroundColor Yellow
    Write-Host "建议先提交更改: git add . && git commit -m 'Update'" -ForegroundColor Yellow
    Write-Host ""
    $continue = Read-Host "是否继续部署? (y/n)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        Write-Host "部署已取消" -ForegroundColor Yellow
        exit 0
    }
}

Write-Host ""
Write-Host "开始部署到 Vercel 生产环境..." -ForegroundColor Green
Write-Host ""

# 部署到生产环境
vercel --prod --yes

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  部署成功！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "您的应用已部署到 Vercel 生产环境" -ForegroundColor Cyan
    Write-Host "访问 Vercel 仪表盘查看部署详情: https://vercel.com/dashboard" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  部署失败" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "请检查错误信息并重试" -ForegroundColor Yellow
    exit 1
}
