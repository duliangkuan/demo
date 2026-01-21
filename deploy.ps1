# Vercel 部署脚本
Write-Host "开始部署到 Vercel..." -ForegroundColor Green

# 检查是否已登录
Write-Host "检查 Vercel 登录状态..." -ForegroundColor Yellow
$whoami = vercel whoami 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "需要先登录 Vercel" -ForegroundColor Red
    Write-Host "请运行: vercel login" -ForegroundColor Yellow
    Write-Host "然后在浏览器中完成登录" -ForegroundColor Yellow
    exit 1
}

Write-Host "已登录，开始部署..." -ForegroundColor Green

# 部署到生产环境
Write-Host "正在部署到生产环境..." -ForegroundColor Yellow
vercel --prod --yes

if ($LASTEXITCODE -eq 0) {
    Write-Host "部署成功！" -ForegroundColor Green
} else {
    Write-Host "部署失败，请检查错误信息" -ForegroundColor Red
}
