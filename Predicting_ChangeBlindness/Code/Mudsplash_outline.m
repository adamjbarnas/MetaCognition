% Clear the workspace and the screen  
sca;  
close all;
clearvars;
Screen('Preference', 'SkipSyncTests', 1);

% Here we call some default settings for setting up Psychtoolbox
PsychDefaultSetup(2);

% Get the screen numbers
screens = Screen('Screens');

% Draw to the external screen if avaliable
screenNumber = max(screens);

% Define black and white
white = WhiteIndex(screenNumber);
black = BlackIndex(screenNumber);
grey = white / 2;

% Open an on screen window
[window, windowRect] = PsychImaging('OpenWindow', screenNumber, grey);

% Get the size of the on screen window
[screenXpixels, screenYpixels] = Screen('WindowSize', window);

% Get the centre coordinate of the window
[xCenter, yCenter] = RectCenter(windowRect);

% Set up alpha-blending for smooth (anti-aliased) lines
Screen('BlendFunction', window, 'GL_SRC_ALPHA', 'GL_ONE_MINUS_SRC_ALPHA');

Scriptsdir = '/Users/adambarnas/Box/Mudsplash/Scripts';
rawImagedir = '/Users/adambarnas/Box/Mudsplash/Image_files';
Boxdir = '/Users/adambarnas/Box/Mudsplash/Boxes_3';
outlineImagedir = '/Users/adambarnas/Box/Mudsplash/Images_with_boxes_2';
images = dir([rawImagedir '/*.jpg']);
boxfiles = dir([Boxdir '/*.png']);
b = 1;
pkg load image;

#fileID = fopen('Box_and_change_info.txt','w');
#fprintf(fileID,'image\tbox_xmin\tbox_ymin\tbox_xmax\tbox_ymax\tbox_area\tbox_proportion\tbox_percent\tchange_area\tchange_proportion\tchange_percent\tchange_box_proportion\tchange_box_percent\tcentroid_x\tcentroid_y\ta\tb\tcentroid_to_center\n');
    
