$historyPath = "$env:APPDATA\Code\User\History"
$targetDir = "f:\Eraa _soft\react\books_react\src\components\ui"

$components = @(
    "alertToLogin/AlertToLogin.jsx",
    "loader/Loader.jsx",
    "errorMessage/ErrorMessage.jsx",
    "loaderInfo/LoaderInfo.jsx"
)

foreach ($comp in $components) {
    $fileName = Split-Path $comp -Leaf
    
    $found = $false
    Get-ChildItem -Path $historyPath -Filter "entries.json" -Recurse -ErrorAction SilentlyContinue | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        if ($content -match "(?i)$fileName" -and $content -match "(?i)books_react") {
            try {
                $json = $content | ConvertFrom-Json
                if ($json.resource -match "(?i)$fileName" -and $json.resource -match "(?i)books_react") {
                    $latestEntry = $json.entries | Sort-Object timestamp -Descending | Select-Object -First 1
                    if ($latestEntry) {
                        $sourceFile = Join-Path $_.Directory.FullName $latestEntry.id
                        $destFile = Join-Path $targetDir $comp
                        
                        $destDir = Split-Path $destFile
                        if (-not (Test-Path $destDir)) {
                            New-Item -ItemType Directory -Force -Path $destDir | Out-Null
                        }
                        Copy-Item -Path $sourceFile -Destination $destFile -Force
                        Write-Output "Restored $comp from history ($sourceFile)"
                        $found = $true
                    }
                }
            } catch {
            }
        }
    }
    if (-not $found) {
        Write-Output "Could not find history for $comp"
    }
}
