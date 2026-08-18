from PIL import Image
import os

def make_transparent(img_path):
    try:
        if not os.path.exists(img_path):
            print(f"File not found: {img_path}")
            return
        
        img = Image.open(img_path).convert('RGBA')
        data = img.getdata()
        bg_color = data[0]
        new_data = []
        threshold = 30
        for item in data:
            if abs(item[0]-bg_color[0])<threshold and abs(item[1]-bg_color[1])<threshold and abs(item[2]-bg_color[2])<threshold:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
        img.putdata(new_data)
        
        # Save as png even if original was jpg to preserve transparency
        new_path = img_path
        if img_path.endswith('.jpg'):
            new_path = img_path.replace('.jpg', '.png')
        img.save(new_path)
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

make_transparent(r'c:\portfolio\public\ganpat.png')
make_transparent(r'c:\portfolio\public\infinitraq.jpg')
make_transparent(r'c:\portfolio\public\atribs.png')
make_transparent(r'c:\portfolio\public\nit-trichy.png')
