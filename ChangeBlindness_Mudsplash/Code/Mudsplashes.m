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
rawImagedir = '/Users/adambarnas/Box/Mudsplash/Image_files4';
Boxdir = '/Users/adambarnas/Box/Mudsplash/Boxes_4';
Stimdir = '/Users/adambarnas/Box/Mudsplash/Image_splash_2';
boxImagedir = '/Users/adambarnas/Box/Mudsplash/Images_with_boxes_2';
images = dir([rawImagedir '/*.jpg']);
boxfiles = dir([Boxdir '/*.png']);
counter = 1;
b = 1;
pkg load image;
for i=1:2:length(images)  
    
    cd(Boxdir);
    
    box{b,1} = imread([Boxdir '/' boxfiles(b).name]);
    stats = regionprops(box{b,1},'BoundingBox');
    bb = [stats.BoundingBox];
    if length(bb) == 6
      xmin1 = round(bb(:,1)); 
      ymin1 = round(bb(:,2)); 
      width1 = bb(:,4); 
      height1 = bb(:,5); 
      xmax1 = round(xmin1+width1); 
      ymax1 = round(ymin1+height1); 
      xmin1 = round(xmin1/2);
      ymin1 = round(ymin1/2);
      xmax1 = round(xmax1/2);
      ymax1 = round(ymax1/2);
      xcoors = [xmin1-10:0.2:xmax1+10];
      ycoors = [ymin1-10:0.2:ymax1+10];
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
      xmin1 = round(xmin1/2);
      xmin2 = round(xmin2/2);
      ymin1 = round(ymin1/2);
      ymin2 = round(ymin2/2);
      xmax1 = round(xmax1/2);
      xmax2 = round(xmax2/2);
      ymax1 = round(ymax1/2);
      ymax2 = round(ymax2/2);
      xcoors = [xmin1-10:0.2:xmax1+10 xmin2-10:0.2:xmax2+10];
      ycoors = [ymin1-10:0.2:ymax1+10 ymin2-10:0.2:ymax2+10];
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
      xmin1 = round(xmin1/2);
      xmin2 = round(xmin2/2);
      xmin3 = round(xmin3/2);
      ymin1 = round(ymin1/2);
      ymin2 = round(ymin2/2);
      ymin3 = round(ymin3/2);
      xmax1 = round(xmax1/2);
      xmax2 = round(xmax2/2);
      xmax3 = round(xmax3/2);
      ymax1 = round(ymax1/2);
      ymax2 = round(ymax2/2);
      ymax3 = round(ymax3/2);
      xcoors = [xmin1-10:0.2:xmax1+10 xmin2-10:0.2:xmax2+10 xmin3-10:0.2:xmax3+10];
      ycoors = [ymin1-10:0.2:ymax1+10 ymin2-10:0.2:ymax2+10 ymin3-10:0.2:ymax3+10];  
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
      xmin1 = round(xmin1/2);
      xmin2 = round(xmin2/2);
      xmin3 = round(xmin3/2);
      xmin4 = round(xmin4/2);
      ymin1 = round(ymin1/2);
      ymin2 = round(ymin2/2);
      ymin3 = round(ymin3/2);
      ymin4 = round(ymin4/2);
      xmax1 = round(xmax1/2);
      xmax2 = round(xmax2/2);
      xmax3 = round(xmax3/2);
      xmax4 = round(xmax4/2);
      ymax1 = round(ymax1/2);
      ymax2 = round(ymax2/2);
      ymax3 = round(ymax3/2);
      ymax4 = round(ymax4/2);
      xcoors = [xmin1-10:0.2:xmax1+10 xmin2-10:0.2:xmax2+10 xmin3-10:0.2:xmax3+10 xmin4-10:0.2:xmax4+10];
      ycoors = [ymin1-10:0.2:ymax1+10 ymin2-10:0.2:ymax2+10 ymin3-10:0.2:ymax3+10 ymin4-10:0.2:ymax4+10];
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
      xmin1 = round(xmin1/2);
      xmin2 = round(xmin2/2);
      xmin3 = round(xmin3/2);
      xmin4 = round(xmin4/2);
      xmin5 = round(xmin5/2);
      ymin1 = round(ymin1/2);
      ymin2 = round(ymin2/2);
      ymin3 = round(ymin3/2);
      ymin4 = round(ymin4/2);
      ymin5 = round(ymin5/2);
      xmax1 = round(xmax1/2);
      xmax2 = round(xmax2/2);
      xmax3 = round(xmax3/2);
      xmax4 = round(xmax4/2);
      xmax5 = round(xmax5/2);
      ymax1 = round(ymax1/2);
      ymax2 = round(ymax2/2);
      ymax3 = round(ymax3/2);
      ymax4 = round(ymax4/2);
      ymax4 = round(ymax5/2);
      xcoors = [xmin1-10:0.2:xmax1+10 xmin2-10:0.2:xmax2+10 xmin3-10:0.2:xmax3+10 xmin4-10:0.2:xmax4+10 xmin5-10:0.2:xmax5+10];
      ycoors = [ymin1-10:0.2:ymax1+10 ymin2-10:0.2:ymax2+10 ymin3-10:0.2:ymax3+10 ymin4-10:0.2:ymax4+10 ymin5-10:0.2:ymax5+10];
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
      Screen('FillRect', window, [255 255 255], [xmin1 ymin1 xmax1 ymax1]);
    elseif length(bb) == 12
      Screen('FillRect', window, [255 255 255], [xmin1 ymin1 xmax1 ymax1]);
      Screen('FillRect', window, [255 255 255], [xmin2 ymin2 xmax2 ymax2]);
    elseif length(bb) == 18
      Screen('FillRect', window, [255 255 255], [xmin1 ymin1 xmax1 ymax1]);
      Screen('FillRect', window, [255 255 255], [xmin2 ymin2 xmax2 ymax2]);
      Screen('FillRect', window, [255 255 255], [xmin3 ymin3 xmax3 ymax3]);
    elseif length(bb) == 24
      Screen('FillRect', window, [255 255 255], [xmin1 ymin1 xmax1 ymax1]);
      Screen('FillRect', window, [255 255 255], [xmin2 ymin2 xmax2 ymax2]);
      Screen('FillRect', window, [255 255 255], [xmin3 ymin3 xmax3 ymax3]);
      Screen('FillRect', window, [255 255 255], [xmin4 ymin4 xmax4 ymax4]);
    elseif length(bb) == 30
      Screen('FillRect', window, [255 255 255], [xmin1 ymin1 xmax1 ymax1]);
      Screen('FillRect', window, [255 255 255], [xmin2 ymin2 xmax2 ymax2]);
      Screen('FillRect', window, [255 255 255], [xmin3 ymin3 xmax3 ymax3]);
      Screen('FillRect', window, [255 255 255], [xmin4 ymin4 xmax4 ymax4]);
      Screen('FillRect', window, [255 255 255], [xmin5 ymin5 xmax5 ymax5]);
    end
    
    % Flip to the screen 
    Screen('Flip', window);

    WaitSecs(2);
    
    boxArray = Screen('GetImage', window, [(screenXpixels-s2) (screenYpixels-s1) (screenXpixels-((screenXpixels-s2)/2))*2 (screenYpixels-((screenYpixels-s1)/2))*2]); #416 132 2464 1668    

    [folder, baseFileNamebox, extension] = fileparts(fileid1);
    
    boxArray = imresize(boxArray, 0.5);
    
    cd(boxImagedir);
    
    imwrite(boxArray, strcat(baseFileNamebox,'_w_box.jpg'));   
    
    cd(rawImagedir);  
    
    image1{i,1} = imread([rawImagedir '/' images(i).name]);
    fileid1 = strcat(images(i).name);

    [folder, baseFileName1, extension] = fileparts(fileid1);
    
    [s1, s2, s3] = size(image1{i,1});
    
    % Make the image into a texture
    image1Texture = Screen('MakeTexture', window, image1{i,1});
        
    % Draw the image to the screen, unless otherwise specified PTB will draw the texture full size in the center of the screen. We first draw the image in its correct orientation.
    Screen('DrawTexture', window, image1Texture, [], [], 0);
    
    % Flip to the screen 
    Screen('Flip', window);
    
    % GetImage call. Alter the rect argument to change the location of the screen shot
    image1Array = Screen('GetImage', window, [(screenXpixels-s2) (screenYpixels-s1) (screenXpixels-((screenXpixels-s2)/2))*2 (screenYpixels-((screenYpixels-s1)/2))*2]); #416 132 2464 1668    

    image1Array = imresize(image1Array, 0.5);
    
    cd(Stimdir);
    
    % imwrite is a Matlab function, not a PTB-3 function
    imwrite(image1Array, strcat(baseFileName1,'.jpg'));   
    
    cd(rawImagedir);
    
    image2{i,1} = imread([rawImagedir '/' images(i).name]);
    fileid2 = strcat(images(i).name);
    
    [folder, baseFileName2, extension] = fileparts(fileid2);

    % Make the image into a texture
    image2Texture = Screen('MakeTexture', window, image2{i,1});
        
    % Draw the image to the screen, unless otherwise specified PTB will draw the texture full size in the center of the screen. We first draw the image in its correct orientation.
    Screen('DrawTexture', window, image2Texture, [], [], 0);

    counta = 0;
    while true
      a1=randi([3 10],1,1);
      a2=randi([3 10],1,1);
      a_checkerboard = repmat(eye(2), a1, a2);
      a_checkerTexture = Screen('MakeTexture', window, a_checkerboard);
      [s1a, s2a] = size(a_checkerboard);
      dstRecta = [0 0 s1a*2*(a2/a1) s2a*2*(a1/a2)] .* 3.2; 
      xa = randi([round(((screenXpixels-s2)/2)+(s2a*3.2*2)) round((screenXpixels-((screenXpixels-s2)/2))-(s2a*3.2*2))],1,1);
      ya = randi([round(((screenYpixels-s1)/2)+(s1a*3.2*2)) round((screenYpixels-((screenYpixels-s1)/2))-(s1a*3.2*2))],1,1);
      dstRecta = CenterRectOnPointd(dstRecta, xa, ya);
      xamin = dstRecta(1);
      yamin = dstRecta(2);
      xamax = dstRecta(3);
      yamax = dstRecta(4);      
      xdstRecta = [xamin-10:0.2:xamax+10];
      ydstRecta = [yamin-10:0.2:yamax+10];
      counta = counta + 1;
      if all(~ismember(xdstRecta,xcoors)) | all(~ismember(ydstRecta,ycoors))
        break
      end       
    end
    disp(['number of loops for splash A: ' num2str(counta)]);
