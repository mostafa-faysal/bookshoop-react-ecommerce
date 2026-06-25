$historyPath = "$env:APPDATA\Code\User\History"

Get-ChildItem -Path $historyPath -Filter "entries.json" -Recurse -ErrorAction SilentlyContinue | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match "AlertToLogin.jsx" -and $content -match "books_react") {
        Write-Output "Found AlertToLogin in $($_.Directory.FullName)"
    }
    if ($content -match "Loader.jsx" -and $content -match "books_react") {
        Write-Output "Found Loader in $($_.Directory.FullName)"
    }
    if ($content -match "ErrorMessage.jsx" -and $content -match "books_react") {
        Write-Output "Found ErrorMessage in $($_.Directory.FullName)"
    }
    if ($content -match "LoaderInfo.jsx" -and $content -match "books_react") {
        Write-Output "Found LoaderInfo in $($_.Directory.FullName)"
    }
}
