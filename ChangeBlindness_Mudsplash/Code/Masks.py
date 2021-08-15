#!/usr/bin/env python
# -*- coding: utf-8 -*-

#run with python

'''
This creates a difference mask image between two images, for example
for defining the change between two versions of a change blindness image.

To use this, the images should be renamed to version '-a' and '-b' and should be
placed in a their own "stem" image direcotry that includes some information
about what the imageset is and what the image is (it's fine to keep some of 
the original naming scheme for that, since it may make it easy to identify the 
particular image between experiments/labs). For example:

rensink_Castle/rensink_Castle-a.png
rensink_Castle/rensink_Castle-b.png

wolfe_image-99/wolfe_image-99-a.png
wolfe_image-99/wolfe_image-99-b.png

wolfe_0110_L_plant/wolfe_0110_L_plant-a.png
wolfe_0110_L_plant/wolfe_0110_L_plant-b.png

The script is agnostic about whether -a or -b correspond to the modification or not. 

Also, after you run this script, you MUST look over the final difference masks before
trying to define a bounding box around the changed area: sometimes, the default threshold
defined by this script is not high enough and the difference mask contains a lot of noise. 
The script below has a place to include specific image stems that may require high or very 
high thresholds. If you see a noisy image, add the stem name to one of those lists and rerun 
the script.

'''

import os
import sys
import cv2
from PIL import Image, ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES = True


print(os.getcwd())

path = '/Users/adambarnas/Box/Mudsplash/Images/'
difference_mask_dir = '/Users/adambarnas/Box/Mudsplash/Masks'
bounding_box_dir = '/Users/adambarnas/Box/Mudsplash/Boxes'


#Create destination directory for difference_masks
if difference_mask_dir not in os.listdir(path):
    cmd = 'mkdir '+difference_mask_dir
    os.system(cmd)
else:
    pass


#Get the "stem" name for all images, e.g. rensink_Castle or wolfe_0110_L_plant 
stems = [item for item in os.listdir(path) if not item.startswith('.') 
        and item!=difference_mask_dir and item!=bounding_box_dir] #skips .DS_Store files
print(stems)