#    save A_A.txt counta; 
    
    countb = 0;
    while true
      b1=randi([3 10],1,1);
      b2=randi([3 10],1,1);
      b_checkerboard = repmat(eye(2), b1, b2);
      b_checkerTexture = Screen('MakeTexture', window, b_checkerboard);
      [s1b, s2b] = size(b_checkerboard);
      dstRectb = [0 0 s1b*2*(b2/b1) s2b*2*(b1/b2)] .* 3.2;
      xb = randi([round(((screenXpixels-s2)/2)+(s2b*3.2*2)) round((screenXpixels-((screenXpixels-s2)/2))-(s2b*3.2*2))],1,1);
      yb = randi([round(((screenYpixels-s1)/2)+(s1b*3.2*2)) round((screenYpixels-((screenYpixels-s1)/2))-(s1b*3.2*2))],1,1);
      dstRectb = CenterRectOnPointd(dstRectb, xb, yb);
      xbmin = dstRectb(1);
      ybmin = dstRectb(2);
      xbmax = dstRectb(3);
      ybmax = dstRectb(4);      
      xdstRectb = [xbmin-10:0.2:xbmax+10];
      ydstRectb = [ybmin-10:0.2:ybmax+10];
      xRects = [xdstRecta];
      yRects = [ydstRecta];
      countb = countb + 1;
      if (all(~ismember(xdstRectb,xcoors)) | all(~ismember(ydstRectb,ycoors))) & (all(~ismember(xdstRectb,xRects)) | all(~ismember(ydstRectb,yRects)))
        break
      end
    end
    disp(['number of loops for splash B: ' num2str(countb)]);
