import numpy as np
from PIL import Image
import os

def remove_background(img):
    data = np.array(img)
    r = data[..., 0].astype(float)
    g = data[..., 1].astype(float)
    b = data[..., 2].astype(float)
    a = data[..., 3]
    
    dist = np.sqrt((255-r)**2 + (255-g)**2 + (255-b)**2)
    alpha = np.clip(dist * 4, 0, 255).astype(np.uint8)
    
    # Make white glow into gold so we don't have white halos
    mask = alpha < 255
    data[..., 0][mask] = 203  # R: #CBA135 is 203, 161, 53
    data[..., 1][mask] = 161
    data[..., 2][mask] = 53
    
    data[..., 3] = np.minimum(a, alpha)
    return Image.fromarray(data)

def crop_shapes(image_path, prefix):
    if not os.path.exists(image_path):
        print(f"File not found: {image_path}")
        return
        
    img = Image.open(image_path).convert("RGBA")
    img_transparent = remove_background(img)
    
    data = np.array(img_transparent)
    alpha = data[..., 3]
    
    non_empty_columns = np.where(alpha.max(axis=0) > 10)[0]
    non_empty_rows = np.where(alpha.max(axis=1) > 10)[0]
    
    if len(non_empty_columns) == 0:
        return
        
    col_diffs = np.diff(non_empty_columns)
    row_diffs = np.diff(non_empty_rows)
    
    max_col_gap = max(col_diffs) if len(col_diffs) > 0 else 0
    max_row_gap = max(row_diffs) if len(row_diffs) > 0 else 0
    
    if max_col_gap > 50 and max_col_gap > max_row_gap:
        max_gap_idx = np.argmax(col_diffs)
        
        col1 = non_empty_columns[:max_gap_idx+1]
        col2 = non_empty_columns[max_gap_idx+1:]
        
        c1_min, c1_max = col1[0], col1[-1]
        c2_min, c2_max = col2[0], col2[-1]
        
        r1_mask = alpha[:, c1_min:c1_max+1] > 10
        r1_rows = np.where(r1_mask.max(axis=1))[0]
        r1_min, r1_max = r1_rows[0], r1_rows[-1]
        
        r2_mask = alpha[:, c2_min:c2_max+1] > 10
        r2_rows = np.where(r2_mask.max(axis=1))[0]
        r2_min, r2_max = r2_rows[0], r2_rows[-1]
        
        img_transparent.crop((c1_min, r1_min, c1_max+1, r1_max+1)).save(f'src/assets/{prefix}_1.png')
        img_transparent.crop((c2_min, r2_min, c2_max+1, r2_max+1)).save(f'src/assets/{prefix}_2.png')
        print(f"Split {image_path} vertically into {prefix}_1.png and {prefix}_2.png")
        
    elif max_row_gap > 50:
        max_gap_idx = np.argmax(row_diffs)
        r1 = non_empty_rows[:max_gap_idx+1]
        r2 = non_empty_rows[max_gap_idx+1:]
        
        r1_min, r1_max = r1[0], r1[-1]
        r2_min, r2_max = r2[0], r2[-1]
        
        c1_mask = alpha[r1_min:r1_max+1, :] > 10
        c1_cols = np.where(c1_mask.max(axis=0))[0]
        c1_min, c1_max = c1_cols[0], c1_cols[-1]
        
        c2_mask = alpha[r2_min:r2_max+1, :] > 10
        c2_cols = np.where(c2_mask.max(axis=0))[0]
        c2_min, c2_max = c2_cols[0], c2_cols[-1]
        
        img_transparent.crop((c1_min, r1_min, c1_max+1, r1_max+1)).save(f'src/assets/{prefix}_1.png')
        img_transparent.crop((c2_min, r2_min, c2_max+1, r2_max+1)).save(f'src/assets/{prefix}_2.png')
        print(f"Split {image_path} horizontally into {prefix}_1.png and {prefix}_2.png")
    else:
        c_min, c_max = non_empty_columns[0], non_empty_columns[-1]
        r_min, r_max = non_empty_rows[0], non_empty_rows[-1]
        img_transparent.crop((c_min, r_min, c_max+1, r_max+1)).save(f'src/assets/{prefix}_full.png')
        print(f"Cropped {image_path} into {prefix}_full.png")

try:
    crop_shapes('src/assets/Mapandes Ceremony Of.png', 'main')
    crop_shapes('src/assets/Mapandes Ceremony Of (1).png', 'border')
except Exception as e:
    print(f"Error: {e}")