#Get the two versions, a and b, for each stem image
for stem in stems:
    print(stem)
    for image in os.listdir(path+'/'+stem):
        print(image)
        if '-a.' in image:
            image_a = image
        elif '-b.' in image:
            image_b = image
        else:
            pass
    
    #Imagemagick requires all images to be in the directory from which the command is called. So this changes
    #into the stem directory, makes the difference mask, then moves that into a "difference_masks" directory.
    os.chdir(path+'/'+stem)
        
    
    #When you run this script the first time, you may notice that some images are much noisier than others
    #in showing the difference. These images should be re-run (some trial and error) to produce a differnce
    #mask that captures the difference sufficiently but is less noisy. 
    needs_very_high_thresh = [ 'wolfe_image-024']
    needs_high_thresh = ['wolfe_image-012', 'wolfe_image-013', 'wolfe_image-014', 'wolfe_image-015', 'wolfe_image-016', 'wolfe_image-034', 'wolfe_image-039', 'wolfe_image-046', 'wolfe_image-047', 'wolfe_image-078', 'wolfe_image-079', 'wolfe_image-096', 'wolfe_image-092', 'wolfe_024_L_towels', 'wolfe_024_R_towels']
    needs_low_thresh = ['rensink_Castle', 'rensink_SummerLake', 'wolfe_image-086', 'wolfe_image-108', 'wolfe_001_L_mirror', 'wolfe_001_R_mirror', 'wolfe_002_L_napkin', 'wolfe_002_R_napkin', 'wolfe_003_L_ducks', 'wolfe_003_R_ducks', 'wolfe_009_L_carpet', 'wolfe_009_R_carpet', 'wolfe_026_L_rack', 'wolfe_026_R_rack', 'wolfe_027_L_soapdish', 'wolfe_027_R_soapdish', 'wolfe_029_L_glass', 'wolfe_029_R_glass', 'wolfe_030_L_drawer', 'wolfe_030_R_drawer', 'wolfe_031_L_log', 'wolfe_031_R_log', 'wolfe_035_L_fruit', 'wolfe_035_R_fruit', 'wolfe_037_L_towel', 'wolfe_037_R_towel', 'wolfe_038_L_art', 'wolfe_038_R_art', 'wolfe_039_L_ventilator', 'wolfe_039_R_ventilator', 'wolfe_041_L_fruit', 'wolfe_041_R_fruit', 'wolfe_046_L_remote', 'wolfe_046_R_remote', 'wolfe_057_L_bin', 'wolfe_057_R_bin', 'wolfe_058_L_clutch', 'wolfe_058_R_clutch', 'wolfe_061_L_glass', 'wolfe_061_R_glass', 'wolfe_063_L_laptop', 'wolfe_063_R_laptop', 'wolfe_064_L_bottles', 'wolfe_064_R_bottles', 'wolfe_065_L_cd', 'wolfe_065_R_cd', 'wolfe_067_L_painting', 'wolfe_067_R_painting', 'wolfe_071_L_art', 'wolfe_071_R_art', 'wolfe_072_L_handle', 'wolfe_072_R_handle', 'wolfe_089_L_poster', 'wolfe_089_R_poster', 'wolfe_094_L_ball', 'wolfe_094_R_ball', 'wolfe_098_L_slippers', 'wolfe_098_R_slippers', 'wolfe_108_L_boa', 'wolfe_108_R_boa', 'wolfe_109_L_pillow', 'wolfe_109_R_pillow', 'wolfe_110_L_plant', 'wolfe_110_R_plant', 'wolfe_113_L_plant', 'wolfe_113_R_plant', 'wolfe_115_L_pot', 'wolfe_115_R_pot']
    needs_very_low_thresh = ['wolfe_image-017', 'wolfe_image-035', 'wolfe_image-042', 'wolfe_image-044', 'wolfe_image-045', 'wolfe_image-048', 'wolfe_image-082', 'wolfe_image-088', 'wolfe_053_L_handle', 'wolfe_053_R_handle', 'wolfe_055_L_carpet', 'wolfe_055_R_carpet', 'wolfe_077_L_footrest', 'wolfe_077_R_footrest', 'wolfe_128_L_pot', 'wolfe_128_R_pot', 'catchGarden']
    needs_very_very_low_thresh = ['rensink_BarnTrack', 'rensink_Cockpit', 'rensink_Chopper', 'rensink_Turtle', 'ma_4247084', 'ma_97475929', 'ma_98265889', 'wolfe_image-016', 'wolfe_image-124']
    tricky_wolfe1 = ['wolfe_image-027']
    tricky_wolfe2 = ['wolfe_image-038']
    needs_very_very_very_low_thresh = ['ma_69128765']
    
    if stem in needs_very_high_thresh:
        threshold = 9000
    elif stem in needs_high_thresh:
        threshold = 6000
    elif stem in needs_low_thresh:
        threshold = 3000
    elif stem in needs_very_low_thresh:
        threshold = 2000
    elif stem in tricky_wolfe1:
        threshold = 1500
    elif stem in tricky_wolfe2:
        threshold = 1000
    elif stem in needs_very_very_low_thresh:
        threshold = 500
    elif stem in needs_very_very_very_low_thresh:
        threshold = 5
    else:
        #somewhat arbitrary value -- it workes well for most images, but may need to be tweaked for different imagesets.
        threshold = 1000
    
    
    cmd = "convert "+image_a+" "+image_b+" -compose difference -composite -threshold "+str(threshold)+" -separate -evaluate-sequence Add "+stem+"_difference_mask.png"
    print(cmd)
    os.system(cmd)
    
    os.chdir('../..')
    
    
cmd = 'mv '+path+'*/*difference_mask* ' '/Users/adambarnas/Box/Mudsplash/Masks'
os.system(cmd)
