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
flowScheduler.add(Example_1RoutineBegin());
flowScheduler.add(Example_1RoutineEachFrame());
flowScheduler.add(Example_1RoutineEnd());
flowScheduler.add(Example_2RoutineBegin());
flowScheduler.add(Example_2RoutineEachFrame());
flowScheduler.add(Example_2RoutineEnd());
flowScheduler.add(Example_3RoutineBegin());
flowScheduler.add(Example_3RoutineEachFrame());
flowScheduler.add(Example_3RoutineEnd());
flowScheduler.add(StartRoutineBegin());
flowScheduler.add(StartRoutineEachFrame());
flowScheduler.add(StartRoutineEnd());
//flowScheduler.add(AirplaneRoutineBegin());
//flowScheduler.add(AirplaneRoutineEachFrame());
//flowScheduler.add(AirplaneRoutineEnd());
//flowScheduler.add(BoatRoutineBegin());
//flowScheduler.add(BoatRoutineEachFrame());
//flowScheduler.add(BoatRoutineEnd());
const trials_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_1LoopBegin, trials_1LoopScheduler);
flowScheduler.add(trials_1LoopScheduler);
flowScheduler.add(trials_1LoopEnd);
flowScheduler.add(CowRoutineBegin());
flowScheduler.add(CowRoutineEachFrame());
flowScheduler.add(CowRoutineEnd());
flowScheduler.add(AirplaneRoutineBegin());
flowScheduler.add(AirplaneRoutineEachFrame());
flowScheduler.add(AirplaneRoutineEnd());
//flowScheduler.add(GardenRoutineBegin());
//flowScheduler.add(GardenRoutineEachFrame());
//flowScheduler.add(GardenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
//dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
{ name: 'Mturk_consent_revised_single_page.png', path: './resources/Mturk_consent_revised_single_page.png' },
{ name: 'Example_1-a_w_outline.jpg', path: './resources/Example_1-a_w_outline.jpg' },
{ name: 'Example_1-b_w_outline.jpg', path: './resources/Example_1-b_w_outline.jpg' },
{ name: 'Example_2-a_w_outline.jpg', path: './resources/Example_2-a_w_outline.jpg' },
{ name: 'Example_2-b_w_outline.jpg', path: './resources/Example_2-b_w_outline.jpg' },
{ name: 'Example_3-a_w_outline.jpg', path: './resources/Example_3-a_w_outline.jpg' },
{ name: 'Example_3-b_w_outline.jpg', path: './resources/Example_3-b_w_outline.jpg' },
{ name: 'catchAirplane-a_w_outline.jpg', path: './resources/catchAirplane-a_w_outline.jpg' },
{ name: 'catchAirplane-b_w_outline.jpg', path: './resources/catchAirplane-b_w_outline.jpg' },
{ name: 'catchBoat-a_w_outline.jpg', path: './resources/catchBoat-a_w_outline.jpg' },
{ name: 'catchBoat-b_w_outline.jpg', path: './resources/catchBoat-b_w_outline.jpg' },
{ name: 'catchCow-a_w_outline.jpg', path: './resources/catchCow-a_w_outline.jpg' },
{ name: 'catchCow-b_w_outline.jpg', path: './resources/catchCow-b_w_outline.jpg' },
{ name: 'catchGarden-a_w_outline.jpg', path: './resources/catchGarden-a_w_outline.jpg' },
{ name: 'catchGarden-b_w_outline.jpg', path: './resources/catchGarden-b_w_outline.jpg' },
{ name: 'ma_trial_list_partial.csv', path: './resources/ma_trial_list_partial.csv' },
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

var setText;
var OpeningClock;
var OpeningText;
var ConsentClock;
var consent_text;
var consent_image;
var consent_response;
var InstructionsClock;
var text;
var text_2;
var key_resp_2;
var StartClock;
var Start_text;
var Start_2;
var Start_resp_2;
var Example_1Clock;
var Example_1_resp;
var Example_1_title;
var Example_1_text;
var Example_1_rating;
var Example_1_a;
var Example_1_b;
var Example_1_a_box;
var Example_1_b_box;
var Example_1_a_holder;
var Example_1_b_holder;
var Example_1_a_text;
var Example_1_b_text;
var Example_1_response;
var Example_1_mouse;
var Example_1_press;
var Example_2Clock;
var Example_2_resp;
var Example_2_title;
var Example_2_text;
var Example_2_rating;
var Example_2_a;
var Example_2_b;
var Example_2_a_box;
var Example_2_b_box;
var Example_2_a_holder;
var Example_2_b_holder;
var Example_2_a_text;
var Example_2_b_text;
var Example_2_response;
var Example_2_mouse;
var Example_2_press;
var Example_3Clock;
var Example_3_resp;
var Example_3_title;
var Example_3_text;
var Example_3_rating;
var Example_3_a;
var Example_3_b;
var Example_3_a_box;
var Example_3_b_box;
var Example_3_a_holder;
var Example_3_b_holder;
var Example_3_a_text;
var Example_3_b_text;
var Example_3_response;
var Example_3_mouse;
var Example_3_press;
var AirplaneClock;
var Airplane_resp;
var Airplane_text;
var Airplane_rating;
var Airplane_a;
var Airplane_b;
var Airplane_a_box;
var Airplane_b_box;
var Airplane_a_holder;
var Airplane_b_holder;
var Airplane_a_text;
var Airplane_b_text;
var Airplane_response;
var Airplane_mouse;
var Airplane_press;
var BoatClock;
var Boat_resp;
var Boat_text;
var Boat_rating;
var Boat_a;
var Boat_b;
var Boat_a_box;
var Boat_b_box;
var Boat_a_holder;
var Boat_b_holder;
var Boat_a_text;
var Boat_b_text;
var Boat_response;
var Boat_mouse;
var Boat_press;
var trial_1Clock;
var user_1_resp;
var trial_1_text;
var trial_1_count;
var Rating_1;
var image_1_1;
var image_1_2;
var image_1_1_box;
var image_1_2_box;
var image_1_1_holder;
var image_1_2_holder;
var image_1_1_text;
var image_1_2_text;
var trial_1_response;
var trial_1_mouse;
var trial_1_press;
var CowClock;
var Cow_resp;
var Cow_text;
var Cow_rating;
var Cow_a;
var Cow_b;
var Cow_a_box;
var Cow_b_box;
var Cow_a_holder;
var Cow_b_holder;
var Cow_a_text;
var Cow_b_text;
var Cow_response;
var Cow_mouse;
var Cow_press;
var GardenClock;
var Garden_resp;
var Garden_text;
var Garden_rating;
var Garden_a;
var Garden_b;
var Garden_a_box;
var Garden_b_box;
var Garden_a_holder;
var Garden_b_holder;
var Garden_a_text;
var Garden_b_text;
var Garden_response;
var Garden_mouse;
var Garden_press;
var globalClock;
var routineTimer;
var trial_set_resourceValue_1;
var trial_set_workbook_1;
var ts_sheetName_1;
var ts_worksheet_1;
var ts_sheet_1;
var ts_resourceList_1;
var modify;
var prac_trial_rows;
var mix_rows;
var currentIndexM;
var randomIndexM;
var temporaryValueM;
var org_rows;
var currentIndexO;
var randomIndexO;
var temporaryValueO;
var currentIndexP;
var randomIndexP;
var temporaryValueP;
var pathway;

var start = new Date();
var start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
console.log(start_time);

function experimentInit() {
  // Initialize components for Routine "Opening"
  OpeningClock = new util.Clock();
  OpeningText = new visual.TextStim({
    win: psychoJS.window,
    name: 'OpeningText',
    text: 'Setting up the task. This should take 15 seconds. Please be patient.',
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
    
pathway = 'ma_trial_list_partial.csv';

    // Create practice trials
  prac_trial_rows = [];
  for (var t = 0; t < 12; t++) {
      prac_trial_rows.push(0);
  }
  
  mix_rows = [];
  for (var m = 0; m < 12; m++) {
      mix_rows.push(m);
  }
  
  currentIndexM = mix_rows.length;
  randomIndexM = 0;
  temporaryValueM = 0;
  
  // While there remain elements to shuffle...
  while (0 !== currentIndexM) {
      // Pick a remaining element...
      randomIndexM = Math.floor(Math.random() * currentIndexM);
      currentIndexM -= 1;
  
      // And swap it with the current element.
      temporaryValueM = mix_rows[currentIndexM];
      mix_rows[currentIndexM] = mix_rows[randomIndexM];
      mix_rows[randomIndexM] = temporaryValueM;
  }
  
  org_rows = [];
  for (var o = 0; o < 36; o++) {    //change 36 to 69 for full
      org_rows.push(o);
  }
  
  currentIndexO = org_rows.length;
  randomIndexO = 0;
  temporaryValueO = 0;
  
  // While there remain elements to shuffle...
  while (0 !== currentIndexO) {
      // Pick a remaining element...
      randomIndexO = Math.floor(Math.random() * currentIndexO);
      currentIndexO -= 1;
  
      // And swap it with the current element.
      temporaryValueO = org_rows[currentIndexO];
      org_rows[currentIndexO] = org_rows[randomIndexO];
      org_rows[randomIndexO] = temporaryValueO;
  }
  
  // Take first indices of shuffled trial list as mixed trials
  for (var mp = 0; mp < 12; mp++) {
      prac_trial_rows[mp] = mix_rows[mp];
  }
  
  // Take first indices of shuffled trial list as original trials
  for (var op = 0; op < 12; op++) {
      prac_trial_rows[op] = org_rows[op];
  }
  
  // Shuffle final practice trial rows array
  currentIndexP = prac_trial_rows.length;
  randomIndexP = 0;
  temporaryValueP = 0;
  
  // While there remain elements to shuffle...
  while (0 !== currentIndexP) {
      // Pick a remaining element...
      randomIndexP = Math.floor(Math.random() * currentIndexP);
      currentIndexP -= 1;
  
      // And swap it with the current element.
      temporaryValueP = prac_trial_rows[currentIndexP];
      prac_trial_rows[currentIndexP] = prac_trial_rows[randomIndexP];
      prac_trial_rows[randomIndexP] = temporaryValueP;
  }
  console.log(prac_trial_rows);
    
  // (*) read conditions from resource:
  
  trial_set_resourceValue_1 = psychoJS.serverManager.getResource(pathway);
  
  trial_set_workbook_1 = XLSX.read(new Uint8Array(trial_set_resourceValue_1), { type: "array" });
  
  // we consider only the first worksheet:
  
  ts_sheetName_1 = trial_set_workbook_1.SheetNames[0];
  
  ts_worksheet_1 = trial_set_workbook_1.Sheets[ts_sheetName_1];
  
  // worksheet to array of arrays (the first array contains the fields):
  
  ts_sheet_1 = XLSX.utils.sheet_to_json(ts_worksheet_1, { header: 1, blankrows: false });
  
  ts_resourceList_1 =  []; //new Array(ts_sheet.length - 1);\
  
  for (var r = 1; r < ts_sheet_1.length; ++r) {
  
      let ts_row_1 = ts_sheet_1[r];
  
      // Add stim video resource
      ts_resourceList_1.push({
            name: ts_row_1[2],
            path: "./resources/" + ts_row_1[2]
          });
  
      // Add final frame resource
      ts_resourceList_1.push({
            name: ts_row_1[3],
            path: "./resources/" + ts_row_1[3]
          });
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
    text: 'Welcome to the experiment! \n\nIn this task, we are asking you to describe pairs of images. \n\nFor each image in a pair, you will describe the scene as a whole, including the object inside the yellow box. \n\nThere is no benefit for being fast. Please allow sufficient time to provide a detailed description for each image. \n\n\nThe next section contains three (3) examples. Use these examples as models for your own descriptions. HITs will be rejected if the descriptions appear to lack sufficient detail or effort. \n\n\n\nPress the spacebar to view the examples.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 1, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });

  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Example_1"
  Example_1Clock = new util.Clock();
  Example_1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  setText = function(text) {
      let textAdd = undefined;
      modify = false;
      let theseKeys = psychoJS.eventManager.getKeys();
//      let theseKeys = psychoJS.eventManager.getKeys({keyList: ['1','2','3','4','5','6','7','8','9','0', 'backspace']});
        if (theseKeys.length > 0) {  // at least one key was pressed
          textAdd = theseKeys[theseKeys.length-1]; 
          }
        
        if (textAdd === 'return') {
            textAdd = '';  // Add nothing
//            if (text.text.length === 0) {
//                continueRoutine = true;  // End routine (if that is what you want)
//            } else {
//                continueRoutine = false;
//            }
        } else if (textAdd === 'space') {
            text.text += ' ';  // Add a space
        } else if (textAdd === 'backspace') {
            text.text = text.text.slice(0, -1);
            textAdd = undefined;
        } else if (textAdd === 'period') {
            text.text += '.';  // Add a period
        } else if (textAdd === 'comma') {
            text.text += ',';  // Add a period
        } else if (textAdd === 'apostrophe') {
            text.text += "'";  // Add a period
        } else if (textAdd === 'semicolon') {
            text.text += ';';  // Add a period
        } else if (textAdd === 'minus') {
            text.text += '-';  // Add a period
        } else if (textAdd === 'equal') {
            text.text += '=';  // Add a period
        } else if (textAdd === 'tab') {
            text.text += '';  // Add a period
        } else if (textAdd === 'bracketleft') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'bracketright') {
            text.text += '';  // Add a period
        } else if (textAdd === 'backslash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'capslock') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcontrol') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'loption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'grave') {
            text.text += '';  // Add a period
        } else if (textAdd === 'slash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'rcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'roption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'left') {
            text.text += '';  // Add a period
        } else if (textAdd === 'right') {
            text.text += '';  // Add a period
        } else if (textAdd === 'up') {
            text.text += '';  // Add a period
        } else if (textAdd === 'down') {
            text.text += '';  // Add a period
        } else if (['lshift', 'rshift'].includes(textAdd)) {
            modify = true;
        } else if (textAdd !== undefined) {
            if (modify) {
                text.text = text.text + textAdd.toUpperCase();
                modify = false;
            } else {
                text.text = text.text + textAdd
            }
            textAdd = undefined;
        }
  }

  Example_1_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_1_title',
    text: 'Example 1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.425], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -1.0 
  });
    
  Example_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_1_text',
    text: 'Provide a description for each image, including the object inside the yellow box.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.1125], height: 0.03,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
//  Airplane_rating = new visual.ImageStim({
//    win : psychoJS.window,
//    name : 'Rating', units : 'pix', 
//    image : 'rating.jpg', mask : undefined,
//    ori : 0, pos : [0, -300], size : [750, 151],
//    color : new util.Color('white'), opacity : 1,
//    flipHoriz : false, flipVert : false,
//    texRes : 128, interpolate : true, depth : -1.0
//  });
  Example_1_a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Example_1_a', units : 'pix', 
    image : 'Example_1-a_w_outline.jpg', mask : undefined,
    ori : 0, pos : [-300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Example_1_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Example_1_b', units : 'pix', 
    image : 'Example_1-b_w_outline.jpg', mask : undefined,
    ori : 0, pos : [300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0  
  });
  Example_1_a_box = new visual.Rect ({
    win: psychoJS.window, name: 'Example_1_a_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [-300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Example_1_b_box = new visual.Rect ({
    win: psychoJS.window, name: 'Example_1_b_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Example_1_a_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_1_a_holder',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.33], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
  
  Example_1_b_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_1_b_holder',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.33], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
    
  Example_1_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_1_a_text',
    text: 'members of a marching band crossing a track that all have feather plumes at the front of their hats',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Example_1_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_1_b_text',
    text: 'members of a marching band crossing a track with one player who has their feather plume at the back of their hat',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });

  Example_1_press = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_1_press',
    text: 'Press the spacebar to view another example.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.425], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
    
  Example_1_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Example_1_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  Example_1_mouse.mouseClock = new util.Clock();
  
