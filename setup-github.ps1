# GitHub 仓库设置脚本
param(
    [Parameter(Mandatory=$true)]
    [string]$RepoUrl
)

Write-Host "配置 GitHub 远程仓库..." -ForegroundColor Green

# 添加远程仓库
Write-Host "添加远程仓库: $RepoUrl" -ForegroundColor Yellow
git remote add origin $RepoUrl

if ($LASTEXITCODE -eq 0) {
    Write-Host "远程仓库添加成功！" -ForegroundColor Green
    
    # 检查当前分支名称
    $branch = git branch --show-current
    if ($branch -eq "master") {
        $pushBranch = "master"
    } else {
        $pushBranch = "main"
    }
    
    Write-Host "正在推送到 $pushBranch 分支..." -ForegroundColor Yellow
    git push -u origin $pushBranch
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "推送成功！" -ForegroundColor Green
        Write-Host "仓库地址: $RepoUrl" -ForegroundColor Cyan
    } else {
        Write-Host "推送失败，请检查:" -ForegroundColor Red
        Write-Host "1. 仓库地址是否正确" -ForegroundColor Yellow
        Write-Host "2. 是否有推送权限" -ForegroundColor Yellow
        Write-Host "3. 如果仓库已存在内容，可能需要先拉取: git pull origin $pushBranch --allow-unrelated-histories" -ForegroundColor Yellow
    }
} else {
    Write-Host "添加远程仓库失败，可能已经存在" -ForegroundColor Red
    Write-Host "尝试更新远程仓库地址..." -ForegroundColor Yellow
    git remote set-url origin $RepoUrl
    git push -u origin master
}