#    save A_B.txt countb;  
   
    countc = 0;
    while true
      c1=randi([3 10],1,1);
      c2=randi([3 10],1,1);
      c_checkerboard = repmat(eye(2), c1, c2);
      c_checkerTexture = Screen('MakeTexture', window, c_checkerboard);
      [s1c, s2c] = size(c_checkerboard);
      dstRectc = [0 0 s1c*2*(c2/c1) s2c*2*(c1/c2)] .* 3.2;
      xc = randi([round(((screenXpixels-s2)/2)+(s2c*3.2*2)) round((screenXpixels-((screenXpixels-s2)/2))-(s2c*3.2*2))],1,1);
      yc = randi([round(((screenYpixels-s1)/2)+(s1c*3.2*2)) round((screenYpixels-((screenYpixels-s1)/2))-(s1c*3.2*2))],1,1);
      dstRectc = CenterRectOnPointd(dstRectc, xc, yc);
      xcmin = dstRectc(1);
      ycmin = dstRectc(2);
      xcmax = dstRectc(3);
      ycmax = dstRectc(4);      
      xdstRectc = [xcmin-10:0.2:xcmax+10];
      ydstRectc = [ycmin-10:0.2:ycmax+10];
      xRects = [xdstRecta xdstRectb];
      yRects = [ydstRecta ydstRectb];
      countc = countc + 1;
      if (all(~ismember(xdstRectc,xcoors)) | all(~ismember(ydstRectc,ycoors))) & (all(~ismember(xdstRectc,xRects)) | all(~ismember(ydstRectc,yRects)))
        break
      end
    end
    disp(['number of loops for splash C: ' num2str(countc)]);