// Initialize components for Routine "Example_2"
  Example_2Clock = new util.Clock();
  Example_2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  setText = function(text) {
      let textAdd = undefined;
      modify = false;
      let theseKeys = psychoJS.eventManager.getKeys();
//      let theseKeys = psychoJS.eventManager.getKeys({keyList: ['1','2','3','4','5','6','7','8','9','0', 'backspace']});
        if (theseKeys.length > 0) {  // at least one key was pressed
          textAdd = theseKeys[theseKeys.length-1]; 
          }
        
        if (textAdd === 'return') {
            textAdd = '';  // Add nothing
//            if (text.text.length === 0) {
//                continueRoutine = true;  // End routine (if that is what you want)
//            } else {
//                continueRoutine = false;
//            }
        } else if (textAdd === 'space') {
            text.text += ' ';  // Add a space
        } else if (textAdd === 'backspace') {
            text.text = text.text.slice(0, -1);
            textAdd = undefined;
        } else if (textAdd === 'period') {
            text.text += '.';  // Add a period
        } else if (textAdd === 'comma') {
            text.text += ',';  // Add a period
        } else if (textAdd === 'apostrophe') {
            text.text += "'";  // Add a period
        } else if (textAdd === 'semicolon') {
            text.text += ';';  // Add a period
        } else if (textAdd === 'minus') {
            text.text += '-';  // Add a period
        } else if (textAdd === 'equal') {
            text.text += '=';  // Add a period
        } else if (textAdd === 'tab') {
            text.text += '';  // Add a period
        } else if (textAdd === 'bracketleft') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'bracketright') {
            text.text += '';  // Add a period
        } else if (textAdd === 'backslash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'capslock') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcontrol') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'loption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'grave') {
            text.text += '';  // Add a period
        } else if (textAdd === 'slash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'rcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'roption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'left') {
            text.text += '';  // Add a period
        } else if (textAdd === 'right') {
            text.text += '';  // Add a period
        } else if (textAdd === 'up') {
            text.text += '';  // Add a period
        } else if (textAdd === 'down') {
            text.text += '';  // Add a period
        } else if (['lshift', 'rshift'].includes(textAdd)) {
            modify = true;
        } else if (textAdd !== undefined) {
            if (modify) {
                text.text = text.text + textAdd.toUpperCase();
                modify = false;
            } else {
                text.text = text.text + textAdd
            }
            textAdd = undefined;
        }
  }

  Example_2_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_2_title',
    text: 'Example 2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.425], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -1.0 
  });
    
  Example_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_2_text',
    text: 'Provide a description for each image, including the object inside the yellow box.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.1125], height: 0.03,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
//  Airplane_rating = new visual.ImageStim({
//    win : psychoJS.window,
//    name : 'Rating', units : 'pix', 
//    image : 'rating.jpg', mask : undefined,
//    ori : 0, pos : [0, -300], size : [750, 151],
//    color : new util.Color('white'), opacity : 1,
//    flipHoriz : false, flipVert : false,
//    texRes : 128, interpolate : true, depth : -1.0
//  });
  Example_2_a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Example_2_a', units : 'pix', 
    image : 'Example_2-a_w_outline.jpg', mask : undefined,
    ori : 0, pos : [-300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Example_2_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Example_2_b', units : 'pix', 
    image : 'Example_2-b_w_outline.jpg', mask : undefined,
    ori : 0, pos : [300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0  
  });
  Example_2_a_box = new visual.Rect ({
    win: psychoJS.window, name: 'Example_2_a_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [-300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Example_2_b_box = new visual.Rect ({
    win: psychoJS.window, name: 'Example_2_b_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Example_2_a_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_2_a_holder',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.33], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
  
  Example_2_b_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_2_b_holder',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.33], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
    
  Example_2_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_2_a_text',
    text: 'a cluttered and rustic looking cafe with 10 hanging lights',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Example_2_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_2_b_text',
    text: 'a cluttered and rustic looking cafe with 9 hanging lights',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });

  Example_2_press = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_2_press',
    text: 'Press the spacebar to view another example.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.425], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
    
  Example_2_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Example_2_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  Example_2_mouse.mouseClock = new util.Clock();
    
// Initialize components for Routine "Example_3"
  Example_3Clock = new util.Clock();
  Example_3_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  setText = function(text) {
      let textAdd = undefined;
      modify = false;
      let theseKeys = psychoJS.eventManager.getKeys();
//      let theseKeys = psychoJS.eventManager.getKeys({keyList: ['1','2','3','4','5','6','7','8','9','0', 'backspace']});
        if (theseKeys.length > 0) {  // at least one key was pressed
          textAdd = theseKeys[theseKeys.length-1]; 
          }
        
        if (textAdd === 'return') {
            textAdd = '';  // Add nothing
//            if (text.text.length === 0) {
//                continueRoutine = true;  // End routine (if that is what you want)
//            } else {
//                continueRoutine = false;
//            }
        } else if (textAdd === 'space') {
            text.text += ' ';  // Add a space
        } else if (textAdd === 'backspace') {
            text.text = text.text.slice(0, -1);
            textAdd = undefined;
        } else if (textAdd === 'period') {
            text.text += '.';  // Add a period
        } else if (textAdd === 'comma') {
            text.text += ',';  // Add a period
        } else if (textAdd === 'apostrophe') {
            text.text += "'";  // Add a period
        } else if (textAdd === 'semicolon') {
            text.text += ';';  // Add a period
        } else if (textAdd === 'minus') {
            text.text += '-';  // Add a period
        } else if (textAdd === 'equal') {
            text.text += '=';  // Add a period
        } else if (textAdd === 'tab') {
            text.text += '';  // Add a period
        } else if (textAdd === 'bracketleft') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'bracketright') {
            text.text += '';  // Add a period
        } else if (textAdd === 'backslash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'capslock') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcontrol') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'loption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'grave') {
            text.text += '';  // Add a period
        } else if (textAdd === 'slash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'rcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'roption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'left') {
            text.text += '';  // Add a period
        } else if (textAdd === 'right') {
            text.text += '';  // Add a period
        } else if (textAdd === 'up') {
            text.text += '';  // Add a period
        } else if (textAdd === 'down') {
            text.text += '';  // Add a period
        } else if (['lshift', 'rshift'].includes(textAdd)) {
            modify = true;
        } else if (textAdd !== undefined) {
            if (modify) {
                text.text = text.text + textAdd.toUpperCase();
                modify = false;
            } else {
                text.text = text.text + textAdd
            }
            textAdd = undefined;
        }
  }

  Example_3_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_3_title',
    text: 'Example 3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.425], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -1.0 
  });
    
  Example_3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_3_text',
    text: 'Provide a description for each image, including the object inside the yellow box.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.1125], height: 0.03,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
//  Airplane_rating = new visual.ImageStim({
//    win : psychoJS.window,
//    name : 'Rating', units : 'pix', 
//    image : 'rating.jpg', mask : undefined,
//    ori : 0, pos : [0, -300], size : [750, 151],
//    color : new util.Color('white'), opacity : 1,
//    flipHoriz : false, flipVert : false,
//    texRes : 128, interpolate : true, depth : -1.0
//  });
  Example_3_a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Example_3_a', units : 'pix', 
    image : 'Example_3-a_w_outline.jpg', mask : undefined,
    ori : 0, pos : [-300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Example_3_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Example_3_b', units : 'pix', 
    image : 'Example_3-b_w_outline.jpg', mask : undefined,
    ori : 0, pos : [300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0  
  });
  Example_3_a_box = new visual.Rect ({
    win: psychoJS.window, name: 'Example_3_a_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [-300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Example_3_b_box = new visual.Rect ({
    win: psychoJS.window, name: 'Example_3_b_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Example_3_a_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_3_a_holder',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.33], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
  
  Example_3_b_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_3_b_holder',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.33], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
    
  Example_3_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_3_a_text',
    text: 'someone laying underneath a blue beach umbrella on a crowded beach',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Example_3_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_3_b_text',
    text: 'someone laying underneath a purple beach umbrella on a crowded beach',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });

  Example_3_press = new visual.TextStim({
    win: psychoJS.window,
    name: 'Example_3_press',
    text: 'Press the spacebar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.425], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
    
  Example_3_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Example_3_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  Example_3_mouse.mouseClock = new util.Clock();
    
// Initialize components for Routine "Start"
  StartClock = new util.Clock();
  Start_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Start_text',
    text: 'Great! As a reminder, use these examples as models for your own descriptions. HITs will be rejected if the descriptions appear to lack sufficient detail or effort. \n\nReady to begin? Press Enter or Return to start the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 1, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  Start_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });

  Start_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
    
    // Initialize components for Routine "Airplane"
  AirplaneClock = new util.Clock();
  Airplane_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  setText = function(text) {
      let textAdd = undefined;
      modify = false;
      let theseKeys = psychoJS.eventManager.getKeys();
//      let theseKeys = psychoJS.eventManager.getKeys({keyList: ['1','2','3','4','5','6','7','8','9','0', 'backspace']});
        if (theseKeys.length > 0) {  // at least one key was pressed
          textAdd = theseKeys[theseKeys.length-1]; 
          }
        
        if (textAdd === 'return') {
            textAdd = '';  // Add nothing
//            if (text.text.length === 0) {
//                continueRoutine = true;  // End routine (if that is what you want)
//            } else {
//                continueRoutine = false;
//            }
        } else if (textAdd === 'space') {
            text.text += ' ';  // Add a space
        } else if (textAdd === 'backspace') {
            text.text = text.text.slice(0, -1);
            textAdd = undefined;
        } else if (textAdd === 'period') {
            text.text += '.';  // Add a period
        } else if (textAdd === 'comma') {
            text.text += ',';  // Add a period
        } else if (textAdd === 'apostrophe') {
            text.text += "'";  // Add a period
        } else if (textAdd === 'semicolon') {
            text.text += ';';  // Add a period
        } else if (textAdd === 'minus') {
            text.text += '-';  // Add a period
        } else if (textAdd === 'equal') {
            text.text += '=';  // Add a period
        } else if (textAdd === 'tab') {
            text.text += '';  // Add a period
        } else if (textAdd === 'bracketleft') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'bracketright') {
            text.text += '';  // Add a period
        } else if (textAdd === 'backslash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'capslock') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcontrol') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'loption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'grave') {
            text.text += '';  // Add a period
        } else if (textAdd === 'slash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'rcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'roption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'left') {
            text.text += '';  // Add a period
        } else if (textAdd === 'right') {
            text.text += '';  // Add a period
        } else if (textAdd === 'up') {
            text.text += '';  // Add a period
        } else if (textAdd === 'down') {
            text.text += '';  // Add a period
        } else if (['lshift', 'rshift'].includes(textAdd)) {
            modify = true;
        } else if (textAdd !== undefined) {
            if (modify) {
                text.text = text.text + textAdd.toUpperCase();
                modify = false;
            } else {
                text.text = text.text + textAdd
            }
            textAdd = undefined;
        }
  }
    
  Airplane_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Airplane_text',
    text: 'Provide a description for each image, including the object inside the yellow box.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.1125], height: 0.03,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
