from PIL import Image, ImageDraw, ImageFilter

size = (900, 900)
img = Image.new('RGB', size, (10, 22, 30))

# soft background glow pattern
for y in range(0, size[1], 12):
    shade = 14 + (y * 3) % 30
    ImageDraw.Draw(img).line([(0, y), (size[0], y)], fill=(shade, 42 + (y % 30), 50), width=2)

# circular portrait frame
mask = Image.new('L', size, 0)
mask_draw = ImageDraw.Draw(mask)
mask_draw.ellipse((150, 110, 750, 760), fill=255)
portrait = Image.new('RGBA', size, (0, 0, 0, 0))
portrait_draw = ImageDraw.Draw(portrait)
portrait_draw.ellipse((170, 130, 730, 770), fill=(126, 198, 187, 255))
# skin tone
portrait_draw.ellipse((260, 250, 640, 620), fill=(240, 196, 150, 255))
# eyes
portrait_draw.ellipse((330, 390, 390, 450), fill=(18, 20, 24, 255))
portrait_draw.ellipse((510, 390, 570, 450), fill=(18, 20, 24, 255))
# hair
portrait_draw.ellipse((225, 210, 675, 610), fill=(32, 38, 42, 255))
# shoulders and shirt
portrait_draw.rounded_rectangle((220, 590, 680, 820), radius=120, fill=(67, 118, 103, 255))
# subtle highlight
portrait_draw.ellipse((390, 230, 520, 330), fill=(255, 255, 255, 80))

img = Image.composite(Image.new('RGBA', size, (0, 0, 0, 0)), img.convert('RGBA'), mask)
img = Image.alpha_composite(img, portrait)
img = img.convert('RGB')
img = img.filter(ImageFilter.SMOOTH_MORE)
img.save('static/img/roushan-profile.jpg', quality=92)
print('saved', img.size)