for i=1:2:length(images)  
    
    cd(Boxdir);
    
    box{b,1} = imread([Boxdir '/' boxfiles(b).name]);
    stats = regionprops(box{b,1},'basic');
    bb = [stats.BoundingBox];
    cc = [stats.Area];
    dd = [stats.Centroid];
    if length(bb) == 6
      xmin1 = round(bb(:,1)); 
      ymin1 = round(bb(:,2)); 
      width1 = bb(:,4); 
      height1 = bb(:,5); 
      xmax1 = round(xmin1+width1); 
      ymax1 = round(ymin1+height1); 
      xmin1 = round(xmin1/2)-10;
      ymin1 = round(ymin1/2)-10;
      xmax1 = round(xmax1/2)+10;
      ymax1 = round(ymax1/2)+10;
      xcoors = [xmin1-10:0.2:xmax1+10];
      ycoors = [ymin1-10:0.2:ymax1+10];
      area1 = cc(:,1);
      xcen1 = round(dd(:,1)/2);
      ycen1 = round(dd(:,2)/2);
    elseif length(bb) == 12
      xmin1 = round(bb(:,1));
      xmin2 = round(bb(:,7));
      ymin1 = round(bb(:,2));
      ymin2 = round(bb(:,8));
      width1 = bb(:,4); 
      width2 = bb(:,10); 
      height1 = bb(:,5); 
      height2 = bb(:,11); 
      xmax1 = round(xmin1+width1); 
      xmax2 = round(xmin2+width2); 
      ymax1 = round(ymin1+height1); 
      ymax2 = round(ymin2+height2); 
      xmin1 = round(xmin1/2)-10;
      xmin2 = round(xmin2/2)-10;
      ymin1 = round(ymin1/2)-10;
      ymin2 = round(ymin2/2)-10;
      xmax1 = round(xmax1/2)+10;
      xmax2 = round(xmax2/2)+10;
      ymax1 = round(ymax1/2)+10;
      ymax2 = round(ymax2/2)+10;
      xcoors = [xmin1-10:0.2:xmax1+10 xmin2-10:0.2:xmax2+10];
      ycoors = [ymin1-10:0.2:ymax1+10 ymin2-10:0.2:ymax2+10];
      area1 = cc(:,1);
      area2 = cc(:,2);
      xcen1 = round(dd(:,1)/2);
      ycen1 = round(dd(:,2)/2);
      xcen2 = round(dd(:,4)/2);
      ycen2 = round(dd(:,5)/2);
    elseif length(bb) == 18
      xmin1 = round(bb(:,1));
      xmin2 = round(bb(:,7));
      xmin3 = round(bb(:,13));
      ymin1 = round(bb(:,2));
      ymin2 = round(bb(:,8));
      ymin3 = round(bb(:,14)); 
      width1 = bb(:,4); 
      width2 = bb(:,10); 
      width3 = bb(:,16);  
      height1 = bb(:,5); 
      height2 = bb(:,11); 
      height3 = bb(:,17); 
      xmax1 = round(xmin1+width1); 
      xmax2 = round(xmin2+width2); 
      xmax3 = round(xmin3+width3); 
      ymax1 = round(ymin1+height1); 
      ymax2 = round(ymin2+height2); 
      ymax3 = round(ymin3+height3);  
      xmin1 = round(xmin1/2)-10;
      xmin2 = round(xmin2/2)-10;
      xmin3 = round(xmin3/2)-10;
      ymin1 = round(ymin1/2)-10;
      ymin2 = round(ymin2/2)-10;
      ymin3 = round(ymin3/2)-10;
      xmax1 = round(xmax1/2)+10;
      xmax2 = round(xmax2/2)+10;
      xmax3 = round(xmax3/2)+10;
      ymax1 = round(ymax1/2)+10;
      ymax2 = round(ymax2/2)+10;
      ymax3 = round(ymax3/2)+10;
      xcoors = [xmin1-10:0.2:xmax1+10 xmin2-10:0.2:xmax2+10 xmin3-10:0.2:xmax3+10];
      ycoors = [ymin1-10:0.2:ymax1+10 ymin2-10:0.2:ymax2+10 ymin3-10:0.2:ymax3+10];
      area1 = cc(:,1);
      area2 = cc(:,2);
      area3 = cc(:,3);
      xcen1 = round(dd(:,1)/2);
      ycen1 = round(dd(:,2)/2);
      xcen2 = round(dd(:,4)/2);
      ycen2 = round(dd(:,5)/2);
      xcen3 = round(dd(:,7)/2);
      ycen3 = round(dd(:,8)/2);    
    elseif length(bb) == 24
      xmin1 = round(bb(:,1));
      xmin2 = round(bb(:,7));
      xmin3 = round(bb(:,13));
      xmin4 = round(bb(:,19));
      ymin1 = round(bb(:,2));
      ymin2 = round(bb(:,8));
      ymin3 = round(bb(:,14)); 
      ymin4 = round(bb(:,20));
      width1 = bb(:,4); 
      width2 = bb(:,10); 
      width3 = bb(:,16); 
      width4 = bb(:,22); 
      height1 = bb(:,5); 
      height2 = bb(:,11); 
      height3 = bb(:,17);
      height4 = bb(:,23);  
      xmax1 = round(xmin1+width1); 
      xmax2 = round(xmin2+width2); 
      xmax3 = round(xmin3+width3); 
      xmax4 = round(xmin4+width4); 
      ymax1 = round(ymin1+height1); 
      ymax2 = round(ymin2+height2); 
      ymax3 = round(ymin3+height3); 
      ymax4 = round(ymin4+height4); 
      xmin1 = round(xmin1/2)-10;
      xmin2 = round(xmin2/2)-10;
      xmin3 = round(xmin3/2)-10;
      xmin4 = round(xmin4/2)-10;
      ymin1 = round(ymin1/2)-10;
      ymin2 = round(ymin2/2)-10;
      ymin3 = round(ymin3/2)-10;
      ymin4 = round(ymin4/2)-10;
      xmax1 = round(xmax1/2)+10;
      xmax2 = round(xmax2/2)+10;
      xmax3 = round(xmax3/2)+10;
      xmax4 = round(xmax4/2)+10;
      ymax1 = round(ymax1/2)+10;
      ymax2 = round(ymax2/2)+10;
      ymax3 = round(ymax3/2)+10;
      ymax4 = round(ymax4/2)+10;
      xcoors = [xmin1-10:0.2:xmax1+10 xmin2-10:0.2:xmax2+10 xmin3-10:0.2:xmax3+10 xmin4-10:0.2:xmax4+10];
      ycoors = [ymin1-10:0.2:ymax1+10 ymin2-10:0.2:ymax2+10 ymin3-10:0.2:ymax3+10 ymin4-10:0.2:ymax4+10];
      area1 = cc(:,1);
      area2 = cc(:,2);
      area3 = cc(:,3);
      area4 = cc(:,4);
      xcen1 = round(dd(:,1)/2);
      ycen1 = round(dd(:,2)/2);
      xcen2 = round(dd(:,4)/2);
      ycen2 = round(dd(:,5)/2);
      xcen3 = round(dd(:,7)/2);
      ycen3 = round(dd(:,8)/2);    
      xcen4 = round(dd(:,10)/2);
      ycen4 = round(dd(:,11)/2);  
    elseif length(bb) == 30
      xmin1 = round(bb(:,1));
      xmin2 = round(bb(:,7));
      xmin3 = round(bb(:,13));
      xmin4 = round(bb(:,19));
      xmin5 = round(bb(:,25));
      ymin1 = round(bb(:,2));
      ymin2 = round(bb(:,8));
      ymin3 = round(bb(:,14)); 
      ymin4 = round(bb(:,20));
      ymin5 = round(bb(:,26));
      width1 = bb(:,4); 
      width2 = bb(:,10); 
      width3 = bb(:,16); 
      width4 = bb(:,22); 
      width5 = bb(:,28); 
      height1 = bb(:,5); 
      height2 = bb(:,11); 
      height3 = bb(:,17);
      height4 = bb(:,23);
      height5 = bb(:,29);  
      xmax1 = round(xmin1+width1); 
      xmax2 = round(xmin2+width2); 
      xmax3 = round(xmin3+width3); 
      xmax4 = round(xmin4+width4);
      xmax5 = round(xmin5+width5); 
      ymax1 = round(ymin1+height1); 
      ymax2 = round(ymin2+height2); 
      ymax3 = round(ymin3+height3); 
      ymax4 = round(ymin4+height4); 
      ymax5 = round(ymin5+height5);
      xmin1 = round(xmin1/2)-10;
      xmin2 = round(xmin2/2)-10;
      xmin3 = round(xmin3/2)-10;
      xmin4 = round(xmin4/2)-10;
      xmin5 = round(xmin5/2)-10;
      ymin1 = round(ymin1/2)-10;
      ymin2 = round(ymin2/2)-10;
      ymin3 = round(ymin3/2)-10;
      ymin4 = round(ymin4/2)-10;
      ymin5 = round(ymin5/2)-10;
      xmax1 = round(xmax1/2)+10;
      xmax2 = round(xmax2/2)+10;
      xmax3 = round(xmax3/2)+10;
      xmax4 = round(xmax4/2)+10;
      xmax5 = round(xmax5/2)+10;
      ymax1 = round(ymax1/2)+10;
      ymax2 = round(ymax2/2)+10;
      ymax3 = round(ymax3/2)+10;
      ymax4 = round(ymax4/2)+10;
      ymax5 = round(ymax5/2)+10;
      xcoors = [xmin1-10:0.2:xmax1+10 xmin2-10:0.2:xmax2+10 xmin3-10:0.2:xmax3+10 xmin4-10:0.2:xmax4+10 xmin5-10:0.2:xmax5+10];
      ycoors = [ymin1-10:0.2:ymax1+10 ymin2-10:0.2:ymax2+10 ymin3-10:0.2:ymax3+10 ymin4-10:0.2:ymax4+10 ymin5-10:0.2:ymax5+10];
      area1 = cc(:,1);
      area2 = cc(:,2);
      area3 = cc(:,3);
      area4 = cc(:,4);
      area5 = cc(:,5);
      xcen1 = round(dd(:,1)/2);
      ycen1 = round(dd(:,2)/2);
      xcen2 = round(dd(:,4)/2);
      ycen2 = round(dd(:,5)/2);
      xcen3 = round(dd(:,7)/2);
      ycen3 = round(dd(:,8)/2);    
      xcen4 = round(dd(:,10)/2);
      ycen4 = round(dd(:,11)/2);
      xcen5 = round(dd(:,13)/2);
      ycen5 = round(dd(:,14)/2); 
    end;
    
    cd(rawImagedir);
    
    image1{i,1} = imread([rawImagedir '/' images(i).name]);
    fileid1 = strcat(images(i).name);

    [s1, s2, s3] = size(image1{i,1});
    
    % Make the image into a texture
    image1Texture = Screen('MakeTexture', window, image1{i,1});
        
    % Draw the image to the screen, unless otherwise specified PTB will draw the texture full size in the center of the screen. We first draw the image in its correct orientation.
    Screen('DrawTexture', window, image1Texture, [], [], 0);

    if length(bb) == 6
      
      if xmin1 < (screenXpixels/2)-(s2/2);
        xmin1 = (screenXpixels/2)-(s2/2);
      else
        xmin1 = xmin1;
      end;
      
      if ymin1 < (screenYpixels/2)-(s1/2);
        ymin1 = (screenYpixels/2)-(s1/2);
      else
        ymin1 = ymin1;
      end;
      
      if xmax1 > (screenXpixels/2)+(s2/2);
        xmax1 = (screenXpixels/2)+(s2/2);
      else
        xmax1 = xmax1;
      end;
      
      if ymax1 > (screenYpixels/2)+(s1/2);
        ymax1 = (screenYpixels/2)+(s1/2);
      else
        ymax1 = ymax1;
      end;
      
      #Screen('FrameRect', window, [255 255 0], [xmin1 ymin1 xmax1 ymax1], [2.5]);
      Screen('FillRect', window, [255 255 255], [xmin1 ymin1 xmax1 ymax1]);
      
    elseif length(bb) == 12
      
      if xmin1 < (screenXpixels/2)-(s2/2) || xmin2 < (screenXpixels/2)-(s2/2);
        xmin = (screenXpixels/2)-(s2/2);
      else
        xmin = [xmin1 xmin2];
      end;
      
      if ymin1 < (screenYpixels/2)-(s1/2) || ymin2 < (screenYpixels/2)-(s1/2);
        ymin = (screenYpixels/2)-(s1/2);
      else
        ymin = [ymin1 ymin2];
      end;
      
      if xmax1 > (screenXpixels/2)+(s2/2) || xmax2 > (screenXpixels/2)+(s2/2);
        xmax = (screenXpixels/2)+(s2/2);
      else
        xmax = [xmax1 xmax2];
      end;

      if ymax1 > (screenYpixels/2)+(s1/2) || ymax2 > (screenYpixels/2)+(s1/2);
        ymax = (screenYpixels/2)+(s1/2);
      else
        ymax = [ymax1 ymax2];
      end;
      
      ##Screen('FrameRect', window, [255 255 0], [xmin1 ymin1 xmax1 ymax1], [2.5]);
      ##Screen('FrameRect', window, [255 255 0], [xmin2 ymin2 xmax2 ymax2], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [min(xmin) min(ymin) max(xmax) max(ymax)], [2.5]);
      Screen('FillRect', window, [255 255 255], [min(xmin) min(ymin) max(xmax) max(ymax)]);
      
    elseif length(bb) == 18
      
      if xmin1 < (screenXpixels/2)-(s2/2) || xmin2 < (screenXpixels/2)-(s2/2) || xmin3 < (screenXpixels/2)-(s2/2);
        xmin = (screenXpixels/2)-(s2/2);
      else
        xmin = [xmin1 xmin2 xmin3];
      end;
    
      if ymin1 < (screenYpixels/2)-(s1/2) || ymin2 < (screenYpixels/2)-(s1/2) || ymin3 < (screenYpixels/2)-(s1/2);
        ymin = (screenYpixels/2)-(s1/2);
      else
        ymin = [ymin1 ymin2 ymin3];
      end;
      
      if xmax1 > (screenXpixels/2)+(s2/2) || xmax2 > (screenXpixels/2)+(s2/2) || xmax3 > (screenXpixels/2)+(s2/2);
        xmax = (screenXpixels/2)+(s2/2);
      else
        xmax = [xmax1 xmax2 xmax3];
      end;
    
      if ymax1 > (screenYpixels/2)+(s1/2) || ymax2 > (screenYpixels/2)+(s1/2) || ymax3 > (screenYpixels/2)+(s1/2);
        ymax = (screenYpixels/2)+(s1/2);
      else
        ymax = [ymax1 ymax2 ymax3];
      end;
      
      ##Screen('FrameRect', window, [255 255 0], [xmin1 ymin1 xmax1 ymax1], [2.5]);
      ##Screen('FrameRect', window, [255 255 0], [xmin2 ymin2 xmax2 ymax2], [2.5]);
      ##Screen('FrameRect', window, [255 255 0], [xmin3 ymin3 xmax3 ymax3], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [min(xmin) min(ymin) max(xmax) max(ymax)], [2.5]);
      Screen('FillRect', window, [255 255 255], [min(xmin) min(ymin) max(xmax) max(ymax)]);
      
    elseif length(bb) == 24
      
      if xmin1 < (screenXpixels/2)-(s2/2) || xmin2 < (screenXpixels/2)-(s2/2) || xmin3 < (screenXpixels/2)-(s2/2) || xmin4 < (screenXpixels/2)-(s2/2);
        xmin = (screenXpixels/2)-(s2/2);
      else
        xmin = [xmin1 xmin2 xmin3 xmin4];
      end;
      
      if ymin1 < (screenYpixels/2)-(s1/2) || ymin2 < (screenYpixels/2)-(s1/2) || ymin3 < (screenYpixels/2)-(s1/2) || ymin4 < (screenYpixels/2)-(s1/2);
        ymin = (screenYpixels/2)-(s1/2);
      else
        ymin = [ymin1 ymin2 ymin3 ymin4];
      end;
      
      if xmax1 > (screenXpixels/2)+(s2/2) || xmax2 > (screenXpixels/2)+(s2/2) || xmax3 > (screenXpixels/2)+(s2/2) || xmax4 > (screenXpixels/2)+(s2/2);
        xmax = (screenXpixels/2)+(s2/2);
      else
        xmax = [xmax1 xmax2 xmax3 xmax4];
      end;
      
      if ymax1 > (screenYpixels/2)+(s1/2) || ymax2 > (screenYpixels/2)+(s1/2) || ymax3 > (screenYpixels/2)+(s1/2) || ymax4 > (screenYpixels/2)+(s1/2);
        ymax = (screenYpixels/2)+(s1/2);
      else
        ymax = [ymax1 ymax2 ymax3 ymax4];
      end;
      
      ##Screen('FrameRect', window, [255 255 0], [xmin1 ymin1 xmax1 ymax1], [2.5]);
      ##Screen('FrameRect', window, [255 255 0], [xmin2 ymin2 xmax2 ymax2], [2.5]);
      ##Screen('FrameRect', window, [255 255 0], [xmin3 ymin3 xmax3 ymax3], [2.5]);
      ##Screen('FrameRect', window, [255 255 0], [xmin4 ymin4 xmax4 ymax4], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [min(xmin) min(ymin) max(xmax) max(ymax)], [2.5]);
      Screen('FillRect', window, [255 255 255], [min(xmin) min(ymin) max(xmax) max(ymax)]);
      
    elseif length(bb) == 30
      
      if xmin1 < (screenXpixels/2)-(s2/2) || xmin2 < (screenXpixels/2)-(s2/2) || xmin3 < (screenXpixels/2)-(s2/2) || xmin4 < (screenXpixels/2)-(s2/2) || xmin5 < (screenXpixels/2)-(s2/2);
        xmin = (screenXpixels/2)-(s2/2);
      else
        xmin = [xmin1 xmin2 xmin3 xmin4 xmin5];
      end;
      
      if ymin1 < (screenYpixels/2)-(s1/2) || ymin2 < (screenYpixels/2)-(s1/2) || ymin3 < (screenYpixels/2)-(s1/2) || ymin4 < (screenYpixels/2)-(s1/2) || ymin5 < (screenYpixels/2)-(s1/2);
        ymin = (screenYpixels/2)-(s1/2);
      else
        ymin = [ymin1 ymin2 ymin3 ymin4 ymin5];
      end;
      
      if xmax1 > (screenXpixels/2)+(s2/2) || xmax2 > (screenXpixels/2)+(s2/2) || xmax3 > (screenXpixels/2)+(s2/2) || xmax4 > (screenXpixels/2)+(s2/2) || xmax5 > (screenXpixels/2)+(s2/2);
        xmax = (screenXpixels/2)+(s2/2);
      else
        xmax = [xmax1 xmax2 xmax3 xmax4 xmax5];
      end;
      
      if ymax1 > (screenYpixels/2)+(s1/2) || ymax2 > (screenYpixels/2)+(s1/2) || ymax3 > (screenYpixels/2)+(s1/2) || ymax4 > (screenYpixels/2)+(s1/2) || ymax5 > (screenYpixels/2)+(s1/2);
        ymax = (screenYpixels/2)+(s1/2);
      else
        ymax = [ymax1 ymax2 ymax3 ymax4 ymax5];
      end;
      
      ##Screen('FrameRect', window, [255 255 0], [xmin1 ymin1 xmax1 ymax1], [2.5]);
      ##Screen('FrameRect', window, [255 255 0], [xmin2 ymin2 xmax2 ymax2], [2.5]);
      ##Screen('FrameRect', window, [255 255 0], [xmin3 ymin3 xmax3 ymax3], [2.5]);
      ##Screen('FrameRect', window, [255 255 0], [xmin4 ymin4 xmax4 ymax4], [2.5]);
      ##Screen('FrameRect', window, [255 255 0], [xmin5 ymin5 xmax5 ymax5], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [min(xmin) min(ymin) max(xmax) max(ymax)], [2.5]);
      Screen('FillRect', window, [255 255 255], [min(xmin) min(ymin) max(xmax) max(ymax)]);
      
    end
    
    % Flip to the screen 
    Screen('Flip', window);

    #WaitSecs(1);
    
    image1array = Screen('GetImage', window, [(screenXpixels-s2) (screenYpixels-s1) (screenXpixels-((screenXpixels-s2)/2))*2 (screenYpixels-((screenYpixels-s1)/2))*2]); #416 132 2464 1668    

    [folder, baseFileNamebox, extension] = fileparts(fileid1);
    
    image1array = imresize(image1array, 0.5);
    
    cd(outlineImagedir);
    
    imwrite(image1array, strcat(baseFileNamebox,'_w_outline.jpg'));   
   