//  Airplane_rating = new visual.ImageStim({
//    win : psychoJS.window,
//    name : 'Rating', units : 'pix', 
//    image : 'rating.jpg', mask : undefined,
//    ori : 0, pos : [0, -300], size : [750, 151],
//    color : new util.Color('white'), opacity : 1,
//    flipHoriz : false, flipVert : false,
//    texRes : 128, interpolate : true, depth : -1.0
//  });
  Airplane_a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Airplane_a', units : 'pix', 
    image : 'catchAirplane-a_w_outline.jpg', mask : undefined,
    ori : 0, pos : [-300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Airplane_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Airplane_b', units : 'pix', 
    image : 'catchAirplane-b_w_outline.jpg', mask : undefined,
    ori : 0, pos : [300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0  
  });
  Airplane_a_box = new visual.Rect ({
    win: psychoJS.window, name: 'Airplane_a_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [-300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Airplane_b_box = new visual.Rect ({
    win: psychoJS.window, name: 'Airplane_b_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Airplane_a_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Airplane_a_holder',
    text: 'click here to enter your description...',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
  
  Airplane_b_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Airplane_b_holder',
    text: 'click here to enter your description...',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
    
  Airplane_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Airplane_a_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Airplane_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Airplane_b_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  Airplane_press = new visual.TextStim({
    win: psychoJS.window,
    name: 'Airplane_press',
    text: 'Press Enter or Return to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.425], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
    
  Airplane_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Airplane_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  Airplane_mouse.mouseClock = new util.Clock();
    
  // Initialize components for Routine "Boat"
  BoatClock = new util.Clock();
  Boat_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  setText = function(text) {
      let textAdd = undefined;
      let modify = false;
      let theseKeys = psychoJS.eventManager.getKeys();
//      let theseKeys = psychoJS.eventManager.getKeys({keyList: ['1','2','3','4','5','6','7','8','9','0', 'backspace']});
        if (theseKeys.length > 0) {  // at least one key was pressed
          textAdd = theseKeys[theseKeys.length-1]; 
          }
        
        if (textAdd === 'return') {
            textAdd = '';  // Add nothing
//            if (text.text.length === 0) {
//                continueRoutine = true;  // End routine (if that is what you want)
//            } else {
//                continueRoutine = false;
//            }
        } else if (textAdd === 'space') {
            text.text += ' ';  // Add a space
        } else if (textAdd === 'backspace') {
            text.text = text.text.slice(0, -1);
            textAdd = undefined;
        } else if (textAdd === 'period') {
            text.text += '.';  // Add a period
        } else if (textAdd === 'comma') {
            text.text += ',';  // Add a period
        } else if (textAdd === 'apostrophe') {
            text.text += "'";  // Add a period
        } else if (textAdd === 'semicolon') {
            text.text += ';';  // Add a period
        } else if (textAdd === 'minus') {
            text.text += '-';  // Add a period
        } else if (textAdd === 'equal') {
            text.text += '=';  // Add a period
        } else if (textAdd === 'tab') {
            text.text += '';  // Add a period
        } else if (textAdd === 'bracketleft') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'bracketright') {
            text.text += '';  // Add a period
        } else if (textAdd === 'backslash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'capslock') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcontrol') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'loption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'grave') {
            text.text += '';  // Add a period
        } else if (textAdd === 'slash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'rcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'roption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'left') {
            text.text += '';  // Add a period
        } else if (textAdd === 'right') {
            text.text += '';  // Add a period
        } else if (textAdd === 'up') {
            text.text += '';  // Add a period
        } else if (textAdd === 'down') {
            text.text += '';  // Add a period
        } else if (['lshift', 'rshift'].includes(textAdd)) {
            modify = true;
        } else if (textAdd !== undefined) {
            if (modify) {
                text.text = text.text + textAdd.toUpperCase();
                modify = false;
            } else {
                text.text = text.text + textAdd
            }
            textAdd = undefined;
        }
  }
  Boat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Boat_text',
    text: 'Provide a description for each image, including the object inside the yellow box.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.1125], height: 0.03,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
//  Boat_rating = new visual.ImageStim({
//    win : psychoJS.window,
//    name : 'Boat_rating', units : 'pix', 
//    image : 'rating.jpg', mask : undefined,
//    ori : 0, pos : [0, -300], size : [750, 151],
//    color : new util.Color('white'), opacity : 1,
//    flipHoriz : false, flipVert : false,
//    texRes : 128, interpolate : true, depth : -1.0
//  });
  Boat_a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Boat_a', units : 'pix', 
    image : 'catchBoat-a_w_outline.jpg', mask : undefined,
    ori : 0, pos : [-300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Boat_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Boat_b', units : 'pix', 
    image : 'catchBoat-b_w_outline.jpg', mask : undefined,
    ori : 0, pos : [300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  Boat_a_box = new visual.Rect ({
    win: psychoJS.window, name: 'Boat_a_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [-300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Boat_b_box = new visual.Rect ({
    win: psychoJS.window, name: 'Boat_b_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
 
  Boat_a_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Boat_a_holder',
    text: 'click here to enter your description...',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
  
  Boat_b_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Boat_b_holder',
    text: 'click here to enter your description...',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
    
  Boat_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Boat_a_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Boat_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Boat_b_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  Boat_press = new visual.TextStim({
    win: psychoJS.window,
    name: 'Boat_press',
    text: 'Press Enter or Return to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.425], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
    
  Boat_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Boat_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  Boat_mouse.mouseClock = new util.Clock();
    
  // Initialize components for Routine "trial"
  trial_1Clock = new util.Clock();
  user_1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  trial_1_count = 0;
  setText = function(text) {
      let textAdd = undefined;
      let modify = false;
      let theseKeys = psychoJS.eventManager.getKeys();
//      let theseKeys = psychoJS.eventManager.getKeys({keyList: ['1','2','3','4','5','6','7','8','9','0', 'backspace']});
        if (theseKeys.length > 0) {  // at least one key was pressed
          textAdd = theseKeys[theseKeys.length-1]; 
          }
        
        if (textAdd === 'return') {
            textAdd = '';  // Add nothing
//            if (text.text.length === 0) {
//                continueRoutine = true;  // End routine (if that is what you want)
//            } else {
//                continueRoutine = false;
//            }
        } else if (textAdd === 'space') {
            text.text += ' ';  // Add a space
        } else if (textAdd === 'backspace') {
            text.text = text.text.slice(0, -1);
            textAdd = undefined;
        } else if (textAdd === 'period') {
            text.text += '.';  // Add a period
        } else if (textAdd === 'comma') {
            text.text += ',';  // Add a period
        } else if (textAdd === 'apostrophe') {
            text.text += "'";  // Add a period
        } else if (textAdd === 'semicolon') {
            text.text += ';';  // Add a period
        } else if (textAdd === 'minus') {
            text.text += '-';  // Add a period
        } else if (textAdd === 'equal') {
            text.text += '=';  // Add a period
        } else if (textAdd === 'tab') {
            text.text += '';  // Add a period
        } else if (textAdd === 'bracketleft') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'bracketright') {
            text.text += '';  // Add a period
        } else if (textAdd === 'backslash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'capslock') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcontrol') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'loption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'grave') {
            text.text += '';  // Add a period
        } else if (textAdd === 'slash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'rcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'roption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'left') {
            text.text += '';  // Add a period
        } else if (textAdd === 'right') {
            text.text += '';  // Add a period
        } else if (textAdd === 'up') {
            text.text += '';  // Add a period
        } else if (textAdd === 'down') {
            text.text += '';  // Add a period
        } else if (['lshift', 'rshift'].includes(textAdd)) {
            modify = true;
        } else if (textAdd !== undefined) {
            if (modify) {
                text.text = text.text + textAdd.toUpperCase();
                modify = false;
            } else {
                text.text = text.text + textAdd
            }
            textAdd = undefined;
        }
  }
  trial_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_1_text',
    text: 'Provide a description for each image, including the object inside the yellow box.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.1125], height: 0.03,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
//  Rating_1 = new visual.ImageStim({
//    win : psychoJS.window,
//    name : 'Rating', units : 'pix', 
//    image : 'rating.jpg', mask : undefined,
//    ori : 0, pos : [0, -300], size : [750, 151],
//    color : new util.Color('white'), opacity : 1,
//    flipHoriz : false, flipVert : false,
//    texRes : 128, interpolate : true, depth : -1.0 
//  });
  image_1_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1_1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [-300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  image_1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1_2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  image_1_1_box = new visual.Rect ({
    win: psychoJS.window, name: 'image_1_1_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [-300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  image_1_2_box = new visual.Rect ({
    win: psychoJS.window, name: 'image_1_2_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  image_1_1_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'image_1_1_holder',
    text: 'click here to enter your description...',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
  
  image_1_2_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'image_1_2_holder',
    text: 'click here to enter your description...',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
    
  image_1_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'image_1_1_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  image_1_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'image_1_2_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  trial_1_press = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_1_press',
    text: 'Press Enter or Return to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.425], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
    
  trial_1_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trial_1_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  trial_1_mouse.mouseClock = new util.Clock();
    
// Initialize components for Routine "Cow"
  CowClock = new util.Clock();
  Cow_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  setText = function(text) {
      let textAdd = undefined;
      let modify = false;
      let theseKeys = psychoJS.eventManager.getKeys();
//      let theseKeys = psychoJS.eventManager.getKeys({keyList: ['1','2','3','4','5','6','7','8','9','0', 'backspace']});
        if (theseKeys.length > 0) {  // at least one key was pressed
          textAdd = theseKeys[theseKeys.length-1]; 
          }
        
        if (textAdd === 'return') {
            textAdd = '';  // Add nothing
//            if (text.text.length === 0) {
//                continueRoutine = true;  // End routine (if that is what you want)
//            } else {
//                continueRoutine = false;
//            }
        } else if (textAdd === 'space') {
            text.text += ' ';  // Add a space
        } else if (textAdd === 'backspace') {
            text.text = text.text.slice(0, -1);
            textAdd = undefined;
        } else if (textAdd === 'period') {
            text.text += '.';  // Add a period
        } else if (textAdd === 'comma') {
            text.text += ',';  // Add a period
        } else if (textAdd === 'apostrophe') {
            text.text += "'";  // Add a period
        } else if (textAdd === 'semicolon') {
            text.text += ';';  // Add a period
        } else if (textAdd === 'minus') {
            text.text += '-';  // Add a period
        } else if (textAdd === 'equal') {
            text.text += '=';  // Add a period
        } else if (textAdd === 'tab') {
            text.text += '';  // Add a period
        } else if (textAdd === 'bracketleft') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'bracketright') {
            text.text += '';  // Add a period
        } else if (textAdd === 'backslash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'capslock') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcontrol') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'loption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'grave') {
            text.text += '';  // Add a period
        } else if (textAdd === 'slash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'rcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'roption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'left') {
            text.text += '';  // Add a period
        } else if (textAdd === 'right') {
            text.text += '';  // Add a period
        } else if (textAdd === 'up') {
            text.text += '';  // Add a period
        } else if (textAdd === 'down') {
            text.text += '';  // Add a period
        } else if (['lshift', 'rshift'].includes(textAdd)) {
            modify = true;
        } else if (textAdd !== undefined) {
            if (modify) {
                text.text = text.text + textAdd.toUpperCase();
                modify = false;
            } else {
                text.text = text.text + textAdd
            }
            textAdd = undefined;
        }
  }
  Cow_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Cow_text',
    text: 'Provide a description for each image, including the object inside the yellow box.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.1125], height: 0.03,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
//  Cow_rating = new visual.ImageStim({
//    win : psychoJS.window,
//    name : 'Cow_rating', units : 'pix', 
//    image : 'rating.jpg', mask : undefined,
//    ori : 0, pos : [0, -300], size : [750, 151],
//    color : new util.Color('white'), opacity : 1,
//    flipHoriz : false, flipVert : false,
//    texRes : 128, interpolate : true, depth : -1.0
//  });
  Cow_a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Cow_a', units : 'pix', 
    image : 'catchCow-a_w_outline.jpg', mask : undefined,
    ori : 0, pos : [-300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Cow_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Cow_b', units : 'pix', 
    image : 'catchCow-b_w_outline.jpg', mask : undefined,
    ori : 0, pos : [300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Cow_a_box = new visual.Rect ({
    win: psychoJS.window, name: 'Cow_a_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [-300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Cow_b_box = new visual.Rect ({
    win: psychoJS.window, name: 'Cow_b_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });

  Cow_a_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Cow_a_holder',
    text: 'click here to enter your description...',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
  
  Cow_b_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Cow_b_holder',
    text: 'click here to enter your description...',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
    
  Cow_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Cow_a_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Cow_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Cow_b_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  Cow_press = new visual.TextStim({
    win: psychoJS.window,
    name: 'Cow_press',
    text: 'Press Enter or Return to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.425], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
    
  Cow_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Cow_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  Cow_mouse.mouseClock = new util.Clock();
    
// Initialize components for Routine "Garden"
  GardenClock = new util.Clock();
  Garden_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  setText = function(text) {
      let textAdd = undefined;
      modify = false;
      let theseKeys = psychoJS.eventManager.getKeys();
//      let theseKeys = psychoJS.eventManager.getKeys({keyList: ['1','2','3','4','5','6','7','8','9','0', 'backspace']});
        if (theseKeys.length > 0) {  // at least one key was pressed
          textAdd = theseKeys[theseKeys.length-1]; 
          }
        
        if (textAdd === 'return') {
            textAdd = '';  // Add nothing
//            if (text.text.length === 0) {
//                continueRoutine = true;  // End routine (if that is what you want)
//            } else {
//                continueRoutine = false;
//            }
        } else if (textAdd === 'space') {
            text.text += ' ';  // Add a space
        } else if (textAdd === 'backspace') {
            text.text = text.text.slice(0, -1);
            textAdd = undefined;
        } else if (textAdd === 'period') {
            text.text += '.';  // Add a period
        } else if (textAdd === 'comma') {
            text.text += ',';  // Add a period
        } else if (textAdd === 'apostrophe') {
            text.text += "'";  // Add a period
        } else if (textAdd === 'semicolon') {
            text.text += ';';  // Add a period
        } else if (textAdd === 'minus') {
            text.text += '-';  // Add a period
        } else if (textAdd === 'equal') {
            text.text += '=';  // Add a period
        } else if (textAdd === 'tab') {
            text.text += '';  // Add a period
        } else if (textAdd === 'bracketleft') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'bracketright') {
            text.text += '';  // Add a period
        } else if (textAdd === 'backslash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'capslock') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcontrol') {
            text.text += '';  // Add a period
        }  else if (textAdd === 'loption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'lcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'grave') {
            text.text += '';  // Add a period
        } else if (textAdd === 'slash') {
            text.text += '';  // Add a period
        } else if (textAdd === 'rcommand') {
            text.text += '';  // Add a period
        } else if (textAdd === 'roption') {
            text.text += '';  // Add a period
        } else if (textAdd === 'left') {
            text.text += '';  // Add a period
        } else if (textAdd === 'right') {
            text.text += '';  // Add a period
        } else if (textAdd === 'up') {
            text.text += '';  // Add a period
        } else if (textAdd === 'down') {
            text.text += '';  // Add a period
        } else if (['lshift', 'rshift'].includes(textAdd)) {
            modify = true;
        } else if (textAdd !== undefined) {
            if (modify) {
                text.text = text.text + textAdd.toUpperCase();
                modify = false;
            } else {
                text.text = text.text + textAdd
            }
            textAdd = undefined;
        }
  }
  Garden_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Garden_text',
    text: 'Provide a description for each image, including the object inside the yellow box.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.1125], height: 0.03,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
//  Garden_rating = new visual.ImageStim({
//    win : psychoJS.window,
//    name : 'Garden_rating', units : 'pix', 
//    image : 'rating.jpg', mask : undefined,
//    ori : 0, pos : [0, -300], size : [750, 151],
//    color : new util.Color('white'), opacity : 1,
//    flipHoriz : false, flipVert : false,
//    texRes : 128, interpolate : true, depth : -1.0
//  });
  Garden_a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Garden_a', units : 'pix', 
    image : 'catchGarden-a_w_outline.jpg', mask : undefined,
    ori : 0, pos : [-300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Garden_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Garden_b', units : 'pix', 
    image : 'catchGarden-b_w_outline.jpg', mask : undefined,
    ori : 0, pos : [300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  Garden_a_box = new visual.Rect ({
    win: psychoJS.window, name: 'Garden_a_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [-300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Garden_b_box = new visual.Rect ({
    win: psychoJS.window, name: 'Garden_b_box', units : 'pix', 
    width: [500, 500][0], height: [150, 150][1],
    ori: 0, pos: [300, -250],
    lineWidth: 3, lineColor: new util.Color([-1, -1, -1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  Garden_a_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Garden_a_holder',
    text: 'click here to enter your description...',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
  
  Garden_b_holder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Garden_b_holder',
    text: 'click here to enter your description...',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('gray'),  opacity: 1,
    depth: -3.0 
  });
    
  Garden_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Garden_a_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [-.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Garden_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Garden_b_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [.33, -.275], height: 0.03,  wrapWidth: .55, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  Garden_press = new visual.TextStim({
    win: psychoJS.window,
    name: 'Garden_press',
    text: 'Press Enter or Return to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.425], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
    
  Garden_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Garden_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  Garden_mouse.mouseClock = new util.Clock();
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
    psychoJS.downloadResources(ts_resourceList_1);
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
    
    var start = new Date();
    var opening_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(opening_start_time);
    psychoJS.experiment.addData('start_time', start_time);
    psychoJS.experiment.addData('opening_start_time', opening_start_time);
    }

    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (OpeningText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      OpeningText.setAutoDraw(false);
    }

      
    //continueRoutine = window.checkProgress();
    // check for quit (typically the Esc key)
    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    //}
    
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
    var start = new Date();
    var opening_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(opening_end_time);
    psychoJS.experiment.addData('opening_end_time', opening_end_time);
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
        
    var start = new Date();
    var consent_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(consent_start_time);
    psychoJS.experiment.addData('consent_start_time', consent_start_time);
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
    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    //}
    
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
    psychoJS.experiment.addData('consent_response_keys', consent_response.keys);
    var start = new Date();
    var consent_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(consent_end_time);
    if (typeof consent_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('consent_response_rt', consent_response.rt);
        psychoJS.experiment.addData('consent_end_time', consent_end_time);
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
    InstructionsComponents.push(text_2);
    InstructionsComponents.push(key_resp_2);
//    InstructionsComponents.push(example_color_a);
//    InstructionsComponents.push(example_color_b);
//    InstructionsComponents.push(example_disappear_a);
//    InstructionsComponents.push(example_disappear_b);
    
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
    
    var start = new Date();
    var instructions_1_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(instructions_1_start_time);
    psychoJS.experiment.addData('instructions_1_start_time', instructions_1_start_time);
    }

    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

//    // *example_color_a* updates
//    if (t >= 0.0 && example_color_a.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      example_color_a.tStart = t;  // (not accounting for frame time here)
//      example_color_a.frameNStart = frameN;  // exact frame index
//      
//      example_color_a.setAutoDraw(true);
//    }
//    
//    // *example_color_b* updates
//    if (t >= 0.0 && example_color_b.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      example_color_b.tStart = t;  // (not accounting for frame time here)
//      example_color_b.frameNStart = frameN;  // exact frame index
//      
//      example_color_b.setAutoDraw(true);
//    }
//    
//    // *example_disappear_a* updates
//    if (t >= 0.0 && example_disappear_a.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      example_disappear_a.tStart = t;  // (not accounting for frame time here)
//      example_disappear_a.frameNStart = frameN;  // exact frame index
//      
//      example_disappear_a.setAutoDraw(true);
//    }
//    
//    // *example_disappear_b* updates
//    if (t >= 0.0 && example_disappear_b.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      example_disappear_b.tStart = t;  // (not accounting for frame time here)
//      example_disappear_b.frameNStart = frameN;  // exact frame index
//      
//      example_disappear_b.setAutoDraw(true);
//    }
      
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
    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    //}
    
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
    psychoJS.experiment.addData('key_resp_2_keys', key_resp_2.keys);
    var start = new Date();
    var instructions_1_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(instructions_1_end_time);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2_rt', key_resp_2.rt);
        psychoJS.experiment.addData('instructions_1_end_time', instructions_1_end_time);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var selectedText;
var _Example_1_response_allKeys;
var gotValidClick;
var _Example_1_resp_allKeys;
var Example_1Components;
function Example_1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Example_1'-------
    t = 0;
    Example_1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Example_1_resp.keys = undefined;
    Example_1_resp.rt = undefined;
    _Example_1_resp_allKeys = [];
    
    Example_1_text.setAlignHoriz('center');
    Example_1_title.setAlignHoriz('center');
    Example_1_press.setAlignHoriz('center');
      
    selectedText = null;
      
    modify = false;
    
    Example_1_response.keys = undefined;
    Example_1_response.rt = undefined;
    _Example_1_response_allKeys = [];
    // setup some python lists for storing info about the Example_1_mouse
    gotValidClick = false; // until a click is received  
    // keep track of which components have finished
    Example_1Components = [];
    Example_1Components.push(Example_1_resp);
    Example_1Components.push(Example_1_text);
    Example_1Components.push(Example_1_title);
    Example_1Components.push(Example_1_press);
//    Example_1Components.push(Example_1_rating);
    Example_1Components.push(Example_1_a);
    Example_1Components.push(Example_1_b);
    Example_1Components.push(Example_1_a_box);
    Example_1Components.push(Example_1_b_box);
    Example_1Components.push(Example_1_a_holder);
    Example_1Components.push(Example_1_b_holder);
    Example_1Components.push(Example_1_a_text);
    Example_1Components.push(Example_1_b_text);
    Example_1Components.push(Example_1_response);
    Example_1Components.push(Example_1_mouse);
    
    for (const thisComponent of Example_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
      
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function Example_1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Example_1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Example_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
//    if ((Example_1_mouse.getPressed()[0] === 1)) {
//        if (Example_1_a_box.contains(Example_1_mouse)) {
//            Example_1_a_holder.text = '';
//            selectedText = Example_1_a_text;
//        } else {
//            if (Example_1_b_box.contains(Example_1_mouse)) {
//                Example_1_b_holder.text = '';
//                selectedText = Example_1_b_text;
//            }
//        }
//    }
    if (selectedText) {
        setText(selectedText);
    }
    
    text.setText(''); 
      
    // *Example_1_resp* updates
    if (t >= 1 && Example_1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_resp.tStart = t;  // (not accounting for frame time here)
      Example_1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Example_1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Example_1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Example_1_resp.clearEvents(); });
    
    var start = new Date();
    var Example_1_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(Example_1_start_time);
    psychoJS.experiment.addData('Example_1_start_time', Example_1_start_time);
    }

//    if (Example_1_resp.status === PsychoJS.Status.STARTED) {
//      let theseKeys = Example_1_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
//      _Example_1_resp_allKeys = _Example_1_resp_allKeys.concat(theseKeys);
//      if (_Example_1_resp_allKeys.length > 0) {
//        Example_1_resp.keys = _Example_1_resp_allKeys[_Example_1_resp_allKeys.length - 1].name;  // just the last key pressed
//        Example_1_resp.rt = _Example_1_resp_allKeys[_Example_1_resp_allKeys.length - 1].rt;
//        // a response ends the routine
//        continueRoutine = false;
//      }
//    }
    
    
    // *Example_1_text* updates
    if (t >= 1 && Example_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_text.tStart = t;  // (not accounting for frame time here)
      Example_1_text.frameNStart = frameN;  // exact frame index
      
      Example_1_text.setAutoDraw(true);
    }
      
    // *Example_1_title* updates
    if (t >= 1 && Example_1_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_title.tStart = t;  // (not accounting for frame time here)
      Example_1_title.frameNStart = frameN;  // exact frame index
      
      Example_1_title.setAutoDraw(true);
    }

    // *Example_1_press* updates
    if (t >= 1 && Example_1_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_press.tStart = t;  // (not accounting for frame time here)
      Example_1_press.frameNStart = frameN;  // exact frame index
      
      Example_1_press.setAutoDraw(true);
    }
    
//    // *Example_1_rating* updates
//    if (t >= 1 && Example_1_rating.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Example_1_rating.tStart = t;  // (not accounting for frame time here)
//      Example_1_rating.frameNStart = frameN;  // exact frame index
//      
//      Example_1_rating.setAutoDraw(true);
//    }

    
    // *Example_1_a* updates
    if (t >= 1 && Example_1_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_a.tStart = t;  // (not accounting for frame time here)
      Example_1_a.frameNStart = frameN;  // exact frame index
      
      Example_1_a.setAutoDraw(true);
    }

    
    // *Example_1_b* updates
    if (t >= 1 && Example_1_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_b.tStart = t;  // (not accounting for frame time here)
      Example_1_b.frameNStart = frameN;  // exact frame index
      
      Example_1_b.setAutoDraw(true);
    }

    // *Example_1_a_box* updates
    if (t >= 1.0 && Example_1_a_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_a_box.tStart = t;  // (not accounting for frame time here)
      Example_1_a_box.frameNStart = frameN;  // exact frame index
      
      Example_1_a_box.setAutoDraw(true);
    }

    
    // *Example_1_b_box* updates
    if (t >= 1.0 && Example_1_b_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_b_box.tStart = t;  // (not accounting for frame time here)
      Example_1_b_box.frameNStart = frameN;  // exact frame index
      
      Example_1_b_box.setAutoDraw(true);
    }

    // *Example_1_a_holder* updates
    if (t >= 1.0 && Example_1_a_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_a_holder.tStart = t;  // (not accounting for frame time here)
      Example_1_a_holder.frameNStart = frameN;  // exact frame index
      
      Example_1_a_holder.setAutoDraw(true);
    }
      
    // *Example_1_b_holder* updates
    if (t >= 1.0 && Example_1_b_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_b_holder.tStart = t;  // (not accounting for frame time here)
      Example_1_b_holder.frameNStart = frameN;  // exact frame index
      
      Example_1_b_holder.setAutoDraw(true);
    }
      
    // *Example_1_a_text* updates
    if (t >= 1.0 && Example_1_a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_a_text.tStart = t;  // (not accounting for frame time here)
      Example_1_a_text.frameNStart = frameN;  // exact frame index
      
      Example_1_a_text.setAutoDraw(true);
    }

    
    // *Example_1_b_text* updates
    if (t >= 1.0 && Example_1_b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_b_text.tStart = t;  // (not accounting for frame time here)
      Example_1_b_text.frameNStart = frameN;  // exact frame index
      
      Example_1_b_text.setAutoDraw(true);
    }

    
    // *Example_1_response* updates
    if (t >= 1.0 && Example_1_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_1_response.tStart = t;  // (not accounting for frame time here)
      Example_1_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Example_1_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Example_1_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Example_1_response.clearEvents(); });
    }

    if (Example_1_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = Example_1_response.getKeys({keyList: ['space'], waitRelease: false});
      _Example_1_response_allKeys = _Example_1_response_allKeys.concat(theseKeys);
      if (_Example_1_response_allKeys.length > 0) {
        Example_1_response.keys = _Example_1_response_allKeys[_Example_1_response_allKeys.length - 1].name;  // just the last key pressed
        Example_1_response.rt = _Example_1_response_allKeys[_Example_1_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    //}
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Example_1Components)
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


function Example_1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Example_1'-------
    for (const thisComponent of Example_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Example_1_resp_keys', Example_1_resp.keys);
    if (typeof Example_1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Example_1_resp_rt', Example_1_resp.rt);
        routineTimer.reset();
        }
    psychoJS.experiment.addData('Example_1_response_keys', Example_1_response.keys);
    if (typeof Example_1_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Example_1_response_rt', Example_1_response.rt);
        routineTimer.reset();
        }
    var start = new Date();
    var Example_1_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(Example_1_end_time);
    psychoJS.experiment.addData('Example_1_end_time', Example_1_end_time);
    psychoJS.experiment.addData("Example_1_a_text", Example_1_a_text.text)
    psychoJS.experiment.addData("Example_1_b_text", Example_1_b_text.text)
    text.setText('')  // empty the onscreen text ready for next input
    // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    Example_1_resp.stop();
    // store data for thisExp (ExperimentHandler)
    const xys = Example_1_mouse.getPos();
    const buttons = Example_1_mouse.getPressed();
    psychoJS.experiment.addData('Example_1_mouse_x', xys[0]);
    psychoJS.experiment.addData('Example_1_mouse_y', xys[1]);
    psychoJS.experiment.addData('Example_1_mouse_leftButton', buttons[0]);
    psychoJS.experiment.addData('Example_1_mouse_midButton', buttons[1]);
    psychoJS.experiment.addData('Example_1_mouse_rightButton', buttons[2]);
    // the Routine "Example_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var selectedText;
var _Example_2_response_allKeys;
var gotValidClick;
var _Example_2_resp_allKeys;
var Example_2Components;
function Example_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Example_2'-------
    t = 0;
    Example_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat

    Example_2_resp.keys = undefined;
    Example_2_resp.rt = undefined;
    _Example_2_resp_allKeys = [];
    
    Example_2_text.setAlignHoriz('center');
    Example_2_title.setAlignHoriz('center');
    Example_2_press.setAlignHoriz('center');
      
    selectedText = null;
      
    modify = false;
    
    Example_2_response.keys = undefined;
    Example_2_response.rt = undefined;
    _Example_2_response_allKeys = [];
    // setup some python lists for storing info about the Example_2_mouse
    gotValidClick = false; // until a click is received  
    // keep track of which components have finished
    Example_2Components = [];
    Example_2Components.push(Example_2_resp);
    Example_2Components.push(Example_2_text);
    Example_2Components.push(Example_2_title);
    Example_2Components.push(Example_2_press);
//    Example_2Components.push(Example_2_rating);
    Example_2Components.push(Example_2_a);
    Example_2Components.push(Example_2_b);
    Example_2Components.push(Example_2_a_box);
    Example_2Components.push(Example_2_b_box);
    Example_2Components.push(Example_2_a_holder);
    Example_2Components.push(Example_2_b_holder);
    Example_2Components.push(Example_2_a_text);
    Example_2Components.push(Example_2_b_text);
    Example_2Components.push(Example_2_response);
    Example_2Components.push(Example_2_mouse);
    
    for (const thisComponent of Example_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
      
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function Example_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Example_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Example_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
//    if ((Example_2_mouse.getPressed()[0] === 1)) {
//        if (Example_2_a_box.contains(Example_2_mouse)) {
//            Example_2_a_holder.text = '';
//            selectedText = Example_2_a_text;
//        } else {
//            if (Example_2_b_box.contains(Example_2_mouse)) {
//                Example_2_b_holder.text = '';
//                selectedText = Example_2_b_text;
//            }
//        }
//    }
    if (selectedText) {
        setText(selectedText);
    }
    
    text.setText(''); 
      
    // *Example_2_resp* updates
    if (t >= 1 && Example_2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_resp.tStart = t;  // (not accounting for frame time here)
      Example_2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Example_2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Example_2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Example_2_resp.clearEvents(); });
        
    var start = new Date();
    var Example_2_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(Example_2_start_time);
    psychoJS.experiment.addData('Example_2_start_time', Example_2_start_time);
        
    }

//    if (Example_2_resp.status === PsychoJS.Status.STARTED) {
//      let theseKeys = Example_2_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
//      _Example_2_resp_allKeys = _Example_2_resp_allKeys.concat(theseKeys);
//      if (_Example_2_resp_allKeys.length > 0) {
//        Example_2_resp.keys = _Example_2_resp_allKeys[_Example_2_resp_allKeys.length - 1].name;  // just the last key pressed
//        Example_2_resp.rt = _Example_2_resp_allKeys[_Example_2_resp_allKeys.length - 1].rt;
//        // a response ends the routine
//        continueRoutine = false;
//      }
//    }
    
    
    // *Example_2_text* updates
    if (t >= 1 && Example_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_text.tStart = t;  // (not accounting for frame time here)
      Example_2_text.frameNStart = frameN;  // exact frame index
      
      Example_2_text.setAutoDraw(true);
    }
      
    // *Example_2_title* updates
    if (t >= 1 && Example_2_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_title.tStart = t;  // (not accounting for frame time here)
      Example_2_title.frameNStart = frameN;  // exact frame index
      
      Example_2_title.setAutoDraw(true);
    }

    // *Example_2_press* updates
    if (t >= 1 && Example_2_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_press.tStart = t;  // (not accounting for frame time here)
      Example_2_press.frameNStart = frameN;  // exact frame index
      
      Example_2_press.setAutoDraw(true);
    }
    
//    // *Example_2_rating* updates
//    if (t >= 1 && Example_2_rating.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Example_2_rating.tStart = t;  // (not accounting for frame time here)
//      Example_2_rating.frameNStart = frameN;  // exact frame index
//      
//      Example_2_rating.setAutoDraw(true);
//    }

    
    // *Example_2_a* updates
    if (t >= 1 && Example_2_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_a.tStart = t;  // (not accounting for frame time here)
      Example_2_a.frameNStart = frameN;  // exact frame index
      
      Example_2_a.setAutoDraw(true);
    }

    
    // *Example_2_b* updates
    if (t >= 1 && Example_2_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_b.tStart = t;  // (not accounting for frame time here)
      Example_2_b.frameNStart = frameN;  // exact frame index
      
      Example_2_b.setAutoDraw(true);
    }

    // *Example_2_a_box* updates
    if (t >= 1.0 && Example_2_a_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_a_box.tStart = t;  // (not accounting for frame time here)
      Example_2_a_box.frameNStart = frameN;  // exact frame index
      
      Example_2_a_box.setAutoDraw(true);
    }

    
    // *Example_2_b_box* updates
    if (t >= 1.0 && Example_2_b_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_b_box.tStart = t;  // (not accounting for frame time here)
      Example_2_b_box.frameNStart = frameN;  // exact frame index
      
      Example_2_b_box.setAutoDraw(true);
    }

    // *Example_2_a_holder* updates
    if (t >= 1.0 && Example_2_a_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_a_holder.tStart = t;  // (not accounting for frame time here)
      Example_2_a_holder.frameNStart = frameN;  // exact frame index
      
      Example_2_a_holder.setAutoDraw(true);
    }
      
    // *Example_2_b_holder* updates
    if (t >= 1.0 && Example_2_b_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_b_holder.tStart = t;  // (not accounting for frame time here)
      Example_2_b_holder.frameNStart = frameN;  // exact frame index
      
      Example_2_b_holder.setAutoDraw(true);
    }
      
    // *Example_2_a_text* updates
    if (t >= 1.0 && Example_2_a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_a_text.tStart = t;  // (not accounting for frame time here)
      Example_2_a_text.frameNStart = frameN;  // exact frame index
      
      Example_2_a_text.setAutoDraw(true);
    }

    
    // *Example_2_b_text* updates
    if (t >= 1.0 && Example_2_b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_b_text.tStart = t;  // (not accounting for frame time here)
      Example_2_b_text.frameNStart = frameN;  // exact frame index
      
      Example_2_b_text.setAutoDraw(true);
    }

    
    // *Example_2_response* updates
    if (t >= 1.0 && Example_2_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_2_response.tStart = t;  // (not accounting for frame time here)
      Example_2_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Example_2_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Example_2_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Example_2_response.clearEvents(); });
    }

    if (Example_2_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = Example_2_response.getKeys({keyList: ['space'], waitRelease: false});
      _Example_2_response_allKeys = _Example_2_response_allKeys.concat(theseKeys);
      if (_Example_2_response_allKeys.length > 0) {
        Example_2_response.keys = _Example_2_response_allKeys[_Example_2_response_allKeys.length - 1].name;  // just the last key pressed
        Example_2_response.rt = _Example_2_response_allKeys[_Example_2_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    //}
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Example_2Components)
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


function Example_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Example_2'-------
    for (const thisComponent of Example_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Example_2_resp_keys', Example_2_resp.keys);
    if (typeof Example_2_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Example_2_resp_rt', Example_2_resp.rt);
        routineTimer.reset();
        }
    psychoJS.experiment.addData('Example_2_response_keys', Example_2_response.keys);
    if (typeof Example_2_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Example_2_response_rt', Example_2_response.rt);
        routineTimer.reset();
        }
    var start = new Date();
    var Example_2_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(Example_2_end_time);
    psychoJS.experiment.addData('Example_2_end_time', Example_2_end_time);
    psychoJS.experiment.addData("Example_2_a_text", Example_2_a_text.text)
    psychoJS.experiment.addData("Example_2_b_text", Example_2_b_text.text)
    text.setText('')  // empty the onscreen text ready for next input
    // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    Example_2_resp.stop();
    // store data for thisExp (ExperimentHandler)
    const xys = Example_2_mouse.getPos();
    const buttons = Example_2_mouse.getPressed();
    psychoJS.experiment.addData('Example_2_mouse_x', xys[0]);
    psychoJS.experiment.addData('Example_2_mouse_y', xys[1]);
    psychoJS.experiment.addData('Example_2_mouse_leftButton', buttons[0]);
    psychoJS.experiment.addData('Example_2_mouse_midButton', buttons[1]);
    psychoJS.experiment.addData('Example_2_mouse_rightButton', buttons[2]);
    // the Routine "Example_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var selectedText;
var _Example_3_response_allKeys;
var gotValidClick;
var _Example_3_resp_allKeys;
var Example_3Components;
function Example_3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Example_3'-------
    t = 0;
    Example_3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat

    Example_3_resp.keys = undefined;
    Example_3_resp.rt = undefined;
    _Example_3_resp_allKeys = [];
    
    Example_3_text.setAlignHoriz('center');
    Example_3_title.setAlignHoriz('center');
    Example_3_press.setAlignHoriz('center');
      
    selectedText = null;
      
    modify = false;
    
    Example_3_response.keys = undefined;
    Example_3_response.rt = undefined;
    _Example_3_response_allKeys = [];
    // setup some python lists for storing info about the Example_3_mouse
    gotValidClick = false; // until a click is received  
    // keep track of which components have finished
    Example_3Components = [];
    Example_3Components.push(Example_3_resp);
    Example_3Components.push(Example_3_text);
    Example_3Components.push(Example_3_title);
    Example_3Components.push(Example_3_press);
//    Example_3Components.push(Example_3_rating);
    Example_3Components.push(Example_3_a);
    Example_3Components.push(Example_3_b);
    Example_3Components.push(Example_3_a_box);
    Example_3Components.push(Example_3_b_box);
    Example_3Components.push(Example_3_a_holder);
    Example_3Components.push(Example_3_b_holder);
    Example_3Components.push(Example_3_a_text);
    Example_3Components.push(Example_3_b_text);
    Example_3Components.push(Example_3_response);
    Example_3Components.push(Example_3_mouse);
    
    for (const thisComponent of Example_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
      
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function Example_3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Example_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Example_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
//    if ((Example_3_mouse.getPressed()[0] === 1)) {
//        if (Example_3_a_box.contains(Example_3_mouse)) {
//            Example_3_a_holder.text = '';
//            selectedText = Example_3_a_text;
//        } else {
//            if (Example_3_b_box.contains(Example_3_mouse)) {
//                Example_3_b_holder.text = '';
//                selectedText = Example_3_b_text;
//            }
//        }
//    }
    if (selectedText) {
        setText(selectedText);
    }
    
    text.setText(''); 
      
    // *Example_3_resp* updates
    if (t >= 1 && Example_3_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_resp.tStart = t;  // (not accounting for frame time here)
      Example_3_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Example_3_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Example_3_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Example_3_resp.clearEvents(); });
    
    var start = new Date();
    var Example_3_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(Example_3_start_time);
    psychoJS.experiment.addData('Example_3_start_time', Example_3_start_time);
    }

//    if (Example_3_resp.status === PsychoJS.Status.STARTED) {
//      let theseKeys = Example_3_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
//      _Example_3_resp_allKeys = _Example_3_resp_allKeys.concat(theseKeys);
//      if (_Example_3_resp_allKeys.length > 0) {
//        Example_3_resp.keys = _Example_3_resp_allKeys[_Example_3_resp_allKeys.length - 1].name;  // just the last key pressed
//        Example_3_resp.rt = _Example_3_resp_allKeys[_Example_3_resp_allKeys.length - 1].rt;
//        // a response ends the routine
//        continueRoutine = false;
//      }
//    }
    
    
    // *Example_3_text* updates
    if (t >= 1 && Example_3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_text.tStart = t;  // (not accounting for frame time here)
      Example_3_text.frameNStart = frameN;  // exact frame index
      
      Example_3_text.setAutoDraw(true);
    }
      
    // *Example_3_title* updates
    if (t >= 1 && Example_3_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_title.tStart = t;  // (not accounting for frame time here)
      Example_3_title.frameNStart = frameN;  // exact frame index
      
      Example_3_title.setAutoDraw(true);
    }

    // *Example_3_press* updates
    if (t >= 1 && Example_3_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_press.tStart = t;  // (not accounting for frame time here)
      Example_3_press.frameNStart = frameN;  // exact frame index
      
      Example_3_press.setAutoDraw(true);
    }
    
//    // *Example_3_rating* updates
//    if (t >= 1 && Example_3_rating.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Example_3_rating.tStart = t;  // (not accounting for frame time here)
//      Example_3_rating.frameNStart = frameN;  // exact frame index
//      
//      Example_3_rating.setAutoDraw(true);
//    }

    
    // *Example_3_a* updates
    if (t >= 1 && Example_3_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_a.tStart = t;  // (not accounting for frame time here)
      Example_3_a.frameNStart = frameN;  // exact frame index
      
      Example_3_a.setAutoDraw(true);
    }

    
    // *Example_3_b* updates
    if (t >= 1 && Example_3_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_b.tStart = t;  // (not accounting for frame time here)
      Example_3_b.frameNStart = frameN;  // exact frame index
      
      Example_3_b.setAutoDraw(true);
    }

    // *Example_3_a_box* updates
    if (t >= 1.0 && Example_3_a_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_a_box.tStart = t;  // (not accounting for frame time here)
      Example_3_a_box.frameNStart = frameN;  // exact frame index
      
      Example_3_a_box.setAutoDraw(true);
    }

    
    // *Example_3_b_box* updates
    if (t >= 1.0 && Example_3_b_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_b_box.tStart = t;  // (not accounting for frame time here)
      Example_3_b_box.frameNStart = frameN;  // exact frame index
      
      Example_3_b_box.setAutoDraw(true);
    }

    // *Example_3_a_holder* updates
    if (t >= 1.0 && Example_3_a_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_a_holder.tStart = t;  // (not accounting for frame time here)
      Example_3_a_holder.frameNStart = frameN;  // exact frame index
      
      Example_3_a_holder.setAutoDraw(true);
    }
      
    // *Example_3_b_holder* updates
    if (t >= 1.0 && Example_3_b_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_b_holder.tStart = t;  // (not accounting for frame time here)
      Example_3_b_holder.frameNStart = frameN;  // exact frame index
      
      Example_3_b_holder.setAutoDraw(true);
    }
      
    // *Example_3_a_text* updates
    if (t >= 1.0 && Example_3_a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_a_text.tStart = t;  // (not accounting for frame time here)
      Example_3_a_text.frameNStart = frameN;  // exact frame index
      
      Example_3_a_text.setAutoDraw(true);
    }

    
    // *Example_3_b_text* updates
    if (t >= 1.0 && Example_3_b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_b_text.tStart = t;  // (not accounting for frame time here)
      Example_3_b_text.frameNStart = frameN;  // exact frame index
      
      Example_3_b_text.setAutoDraw(true);
    }

    
    // *Example_3_response* updates
    if (t >= 1.0 && Example_3_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Example_3_response.tStart = t;  // (not accounting for frame time here)
      Example_3_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Example_3_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Example_3_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Example_3_response.clearEvents(); });
    }

    if (Example_3_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = Example_3_response.getKeys({keyList: ['space'], waitRelease: false});
      _Example_3_response_allKeys = _Example_3_response_allKeys.concat(theseKeys);
      if (_Example_3_response_allKeys.length > 0) {
        Example_3_response.keys = _Example_3_response_allKeys[_Example_3_response_allKeys.length - 1].name;  // just the last key pressed
        Example_3_response.rt = _Example_3_response_allKeys[_Example_3_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    //}
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Example_3Components)
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


function Example_3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Example_3'-------
    for (const thisComponent of Example_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Example_3_resp_keys', Example_3_resp.keys);
    if (typeof Example_3_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Example_3_resp_rt', Example_3_resp.rt);
        routineTimer.reset();
        }
    psychoJS.experiment.addData('Example_3_response_keys', Example_3_response.keys);
    if (typeof Example_3_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Example_3_response_rt', Example_3_response.rt);
        routineTimer.reset();
        }
    var start = new Date();
    var Example_3_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(Example_3_end_time);
    psychoJS.experiment.addData('Example_3_end_time', Example_3_end_time);
    psychoJS.experiment.addData("Example_3_a_text", Example_3_a_text.text)
    psychoJS.experiment.addData("Example_3_b_text", Example_3_b_text.text)
    text.setText('')  // empty the onscreen text ready for next input
    // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    Example_3_resp.stop();
    // store data for thisExp (ExperimentHandler)
    const xys = Example_3_mouse.getPos();
    const buttons = Example_3_mouse.getPressed();
    psychoJS.experiment.addData('Example_3_mouse_x', xys[0]);
    psychoJS.experiment.addData('Example_3_mouse_y', xys[1]);
    psychoJS.experiment.addData('Example_3_mouse_leftButton', buttons[0]);
    psychoJS.experiment.addData('Example_3_mouse_midButton', buttons[1]);
    psychoJS.experiment.addData('Example_3_mouse_rightButton', buttons[2]);
    // the Routine "Example_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _Start_resp_2_allKeys;
var StartComponents;
function StartRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    StartClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Start_resp_2.keys = undefined;
    Start_resp_2.rt = undefined;
    _Start_resp_2_allKeys = [];
    
    Start_text.setAlignHoriz('center');
      
    // keep track of which components have finished
    StartComponents = [];
    StartComponents.push(Start_text);
    StartComponents.push(Start_resp_2);
//    InstructionsComponents.push(example_color_a);
//    InstructionsComponents.push(example_color_b);
//    InstructionsComponents.push(example_disappear_a);
//    InstructionsComponents.push(example_disappear_b);
    
    for (const thisComponent of StartComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
      
    return Scheduler.Event.NEXT;
  };
}


function StartRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Start_text* updates
    if (t >= 1.0 && Start_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Start_text.tStart = t;  // (not accounting for frame time here)
      Start_text.frameNStart = frameN;  // exact frame index
      
      Start_text.setAutoDraw(true);
    
    var start = new Date();
    var instructions_2_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(instructions_2_start_time);
    psychoJS.experiment.addData('instructions_2_start_time', instructions_2_start_time);
    }
      
    // *Start_resp_2* updates
    if (t >= 1.0 && Start_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Start_resp_2.tStart = t;  // (not accounting for frame time here)
      Start_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Start_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Start_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Start_resp_2.clearEvents(); });
    }

    if (Start_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Start_resp_2.getKeys({keyList: ['return'], waitRelease: false});
      _Start_resp_2_allKeys = _Start_resp_2_allKeys.concat(theseKeys);
      if (_Start_resp_2_allKeys.length > 0) {
        Start_resp_2.keys = _Start_resp_2_allKeys[_Start_resp_2_allKeys.length - 1].name;  // just the last key pressed
        Start_resp_2.rt = _Start_resp_2_allKeys[_Start_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    //}
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of StartComponents)
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


function StartRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of StartComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Start_resp_2_keys', Start_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Start_resp_2_rt', Start_resp_2.rt);
        routineTimer.reset();
        }
    var start = new Date();
    var instructions_2_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(instructions_2_end_time);
    psychoJS.experiment.addData('instructions_2_end_time', instructions_2_end_time);
    
    Start_resp_2.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

//var selectedText;
//var _Airplane_response_allKeys;
//var gotValidClick;
//var _Airplane_resp_allKeys;
//var AirplaneComponents;
//function AirplaneRoutineBegin(trials) {
//  return function () {
//    //------Prepare to start Routine 'Airplane'-------
//    t = 0;
//    AirplaneClock.reset(); // clock
//    frameN = -1;
//    // update component parameters for each repeat
//    Airplane_resp.keys = undefined;
//    Airplane_resp.rt = undefined;
//    _Airplane_resp_allKeys = [];
//    
//    Airplane_text.setAlignHoriz('center');
//    Airplane_press.setAlignHoriz('center');
//      
//    selectedText = null;
//      
//    modify = false;
//    
//    Airplane_response.keys = undefined;
//    Airplane_response.rt = undefined;
//    _Airplane_response_allKeys = [];
//    // setup some python lists for storing info about the Airplane_mouse
//    gotValidClick = false; // until a click is received  
//    // keep track of which components have finished
//    AirplaneComponents = [];
//    AirplaneComponents.push(Airplane_resp);
//    AirplaneComponents.push(Airplane_text);
//    AirplaneComponents.push(Airplane_press);
////    AirplaneComponents.push(Airplane_rating);
//    AirplaneComponents.push(Airplane_a);
//    AirplaneComponents.push(Airplane_b);
//    AirplaneComponents.push(Airplane_a_box);
//    AirplaneComponents.push(Airplane_b_box);
//    AirplaneComponents.push(Airplane_a_holder);
//    AirplaneComponents.push(Airplane_b_holder);
//    AirplaneComponents.push(Airplane_a_text);
//    AirplaneComponents.push(Airplane_b_text);
//    AirplaneComponents.push(Airplane_response);
//    AirplaneComponents.push(Airplane_mouse);
//    
//    for (const thisComponent of AirplaneComponents)
//      if ('status' in thisComponent)
//        thisComponent.status = PsychoJS.Status.NOT_STARTED;
//    
//    return Scheduler.Event.NEXT;
//  };
//}
//
//
//var continueRoutine;
//function AirplaneRoutineEachFrame(trials) {
//  return function () {
//    //------Loop for each frame of Routine 'Airplane'-------
//    let continueRoutine = true; // until we're told otherwise
//    // get current time
//    t = AirplaneClock.getTime();
//    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
//    // update/draw components on each frame
//    if ((Airplane_mouse.getPressed()[0] === 1)) {
//        if (Airplane_a_box.contains(Airplane_mouse)) {
//            Airplane_a_holder.text = '';
//            selectedText = Airplane_a_text;
//        } else {
//            if (Airplane_b_box.contains(Airplane_mouse)) {
//                Airplane_b_holder.text = '';
//                selectedText = Airplane_b_text;
//            }
//        }
//    }
//    if (selectedText) {
//        setText(selectedText);
//    }
//    
//    text.setText(''); 
//      
//    // *Airplane_resp* updates
//    if (t >= 1 && Airplane_resp.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_resp.tStart = t;  // (not accounting for frame time here)
//      Airplane_resp.frameNStart = frameN;  // exact frame index
//      
//      // keyboard checking is just starting
//      psychoJS.window.callOnFlip(function() { Airplane_resp.clock.reset(); });  // t=0 on next screen flip
//      psychoJS.window.callOnFlip(function() { Airplane_resp.start(); }); // start on screen flip
//      psychoJS.window.callOnFlip(function() { Airplane_resp.clearEvents(); });
//    
//    var start = new Date();
//    var Airplane_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
//    console.log(Airplane_start_time);
//    psychoJS.experiment.addData('Airplane_start_time', Airplane_start_time);
//    }
//
////    if (Airplane_resp.status === PsychoJS.Status.STARTED) {
////      let theseKeys = Airplane_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
////      _Airplane_resp_allKeys = _Airplane_resp_allKeys.concat(theseKeys);
////      if (_Airplane_resp_allKeys.length > 0) {
////        Airplane_resp.keys = _Airplane_resp_allKeys[_Airplane_resp_allKeys.length - 1].name;  // just the last key pressed
////        Airplane_resp.rt = _Airplane_resp_allKeys[_Airplane_resp_allKeys.length - 1].rt;
////        // a response ends the routine
////        continueRoutine = false;
////      }
////    }
//    
//    
//    // *Airplane_text* updates
//    if (t >= 1 && Airplane_text.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_text.tStart = t;  // (not accounting for frame time here)
//      Airplane_text.frameNStart = frameN;  // exact frame index
//      
//      Airplane_text.setAutoDraw(true);
//    }
//
//    // *Airplane_press* updates
//    if (t >= 1 && Airplane_press.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_press.tStart = t;  // (not accounting for frame time here)
//      Airplane_press.frameNStart = frameN;  // exact frame index
//      
//      Airplane_press.setAutoDraw(true);
//    }
//      
////    // *Airplane_rating* updates
////    if (t >= 1 && Airplane_rating.status === PsychoJS.Status.NOT_STARTED) {
////      // keep track of start time/frame for later
////      Airplane_rating.tStart = t;  // (not accounting for frame time here)
////      Airplane_rating.frameNStart = frameN;  // exact frame index
////      
////      Airplane_rating.setAutoDraw(true);
////    }
//
//    
//    // *Airplane_a* updates
//    if (t >= 1 && Airplane_a.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_a.tStart = t;  // (not accounting for frame time here)
//      Airplane_a.frameNStart = frameN;  // exact frame index
//      
//      Airplane_a.setAutoDraw(true);
//    }
//
//    
//    // *Airplane_b* updates
//    if (t >= 1 && Airplane_b.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_b.tStart = t;  // (not accounting for frame time here)
//      Airplane_b.frameNStart = frameN;  // exact frame index
//      
//      Airplane_b.setAutoDraw(true);
//    }
//
//    // *Airplane_a_box* updates
//    if (t >= 1.0 && Airplane_a_box.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_a_box.tStart = t;  // (not accounting for frame time here)
//      Airplane_a_box.frameNStart = frameN;  // exact frame index
//      
//      Airplane_a_box.setAutoDraw(true);
//    }
//
//    
//    // *Airplane_b_box* updates
//    if (t >= 1.0 && Airplane_b_box.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_b_box.tStart = t;  // (not accounting for frame time here)
//      Airplane_b_box.frameNStart = frameN;  // exact frame index
//      
//      Airplane_b_box.setAutoDraw(true);
//    }
//
//    // *Airplane_a_holder* updates
//    if (t >= 1.0 && Airplane_a_holder.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_a_holder.tStart = t;  // (not accounting for frame time here)
//      Airplane_a_holder.frameNStart = frameN;  // exact frame index
//      
//      Airplane_a_holder.setAutoDraw(true);
//    }
//      
//    // *Airplane_b_holder* updates
//    if (t >= 1.0 && Airplane_b_holder.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_b_holder.tStart = t;  // (not accounting for frame time here)
//      Airplane_b_holder.frameNStart = frameN;  // exact frame index
//      
//      Airplane_b_holder.setAutoDraw(true);
//    }
//      
//    // *Airplane_a_text* updates
//    if (t >= 1.0 && Airplane_a_text.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_a_text.tStart = t;  // (not accounting for frame time here)
//      Airplane_a_text.frameNStart = frameN;  // exact frame index
//      
//      Airplane_a_text.setAutoDraw(true);
//    }
//
//    
//    // *Airplane_b_text* updates
//    if (t >= 1.0 && Airplane_b_text.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_b_text.tStart = t;  // (not accounting for frame time here)
//      Airplane_b_text.frameNStart = frameN;  // exact frame index
//      
//      Airplane_b_text.setAutoDraw(true);
//    }
//
//    
//    // *Airplane_response* updates
//    if (t >= 1.0 && Airplane_response.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_response.tStart = t;  // (not accounting for frame time here)
//      Airplane_response.frameNStart = frameN;  // exact frame index
//      
//      // keyboard checking is just starting
//      psychoJS.window.callOnFlip(function() { Airplane_response.clock.reset(); });  // t=0 on next screen flip
//      psychoJS.window.callOnFlip(function() { Airplane_response.start(); }); // start on screen flip
//      psychoJS.window.callOnFlip(function() { Airplane_response.clearEvents(); });
//    }
//
//    if (Airplane_response.status === PsychoJS.Status.STARTED) {
//      let theseKeys = Airplane_response.getKeys({keyList: ['return'], waitRelease: false});
//      _Airplane_response_allKeys = _Airplane_response_allKeys.concat(theseKeys);
//          if (_Airplane_response_allKeys.length > 0) {
//            _Airplane_response_allKeys = [];
//            // a response ends the routine
//          }
//          _Airplane_response_allKeys = _Airplane_response_allKeys.concat(theseKeys);
//          if ((Airplane_a_text.text.length > 1 || Airplane_b_text.text.length > 1) && _Airplane_response_allKeys.length > 0) {
//            _Airplane_response_allKeys = [];
//            // a response ends the routine
//          }
//          _Airplane_response_allKeys = _Airplane_response_allKeys.concat(theseKeys);
//          if ((Airplane_a_text.text.length > 1 && Airplane_b_text.text.length > 1) && _Airplane_response_allKeys.length > 0) {
//            Airplane_response.keys = _Airplane_response_allKeys[_Airplane_response_allKeys.length - 1].name;  // just the last key pressed
//            Airplane_response.rt = _Airplane_response_allKeys[_Airplane_response_allKeys.length - 1].rt;
//            // a response ends the routine
//            continueRoutine = false;
//          }
//    }
//    
//    // check for quit (typically the Esc key)
//    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
//    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
//    //}
//    
//    // check if the Routine should terminate
//    if (!continueRoutine) {  // a component has requested a forced-end of Routine
//      return Scheduler.Event.NEXT;
//    }
//    
//    continueRoutine = false;  // reverts to True if at least one component still running
//    for (const thisComponent of AirplaneComponents)
//      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
//        continueRoutine = true;
//        break;
//      }
//    
//    // refresh the screen if continuing
//    if (continueRoutine) {
//      return Scheduler.Event.FLIP_REPEAT;
//    } else {
//      return Scheduler.Event.NEXT;
//    }
//  };
//}
//
//
//function AirplaneRoutineEnd(trials) {
//  return function () {
//    //------Ending Routine 'Airplane'-------
//    for (const thisComponent of AirplaneComponents) {
//      if (typeof thisComponent.setAutoDraw === 'function') {
//        thisComponent.setAutoDraw(false);
//      }
//    }
//    psychoJS.experiment.addData('Airplane_resp_keys', Airplane_resp.keys);
//    if (typeof Airplane_resp.keys !== 'undefined') {  // we had a response
//        psychoJS.experiment.addData('Airplane_resp_rt', Airplane_resp.rt);
//        routineTimer.reset();
//        }
//    psychoJS.experiment.addData('Airplane_response_keys', Airplane_response.keys);
//    if (typeof Airplane_response.keys !== 'undefined') {  // we had a response
//        psychoJS.experiment.addData('Airplane_response_rt', Airplane_response.rt);
//        routineTimer.reset();
//        }
//    var start = new Date();
//    var Airplane_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
//    console.log(Airplane_end_time);
//    psychoJS.experiment.addData('Airplane_end_time', Airplane_end_time);
//    psychoJS.experiment.addData("Airplane_a_text", Airplane_a_text.text)
//    psychoJS.experiment.addData("Airplane_b_text", Airplane_b_text.text)
//    text.setText('')  // empty the onscreen text ready for next input
//    // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
//    routineTimer.reset();
//    
//    Airplane_resp.stop();
//    // store data for thisExp (ExperimentHandler)
//    const xys = Airplane_mouse.getPos();
//    const buttons = Airplane_mouse.getPressed();
//    psychoJS.experiment.addData('Airplane_mouse_x', xys[0]);
//    psychoJS.experiment.addData('Airplane_mouse_y', xys[1]);
//    psychoJS.experiment.addData('Airplane_mouse_leftButton', buttons[0]);
//    psychoJS.experiment.addData('Airplane_mouse_midButton', buttons[1]);
//    psychoJS.experiment.addData('Airplane_mouse_rightButton', buttons[2]);
//    // the Routine "Airplane" was not non-slip safe, so reset the non-slip timer
//    routineTimer.reset();
//    
//    return Scheduler.Event.NEXT;
//  };
//}
//
//
//var selectedText;
//var _Boat_response_allKeys;
//var gotValidClick;
//var _Boat_resp_allKeys;
//var BoatComponents;
//function BoatRoutineBegin(trials) {
//  return function () {
//    //------Prepare to start Routine 'Boat'-------
//    t = 0;
//    BoatClock.reset(); // clock
//    frameN = -1;
//    // update component parameters for each repeat
//    Boat_resp.keys = undefined;
//    Boat_resp.rt = undefined;
//    _Boat_resp_allKeys = [];
//    
//    Boat_text.setAlignHoriz('center');
//    Boat_press.setAlignHoriz('center');
//      
//    selectedText = null;
//    
//    Boat_response.keys = undefined;
//    Boat_response.rt = undefined;
//    _Boat_response_allKeys = [];
//    // setup some python lists for storing info about the Boat_mouse
//    gotValidClick = false; // until a click is received  
//    // keep track of which components have finished
//    BoatComponents = [];
//    BoatComponents.push(Boat_resp);
//    BoatComponents.push(Boat_text);
//    BoatComponents.push(Boat_press);
////    BoatComponents.push(Boat_rating);
//    BoatComponents.push(Boat_a);
//    BoatComponents.push(Boat_b);
//    BoatComponents.push(Boat_a_box);
//    BoatComponents.push(Boat_b_box);
//    BoatComponents.push(Boat_a_holder);
//    BoatComponents.push(Boat_b_holder);
//    BoatComponents.push(Boat_a_text);
//    BoatComponents.push(Boat_b_text);
//    BoatComponents.push(Boat_response);
//    BoatComponents.push(Boat_mouse);
//    
//    for (const thisComponent of BoatComponents)
//      if ('status' in thisComponent)
//        thisComponent.status = PsychoJS.Status.NOT_STARTED;
//    
//    return Scheduler.Event.NEXT;
//  };
//}
//
//var continueRoutine;
//function BoatRoutineEachFrame(trials) {
//  return function () {
//    //------Loop for each frame of Routine 'Boat'-------
//    let continueRoutine = true; // until we're told otherwise
//    // get current time
//    t = BoatClock.getTime();
//    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
//    // update/draw components on each frame
//    if ((Boat_mouse.getPressed()[0] === 1)) {
//        if (Boat_a_box.contains(Boat_mouse)) {
//            Boat_a_holder.text = '';
//            selectedText = Boat_a_text;
//        } else {
//            if (Boat_b_box.contains(Boat_mouse)) {
//                Boat_b_holder.text = '';
//                selectedText = Boat_b_text;
//            }
//        }
//    }
//    if (selectedText) {
//        setText(selectedText);
//    }
//    
//    text.setText('')
//      
//    // *Boat_resp* updates
//    if (t >= 1 && Boat_resp.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_resp.tStart = t;  // (not accounting for frame time here)
//      Boat_resp.frameNStart = frameN;  // exact frame index
//      
//      // keyboard checking is just starting
//      psychoJS.window.callOnFlip(function() { Boat_resp.clock.reset(); });  // t=0 on next screen flip
//      psychoJS.window.callOnFlip(function() { Boat_resp.start(); }); // start on screen flip
//      psychoJS.window.callOnFlip(function() { Boat_resp.clearEvents(); });
//    
//    var start = new Date();
//    var Boat_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
//    console.log(Boat_start_time);
//    psychoJS.experiment.addData('Boat_start_time', Boat_start_time);
//    }
//
////    if (Boat_resp.status === PsychoJS.Status.STARTED) {
////      let theseKeys = Boat_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
////      _Boat_resp_allKeys = _Boat_resp_allKeys.concat(theseKeys);
////      if (_Boat_resp_allKeys.length > 0) {
////        Boat_resp.keys = _Boat_resp_allKeys[_Boat_resp_allKeys.length - 1].name;  // just the last key pressed
////        Boat_resp.rt = _Boat_resp_allKeys[_Boat_resp_allKeys.length - 1].rt;
////        // a response ends the routine
////        continueRoutine = false;
////      }
////    }
//    
//    
//    // *Boat_text* updates
//    if (t >= 1 && Boat_text.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_text.tStart = t;  // (not accounting for frame time here)
//      Boat_text.frameNStart = frameN;  // exact frame index
//      
//      Boat_text.setAutoDraw(true);
//    }
//      
//    // *Boat_press* updates
//    if (t >= 1 && Boat_press.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_press.tStart = t;  // (not accounting for frame time here)
//      Boat_press.frameNStart = frameN;  // exact frame index
//      
//      Boat_press.setAutoDraw(true);
//    }
//
//    
////    // *Boat_rating* updates
////    if (t >= 1 && Boat_rating.status === PsychoJS.Status.NOT_STARTED) {
////      // keep track of start time/frame for later
////      Boat_rating.tStart = t;  // (not accounting for frame time here)
////      Boat_rating.frameNStart = frameN;  // exact frame index
////      
////      Boat_rating.setAutoDraw(true);
////    }
//
//    
//    // *Boat_a* updates
//    if (t >= 1 && Boat_a.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_a.tStart = t;  // (not accounting for frame time here)
//      Boat_a.frameNStart = frameN;  // exact frame index
//      
//      Boat_a.setAutoDraw(true);
//    }
//
//    
//    // *Boat_b* updates
//    if (t >= 1 && Boat_b.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_b.tStart = t;  // (not accounting for frame time here)
//      Boat_b.frameNStart = frameN;  // exact frame index
//      
//      Boat_b.setAutoDraw(true);
//    }
//
//    // *Boat_a_box* updates
//    if (t >= 1.0 && Boat_a_box.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_a_box.tStart = t;  // (not accounting for frame time here)
//      Boat_a_box.frameNStart = frameN;  // exact frame index
//      
//      Boat_a_box.setAutoDraw(true);
//    }
//
//    
//    // *Boat_b_box* updates
//    if (t >= 1.0 && Boat_b_box.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_b_box.tStart = t;  // (not accounting for frame time here)
//      Boat_b_box.frameNStart = frameN;  // exact frame index
//      
//      Boat_b_box.setAutoDraw(true);
//    }
//
//    
//    // *Boat_a_holder* updates
//    if (t >= 1.0 && Boat_a_holder.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_a_holder.tStart = t;  // (not accounting for frame time here)
//      Boat_a_holder.frameNStart = frameN;  // exact frame index
//      
//      Boat_a_holder.setAutoDraw(true);
//    }
//
//    
//    // *Boat_b_holder* updates
//    if (t >= 1.0 && Boat_b_holder.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_b_holder.tStart = t;  // (not accounting for frame time here)
//      Boat_b_holder.frameNStart = frameN;  // exact frame index
//      
//      Boat_b_holder.setAutoDraw(true);
//    }
//    
//    // *Boat_a_text* updates
//    if (t >= 1.0 && Boat_a_text.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_a_text.tStart = t;  // (not accounting for frame time here)
//      Boat_a_text.frameNStart = frameN;  // exact frame index
//      
//      Boat_a_text.setAutoDraw(true);
//    }
//
//    
//    // *Boat_b_text* updates
//    if (t >= 1.0 && Boat_b_text.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_b_text.tStart = t;  // (not accounting for frame time here)
//      Boat_b_text.frameNStart = frameN;  // exact frame index
//      
//      Boat_b_text.setAutoDraw(true);
//    }
//
//    
//    // *Boat_response* updates
//    if (t >= 1.0 && Boat_response.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Boat_response.tStart = t;  // (not accounting for frame time here)
//      Boat_response.frameNStart = frameN;  // exact frame index
//      
//      // keyboard checking is just starting
//      psychoJS.window.callOnFlip(function() { Boat_response.clock.reset(); });  // t=0 on next screen flip
//      psychoJS.window.callOnFlip(function() { Boat_response.start(); }); // start on screen flip
//      psychoJS.window.callOnFlip(function() { Boat_response.clearEvents(); });
//    }
//
//    if (Boat_response.status === PsychoJS.Status.STARTED) {
//      let theseKeys = Boat_response.getKeys({keyList: ['return'], waitRelease: false});
//      _Boat_response_allKeys = _Boat_response_allKeys.concat(theseKeys);
//          if (_Boat_response_allKeys.length > 0) {
//            _Boat_response_allKeys = [];
//            // a response ends the routine
//          }
//          _Boat_response_allKeys = _Boat_response_allKeys.concat(theseKeys);
//          if ((Boat_a_text.text.length > 1 || Boat_b_text.text.length > 1) && _Boat_response_allKeys.length > 0) {
//            _Boat_response_allKeys = [];
//            // a response ends the routine
//          }
//          _Boat_response_allKeys = _Boat_response_allKeys.concat(theseKeys);
//          if ((Boat_a_text.text.length > 1 && Boat_b_text.text.length > 1) && _Boat_response_allKeys.length > 0) {
//            Boat_response.keys = _Boat_response_allKeys[_Boat_response_allKeys.length - 1].name;  // just the last key pressed
//            Boat_response.rt = _Boat_response_allKeys[_Boat_response_allKeys.length - 1].rt;
//            // a response ends the routine
//            continueRoutine = false;
//          }
//    }
//    
//    // check for quit (typically the Esc key)
//    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
//    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
//    //}
//    
//    // check if the Routine should terminate
//    if (!continueRoutine) {  // a component has requested a forced-end of Routine
//      return Scheduler.Event.NEXT;
//    }
//    
//    continueRoutine = false;  // reverts to True if at least one component still running
//    for (const thisComponent of BoatComponents)
//      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
//        continueRoutine = true;
//        break;
//      }
//    
//    // refresh the screen if continuing
//    if (continueRoutine) {
//      return Scheduler.Event.FLIP_REPEAT;
//    } else {
//      return Scheduler.Event.NEXT;
//    }
//  };
//}
//
//
//function BoatRoutineEnd(trials) {
//  return function () {
//    //------Ending Routine 'Boat'-------
//    for (const thisComponent of BoatComponents) {
//      if (typeof thisComponent.setAutoDraw === 'function') {
//        thisComponent.setAutoDraw(false);
//      }
//    }
//    psychoJS.experiment.addData('Boat_resp_keys', Boat_resp.keys);
//    if (typeof Boat_resp.keys !== 'undefined') {  // we had a response
//        psychoJS.experiment.addData('Boat_resp_rt', Boat_resp.rt);
//        routineTimer.reset();
//        }
//    psychoJS.experiment.addData('Boat_response_keys', Boat_response.keys);
//    if (typeof Boat_response.keys !== 'undefined') {  // we had a response
//        psychoJS.experiment.addData('Boat_response_rt', Boat_response.rt);
//        routineTimer.reset();
//        }
//    var start = new Date();
//    var Boat_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
//    console.log(Boat_end_time);
//    psychoJS.experiment.addData('Boat_end_time', Boat_end_time);
//    psychoJS.experiment.addData("Boat_a_text", Boat_a_text.text)
//    psychoJS.experiment.addData("Boat_b_text", Boat_b_text.text)
//    text.setText('')  // empty the onscreen text ready for next input
//    // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
//    routineTimer.reset();
//    
//    Boat_resp.stop();
//    // store data for thisExp (ExperimentHandler)
//    const xys = Boat_mouse.getPos();
//    const buttons = Boat_mouse.getPressed();
//    psychoJS.experiment.addData('Boat_mouse_x', xys[0]);
//    psychoJS.experiment.addData('Boat_mouse_y', xys[1]);
//    psychoJS.experiment.addData('Boat_mouse_leftButton', buttons[0]);
//    psychoJS.experiment.addData('Boat_mouse_midButton', buttons[1]);
//    psychoJS.experiment.addData('Boat_mouse_rightButton', buttons[2]);
//    // the Routine "Boat" was not non-slip safe, so reset the non-slip timer
//    routineTimer.reset();
//    
//    return Scheduler.Event.NEXT;
//  };
//}

var trials;
var currentLoop;
function trials_1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ma_trial_list_partial.csv', prac_trial_rows),
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial_1RoutineBegin(snapshot));
    thisScheduler.add(trial_1RoutineEachFrame(snapshot));
    thisScheduler.add(trial_1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_1LoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _user_1_resp_allKeys;
var selectedText;
var _trial_1_response_allKeys;
var gotValidClick;
var _user_1_resp_allKeys;
var trial_1Components;
function trial_1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial_1'-------
    t = 0;
    trial_1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    user_1_resp.keys = undefined;
    user_1_resp.rt = undefined;
    _user_1_resp_allKeys = [];
    
    trial_1_text.setAlignHoriz('center');
    trial_1_press.setAlignHoriz('center');
      
    selectedText = null;
    
    trial_1_response.keys = undefined;
    trial_1_response.rt = undefined;
    _trial_1_response_allKeys = [];
      
    trial_1_count = (trial_1_count + 1);
    if (trial_1_count > 29) {
        continueRoutine = false;
        trials.finished = true;
    }
    image_1_1.setImage(image_a);
    image_1_2.setImage(image_b);
    user_1_resp.keys = undefined;
    user_1_resp.rt = undefined;
    _user_1_resp_allKeys = [];
    text.text = '';
    psychoJS.eventManager.clearEvents();
        // setup some python lists for storing info about the trial_1_mouse
    gotValidClick = false; // until a click is received  
       // keep track of which components have finished
    trial_1Components = [];
    trial_1Components.push(user_1_resp);
    trial_1Components.push(trial_1_text);
    trial_1Components.push(trial_1_press);
      //    trial_1Components.push(trial_1_rating);
    trial_1Components.push(image_1_1);
    trial_1Components.push(image_1_2);
    trial_1Components.push(image_1_1_box);
    trial_1Components.push(image_1_2_box);
    trial_1Components.push(image_1_1_holder);
    trial_1Components.push(image_1_2_holder);
    trial_1Components.push(image_1_1_text);
    trial_1Components.push(image_1_2_text);
    trial_1Components.push(trial_1_response);
    trial_1Components.push(trial_1_mouse);
    
    for (const thisComponent of trial_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

var continueRoutine;
function trial_1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial_1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((trial_1_mouse.getPressed()[0] === 1)) {
        if (image_1_1_box.contains(trial_1_mouse)) {
            image_1_1_holder.text = '';
            selectedText = image_1_1_text;
        } else {
            if (image_1_2_box.contains(trial_1_mouse)) {
                image_1_2_holder.text = '';
                selectedText = image_1_2_text;
            }
        }
    }
    if (selectedText) {
        setText(selectedText);
    }
    
    text.setText('')
    
    // *trial_1_resp* updates
    if (t >= 1 && user_1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      user_1_resp.tStart = t;  // (not accounting for frame time here)
      user_1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { user_1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { user_1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { user_1_resp.clearEvents(); });
        
    var start = new Date();
    var trial_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(trial_start_time);
    psychoJS.experiment.addData('trial_start_time', trial_start_time);
    }

//    if (user_1_resp.status === PsychoJS.Status.STARTED) {
//      let theseKeys = user_1_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
//      _user_1_resp_allKeys = _user_1_resp_allKeys.concat(theseKeys);
//      if (_user_1_resp_allKeys.length > 0) {
//        user_1_resp.keys = _user_1_resp_allKeys[_user_1_resp_allKeys.length - 1].name;  // just the last key pressed
//        user_1_resp.rt = _user_1_resp_allKeys[_user_1_resp_allKeys.length - 1].rt;
//        // a response ends the routine
//        continueRoutine = false;
//      }
//    }
    
    
    // *trial_1_text* updates
    if (t >= 1 && trial_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_1_text.tStart = t;  // (not accounting for frame time here)
      trial_1_text.frameNStart = frameN;  // exact frame index
      
      trial_1_text.setAutoDraw(true);
    }

    // *trial_1_press* updates
    if (t >= 1 && trial_1_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_1_press.tStart = t;  // (not accounting for frame time here)
      trial_1_press.frameNStart = frameN;  // exact frame index
      
      trial_1_press.setAutoDraw(true);
    }
    
//    // *trial_1_rating* updates
//    if (t >= 1 && trial_1_rating.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      trial_1_rating.tStart = t;  // (not accounting for frame time here)
//      trial_1_rating.frameNStart = frameN;  // exact frame index
//      
//      trial_1_rating.setAutoDraw(true);
//    }

    
    // *image_1_1* updates
    if (t >= 1 && image_1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_1.tStart = t;  // (not accounting for frame time here)
      image_1_1.frameNStart = frameN;  // exact frame index
      
      image_1_1.setAutoDraw(true);
    }

      if (image_1_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_1_1.setImage(image_a);
    }
    
    // *image_1_2* updates
    if (t >= 1 && image_1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_2.tStart = t;  // (not accounting for frame time here)
      image_1_2.frameNStart = frameN;  // exact frame index
      
      image_1_2.setAutoDraw(true);
    }

      if (image_1_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_1_2.setImage(image_b);
    }
      
    // *image_1_1_box* updates
    if (t >= 1.0 && image_1_1_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_1_box.tStart = t;  // (not accounting for frame time here)
      image_1_1_box.frameNStart = frameN;  // exact frame index
      
      image_1_1_box.setAutoDraw(true);
    }

    
    // *image_1_2_box* updates
    if (t >= 1.0 && image_1_2_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_2_box.tStart = t;  // (not accounting for frame time here)
      image_1_2_box.frameNStart = frameN;  // exact frame index
      
      image_1_2_box.setAutoDraw(true);
    }

    
    // *image_1_1_holder* updates
    if (t >= 1.0 && image_1_1_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_1_holder.tStart = t;  // (not accounting for frame time here)
      image_1_1_holder.frameNStart = frameN;  // exact frame index
      
      image_1_1_holder.setAutoDraw(true);
    }

    
    // *image_1_2_holder* updates
    if (t >= 1.0 && image_1_2_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_2_holder.tStart = t;  // (not accounting for frame time here)
      image_1_2_holder.frameNStart = frameN;  // exact frame index
      
      image_1_2_holder.setAutoDraw(true);
    }
    
    // *image_1_1_text* updates
    if (t >= 1.0 && image_1_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_1_text.tStart = t;  // (not accounting for frame time here)
      image_1_1_text.frameNStart = frameN;  // exact frame index
      
      image_1_1_text.setAutoDraw(true);
    }

    
    // *image_1_2_text* updates
    if (t >= 1.0 && image_1_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1_2_text.tStart = t;  // (not accounting for frame time here)
      image_1_2_text.frameNStart = frameN;  // exact frame index
      
      image_1_2_text.setAutoDraw(true);
    }

    
    // *trial_1_response* updates
    if (t >= 1.0 && trial_1_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_1_response.tStart = t;  // (not accounting for frame time here)
      trial_1_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial_1_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial_1_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial_1_response.clearEvents(); });
    }

    if (trial_1_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial_1_response.getKeys({keyList: ['return'], waitRelease: false});
      _trial_1_response_allKeys = _trial_1_response_allKeys.concat(theseKeys);
          if (_trial_1_response_allKeys.length > 0) {
            _trial_1_response_allKeys = [];
            // a response ends the routine
          }
          _trial_1_response_allKeys = _trial_1_response_allKeys.concat(theseKeys);
          if ((image_1_1_text.text.length > 1 || image_1_2_text.text.length > 1) && _trial_1_response_allKeys.length > 0) {
            _trial_1_response_allKeys = [];
            // a response ends the routine
          }
          _trial_1_response_allKeys = _trial_1_response_allKeys.concat(theseKeys);
          if ((image_1_1_text.text.length > 1 && image_1_2_text.text.length > 1) && _trial_1_response_allKeys.length > 0) {
            trial_1_response.keys = _trial_1_response_allKeys[_trial_1_response_allKeys.length - 1].name;  // just the last key pressed
            trial_1_response.rt = _trial_1_response_allKeys[_trial_1_response_allKeys.length - 1].rt;
            // a response ends the routine
            continueRoutine = false;
          }
    }
    
    // check for quit (typically the Esc key)
    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    //}
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_1Components)
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

function trial_1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial_1'-------
    for (const thisComponent of trial_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('user_resp_keys', user_1_resp.keys);
    if (typeof user_1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('user_resp_rt', user_1_resp.rt);
        routineTimer.reset();
        }
    psychoJS.experiment.addData('trial_response_keys', trial_1_response.keys);
    if (typeof trial_1_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trial_response_rt', trial_1_response.rt);
        routineTimer.reset();
        }
    var start = new Date();
    var trial_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(trial_end_time);
    psychoJS.experiment.addData('trial_end_time', trial_end_time);
    psychoJS.experiment.addData("image_1_text", image_1_1_text.text)
    psychoJS.experiment.addData("image_2_text", image_1_2_text.text)
    image_1_1_text.setText('')  // empty the onscreen text ready for next input
    image_1_2_text.setText('')  // empty the onscreen text ready for next input
    image_1_1_holder.setText('click here to enter your description...')
    image_1_2_holder.setText('click here to enter your description...')
    // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
      
    user_1_resp.stop();
    // store data for thisExp (ExperimentHandler)
    const xys = trial_1_mouse.getPos();
    const buttons = trial_1_mouse.getPressed();
    psychoJS.experiment.addData('trial_mouse_x', xys[0]);
    psychoJS.experiment.addData('trial_mouse_y', xys[1]);
    psychoJS.experiment.addData('trial_mouse_leftButton', buttons[0]);
    psychoJS.experiment.addData('trial_mouse_midButton', buttons[1]);
    psychoJS.experiment.addData('trial_mouse_rightButton', buttons[2]);
    // the Routine "trial_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;

  };
}

var selectedText;
var _Cow_response_allKeys;
var gotValidClick;
var _Cow_resp_allKeys;
var CowComponents;
function CowRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Cow'-------
    t = 0;
    CowClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Cow_resp.keys = undefined;
    Cow_resp.rt = undefined;
    _Cow_resp_allKeys = [];
    
    Cow_text.setAlignHoriz('center');
    Cow_press.setAlignHoriz('center');
      
    selectedText = null;
    
    Cow_response.keys = undefined;
    Cow_response.rt = undefined;
    _Cow_response_allKeys = [];
    // setup some python lists for storing info about the Cow_mouse
    gotValidClick = false; // until a click is received  
    // keep track of which components have finished
    CowComponents = [];
    CowComponents.push(Cow_resp);
    CowComponents.push(Cow_text);
    CowComponents.push(Cow_press);
//    CowComponents.push(Cow_rating);
    CowComponents.push(Cow_a);
    CowComponents.push(Cow_b);
    CowComponents.push(Cow_a_box);
    CowComponents.push(Cow_b_box);
    CowComponents.push(Cow_a_holder);
    CowComponents.push(Cow_b_holder);
    CowComponents.push(Cow_a_text);
    CowComponents.push(Cow_b_text);
    CowComponents.push(Cow_response);
    CowComponents.push(Cow_mouse);
    
    for (const thisComponent of CowComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

var continueRoutine;
function CowRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Cow'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CowClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((Cow_mouse.getPressed()[0] === 1)) {
        if (Cow_a_box.contains(Cow_mouse)) {
            Cow_a_holder.text = '';
            selectedText = Cow_a_text;
        } else {
            if (Cow_b_box.contains(Cow_mouse)) {
                Cow_b_holder.text = '';
                selectedText = Cow_b_text;
            }
        }
    }
    if (selectedText) {
        setText(selectedText);
    }
    
    // *Cow_resp* updates
    if (t >= 1 && Cow_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_resp.tStart = t;  // (not accounting for frame time here)
      Cow_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Cow_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Cow_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Cow_resp.clearEvents(); });
    
    var start = new Date();
    var Cow_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(Cow_start_time);
    psychoJS.experiment.addData('Cow_start_time', Cow_start_time);
    }

//    if (Cow_resp.status === PsychoJS.Status.STARTED) {
//      let theseKeys = Cow_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
//      _Cow_resp_allKeys = _Cow_resp_allKeys.concat(theseKeys);
//      if (_Cow_resp_allKeys.length > 0) {
//        Cow_resp.keys = _Cow_resp_allKeys[_Cow_resp_allKeys.length - 1].name;  // just the last key pressed
//        Cow_resp.rt = _Cow_resp_allKeys[_Cow_resp_allKeys.length - 1].rt;
//        // a response ends the routine
//        continueRoutine = false;
//      }
//    }
    
    
    // *Cow_text* updates
    if (t >= 1 && Cow_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_text.tStart = t;  // (not accounting for frame time here)
      Cow_text.frameNStart = frameN;  // exact frame index
      
      Cow_text.setAutoDraw(true);
    }

    // *Cow_press* updates
    if (t >= 1 && Cow_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_press.tStart = t;  // (not accounting for frame time here)
      Cow_press.frameNStart = frameN;  // exact frame index
      
      Cow_press.setAutoDraw(true);
    }
      
//    // *Cow_rating* updates
//    if (t >= 1 && Cow_rating.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Cow_rating.tStart = t;  // (not accounting for frame time here)
//      Cow_rating.frameNStart = frameN;  // exact frame index
//      
//      Cow_rating.setAutoDraw(true);
//    }

    
    // *Cow_a* updates
    if (t >= 1 && Cow_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_a.tStart = t;  // (not accounting for frame time here)
      Cow_a.frameNStart = frameN;  // exact frame index
      
      Cow_a.setAutoDraw(true);
    }

    
    // *Cow_b* updates
    if (t >= 1 && Cow_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_b.tStart = t;  // (not accounting for frame time here)
      Cow_b.frameNStart = frameN;  // exact frame index
      
      Cow_b.setAutoDraw(true);
    }

    // *Cow_a_box* updates
    if (t >= 1.0 && Cow_a_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_a_box.tStart = t;  // (not accounting for frame time here)
      Cow_a_box.frameNStart = frameN;  // exact frame index
      
      Cow_a_box.setAutoDraw(true);
    }

    
    // *Cow_b_box* updates
    if (t >= 1.0 && Cow_b_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_b_box.tStart = t;  // (not accounting for frame time here)
      Cow_b_box.frameNStart = frameN;  // exact frame index
      
      Cow_b_box.setAutoDraw(true);
    }

    
    // *Cow_a_holder* updates
    if (t >= 1.0 && Cow_a_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_a_holder.tStart = t;  // (not accounting for frame time here)
      Cow_a_holder.frameNStart = frameN;  // exact frame index
      
      Cow_a_holder.setAutoDraw(true);
    }

    
    // *Cow_b_holder* updates
    if (t >= 1.0 && Cow_b_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_b_holder.tStart = t;  // (not accounting for frame time here)
      Cow_b_holder.frameNStart = frameN;  // exact frame index
      
      Cow_b_holder.setAutoDraw(true);
    }
      
    // *Cow_a_text* updates
    if (t >= 1.0 && Cow_a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_a_text.tStart = t;  // (not accounting for frame time here)
      Cow_a_text.frameNStart = frameN;  // exact frame index
      
      Cow_a_text.setAutoDraw(true);
    }

    
    // *Cow_b_text* updates
    if (t >= 1.0 && Cow_b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_b_text.tStart = t;  // (not accounting for frame time here)
      Cow_b_text.frameNStart = frameN;  // exact frame index
      
      Cow_b_text.setAutoDraw(true);
    }

    
    // *Cow_response* updates
    if (t >= 1.0 && Cow_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_response.tStart = t;  // (not accounting for frame time here)
      Cow_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Cow_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Cow_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Cow_response.clearEvents(); });
    }

    if (Cow_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = Cow_response.getKeys({keyList: ['return'], waitRelease: false});
      _Cow_response_allKeys = _Cow_response_allKeys.concat(theseKeys);
          if (_Cow_response_allKeys.length > 0) {
            _Cow_response_allKeys = [];
            // a response ends the routine
          }
          _Cow_response_allKeys = _Cow_response_allKeys.concat(theseKeys);
          if ((Cow_a_text.text.length > 1 || Cow_b_text.text.length > 1) && _Cow_response_allKeys.length > 0) {
            _Cow_response_allKeys = [];
            // a response ends the routine
          }
          _Cow_response_allKeys = _Cow_response_allKeys.concat(theseKeys);
          if ((Cow_a_text.text.length > 1 && Cow_b_text.text.length > 1) && _Cow_response_allKeys.length > 0) {
            Cow_response.keys = _Cow_response_allKeys[_Cow_response_allKeys.length - 1].name;  // just the last key pressed
            Cow_response.rt = _Cow_response_allKeys[_Cow_response_allKeys.length - 1].rt;
            // a response ends the routine
            continueRoutine = false;
          }
    }
    
    // check for quit (typically the Esc key)
    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    //}
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CowComponents)
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


function CowRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Cow'-------
    for (const thisComponent of CowComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Cow_resp_keys', Cow_resp.keys);
    if (typeof Cow_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Cow_resp_rt', Cow_resp.rt);
        routineTimer.reset();
        }
    psychoJS.experiment.addData('Cow_response_keys', Cow_response.keys);
    if (typeof Cow_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Cow_response_rt', Cow_response.rt);
        routineTimer.reset();
        }
    var start = new Date();
    var Cow_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(Cow_end_time);
    psychoJS.experiment.addData('Cow_end_time', Cow_end_time);
    psychoJS.experiment.addData("Cow_a_text", Cow_a_text.text)
    psychoJS.experiment.addData("Cow_b_text", Cow_b_text.text)
    text.setText('')  // empty the onscreen text ready for next input
    // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    Cow_resp.stop();
    // store data for thisExp (ExperimentHandler)
    const xys = Cow_mouse.getPos();
    const buttons = Cow_mouse.getPressed();
    psychoJS.experiment.addData('Cow_mouse_x', xys[0]);
    psychoJS.experiment.addData('Cow_mouse_y', xys[1]);
    psychoJS.experiment.addData('Cow_mouse_leftButton', buttons[0]);
    psychoJS.experiment.addData('Cow_mouse_midButton', buttons[1]);
    psychoJS.experiment.addData('Cow_mouse_rightButton', buttons[2]);
    // the Routine "Cow" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var selectedText;
var _Airplane_response_allKeys;
var gotValidClick;
var _Airplane_resp_allKeys;
var AirplaneComponents;
function AirplaneRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Airplane'-------
    t = 0;
    AirplaneClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Airplane_resp.keys = undefined;
    Airplane_resp.rt = undefined;
    _Airplane_resp_allKeys = [];
    
    Airplane_text.setAlignHoriz('center');
    Airplane_press.setAlignHoriz('center');
      
    selectedText = null;
    
    Airplane_response.keys = undefined;
    Airplane_response.rt = undefined;
    _Airplane_response_allKeys = [];
    // setup some python lists for storing info about the Airplane_mouse
    gotValidClick = false; // until a click is received  
    // keep track of which components have finished
    AirplaneComponents = [];
    AirplaneComponents.push(Airplane_resp);
    AirplaneComponents.push(Airplane_text);
    AirplaneComponents.push(Airplane_press);
//    AirplaneComponents.push(Airplane_rating);
    AirplaneComponents.push(Airplane_a);
    AirplaneComponents.push(Airplane_b);
    AirplaneComponents.push(Airplane_a_box);
    AirplaneComponents.push(Airplane_b_box);
    AirplaneComponents.push(Airplane_a_holder);
    AirplaneComponents.push(Airplane_b_holder);
    AirplaneComponents.push(Airplane_a_text);
    AirplaneComponents.push(Airplane_b_text);
    AirplaneComponents.push(Airplane_response);
    AirplaneComponents.push(Airplane_mouse);
    
    for (const thisComponent of AirplaneComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

var continueRoutine;
function AirplaneRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Airplane'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = AirplaneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((Airplane_mouse.getPressed()[0] === 1)) {
        if (Airplane_a_box.contains(Airplane_mouse)) {
            Airplane_a_holder.text = '';
            selectedText = Airplane_a_text;
        } else {
            if (Airplane_b_box.contains(Airplane_mouse)) {
                Airplane_b_holder.text = '';
                selectedText = Airplane_b_text;
            }
        }
    }
    if (selectedText) {
        setText(selectedText);
    }
    
    // *Airplane_resp* updates
    if (t >= 1 && Airplane_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_resp.tStart = t;  // (not accounting for frame time here)
      Airplane_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Airplane_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Airplane_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Airplane_resp.clearEvents(); });
    
    var start = new Date();
    var Airplane_start_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(Airplane_start_time);
    psychoJS.experiment.addData('Airplane_start_time', Airplane_start_time);
    }

//    if (Airplane_resp.status === PsychoJS.Status.STARTED) {
//      let theseKeys = Airplane_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
//      _Airplane_resp_allKeys = _Airplane_resp_allKeys.concat(theseKeys);
//      if (_Airplane_resp_allKeys.length > 0) {
//        Airplane_resp.keys = _Airplane_resp_allKeys[_Airplane_resp_allKeys.length - 1].name;  // just the last key pressed
//        Airplane_resp.rt = _Airplane_resp_allKeys[_Airplane_resp_allKeys.length - 1].rt;
//        // a response ends the routine
//        continueRoutine = false;
//      }
//    }
    
    
    // *Airplane_text* updates
    if (t >= 1 && Airplane_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_text.tStart = t;  // (not accounting for frame time here)
      Airplane_text.frameNStart = frameN;  // exact frame index
      
      Airplane_text.setAutoDraw(true);
    }

    // *Airplane_press* updates
    if (t >= 1 && Airplane_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_press.tStart = t;  // (not accounting for frame time here)
      Airplane_press.frameNStart = frameN;  // exact frame index
      
      Airplane_press.setAutoDraw(true);
    }
      
//    // *Airplane_rating* updates
//    if (t >= 1 && Airplane_rating.status === PsychoJS.Status.NOT_STARTED) {
//      // keep track of start time/frame for later
//      Airplane_rating.tStart = t;  // (not accounting for frame time here)
//      Airplane_rating.frameNStart = frameN;  // exact frame index
//      
//      Airplane_rating.setAutoDraw(true);
//    }

    
    // *Airplane_a* updates
    if (t >= 1 && Airplane_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_a.tStart = t;  // (not accounting for frame time here)
      Airplane_a.frameNStart = frameN;  // exact frame index
      
      Airplane_a.setAutoDraw(true);
    }

    
    // *Airplane_b* updates
    if (t >= 1 && Airplane_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_b.tStart = t;  // (not accounting for frame time here)
      Airplane_b.frameNStart = frameN;  // exact frame index
      
      Airplane_b.setAutoDraw(true);
    }

    // *Airplane_a_box* updates
    if (t >= 1.0 && Airplane_a_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_a_box.tStart = t;  // (not accounting for frame time here)
      Airplane_a_box.frameNStart = frameN;  // exact frame index
      
      Airplane_a_box.setAutoDraw(true);
    }

    
    // *Airplane_b_box* updates
    if (t >= 1.0 && Airplane_b_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_b_box.tStart = t;  // (not accounting for frame time here)
      Airplane_b_box.frameNStart = frameN;  // exact frame index
      
      Airplane_b_box.setAutoDraw(true);
    }

    
    // *Airplane_a_holder* updates
    if (t >= 1.0 && Airplane_a_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_a_holder.tStart = t;  // (not accounting for frame time here)
      Airplane_a_holder.frameNStart = frameN;  // exact frame index
      
      Airplane_a_holder.setAutoDraw(true);
    }

    
    // *Airplane_b_holder* updates
    if (t >= 1.0 && Airplane_b_holder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_b_holder.tStart = t;  // (not accounting for frame time here)
      Airplane_b_holder.frameNStart = frameN;  // exact frame index
      
      Airplane_b_holder.setAutoDraw(true);
    }
      
    // *Airplane_a_text* updates
    if (t >= 1.0 && Airplane_a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_a_text.tStart = t;  // (not accounting for frame time here)
      Airplane_a_text.frameNStart = frameN;  // exact frame index
      
      Airplane_a_text.setAutoDraw(true);
    }

    
    // *Airplane_b_text* updates
    if (t >= 1.0 && Airplane_b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_b_text.tStart = t;  // (not accounting for frame time here)
      Airplane_b_text.frameNStart = frameN;  // exact frame index
      
      Airplane_b_text.setAutoDraw(true);
    }

    
    // *Airplane_response* updates
    if (t >= 1.0 && Airplane_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_response.tStart = t;  // (not accounting for frame time here)
      Airplane_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Airplane_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Airplane_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Airplane_response.clearEvents(); });
    }

    if (Airplane_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = Airplane_response.getKeys({keyList: ['return'], waitRelease: false});
      _Airplane_response_allKeys = _Airplane_response_allKeys.concat(theseKeys);
          if (_Airplane_response_allKeys.length > 0) {
            _Airplane_response_allKeys = [];
            // a response ends the routine
          }
          _Airplane_response_allKeys = _Airplane_response_allKeys.concat(theseKeys);
          if ((Airplane_a_text.text.length > 1 || Airplane_b_text.text.length > 1) && _Airplane_response_allKeys.length > 0) {
            _Airplane_response_allKeys = [];
            // a response ends the routine
          }
          _Airplane_response_allKeys = _Airplane_response_allKeys.concat(theseKeys);
          if ((Airplane_a_text.text.length > 1 && Airplane_b_text.text.length > 1) && _Airplane_response_allKeys.length > 0) {
            Airplane_response.keys = _Airplane_response_allKeys[_Airplane_response_allKeys.length - 1].name;  // just the last key pressed
            Airplane_response.rt = _Airplane_response_allKeys[_Airplane_response_allKeys.length - 1].rt;
            // a response ends the routine
            continueRoutine = false;
          }
    }
    
    // check for quit (typically the Esc key)
    //if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    //  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    //}
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AirplaneComponents)
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


function AirplaneRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Airplane'-------
    for (const thisComponent of AirplaneComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Airplane_resp_keys', Airplane_resp.keys);
    if (typeof Airplane_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Airplane_resp_rt', Airplane_resp.rt);
        routineTimer.reset();
        }
    psychoJS.experiment.addData('Airplane_response_keys', Airplane_response.keys);
    if (typeof Airplane_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Airplane_response_rt', Airplane_response.rt);
        routineTimer.reset();
        }
    var start = new Date();
    var Airplane_end_time = start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + ":" + start.getMilliseconds();
    console.log(Airplane_end_time);
    psychoJS.experiment.addData('Airplane_end_time', Airplane_end_time);
    psychoJS.experiment.addData("Airplane_a_text", Airplane_a_text.text)
    psychoJS.experiment.addData("Airplane_b_text", Airplane_b_text.text)
    text.setText('')  // empty the onscreen text ready for next input
    // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    Airplane_resp.stop();
    // store data for thisExp (ExperimentHandler)
    const xys = Airplane_mouse.getPos();
    const buttons = Airplane_mouse.getPressed();
    psychoJS.experiment.addData('Airplane_mouse_x', xys[0]);
    psychoJS.experiment.addData('Airplane_mouse_y', xys[1]);
    psychoJS.experiment.addData('Airplane_mouse_leftButton', buttons[0]);
    psychoJS.experiment.addData('Airplane_mouse_midButton', buttons[1]);
    psychoJS.experiment.addData('Airplane_mouse_rightButton', buttons[2]);
    // the Routine "Airplane" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
    
    var end = new Date();
    console.log(end);  
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