#    save A_C.txt countc; 

    countd = 0;
    while true
      d1=randi([3 10],1,1);
      d2=randi([3 10],1,1);
      d_checkerboard = repmat(eye(2), d1, d2);
      d_checkerTexture = Screen('MakeTexture', window, d_checkerboard);
      [s1d, s2d] = size(d_checkerboard);
      dstRectd = [0 0 s1d*2*(d2/d1) s2d*2*(d1/d2)] .* 3.2;
      xd = randi([round(((screenXpixels-s2)/2)+(s2d*3.2*2)) round((screenXpixels-((screenXpixels-s2)/2))-(s2d*3.2*2))],1,1);
      yd = randi([round(((screenYpixels-s1)/2)+(s1d*3.2*2)) round((screenYpixels-((screenYpixels-s1)/2))-(s1d*3.2*2))],1,1);
      dstRectd = CenterRectOnPointd(dstRectd, xd, yd);
      xdmin = dstRectd(1);
      ydmin = dstRectd(2);
      xdmax = dstRectd(3);
      ydmax = dstRectd(4);      
      xdstRectd = [xdmin-10:0.2:xdmax];
      ydstRectd = [ydmin-10:0.2:ydmax];
      xRects = [xdstRecta xdstRectb xdstRectc+10];
      yRects = [ydstRecta ydstRectb ydstRectc+10];
      countd = countd + 1;
      if (all(~ismember(xdstRectd,xcoors)) | all(~ismember(ydstRectd,ycoors))) & (all(~ismember(xdstRectd,xRects)) | all(~ismember(ydstRectd,yRects)))
        break
      end
    end
    disp(['number of loops for splash D: ' num2str(countd)]);
#    save A_D.txt countd;  

    counte = 0;
    while true
      e1=randi([3 10],1,1);
      e2=randi([3 10],1,1);
      e_checkerboard = repmat(eye(2), e1, e2);
      e_checkerTexture = Screen('MakeTexture', window, e_checkerboard);
      [s1e, s2e] = size(e_checkerboard);
      dstRecte = [0 0 s1e*2*(e2/e1) s2e*2*(e1/e2)] .* 3.2;
      xe = randi([round(((screenXpixels-s2)/2)+(s2e*3.2*2)) round((screenXpixels-((screenXpixels-s2)/2))-(s2e*3.2*2))],1,1);
      ye = randi([round(((screenYpixels-s1)/2)+(s1e*3.2*2)) round((screenYpixels-((screenYpixels-s1)/2))-(s1e*3.2*2))],1,1);
      dstRecte = CenterRectOnPointd(dstRecte, xe, ye);
      xemin = dstRecte(1);
      yemin = dstRecte(2);
      xemax = dstRecte(3);
      yemax = dstRecte(4);      
      xdstRecte = [xemin-10:0.2:xemax];
      ydstRecte = [yemin-10:0.2:yemax];
      xRects = [xdstRecta xdstRectb xdstRectc xdstRectd+10];
      yRects = [ydstRecta ydstRectb ydstRectc ydstRectd+10];
      counte = counte + 1;
      if (all(~ismember(xdstRecte,xcoors)) | all(~ismember(ydstRecte,ycoors))) & (all(~ismember(xdstRecte,xRects)) | all(~ismember(ydstRecte,yRects)))
        break
      end
    end
    disp(['number of loops for splash E: ' num2str(counte)]);
