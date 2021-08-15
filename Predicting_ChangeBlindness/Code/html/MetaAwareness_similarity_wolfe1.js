/********************** 
 * MetaAwareness Test *
 **********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'MetaAwareness';  // from the Builder filename that created this script
let expInfo = {'age': '', 'worker_ID': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(OpeningRoutineBegin());
flowScheduler.add(OpeningRoutineEachFrame());
flowScheduler.add(OpeningRoutineEnd());
flowScheduler.add(ConsentRoutineBegin());
flowScheduler.add(ConsentRoutineEachFrame());
flowScheduler.add(ConsentRoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(Catch_SameRoutineBegin());
flowScheduler.add(Catch_SameRoutineEachFrame());
flowScheduler.add(Catch_SameRoutineEnd());
flowScheduler.add(Catch_DifferentRoutineBegin());
flowScheduler.add(Catch_DifferentRoutineEachFrame());
flowScheduler.add(Catch_DifferentRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
//dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
{ name: 'Mturk_consent_revised_single_page.png', path: './resources/Mturk_consent_revised_single_page.png' },
{ name: 'rating_similarity.jpg', path: './resources/rating_similarity.jpg' },
{ name: 'wolfe1_semantic_final_descriptions_partial.csv', path: './resources/wolfe1_semantic_final_descriptions_partial.csv' },
]});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var OpeningClock;
var OpeningText;
var ConsentClock;
var consent_text;
var consent_image;
var consent_response;
var InstructionsClock;
var text;
var key_resp_2;
var trialClock;
var user_resp;
var trial_text;
var trial_count;
var Rating;
var text_1;
var text_2;
var box_1;
var box_2;
var text_1_catch_same;
var text_2_catch_same;
var text_1_catch_different;
var text_2_catch_different;
var globalClock;
var routineTimer;

function experimentInit() {
  // Initialize components for Routine "Opening"
  OpeningClock = new util.Clock();
  OpeningText = new visual.TextStim({
    win: psychoJS.window,
    name: 'OpeningText',
    text: 'Setting up the task. This should take 5 seconds. Please be patient.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  
          // add-on: list(s: string): string[]
          function list(s) {
              // if s is a string, we return a list of its characters
              if (typeof s === 'string')
                  return s.split('');
              else
                  // otherwise we return s:
                  return s;
          }
    
  // Initialize components for Routine "Consent"
  ConsentClock = new util.Clock();
  consent_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_text',
    text: 'Please take a moment to read this consent form. Press the spacebar to indicate you read the consent form and voluntarily consent to participate.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.44], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  consent_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_form', units : undefined, 
    image : 'Mturk_consent_revised_single_page.png', mask : undefined,
    ori : 0, pos : [0, -0.08], size : [0.75, 0.97],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  consent_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Welcome to the experiment!\n\nIn this experiment, you will see descriptions written by someone else as they looked at two pictures that contained a small difference.\n\nYour task is to rate how similar you think the descriptions are to each other using a scale of 1 to 6.\n\nPress 1 if the descriptions are completely different.\nPress 2 if you think the descriptions are very dissimilar.\nPress 3 if you think the descriptions are slightly dissimilar.\nPress 4 if you think the descriptions are slightly similar.\nPress 5 if you think you the descriptions are very similar.\nPress 6 if the descriptions are the same.\n\nSome of the descriptions may contain spelling or grammar errors or may be confusing - that\'s fine, just try to rate their similarity as best as possible.\n\nThere is no benefit for responding quickly. Please take enough time to read through the descriptions before making your response. \n\n\nPress the spacebar to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 1.25, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
 
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  user_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  trial_count = 0;
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
    
  trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_text',
    text: 'How similar are these descriptions?',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.055], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  Rating = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Rating', units : 'pix', 
    image : 'rating_similarity.jpg', mask : undefined,
    ori : 0, pos : [0, -200], size : [849, 189],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, .165], height: 0.03,  wrapWidth: .525, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [.33, .165], height: 0.03,  wrapWidth: .525, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
box_1 = new visual.Rect ({
    win: psychoJS.window, name: 'box_1', units : 'pix', 
    width: [500, 500][0], height: [250, 250][1],
    ori: 0, pos: [-300, 150],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'box_2', units : 'pix', 
    width: [500, 500][0], height: [250, 250][1],
    ori: 0, pos: [300, 150],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
text_1_catch_same = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1_catch_same',
    text: 'someone laying underneath a blue beach umbrella on a crowded beach',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, .165], height: 0.03,  wrapWidth: .525, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
text_2_catch_same = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2_catch_same',
    text: 'someone laying underneath a blue beach umbrella on a crowded beach',
    font: 'Arial',
    units: undefined, 
    pos: [.33, .165], height: 0.03,  wrapWidth: .525, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
text_1_catch_different = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1_catch_different',
    text: 'members of a marching band crossing a track that all have feather plumes at the front of their hats',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, .165], height: 0.03,  wrapWidth: .525, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
text_2_catch_different = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2_catch_different',
    text: 'a cluttered and rustic looking cafe with 10 hanging lights',
    font: 'Arial',
    units: undefined, 
    pos: [.33, .165], height: 0.03,  wrapWidth: .525, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var OpeningComponents;
function OpeningRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Opening'-------
    t = 0;
    OpeningClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    OpeningComponents = [];
    OpeningComponents.push(OpeningText);
    
    for (const thisComponent of OpeningComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

var frameRemains;
var continueRoutine;
function OpeningRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Opening'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = OpeningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *OpeningText* updates
    if (t >= 0.0 && OpeningText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      OpeningText.tStart = t;  // (not accounting for frame time here)
      OpeningText.frameNStart = frameN;  // exact frame index
      
      OpeningText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (OpeningText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      OpeningText.setAutoDraw(false);
    }

      
    //continueRoutine = window.checkProgress();
    // check for quit (typically the Esc key)
//    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
//      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
//    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of OpeningComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function OpeningRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Opening'-------
    for (const thisComponent of OpeningComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Wait" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _consent_response_allKeys;
var ConsentComponents;
function ConsentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent'-------
    t = 0;
    ConsentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    consent_response.keys = undefined;
    consent_response.rt = undefined;
    _consent_response_allKeys = [];
    
    text.setAlignHoriz('center');
      
    // keep track of which components have finished
    ConsentComponents = [];
    ConsentComponents.push(consent_text);
    ConsentComponents.push(consent_image);
    ConsentComponents.push(consent_response);
    
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function ConsentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_text* updates
    if (t >= 0.0 && consent_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_text.tStart = t;  // (not accounting for frame time here)
      consent_text.frameNStart = frameN;  // exact frame index
      
      consent_text.setAutoDraw(true);
    }

    
    // *consent_image* updates
    if (t >= 0.0 && consent_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_image.tStart = t;  // (not accounting for frame time here)
      consent_image.frameNStart = frameN;  // exact frame index
      
      consent_image.setAutoDraw(true);
    }

    
    // *consent_response* updates
    if (t >= 0.0 && consent_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_response.tStart = t;  // (not accounting for frame time here)
      consent_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_response.clearEvents(); });
    }

    if (consent_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_response.getKeys({keyList: ['space'], waitRelease: false});
      _consent_response_allKeys = _consent_response_allKeys.concat(theseKeys);
      if (_consent_response_allKeys.length > 0) {
        consent_response.keys = _consent_response_allKeys[0].name;
        consent_response.rt = _consent_response_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
//    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
//      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
//    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ConsentRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent'-------
    for (const thisComponent of ConsentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_response.keys', consent_response.keys);
    if (typeof consent_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('consent_response.rt', consent_response.rt);
        routineTimer.reset();
        }
    
    consent_response.stop();
    // the Routine "Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    
    text.setAlignHoriz('center');
      
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(text);
    InstructionsComponents.push(key_resp_2);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
      
    return Scheduler.Event.NEXT;
  };
}


function InstructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
      
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
//    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
//      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
//    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'wolfe1_semantic_final_descriptions_partial.csv',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _user_resp_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    trial_count = (trial_count + 1);
    if (trial_count > 29) {
        continueRoutine = false;
        trials.finished = true;
    }
    text_1.setText(image_1_text);
    text_2.setText(image_2_text);
    user_resp.keys = undefined;
    user_resp.rt = undefined;
    _user_resp_allKeys = []
    
    text_1.setAlignHoriz('center');
    text_2.setAlignHoriz('center');
      
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(user_resp);
    trialComponents.push(trial_text);
    trialComponents.push(Rating);
    trialComponents.push(box_1);
    trialComponents.push(box_2);
    trialComponents.push(text_1);
    trialComponents.push(text_2);
    
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *user_resp* updates
    if (t >= 0.0 && user_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      user_resp.tStart = t;  // (not accounting for frame time here)
      user_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { user_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { user_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { user_resp.clearEvents(); });
    }

    if (user_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = user_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6'], waitRelease: false});
      _user_resp_allKeys = _user_resp_allKeys.concat(theseKeys);
      if (_user_resp_allKeys.length > 0) {
        user_resp.keys = _user_resp_allKeys[_user_resp_allKeys.length - 1].name;  // just the last key pressed
        user_resp.rt = _user_resp_allKeys[_user_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trial_text* updates
    if (t >= 0.5 && trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text.tStart = t;  // (not accounting for frame time here)
      trial_text.frameNStart = frameN;  // exact frame index
      
      trial_text.setAutoDraw(true);
    }

    
    // *Rating* updates
    if (t >= 0.5 && Rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rating.tStart = t;  // (not accounting for frame time here)
      Rating.frameNStart = frameN;  // exact frame index
      
      Rating.setAutoDraw(true);
    }

    // *box_1* updates
    if (t >= 0.5 && box_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_1.tStart = t;  // (not accounting for frame time here)
      box_1.frameNStart = frameN;  // exact frame index
      
      box_1.setAutoDraw(true);
    }
      
    // *box_2* updates
    if (t >= 0.5 && box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_2.tStart = t;  // (not accounting for frame time here)
      box_2.frameNStart = frameN;  // exact frame index
      
      box_2.setAutoDraw(true);
    }
    
    // *text_1* updates
    if (t >= 0.5 && text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1.tStart = t;  // (not accounting for frame time here)
      text_1.frameNStart = frameN;  // exact frame index
      
      text_1.setAutoDraw(true);
    }
    
    // *text_2* updates
    if (t >= 0.5 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
      
    // check for quit (typically the Esc key)
//    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
//      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
//    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('user_resp.keys', user_resp.keys);
    if (typeof user_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('user_resp.rt', user_resp.rt);
        routineTimer.reset();
        }
    
    user_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _user_resp_allKeys;
var Catch_SameComponents;
function Catch_SameRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Catch_Same'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    user_resp.keys = undefined;
    user_resp.rt = undefined;
    _user_resp_allKeys = []
    
    text_1_catch_same.setAlignHoriz('center');
    text_2_catch_same.setAlignHoriz('center');
      
    // keep track of which components have finished
    Catch_SameComponents = [];
    Catch_SameComponents.push(user_resp);
    Catch_SameComponents.push(trial_text);
    Catch_SameComponents.push(Rating);
    Catch_SameComponents.push(box_1);
    Catch_SameComponents.push(box_2);
    Catch_SameComponents.push(text_1_catch_same);
    Catch_SameComponents.push(text_2_catch_same);
    
    
    for (const thisComponent of Catch_SameComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Catch_SameRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *user_resp* updates
    if (t >= 0.0 && user_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      user_resp.tStart = t;  // (not accounting for frame time here)
      user_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { user_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { user_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { user_resp.clearEvents(); });
    }

    if (user_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = user_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6'], waitRelease: false});
      _user_resp_allKeys = _user_resp_allKeys.concat(theseKeys);
      if (_user_resp_allKeys.length > 0) {
        user_resp.keys = _user_resp_allKeys[_user_resp_allKeys.length - 1].name;  // just the last key pressed
        user_resp.rt = _user_resp_allKeys[_user_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trial_text* updates
    if (t >= 0.5 && trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text.tStart = t;  // (not accounting for frame time here)
      trial_text.frameNStart = frameN;  // exact frame index
      
      trial_text.setAutoDraw(true);
    }

    
    // *Rating* updates
    if (t >= 0.5 && Rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rating.tStart = t;  // (not accounting for frame time here)
      Rating.frameNStart = frameN;  // exact frame index
      
      Rating.setAutoDraw(true);
    }

    // *box_1* updates
    if (t >= 0.5 && box_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_1.tStart = t;  // (not accounting for frame time here)
      box_1.frameNStart = frameN;  // exact frame index
      
      box_1.setAutoDraw(true);
    }
      
    // *box_2* updates
    if (t >= 0.5 && box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_2.tStart = t;  // (not accounting for frame time here)
      box_2.frameNStart = frameN;  // exact frame index
      
      box_2.setAutoDraw(true);
    }
    
    // *text_1_catch_same* updates
    if (t >= 0.5 && text_1_catch_same.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1_catch_same.tStart = t;  // (not accounting for frame time here)
      text_1_catch_same.frameNStart = frameN;  // exact frame index
      
      text_1_catch_same.setAutoDraw(true);
    }
    
    // *text_2_catch_same* updates
    if (t >= 0.5 && text_2_catch_same.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2_catch_same.tStart = t;  // (not accounting for frame time here)
      text_2_catch_same.frameNStart = frameN;  // exact frame index
      
      text_2_catch_same.setAutoDraw(true);
    }
      
    // check for quit (typically the Esc key)
//    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
//      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
//    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Catch_SameComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Catch_SameRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of Catch_SameComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('catch_same_resp.keys', user_resp.keys);
    if (typeof user_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('catch_same_resp.rt', user_resp.rt);
        routineTimer.reset();
        }
    
    user_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    psychoJS.experiment.addData("image_1_text_catch_same", text_1_catch_same.text)
    psychoJS.experiment.addData("image_2_text_catch_same", text_2_catch_same.text)
    psychoJS.experiment.addData("image_catch_same", "same")
    text.setText('') 
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _user_resp_allKeys;
var Catch_DifferentComponents;
function Catch_DifferentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Catch_Different'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    user_resp.keys = undefined;
    user_resp.rt = undefined;
    _user_resp_allKeys = []
    
    text_1_catch_different.setAlignHoriz('center');
    text_2_catch_different.setAlignHoriz('center');
      
    // keep track of which components have finished
    Catch_DifferentComponents = [];
    Catch_DifferentComponents.push(user_resp);
    Catch_DifferentComponents.push(trial_text);
    Catch_DifferentComponents.push(Rating);
    Catch_DifferentComponents.push(box_1);
    Catch_DifferentComponents.push(box_2);
    Catch_DifferentComponents.push(text_1_catch_different);
    Catch_DifferentComponents.push(text_2_catch_different);
    
    
    for (const thisComponent of Catch_DifferentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Catch_DifferentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *user_resp* updates
    if (t >= 0.0 && user_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      user_resp.tStart = t;  // (not accounting for frame time here)
      user_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { user_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { user_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { user_resp.clearEvents(); });
    }

    if (user_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = user_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6'], waitRelease: false});
      _user_resp_allKeys = _user_resp_allKeys.concat(theseKeys);
      if (_user_resp_allKeys.length > 0) {
        user_resp.keys = _user_resp_allKeys[_user_resp_allKeys.length - 1].name;  // just the last key pressed
        user_resp.rt = _user_resp_allKeys[_user_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trial_text* updates
    if (t >= 0.5 && trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text.tStart = t;  // (not accounting for frame time here)
      trial_text.frameNStart = frameN;  // exact frame index
      
      trial_text.setAutoDraw(true);
    }

    
    // *Rating* updates
    if (t >= 0.5 && Rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rating.tStart = t;  // (not accounting for frame time here)
      Rating.frameNStart = frameN;  // exact frame index
      
      Rating.setAutoDraw(true);
    }

    // *box_1* updates
    if (t >= 0.5 && box_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_1.tStart = t;  // (not accounting for frame time here)
      box_1.frameNStart = frameN;  // exact frame index
      
      box_1.setAutoDraw(true);
    }
      
    // *box_2* updates
    if (t >= 0.5 && box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box_2.tStart = t;  // (not accounting for frame time here)
      box_2.frameNStart = frameN;  // exact frame index
      
      box_2.setAutoDraw(true);
    }
    
    // *text_1_catch_different* updates
    if (t >= 0.5 && text_1_catch_different.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1_catch_different.tStart = t;  // (not accounting for frame time here)
      text_1_catch_different.frameNStart = frameN;  // exact frame index
      
      text_1_catch_different.setAutoDraw(true);
    }
    
    // *text_2_catch_different* updates
    if (t >= 0.5 && text_2_catch_different.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2_catch_different.tStart = t;  // (not accounting for frame time here)
      text_2_catch_different.frameNStart = frameN;  // exact frame index
      
      text_2_catch_different.setAutoDraw(true);
    }
      
    // check for quit (typically the Esc key)
//    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
//      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
//    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Catch_DifferentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Catch_DifferentRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of Catch_DifferentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('catch_different_resp.keys', user_resp.keys);
    if (typeof user_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('catch_different_resp.rt', user_resp.rt);
        routineTimer.reset();
        }
    
    user_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    psychoJS.experiment.addData("image_1_text_catch_different", text_1_catch_different.text)
    psychoJS.experiment.addData("image_2_text_catch_different", text_2_catch_different.text)
    psychoJS.experiment.addData("image_catch_different", "different")
    text.setText('') 
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
