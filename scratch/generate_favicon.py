import os
from PIL import Image, ImageDraw, ImageFont

def generate_favicon():
    # 1. Create a 32x32 image with RGBA channel
    size = (32, 32)
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    
    # 2. Draw the linear gradient background (blue to cyan)
    # Blue: #1d4ed8 (29, 78, 216) -> Cyan: #22d3ee (34, 211, 238)
    for x in range(32):
        for y in range(32):
            # Interpolate based on diagonal distance
            factor = (x + y) / 62.0
            r = int(29 + (34 - 29) * factor)
            g = int(78 + (211 - 78) * factor)
            b = int(216 + (238 - 216) * factor)
            img.putpixel((x, y), (r, g, b, 255))
            
    # 3. Create a rounded corner mask (radius = 7)
    mask = Image.new("L", size, 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, 31, 31], radius=7.5, fill=255)
    
    # Apply rounded corners to gradient background
    rounded_img = Image.new("RGBA", size, (0, 0, 0, 0))
    rounded_img.paste(img, (0, 0), mask)
    
    # 4. Draw bold "RN" text in the center
    draw = ImageDraw.Draw(rounded_img)
    try:
        # Load Arial Bold from default Windows font path
        font = ImageFont.truetype("arialbd.ttf", 13)
    except IOError:
        # Fallback to default font if not found
        font = ImageFont.load_default()
        
    # Use middle-middle anchor to center text perfectly
    draw.text((16, 15.5), "RN", fill=(255, 255, 255, 255), font=font, anchor="mm")
    
    # 5. Ensure target directory exists and save as favicon.ico
    os.makedirs("public", exist_ok=True)
    rounded_img.save("public/favicon.ico", format="ICO", sizes=[(32, 32)])
    print("Favicon successfully generated at public/favicon.ico")

if __name__ == "__main__":
    generate_favicon()
