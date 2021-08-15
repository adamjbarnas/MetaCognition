#!/usr/bin/env python
import sys
import random
import os
from itertools import permutations, combinations
import pandas as pd
import portalocker
import numpy as np

separator = ","

# Assume numTrials will be less than or equal to the number of stims
def generateTrials(workerId, image_file, numTrials):
    if not os.path.exists("batches_counts"):
        os.makedirs("batches_counts")

    # Get list of images from the batches counts file in sorted order
    # but if the counts file doesn't exist, grab the list from the image_file directly.
    # We assume that the stim lists will be exactly the same but different ordering in
    # both cases.
    if os.path.exists("batches_counts/" + image_file + "_batches"):
        f = open("batches_counts/" + image_file + "_batches", "r+")
        portalocker.lock(f, portalocker.LOCK_EX)
        [stimsLine, countsLine] = f.read().splitlines()
        # list of tuple (stim, count)
        stim_count_list = [(stim, int(count)) for stim, count in zip(stimsLine.split(separator), countsLine.split(separator))]
        all_stims_list = [stim_count[0] for stim_count in stim_count_list]      
        # Sort list by lowest count and randomize stims within each count value
        df = pd.DataFrame(stim_count_list,columns=['stim','count'])
        df["shuffle_stim"] = df.groupby("count")["stim"].transform(np.random.permutation)
        df = df.sort_values('count').reset_index(drop=True)
        stim_count_list_randomized = [item for item in zip(df['shuffle_stim'].values, df['count'].values)]
        stim_list = [stim_count[0] for stim_count in stim_count_list_randomized]
        #stim_list = [stim_count[0] for stim_count in sorted(stim_count_list, key=lambda tuple: tuple[1])]

    else:
        images = pd.read_csv(image_file)
        stim_list = images.Image.tolist()
        all_stims_list = stim_list[:]
        stim_count_list = [(stim, 0) for stim in stim_list]
        f = open("./batches_counts/" + image_file + "_batches", "w+")
        portalocker.lock(f, portalocker.LOCK_EX)

    testFile = open('trials/'+workerId+ '_trials.csv','w')

    header = separator.join(["workerId", "trialNum", "unmodified_image", "unmodified_image_splash", "modified_image", "modified_image_splash", "image"])
    #header = separator.join(["workerId", "trialNum", "unmodified_image", "modified_image", "image"])
    print >>testFile, header

    trials = []
    
    random.seed(workerId)
    
    # Saying that it only takes either _L_ or _R_ pics
    side = random.choice(['_L_','_R_']) #pick one mirror version to exclude
    stim_list = [item for item in stim_list if side not in item] # Forgot this one
    
    f.seek(0)
    f.write(separator.join(all_stims_list) + "\n")
    stim_list = stim_list[:numTrials]
    f.write(separator.join([str(count + 1 if stim in set(stim_list) else count) for stim, count in stim_count_list]) + "\n")

    f.truncate()
    f.close()
    
    random.shuffle(stim_list)
    
    # Practice
    image = "catchAirplane"
    unmodified_image = "catchAirplane-a"
    unmodified_image_splash = "catchAirplane-as"
    modified_image = "catchAirplane-b"
    modified_image_splash = "catchAirplane-bs"
    trials.append(separator.join((str(workerId), "p1",unmodified_image,unmodified_image_splash,modified_image,modified_image_splash,image)))
    #trials.append(separator.join((str(workerId), "p1",unmodified_image,modified_image,image)))
    
    image = "catchBoat"
    unmodified_image = "catchBoat-a"
    unmodified_image_splash = "catchBoat-as"
    modified_image = "catchBoat-b"
    modified_image_splash = "catchBoat-bs"
    trials.append(separator.join((str(workerId), "p2",unmodified_image,unmodified_image_splash,modified_image,modified_image_splash,image)))
    #trials.append(separator.join((str(workerId), "p2",unmodified_image,modified_image,image)))
    
    for trial_num,cur_image in enumerate(stim_list):
        unmodified_image = cur_image+"-a"
        unmodified_image_splash = cur_image+"-as"
        modified_image = cur_image+"-b"
        modified_image_splash = cur_image+"-bs"

        
        trials.append(separator.join((str(workerId), str(trial_num+1),unmodified_image,unmodified_image_splash,modified_image,modified_image_splash,cur_image)))
        #trials.append(separator.join((str(workerId), str(trial_num+1),unmodified_image,modified_image,cur_image)))
    
    # Catch
    image = "catchCow"
    unmodified_image = "catchCow-a"
    unmodified_image_splash = "catchCow-as"
    modified_image = "catchCow-b"
    modified_image_splash = "catchCow-bs"
    trials.append(separator.join((str(workerId), "catch",unmodified_image,unmodified_image_splash,modified_image,modified_image_splash,image)))
    #trials.append(separator.join((str(workerId), "catch",unmodified_image,modified_image,image)))

    for cur_trial in trials:
        print >>testFile, cur_trial
        
if __name__ == "__main__":
    trialList = generateTrials(sys.argv[1], sys.argv[2], int(sys.argv[3]))



