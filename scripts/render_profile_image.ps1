Add-Type -AssemblyName System.Drawing

$img = New-Object System.Drawing.Bitmap 900, 900
$g = [System.Drawing.Graphics]::FromImage($img)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.Clear([System.Drawing.Color]::FromArgb(12, 28, 36))

$bg = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Rectangle(0,0,900,900)),
    [System.Drawing.Color]::FromArgb(10,22,28),
    [System.Drawing.Color]::FromArgb(18,65,72),
    90
)
$g.FillRectangle($bg, 0, 0, 900, 900)

# soft halo
$halo = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(46, 96, 93))
$g.FillEllipse($halo, 185, 145, 530, 360)

# face / neck
$skin = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240, 196, 146))
$g.FillEllipse($skin, 250, 250, 400, 420)

# hair
$hair = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(38, 44, 52))
$g.FillEllipse($hair, 220, 170, 470, 360)

# shirt / shoulders
$shirt = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(69, 117, 110))
$g.FillEllipse($shirt, 170, 540, 560, 300)

# eyes
$eye = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(18, 20, 24))
$g.FillEllipse($eye, 330, 380, 60, 48)
$g.FillEllipse($eye, 510, 380, 60, 48)

# mouth
$mouth = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(90, 72, 62), 14)
$g.DrawArc($mouth, 320, 440, 260, 120, 200, 140)

# dark frame / border
$frame = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(70, 192, 201), 8)
$g.DrawRectangle($frame, 12, 12, 876, 876)

$outputPath = 'C:\Users\Admin\Desktop\tech-docs\static\img\roushan-profile.jpg'
$img.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$img.Dispose()

Write-Host "Created valid portrait: $outputPath"