#    save A_E.txt counte;  
    
    countf = 0;
    while true
      f1=randi([3 10],1,1);
      f2=randi([3 10],1,1);
      f_checkerboard = repmat(eye(2), f1, f2);
      f_checkerTexture = Screen('MakeTexture', window, f_checkerboard);
      [s1f, s2f] = size(f_checkerboard);
      dstRectf = [0 0 s1f*2*(f2/f1) s2f*2*(f1/f2)] .* 3.2;
      xf = randi([round(((screenXpixels-s2)/2)+(s2f*3.2*2)) round((screenXpixels-((screenXpixels-s2)/2))-(s2f*3.2*2))],1,1);
      yf = randi([round(((screenYpixels-s1)/2)+(s1f*3.2*2)) round((screenYpixels-((screenYpixels-s1)/2))-(s1f*3.2*2))],1,1);
      dstRectf = CenterRectOnPointd(dstRectf, xf, yf);
      xfmin = dstRectf(1);
      yfmin = dstRectf(2);
      xfmax = dstRectf(3);
      yfmax = dstRectf(4);      
      xdstRectf = [xfmin-10:0.2:xfmax];
      ydstRectf = [yfmin-10:0.2:yfmax];
      xRects = [xdstRecta xdstRectb xdstRectc xdstRectd xdstRecte+10];
      yRects = [ydstRecta ydstRectb ydstRectc ydstRectd ydstRecte+10];
      countf = countf + 1;
      if (all(~ismember(xdstRectf,xcoors)) | all(~ismember(ydstRectf,ycoors))) & (all(~ismember(xdstRectf,xRects)) | all(~ismember(ydstRectf,yRects)))
        break
      end
    end
    disp(['number of loops for splash F: ' num2str(countf)]);
