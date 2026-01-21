# 快速部署脚本
Write-Host "Vercel 快速部署" -ForegroundColor Green
Write-Host ""

# 检查登录状态
$loginCheck = vercel whoami 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "需要先登录 Vercel" -ForegroundColor Yellow
    Write-Host "正在启动登录流程..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "请在浏览器中完成登录，然后按任意键继续..." -ForegroundColor Cyan
    vercel login
    Start-Sleep -Seconds 2
}

# 部署
Write-Host ""
Write-Host "开始部署..." -ForegroundColor Green
vercel --prod --yes
