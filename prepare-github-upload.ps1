$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$target = Join-Path $root "github-upload"

if (Test-Path $target) {
  Remove-Item $target -Recurse -Force
}

New-Item -ItemType Directory -Path $target | Out-Null

$itemsToCopy = @(
  "index.html",
  "app.js",
  "styles.css",
  "assets",
  ".nojekyll",
  "README.md",
  ".gitignore",
  ".gitattributes"
)

foreach ($item in $itemsToCopy) {
  Copy-Item -Path (Join-Path $root $item) -Destination $target -Recurse -Force
}

Write-Host "Pacote pronto em: $target"
