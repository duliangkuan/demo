# GitHub 推送脚本
Write-Host "准备推送到 GitHub..." -ForegroundColor Green

# 检查是否已配置远程仓库
$remote = git remote -v
if ($remote) {
    Write-Host "已配置远程仓库:" -ForegroundColor Yellow
    Write-Host $remote
    Write-Host ""
    Write-Host "正在推送到 GitHub..." -ForegroundColor Yellow
    git push -u origin master
    if ($LASTEXITCODE -eq 0) {
        Write-Host "推送成功！" -ForegroundColor Green
    } else {
        Write-Host "推送失败，请检查错误信息" -ForegroundColor Red
    }
} else {
    Write-Host "尚未配置远程仓库" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "请按以下步骤操作:" -ForegroundColor Cyan
    Write-Host "1. 在 GitHub 上创建一个新仓库 (https://github.com/new)" -ForegroundColor White
    Write-Host "2. 复制仓库地址（例如: https://github.com/username/repo-name.git）" -ForegroundColor White
    Write-Host "3. 运行以下命令添加远程仓库:" -ForegroundColor White
    Write-Host "   git remote add origin <你的仓库地址>" -ForegroundColor Yellow
    Write-Host "4. 然后运行: git push -u origin master" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "或者直接运行:" -ForegroundColor Cyan
    Write-Host "git remote add origin <你的仓库地址>" -ForegroundColor Yellow
    Write-Host "git push -u origin master" -ForegroundColor Yellow
}