#    save A_F.txt countf;  
    
    % Draw the checkerboard texture to the screen. By default bilinear filtering is used. For this example we don't want that, we want nearest neighbour so we change the filter mode to zero
    filterMode = 0;
    Screen('DrawTextures', window, a_checkerTexture, [], dstRecta, 0, filterMode);  
    Screen('DrawTextures', window, b_checkerTexture, [], dstRectb, 0, filterMode);
    Screen('DrawTextures', window, c_checkerTexture, [], dstRectc, 0, filterMode);
    Screen('DrawTextures', window, d_checkerTexture, [], dstRectd, 0, filterMode);
    Screen('DrawTextures', window, e_checkerTexture, [], dstRecte, 0, filterMode);
    Screen('DrawTextures', window, f_checkerTexture, [], dstRectf, 0, filterMode);
    
    % Flip to the screen 
    Screen('Flip', window);

    % GetImage call. Alter the rect argument to change the location of the screen shot
    image2Array = Screen('GetImage', window, [(screenXpixels-s2) (screenYpixels-s1) (screenXpixels-((screenXpixels-s2)/2))*2 (screenYpixels-((screenYpixels-s1)/2))*2]);  

    image2Array = imresize(image2Array, 0.5);
    
    cd(Stimdir); 

    % imwrite is a Matlab function, not a PTB-3 function
    imwrite(image2Array, strcat(baseFileName2,'s.jpg'));     

    cd(rawImagedir);
    
    image3{i+1,1} = imread([rawImagedir '/' images(i+1).name]);
    fileid3 = strcat(images(i+1).name);
    
    [folder, baseFileName3, extension] = fileparts(fileid3);

    % Make the image into a texture
    image3Texture = Screen('MakeTexture', window, image3{i+1,1});
        
    % Draw the image to the screen, unless otherwise specified PTB will draw the texture full size in the center of the screen. We first draw the image in its correct orientation.
    Screen('DrawTexture', window, image3Texture, [], [], 0);
    
    % Flip to the screen 
    Screen('Flip', window);

    % GetImage call. Alter the rect argument to change the location of the screen shot
    image3Array = Screen('GetImage', window, [(screenXpixels-s2) (screenYpixels-s1) (screenXpixels-((screenXpixels-s2)/2))*2 (screenYpixels-((screenYpixels-s1)/2))*2]);     

    image3Array = imresize(image3Array, 0.5);

    cd(Stimdir);
    
    % imwrite is a Matlab function, not a PTB-3 function
    imwrite(image3Array, strcat(baseFileName3,'.jpg'));   

    cd(rawImagedir);
    
    image4{i+1,1} = imread([rawImagedir '/' images(i+1).name]);
    fileid4 = strcat(images(i+1).name);
    
    [folder, baseFileName4, extension] = fileparts(fileid4);

    % Make the image into a texture
    image4Texture = Screen('MakeTexture', window, image4{i+1,1});
        
    % Draw the image to the screen, unless otherwise specified PTB will draw the texture full size in the center of the screen. We first draw the image in its correct orientation.
    Screen('DrawTexture', window, image4Texture, [], [], 0);

    % Draw the checkerboard texture to the screen. By default bilinear filtering is used. For this example we don't want that, we want nearest neighbour so we change the filter mode to zero
    Screen('DrawTextures', window, a_checkerTexture, [], dstRecta, 0, filterMode);  
    Screen('DrawTextures', window, b_checkerTexture, [], dstRectb, 0, filterMode);
    Screen('DrawTextures', window, c_checkerTexture, [], dstRectc, 0, filterMode);
    Screen('DrawTextures', window, d_checkerTexture, [], dstRectd, 0, filterMode);
    Screen('DrawTextures', window, e_checkerTexture, [], dstRecte, 0, filterMode);
    Screen('DrawTextures', window, f_checkerTexture, [], dstRectf, 0, filterMode);
    
    % Flip to the screen 
    Screen('Flip', window);

    % GetImage call. Alter the rect argument to change the location of the screen shot
    image4Array = Screen('GetImage', window, [(screenXpixels-s2) (screenYpixels-s1) (screenXpixels-((screenXpixels-s2)/2))*2 (screenYpixels-((screenYpixels-s1)/2))*2]);     

    image4Array = imresize(image4Array, 0.5);
    
    cd(Stimdir);
    
    % imwrite is a Matlab function, not a PTB-3 function
    imwrite(image4Array, strcat(baseFileName4,'s.jpg')); 

%    A = imread(strcat('nosplash_',fileid1));
%    B = imread(strcat('yessplash_',fileid2));
%    C = imread(strcat('nosplash_',fileid3));
%    D = imread(strcat('yessplash_',fileid4));
%    gif1 = {A;B;C;D}; %A-AM-B-BM
%    filename1 = strcat(num2str(counter),'_A.gif');
%    cd(gifdir);
%    for g=1:numel(gif1)
%        if g == 1
%            imwrite(gif1{g},filename1,'gif','WriteMode','append','DelayTime',2);
%        elseif g == 2
%            imwrite(gif1{g},filename1,'gif','WriteMode','append','DelayTime',.08);
%        elseif g == 3
%            imwrite(gif1{g},filename1,'gif','WriteMode','append','DelayTime',2);
%        elseif g == 4
%            imwrite(gif1{g},filename1,'gif','WriteMode','append','DelayTime',.08);        
%        end
%    end
%
%    gif2 = {A;D;C;B}; %A-BM-B-AM
%    filename2 = strcat(num2str(counter),'_B.gif');
%    for g=1:numel(gif2)
%        if g == 1
%            imwrite(gif2{g},filename2,'gif','WriteMode','append','DelayTime',2);
%        elseif g == 2
%            imwrite(gif2{g},filename2,'gif','WriteMode','append','DelayTime',.08);
%        elseif g == 3
%            imwrite(gif2{g},filename2,'gif','WriteMode','append','DelayTime',2);
%        elseif g == 4
%            imwrite(gif2{g},filename2,'gif','WriteMode','append','DelayTime',.08);        
%        end
%    end
    
    counter = counter+1;
    
    b = b + 1;
    
    cd(rawImagedir);

    Screen('Close');
    
end

cd(Scriptsdir);

sca;