#{    cd(rawImagedir);
    
    image2{i+1,1} = imread([rawImagedir '/' images(i+1).name]);
    fileid2 = strcat(images(i+1).name);

    [s1, s2, s3] = size(image2{i+1,1});
    
    % Make the image into a texture
    image2Texture = Screen('MakeTexture', window, image2{i+1,1});
        
    % Draw the image to the screen, unless otherwise specified PTB will draw the texture full size in the center of the screen. We first draw the image in its correct orientation.
    Screen('DrawTexture', window, image2Texture, [], [], 0);

    if length(bb) == 6
      
      if xmin1 < (screenXpixels/2)-(s2/2);
        xmin1 = (screenXpixels/2)-(s2/2);
      else
        xmin1 = xmin1;
      end;
      
      if ymin1 < (screenYpixels/2)-(s1/2);
        ymin1 = (screenYpixels/2)-(s1/2);
      else
        ymin1 = ymin1;
      end;
      
      if xmax1 > (screenXpixels/2)+(s2/2);
        xmax1 = (screenXpixels/2)+(s2/2);
      else
        xmax1 = xmax1;
      end;
      
      if ymax1 > (screenYpixels/2)+(s1/2);
        ymax1 = (screenYpixels/2)+(s1/2);
      else
        ymax1 = ymax1;
      end;
      
      Screen('FrameRect', window, [255 255 0], [xmin1 ymin1 xmax1 ymax1], [2.5]);
      
    elseif length(bb) == 12
      
      if xmin1 < (screenXpixels/2)-(s2/2) || xmin2 < (screenXpixels/2)-(s2/2);
        xmin = (screenXpixels/2)-(s2/2);
      else
        xmin = [xmin1 xmin2];
      end;
      
      if ymin1 < (screenYpixels/2)-(s1/2) || ymin2 < (screenYpixels/2)-(s1/2);
        ymin = (screenYpixels/2)-(s1/2);
      else
        ymin = [ymin1 ymin2];
      end;
      
      if xmax1 > (screenXpixels/2)+(s2/2) || xmax2 > (screenXpixels/2)+(s2/2);
        xmax = (screenXpixels/2)+(s2/2);
      else
        xmax = [xmax1 xmax2];
      end;

      if ymax1 > (screenYpixels/2)+(s1/2) || ymax2 > (screenYpixels/2)+(s1/2);
        ymax = (screenYpixels/2)+(s1/2);
      else
        ymax = [ymax1 ymax2];
      end;
      
      #Screen('FrameRect', window, [255 255 0], [xmin1 ymin1 xmax1 ymax1], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [xmin2 ymin2 xmax2 ymax2], [2.5]);
      Screen('FrameRect', window, [255 255 0], [min(xmin) min(ymin) max(xmax) max(ymax)], [2.5]);
      
    elseif length(bb) == 18
      
      if xmin1 < (screenXpixels/2)-(s2/2) || xmin2 < (screenXpixels/2)-(s2/2) || xmin3 < (screenXpixels/2)-(s2/2);
        xmin = (screenXpixels/2)-(s2/2);
      else
        xmin = [xmin1 xmin2 xmin3];
      end;
    
      if ymin1 < (screenYpixels/2)-(s1/2) || ymin2 < (screenYpixels/2)-(s1/2) || ymin3 < (screenYpixels/2)-(s1/2);
        ymin = (screenYpixels/2)-(s1/2);
      else
        ymin = [ymin1 ymin2 ymin3];
      end;
      
      if xmax1 > (screenXpixels/2)+(s2/2) || xmax2 > (screenXpixels/2)+(s2/2) || xmax3 > (screenXpixels/2)+(s2/2);
        xmax = (screenXpixels/2)+(s2/2);
      else
        xmax = [xmax1 xmax2 xmax3];
      end;
    
      if ymax1 > (screenYpixels/2)+(s1/2) || ymax2 > (screenYpixels/2)+(s1/2) || ymax3 > (screenYpixels/2)+(s1/2);
        ymax = (screenYpixels/2)+(s1/2);
      else
        ymax = [ymax1 ymax2 ymax3];
      end;
      
      #Screen('FrameRect', window, [255 255 0], [xmin1 ymin1 xmax1 ymax1], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [xmin2 ymin2 xmax2 ymax2], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [xmin3 ymin3 xmax3 ymax3], [2.5]);
      Screen('FrameRect', window, [255 255 0], [min(xmin) min(ymin) max(xmax) max(ymax)], [2.5]);
      
    elseif length(bb) == 24
      
      if xmin1 < (screenXpixels/2)-(s2/2) || xmin2 < (screenXpixels/2)-(s2/2) || xmin3 < (screenXpixels/2)-(s2/2) || xmin4 < (screenXpixels/2)-(s2/2);
        xmin = (screenXpixels/2)-(s2/2);
      else
        xmin = [xmin1 xmin2 xmin3 xmin4];
      end;
      
      if ymin1 < (screenYpixels/2)-(s1/2) || ymin2 < (screenYpixels/2)-(s1/2) || ymin3 < (screenYpixels/2)-(s1/2) || ymin4 < (screenYpixels/2)-(s1/2);
        ymin = (screenYpixels/2)-(s1/2);
      else
        ymin = [ymin1 ymin2 ymin3 ymin4];
      end;
      
      if xmax1 > (screenXpixels/2)+(s2/2) || xmax2 > (screenXpixels/2)+(s2/2) || xmax3 > (screenXpixels/2)+(s2/2) || xmax4 > (screenXpixels/2)+(s2/2);
        xmax = (screenXpixels/2)+(s2/2);
      else
        xmax = [xmax1 xmax2 xmax3 xmax4];
      end;
      
      if ymax1 > (screenYpixels/2)+(s1/2) || ymax2 > (screenYpixels/2)+(s1/2) || ymax3 > (screenYpixels/2)+(s1/2) || ymax4 > (screenYpixels/2)+(s1/2);
        ymax = (screenYpixels/2)+(s1/2);
      else
        ymax = [ymax1 ymax2 ymax3 ymax4];
      end;
      
      #Screen('FrameRect', window, [255 255 0], [xmin1 ymin1 xmax1 ymax1], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [xmin2 ymin2 xmax2 ymax2], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [xmin3 ymin3 xmax3 ymax3], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [xmin4 ymin4 xmax4 ymax4], [2.5]);
      Screen('FrameRect', window, [255 255 0], [min(xmin) min(ymin) max(xmax) max(ymax)], [2.5]);
      
    elseif length(bb) == 30
      
      if xmin1 < (screenXpixels/2)-(s2/2) || xmin2 < (screenXpixels/2)-(s2/2) || xmin3 < (screenXpixels/2)-(s2/2) || xmin4 < (screenXpixels/2)-(s2/2) || xmin5 < (screenXpixels/2)-(s2/2);
        xmin = (screenXpixels/2)-(s2/2);
      else
        xmin = [xmin1 xmin2 xmin3 xmin4 xmin5];
      end;
      
      if ymin1 < (screenYpixels/2)-(s1/2) || ymin2 < (screenYpixels/2)-(s1/2) || ymin3 < (screenYpixels/2)-(s1/2) || ymin4 < (screenYpixels/2)-(s1/2) || ymin5 < (screenYpixels/2)-(s1/2);
        ymin = (screenYpixels/2)-(s1/2);
      else
        ymin = [ymin1 ymin2 ymin3 ymin4 ymin5];
      end;
      
      if xmax1 > (screenXpixels/2)+(s2/2) || xmax2 > (screenXpixels/2)+(s2/2) || xmax3 > (screenXpixels/2)+(s2/2) || xmax4 > (screenXpixels/2)+(s2/2) || xmax5 > (screenXpixels/2)+(s2/2);
        xmax = (screenXpixels/2)+(s2/2);
      else
        xmax = [xmax1 xmax2 xmax3 xmax4 xmax5];
      end;
      
      if ymax1 > (screenYpixels/2)+(s1/2) || ymax2 > (screenYpixels/2)+(s1/2) || ymax3 > (screenYpixels/2)+(s1/2) || ymax4 > (screenYpixels/2)+(s1/2) || ymax5 > (screenYpixels/2)+(s1/2);
        ymax = (screenYpixels/2)+(s1/2);
      else
        ymax = [ymax1 ymax2 ymax3 ymax4 ymax5];
      end;
      
      #Screen('FrameRect', window, [255 255 0], [xmin1 ymin1 xmax1 ymax1], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [xmin2 ymin2 xmax2 ymax2], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [xmin3 ymin3 xmax3 ymax3], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [xmin4 ymin4 xmax4 ymax4], [2.5]);
      #Screen('FrameRect', window, [255 255 0], [xmin5 ymin5 xmax5 ymax5], [2.5]);
      Screen('FrameRect', window, [255 255 0], [min(xmin) min(ymin) max(xmax) max(ymax)], [2.5]);
      
    end
    
    % Flip to the screen 
    Screen('Flip', window);

#    if length(bb) == 6
#      fprintf(fileID,'%s\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\n', baseFileNamebox, min(xmin)-((screenXpixels-s2)/2), min(ymin)-((screenYpixels-s1)/2), max(xmax)-((screenXpixels-s2)/2), max(ymax)-((screenYpixels-s1)/2), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2))), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))/(s1*s2), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))/(s1*s2)*100, round(((area1)/3)*((screenYpixels*screenXpixels)/5184000)), round(((area1)/3)*((screenYpixels*screenXpixels)/5184000))/(s1*s2), round(((area1)/3)*((screenYpixels*screenXpixels)/5184000))/(s1*s2)*100, (round(((area1)/3)*((screenYpixels*screenXpixels)/5184000)))/(((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))), (round(((area1)/3)*((screenYpixels*screenXpixels)/5184000)))/(((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2))))*100, mean(xcen1)-((screenXpixels-s2)/2), mean(ycen1)-((screenYpixels-s1)/2), abs(((s2/2)-(mean(xcen1)-((screenXpixels-s2)/2)))), abs(((s1/2)-(mean(ycen1)-((screenYpixels-s1)/2)))), sqrt((abs((s2/2)-(mean(xcen1)-((screenXpixels-s2)/2)))^2) + (abs((s1/2)-(mean(ycen1)-((screenYpixels-s1)/2)))^2)));
#    elseif length(bb) == 12
#      fprintf(fileID,'%s\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\n', baseFileNamebox, min(xmin)-((screenXpixels-s2)/2), min(ymin)-((screenYpixels-s1)/2), max(xmax)-((screenXpixels-s2)/2), max(ymax)-((screenYpixels-s1)/2), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2))), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))/(s1*s2), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))/(s1*s2)*100, round(((area1+area2)/3)*((screenYpixels*screenXpixels)/5184000)), round(((area1+area2)/3)*((screenYpixels*screenXpixels)/5184000))/(s1*s2), round(((area1+area2)/3)*((screenYpixels*screenXpixels)/5184000))/(s1*s2)*100, (round(((area1+area2)/3)*((screenYpixels*screenXpixels)/5184000)))/(((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))), (round(((area1+area2)/3)*((screenYpixels*screenXpixels)/5184000)))/(((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2))))*100, mean([xcen1 xcen2])-((screenXpixels-s2)/2), mean([ycen1 ycen2])-((screenYpixels-s1)/2), abs(((s2/2)-(mean([xcen1 xcen2])-((screenXpixels-s2)/2)))), abs(((s1/2)-(mean([ycen1 ycen2])-((screenYpixels-s1)/2)))), sqrt((abs((s2/2)-(mean([xcen1 xcen2])-((screenXpixels-s2)/2)))^2) + (abs((s1/2)-(mean([ycen1 ycen2])-((screenYpixels-s1)/2)))^2)));
#    elseif length(bb) == 18
#      fprintf(fileID,'%s\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\n', baseFileNamebox, min(xmin)-((screenXpixels-s2)/2), min(ymin)-((screenYpixels-s1)/2), max(xmax)-((screenXpixels-s2)/2), max(ymax)-((screenYpixels-s1)/2), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2))), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))/(s1*s2), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))/(s1*s2)*100, round(((area1+area2+area3)/3)*((screenYpixels*screenXpixels)/5184000)), round(((area1+area2+area3)/3)*((screenYpixels*screenXpixels)/5184000))/(s1*s2), round(((area1+area2+area3)/3)*((screenYpixels*screenXpixels)/5184000))/(s1*s2)*100, (round(((area1+area2+area3)/3)*((screenYpixels*screenXpixels)/5184000)))/(((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))), (round(((area1+area2+area3)/3)*((screenYpixels*screenXpixels)/5184000)))/(((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2))))*100, mean([xcen1 xcen2 xcen3])-((screenXpixels-s2)/2), mean([ycen1 ycen2 ycen3])-((screenYpixels-s1)/2), abs(((s2/2)-(mean([xcen1 xcen2 xcen3])-((screenXpixels-s2)/2)))), abs(((s1/2)-(mean([ycen1 ycen2 ycen3])-((screenYpixels-s1)/2)))), sqrt((abs((s2/2)-(mean([xcen1 xcen2 xcen3])-((screenXpixels-s2)/2)))^2) + (abs((s1/2)-(mean([ycen1 ycen2 ycen3])-((screenYpixels-s1)/2)))^2)));
#    elseif length(bb) == 24
#      fprintf(fileID,'%s\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\n', baseFileNamebox, min(xmin)-((screenXpixels-s2)/2), min(ymin)-((screenYpixels-s1)/2), max(xmax)-((screenXpixels-s2)/2), max(ymax)-((screenYpixels-s1)/2), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2))), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))/(s1*s2), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))/(s1*s2)*100, round(((area1+area2+area3+area4)/3)*((screenYpixels*screenXpixels)/5184000)), round(((area1+area2+area3+area4)/3)*((screenYpixels*screenXpixels)/5184000))/(s1*s2), round(((area1+area2+area3+area4)/3)*((screenYpixels*screenXpixels)/5184000))/(s1*s2)*100, (round(((area1+area2+area3+area4)/3)*((screenYpixels*screenXpixels)/5184000)))/(((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))), (round(((area1+area2+area3+area4)/3)*((screenYpixels*screenXpixels)/5184000)))/(((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2))))*100, mean([xcen1 xcen2 xcen3 xcen4])-((screenXpixels-s2)/2), mean([ycen1 ycen2 ycen3 ycen4])-((screenYpixels-s1)/2), abs(((s2/2)-(mean([xcen1 xcen2 xcen3 xcen4])-((screenXpixels-s2)/2)))), abs(((s1/2)-(mean([ycen1 ycen2 ycen3 ycen4])-((screenYpixels-s1)/2)))), sqrt((abs((s2/2)-(mean([xcen1 xcen2 xcen3 xcen4])-((screenXpixels-s2)/2)))^2) + (abs((s1/2)-(mean([ycen1 ycen2 ycen3 ycen4])-((screenYpixels-s1)/2)))^2)));
#    elseif length(bb) == 30
#      fprintf(fileID,'%s\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\n', baseFileNamebox, min(xmin)-((screenXpixels-s2)/2), min(ymin)-((screenYpixels-s1)/2), max(xmax)-((screenXpixels-s2)/2), max(ymax)-((screenYpixels-s1)/2), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2))), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))/(s1*s2), ((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))/(s1*s2)*100, round(((area1+area2+area3+area4+area5)/3)*((screenYpixels*screenXpixels)/5184000)), round(((area1+area2+area3+area4+area5)/3)*((screenYpixels*screenXpixels)/5184000))/(s1*s2), round(((area1+area2+area3+area4+area5)/3)*((screenYpixels*screenXpixels)/5184000))/(s1*s2)*100, (round(((area1+area2+area3+area4+area5)/3)*((screenYpixels*screenXpixels)/5184000)))/(((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2)))), (round(((area1+area2+area3+area4+area5)/3)*((screenYpixels*screenXpixels)/5184000)))/(((max(xmax)-((screenXpixels-s2)/2))-(min(xmin)-((screenXpixels-s2)/2)))*((max(ymax)-((screenYpixels-s1)/2))-(min(ymin)-((screenYpixels-s1)/2))))*100, mean([xcen1 xcen2 xcen3 xcen4 xcen5])-((screenXpixels-s2)/2), mean([ycen1 ycen2 ycen3 ycen4 ycen5])-((screenYpixels-s1)/2), abs(((s2/2)-(mean([xcen1 xcen2 xcen3 xcen4 xcen5])-((screenXpixels-s2)/2)))), abs(((s1/2)-(mean([ycen1 ycen2 ycen3 ycen4 ycen5])-((screenYpixels-s1)/2)))), sqrt((abs((s2/2)-(mean([xcen1 xcen2 xcen3 xcen4 xcen5])-((screenXpixels-s2)/2)))^2) + (abs((s1/2)-(mean([ycen1 ycen2 ycen3 ycen4 ycen5])-((screenYpixels-s1)/2)))^2)));
#    end;
    
    #WaitSecs(1);
    
    image2array = Screen('GetImage', window, [(screenXpixels-s2) (screenYpixels-s1) (screenXpixels-((screenXpixels-s2)/2))*2 (screenYpixels-((screenYpixels-s1)/2))*2]); #416 132 2464 1668    

    [folder, baseFileNamebox, extension] = fileparts(fileid2);
    
    image2array = imresize(image2array, 0.5);
    
    cd(outlineImagedir);
    
    imwrite(image2array, strcat(baseFileNamebox,'_w_outline.jpg'));   
    
    b = b + 1;

#}
    
    cd(rawImagedir);

    Screen('Close');

end

#fclose(fileID);

cd(Scriptsdir);

sca;
