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
let expInfo = {'age': '', 'gender (m/f)': '', 'worker_ID': ''};

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
flowScheduler.add(AirplaneRoutineBegin());
flowScheduler.add(AirplaneRoutineEachFrame());
flowScheduler.add(AirplaneRoutineEnd());
flowScheduler.add(BoatRoutineBegin());
flowScheduler.add(BoatRoutineEachFrame());
flowScheduler.add(BoatRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(CowRoutineBegin());
flowScheduler.add(CowRoutineEachFrame());
flowScheduler.add(CowRoutineEnd());
flowScheduler.add(GardenRoutineBegin());
flowScheduler.add(GardenRoutineEachFrame());
flowScheduler.add(GardenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
//dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
{ name: 'Mturk_consent_revised_single_page.png', path: './resources/Mturk_consent_revised_single_page.png' },
{ name: 'example_color-a_w_outline.jpg', path: './resources/example_color-a_w_outline.jpg' },
{ name: 'example_color-b_w_outline.jpg', path: './resources/example_color-b_w_outline.jpg' },
{ name: 'example_disappear-a_w_outline.jpg', path: './resources/example_disappear-a_w_outline.jpg' },
{ name: 'example_disappear-b_w_outline.jpg', path: './resources/example_disappear-b_w_outline.jpg' },
{ name: 'rating.jpg', path: './resources/rating.jpg' },
{ name: 'catchAirplane-a_w_outline.jpg', path: './resources/catchAirplane-a_w_outline.jpg' },
{ name: 'catchAirplane-b_w_outline.jpg', path: './resources/catchAirplane-b_w_outline.jpg' },
{ name: 'catchBoat-a_w_outline.jpg', path: './resources/catchBoat-a_w_outline.jpg' },
{ name: 'catchBoat-b_w_outline.jpg', path: './resources/catchBoat-b_w_outline.jpg' },
{ name: 'catchCow-a_w_outline.jpg', path: './resources/catchCow-a_w_outline.jpg' },
{ name: 'catchCow-b_w_outline.jpg', path: './resources/catchCow-b_w_outline.jpg' },
{ name: 'catchGarden-a_w_outline.jpg', path: './resources/catchGarden-a_w_outline.jpg' },
{ name: 'catchGarden-b_w_outline.jpg', path: './resources/catchGarden-b_w_outline.jpg' },
{ name: 'A03172343NB8PHOPICC1_trial_list.csv', path: './resources/A03172343NB8PHOPICC1_trial_list.csv' },
{ name: 'A10AVWALIHR4UQ_trial_list.csv', path: './resources/A10AVWALIHR4UQ_trial_list.csv' },
{ name: 'A120URYFNZAZYW_trial_list.csv', path: './resources/A120URYFNZAZYW_trial_list.csv' },
{ name: 'A125AOX978LDG7_trial_list.csv', path: './resources/A125AOX978LDG7_trial_list.csv' },
{ name: 'A15SJZQBR8I3B3_trial_list.csv', path: './resources/A15SJZQBR8I3B3_trial_list.csv' },
{ name: 'A15T9HDPHV3X7Q_trial_list.csv', path: './resources/A15T9HDPHV3X7Q_trial_list.csv' },
{ name: 'A1969Q0R4Y0E3J_trial_list.csv', path: './resources/A1969Q0R4Y0E3J_trial_list.csv' },
{ name: 'A1BIJGB7XA0GME_trial_list.csv', path: './resources/A1BIJGB7XA0GME_trial_list.csv' },
{ name: 'A1BWS5AD2T4NIR_trial_list.csv', path: './resources/A1BWS5AD2T4NIR_trial_list.csv' },
{ name: 'A1CINWYLYY8SGL_trial_list.csv', path: './resources/A1CINWYLYY8SGL_trial_list.csv' },
{ name: 'A1CUDX7TTS2W61_trial_list.csv', path: './resources/A1CUDX7TTS2W61_trial_list.csv' },
{ name: 'A1CX684F5TEO5W_trial_list.csv', path: './resources/A1CX684F5TEO5W_trial_list.csv' },
{ name: 'A1F669OTXWIJW0_trial_list.csv', path: './resources/A1F669OTXWIJW0_trial_list.csv' },
{ name: 'A1FKRZKU1H9YFC_trial_list.csv', path: './resources/A1FKRZKU1H9YFC_trial_list.csv' },
{ name: 'A1H2UHJ78F185L_trial_list.csv', path: './resources/A1H2UHJ78F185L_trial_list.csv' },
{ name: 'A1HAOXJVRYT43K_trial_list.csv', path: './resources/A1HAOXJVRYT43K_trial_list.csv' },
{ name: 'A1HFPDHBLO6KZW_trial_list.csv', path: './resources/A1HFPDHBLO6KZW_trial_list.csv' },
{ name: 'A1IZUMK7R8O98N_trial_list.csv', path: './resources/A1IZUMK7R8O98N_trial_list.csv' },
{ name: 'A1J1PWS99LFVPL_trial_list.csv', path: './resources/A1J1PWS99LFVPL_trial_list.csv' },
{ name: 'A1K61OKMPRZUML_trial_list.csv', path: './resources/A1K61OKMPRZUML_trial_list.csv' },
{ name: 'A1KS9LITOVPAT8_trial_list.csv', path: './resources/A1KS9LITOVPAT8_trial_list.csv' },
{ name: 'A1OM5NWYYYJKQW_trial_list.csv', path: './resources/A1OM5NWYYYJKQW_trial_list.csv' },
{ name: 'A1ONTPD4RQHVYK_trial_list.csv', path: './resources/A1ONTPD4RQHVYK_trial_list.csv' },
{ name: 'A1Q27X84KILQHI_trial_list.csv', path: './resources/A1Q27X84KILQHI_trial_list.csv' },
{ name: 'A1QKIA8XRNEXIG_trial_list.csv', path: './resources/A1QKIA8XRNEXIG_trial_list.csv' },
{ name: 'A1RKGN3VY39TM1_trial_list.csv', path: './resources/A1RKGN3VY39TM1_trial_list.csv' },
{ name: 'A1SRJKD5QTAOM_trial_list.csv', path: './resources/A1SRJKD5QTAOM_trial_list.csv' },
{ name: 'A1T2598R44X648_trial_list.csv', path: './resources/A1T2598R44X648_trial_list.csv' },
{ name: 'A1T7EB1WEDCMXV_trial_list.csv', path: './resources/A1T7EB1WEDCMXV_trial_list.csv' },
{ name: 'A1YSO7FP15WS4H_trial_list.csv', path: './resources/A1YSO7FP15WS4H_trial_list.csv' },
{ name: 'A1ZVC2VT88SYEP_trial_list.csv', path: './resources/A1ZVC2VT88SYEP_trial_list.csv' },
{ name: 'A21SIPO89DP66I_trial_list.csv', path: './resources/A21SIPO89DP66I_trial_list.csv' },
{ name: 'A25D8MUZP7CQEY_trial_list.csv', path: './resources/A25D8MUZP7CQEY_trial_list.csv' },
{ name: 'A25PQTWHOMESAT_trial_list.csv', path: './resources/A25PQTWHOMESAT_trial_list.csv' },
{ name: 'A2615YW1YERQBO_trial_list.csv', path: './resources/A2615YW1YERQBO_trial_list.csv' },
{ name: 'A282NN2RO8XZP6_trial_list.csv', path: './resources/A282NN2RO8XZP6_trial_list.csv' },
{ name: 'A29SJZ0IEOHGMB_trial_list.csv', path: './resources/A29SJZ0IEOHGMB_trial_list.csv' },
{ name: 'A2A4Q3XU50SBE2_trial_list.csv', path: './resources/A2A4Q3XU50SBE2_trial_list.csv' },
{ name: 'A2A5HAPJD18TRU_trial_list.csv', path: './resources/A2A5HAPJD18TRU_trial_list.csv' },
{ name: 'A2B1DJ4FDYW2GP_trial_list.csv', path: './resources/A2B1DJ4FDYW2GP_trial_list.csv' },
{ name: 'A2CK0OXMPOR9LE_trial_list.csv', path: './resources/A2CK0OXMPOR9LE_trial_list.csv' },
{ name: 'A2HHWFGVV9UUC5_trial_list.csv', path: './resources/A2HHWFGVV9UUC5_trial_list.csv' },
{ name: 'A2IP3ZAFYGV8M9_trial_list.csv', path: './resources/A2IP3ZAFYGV8M9_trial_list.csv' },
{ name: 'A2J6MMNWUJQUXS_trial_list.csv', path: './resources/A2J6MMNWUJQUXS_trial_list.csv' },
{ name: 'A2LPP288NK76W4_trial_list.csv', path: './resources/A2LPP288NK76W4_trial_list.csv' },
{ name: 'A2N2GFB33ZMYGF_trial_list.csv', path: './resources/A2N2GFB33ZMYGF_trial_list.csv' },
{ name: 'A2N8JRW0CLL9G3_trial_list.csv', path: './resources/A2N8JRW0CLL9G3_trial_list.csv' },
{ name: 'A2RNCA7PK35LHT_trial_list.csv', path: './resources/A2RNCA7PK35LHT_trial_list.csv' },
{ name: 'A2RVEG53L48BAE_trial_list.csv', path: './resources/A2RVEG53L48BAE_trial_list.csv' },
{ name: 'A2TA4W441CNS5H_trial_list.csv', path: './resources/A2TA4W441CNS5H_trial_list.csv' },
{ name: 'A2TZAXWOB3JMNV_trial_list.csv', path: './resources/A2TZAXWOB3JMNV_trial_list.csv' },
{ name: 'A2UETT92P31OCW_trial_list.csv', path: './resources/A2UETT92P31OCW_trial_list.csv' },
{ name: 'A2V7M4R4Z9X4KZ_trial_list.csv', path: './resources/A2V7M4R4Z9X4KZ_trial_list.csv' },
{ name: 'A2WGW5Y3ZFBDEC_trial_list.csv', path: './resources/A2WGW5Y3ZFBDEC_trial_list.csv' },
{ name: 'A2WY6HLF2YLSOF_trial_list.csv', path: './resources/A2WY6HLF2YLSOF_trial_list.csv' },
{ name: 'A2XKVWHXJV0HWZ_trial_list.csv', path: './resources/A2XKVWHXJV0HWZ_trial_list.csv' },
{ name: 'A30GJ0HHLO16E8_trial_list.csv', path: './resources/A30GJ0HHLO16E8_trial_list.csv' },
{ name: 'A31Z13BGZDNRN9_trial_list.csv', path: './resources/A31Z13BGZDNRN9_trial_list.csv' },
{ name: 'A35XALC5D5D800_trial_list.csv', path: './resources/A35XALC5D5D800_trial_list.csv' },
{ name: 'A36JFN95KS3YKO_trial_list.csv', path: './resources/A36JFN95KS3YKO_trial_list.csv' },
{ name: 'A372725XPFZ48Q_trial_list.csv', path: './resources/A372725XPFZ48Q_trial_list.csv' },
{ name: 'A37EV8RZ82WT8E_trial_list.csv', path: './resources/A37EV8RZ82WT8E_trial_list.csv' },
{ name: 'A37XBH865833FE_trial_list.csv', path: './resources/A37XBH865833FE_trial_list.csv' },
{ name: 'A3CGQOJC28OVGN_trial_list.csv', path: './resources/A3CGQOJC28OVGN_trial_list.csv' },
{ name: 'A3D6VDP1APQF3D_trial_list.csv', path: './resources/A3D6VDP1APQF3D_trial_list.csv' },
{ name: 'A3DYPDGX5U3OJZ_trial_list.csv', path: './resources/A3DYPDGX5U3OJZ_trial_list.csv' },
{ name: 'A3E6HPXTP1ZCV6_trial_list.csv', path: './resources/A3E6HPXTP1ZCV6_trial_list.csv' },
{ name: 'A3EDGV5ERV8G9O_trial_list.csv', path: './resources/A3EDGV5ERV8G9O_trial_list.csv' },
{ name: 'A3F4MYZFB2UH50_trial_list.csv', path: './resources/A3F4MYZFB2UH50_trial_list.csv' },
{ name: 'A3FKEMHRTXPWMN_trial_list.csv', path: './resources/A3FKEMHRTXPWMN_trial_list.csv' },
{ name: 'A3HW4QDJB63OQ2_trial_list.csv', path: './resources/A3HW4QDJB63OQ2_trial_list.csv' },
{ name: 'A3HZFB2JLF3JMY_trial_list.csv', path: './resources/A3HZFB2JLF3JMY_trial_list.csv' },
{ name: 'A3I9XLIHPPWPN1_trial_list.csv', path: './resources/A3I9XLIHPPWPN1_trial_list.csv' },
{ name: 'A3K0E7TSPX25GH_trial_list.csv', path: './resources/A3K0E7TSPX25GH_trial_list.csv' },
{ name: 'A3LT7W355XOAKF_trial_list.csv', path: './resources/A3LT7W355XOAKF_trial_list.csv' },
{ name: 'A3MF31JQ350ABS_trial_list.csv', path: './resources/A3MF31JQ350ABS_trial_list.csv' },
{ name: 'A3NBLSA78ZXDNP_trial_list.csv', path: './resources/A3NBLSA78ZXDNP_trial_list.csv' },
{ name: 'A3PGUPNMOU5BPW_trial_list.csv', path: './resources/A3PGUPNMOU5BPW_trial_list.csv' },
{ name: 'A3QCK28LCPAAVE_trial_list.csv', path: './resources/A3QCK28LCPAAVE_trial_list.csv' },
{ name: 'A3RQR6LM6CHOMQ_trial_list.csv', path: './resources/A3RQR6LM6CHOMQ_trial_list.csv' },
{ name: 'A3UIDRGBV9NJWR_trial_list.csv', path: './resources/A3UIDRGBV9NJWR_trial_list.csv' },
{ name: 'A3UN1F1EOHKKE6_trial_list.csv', path: './resources/A3UN1F1EOHKKE6_trial_list.csv' },
{ name: 'A3URLNXHLP4ARU_trial_list.csv', path: './resources/A3URLNXHLP4ARU_trial_list.csv' },
{ name: 'A4158R4Y06ZB4_trial_list.csv', path: './resources/A4158R4Y06ZB4_trial_list.csv' },
{ name: 'A4SC8G0149GEG_trial_list.csv', path: './resources/A4SC8G0149GEG_trial_list.csv' },
{ name: 'A51U5BEIC5XVR_trial_list.csv', path: './resources/A51U5BEIC5XVR_trial_list.csv' },
{ name: 'A6MWJK1YEY5L2_trial_list.csv', path: './resources/A6MWJK1YEY5L2_trial_list.csv' },
{ name: 'A7OZPNXIVO1FX_trial_list.csv', path: './resources/A7OZPNXIVO1FX_trial_list.csv' },
{ name: 'A7QWTM8YJQZ23_trial_list.csv', path: './resources/A7QWTM8YJQZ23_trial_list.csv' },
{ name: 'A82Q1HS5CPZ5I_trial_list.csv', path: './resources/A82Q1HS5CPZ5I_trial_list.csv' },
{ name: 'A8TIL9U6YHG5_trial_list.csv', path: './resources/A8TIL9U6YHG5_trial_list.csv' },
{ name: 'A8UY8LQZCVL7K_trial_list.csv', path: './resources/A8UY8LQZCVL7K_trial_list.csv' },
{ name: 'A9WIOFVRSYW3L_trial_list.csv', path: './resources/A9WIOFVRSYW3L_trial_list.csv' },
{ name: 'AB3WEJ5B8U155_trial_list.csv', path: './resources/AB3WEJ5B8U155_trial_list.csv' },
{ name: 'ABEU56A0TRZ7S_trial_list.csv', path: './resources/ABEU56A0TRZ7S_trial_list.csv' },
{ name: 'ABMH09TPJ72JW_trial_list.csv', path: './resources/ABMH09TPJ72JW_trial_list.csv' },
{ name: 'AETIZKQNUSBLB_trial_list.csv', path: './resources/AETIZKQNUSBLB_trial_list.csv' },
{ name: 'AIRR93Z1A27VF_trial_list.csv', path: './resources/AIRR93Z1A27VF_trial_list.csv' },
{ name: 'AIYVV6AYE0MUX_trial_list.csv', path: './resources/AIYVV6AYE0MUX_trial_list.csv' },
{ name: 'AJFJ6VXZJKSXD_trial_list.csv', path: './resources/AJFJ6VXZJKSXD_trial_list.csv' },
{ name: 'AM2KK02JXXW48_trial_list.csv', path: './resources/AM2KK02JXXW48_trial_list.csv' },
{ name: 'AMPMTF5IAAMK8_trial_list.csv', path: './resources/AMPMTF5IAAMK8_trial_list.csv' },
{ name: 'ANR0LIX0VLUYJ_trial_list.csv', path: './resources/ANR0LIX0VLUYJ_trial_list.csv' },
{ name: 'AR5M3HHTQV9QY_trial_list.csv', path: './resources/AR5M3HHTQV9QY_trial_list.csv' },
{ name: 'ASCTCB5BHNS43_trial_list.csv', path: './resources/ASCTCB5BHNS43_trial_list.csv' },
{ name: 'AT6LDQNLKTUSE_trial_list.csv', path: './resources/AT6LDQNLKTUSE_trial_list.csv' },
{ name: 'ATR0C90ELOATI_trial_list.csv', path: './resources/ATR0C90ELOATI_trial_list.csv' },
{ name: 'ATWH33XQ93WMF_trial_list.csv', path: './resources/ATWH33XQ93WMF_trial_list.csv' },
{ name: 'AU0KL60G7FCCK_trial_list.csv', path: './resources/AU0KL60G7FCCK_trial_list.csv' },
{ name: 'AVCOBHDVXZOZL_trial_list.csv', path: './resources/AVCOBHDVXZOZL_trial_list.csv' },
{ name: 'AWAW665TQQP2F_trial_list.csv', path: './resources/AWAW665TQQP2F_trial_list.csv' },
{ name: 'AWVLT2L5AP873_trial_list.csv', path: './resources/AWVLT2L5AP873_trial_list.csv' },
{ name: 'AYW62R027PUT1_trial_list.csv', path: './resources/AYW62R027PUT1_trial_list.csv' },
{ name: 'AZLRPIAD0ZHAA_trial_list.csv', path: './resources/AZLRPIAD0ZHAA_trial_list.csv' },
{ name: 'AZU0IKXKYEHS_trial_list.csv', path: './resources/AZU0IKXKYEHS_trial_list.csv' },
{ name: 'wolfe1_trial_list.csv', path: './resources/wolfe1_trial_list.csv' },
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
var text_2;
var key_resp_2;
var example_color_a;
var example_color_b;
var example_disappear_a;
var example_disappear_b;
var AirplaneClock;
var Airplane_resp;
var Airplane_text;
var Airplane_rating;
var Airplane_a;
var Airplane_b;
var BoatClock;
var Boat_resp;
var Boat_text;
var Boat_rating;
var Boat_a;
var Boat_b;
var trialClock;
var user_resp;
var trial_text;
var trial_count;
var Rating;
var image1;
var image2;
var CowClock;
var Cow_resp;
var Cow_text;
var Cow_rating;
var Cow_a;
var Cow_b;
var GardenClock;
var Garden_resp;
var Garden_text;
var Garden_rating;
var Garden_a;
var Garden_b;
var globalClock;
var routineTimer;
var trial_set_resourceValue;
var trial_set_workbook;
var ts_sheetName;
var ts_worksheet;
var ts_sheet;
var ts_resourceList;

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
    
    var obj = ['A03172343NB8PHOPICC1', 'A10AVWALIHR4UQ', 'A120URYFNZAZYW', 'A125AOX978LDG7', 'A15SJZQBR8I3B3', 'A15T9HDPHV3X7Q', 'A1969Q0R4Y0E3J', 'A1BIJGB7XA0GME', 'A1BWS5AD2T4NIR', 'A1CINWYLYY8SGL', 'A1CUDX7TTS2W61', 'A1CX684F5TEO5W', 'A1F669OTXWIJW0', 'A1FKRZKU1H9YFC', 'A1H2UHJ78F185L', 'A1HAOXJVRYT43K', 'A1HFPDHBLO6KZW', 'A1IZUMK7R8O98N', 'A1J1PWS99LFVPL', 'A1K61OKMPRZUML', 'A1KS9LITOVPAT8', 'A1OM5NWYYYJKQW', 'A1ONTPD4RQHVYK', 'A1Q27X84KILQHI', 'A1QKIA8XRNEXIG', 'A1RKGN3VY39TM1', 'A1SRJKD5QTAOM', 'A1T2598R44X648', 'A1T7EB1WEDCMXV', 'A1YSO7FP15WS4H', 'A1ZVC2VT88SYEP', 'A21SIPO89DP66I', 'A25D8MUZP7CQEY', 'A25PQTWHOMESAT', 'A2615YW1YERQBO', 'A282NN2RO8XZP6', 'A29SJZ0IEOHGMB', 'A2A4Q3XU50SBE2', 'A2A5HAPJD18TRU', 'A2B1DJ4FDYW2GP', 'A2CK0OXMPOR9LE', 'A2HHWFGVV9UUC5', 'A2IP3ZAFYGV8M9', 'A2J6MMNWUJQUXS', 'A2LPP288NK76W4', 'A2N2GFB33ZMYGF', 'A2N8JRW0CLL9G3', 'A2RNCA7PK35LHT', 'A2RVEG53L48BAE', 'A2TA4W441CNS5H', 'A2TZAXWOB3JMNV', 'A2UETT92P31OCW', 'A2V7M4R4Z9X4KZ', 'A2WGW5Y3ZFBDEC', 'A2WY6HLF2YLSOF', 'A2XKVWHXJV0HWZ', 'A30GJ0HHLO16E8', 'A31Z13BGZDNRN9', 'A35XALC5D5D800', 'A36JFN95KS3YKO', 'A372725XPFZ48Q', 'A37EV8RZ82WT8E', 'A37XBH865833FE', 'A3CGQOJC28OVGN', 'A3D6VDP1APQF3D', 'A3DYPDGX5U3OJZ', 'A3E6HPXTP1ZCV6', 'A3EDGV5ERV8G9O', 'A3F4MYZFB2UH50', 'A3FKEMHRTXPWMN', 'A3HW4QDJB63OQ2', 'A3HZFB2JLF3JMY', 'A3I9XLIHPPWPN1', 'A3K0E7TSPX25GH', 'A3LT7W355XOAKF', 'A3MF31JQ350ABS', 'A3NBLSA78ZXDNP', 'A3PGUPNMOU5BPW', 'A3QCK28LCPAAVE', 'A3RQR6LM6CHOMQ', 'A3UIDRGBV9NJWR', 'A3UN1F1EOHKKE6', 'A3URLNXHLP4ARU', 'A4158R4Y06ZB4', 'A4SC8G0149GEG', 'A51U5BEIC5XVR', 'A6MWJK1YEY5L2', 'A7OZPNXIVO1FX', 'A7QWTM8YJQZ23', 'A82Q1HS5CPZ5I', 'A8TIL9U6YHG5', 'A8UY8LQZCVL7K', 'A9WIOFVRSYW3L', 'AB3WEJ5B8U155', 'ABEU56A0TRZ7S', 'ABMH09TPJ72JW', 'AETIZKQNUSBLB', 'AIRR93Z1A27VF', 'AIYVV6AYE0MUX', 'AJFJ6VXZJKSXD', 'AM2KK02JXXW48', 'AMPMTF5IAAMK8', 'ANR0LIX0VLUYJ', 'AR5M3HHTQV9QY', 'ASCTCB5BHNS43', 'AT6LDQNLKTUSE', 'ATR0C90ELOATI', 'ATWH33XQ93WMF', 'AU0KL60G7FCCK', 'AVCOBHDVXZOZL', 'AWAW665TQQP2F', 'AWVLT2L5AP873', 'AYW62R027PUT1', 'AZLRPIAD0ZHAA', 'AZU0IKXKYEHS'];
    if (Object.values(obj).indexOf(expInfo['worker_ID']) > -1) {
        infile = (String(expInfo['worker_ID']) + '_trial_list.csv');
        pathway = infile;
    } else{
        pathway = 'wolfe1_trial_list.csv';
    }

  // (*) read conditions from resource:
  
  trial_set_resourceValue = psychoJS.serverManager.getResource(pathway);
  
  trial_set_workbook = XLSX.read(new Uint8Array(trial_set_resourceValue), { type: "array" });
  
  // we consider only the first worksheet:
  
  ts_sheetName = trial_set_workbook.SheetNames[0];
  
  ts_worksheet = trial_set_workbook.Sheets[ts_sheetName];
  
  // worksheet to array of arrays (the first array contains the fields):
  
  ts_sheet = XLSX.utils.sheet_to_json(ts_worksheet, { header: 1, blankrows: false });
  
  ts_resourceList =  []; //new Array(ts_sheet.length - 1);\
  
  for (var r = 1; r < ts_sheet.length; ++r) {
  
      let ts_row = ts_sheet[r];
  
      // Add stim video resource
      ts_resourceList.push({
            name: ts_row[2],
            path: "./resources/" + ts_row[2]
          });
  
      // Add final frame resource
      ts_resourceList.push({
            name: ts_row[3],
            path: "./resources/" + ts_row[3]
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
    text: 'Welcome to the experiment! \n\nIn this task, we are asking you to think about your ability to spot a change between a pair of pictures. \n\nFor each pair of pictures, the change will be outlined with a yellow box. \n\nFor example, on the left, the color of the hot air ballon is different. \nOn the right, the mug that is spilling water is missing its handle.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nYour task is to rate how likely you are to spot the change using a scale of 1 to 5. \n\nPress 1 if you think you are very unlikely to spot the change. \nPress 5 if you think you are very likely to spot the change. \nAny whole number between 1 and 5 can be used. \n\nThere is no benefit for responding quickly. Please take enough time to think about your ability to detect each change. \n\n\nPress the spacebar to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 500, ori: 0,
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
  example_color_a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'example_color_a', units : 'pix', 
    image : 'example_color-a_w_outline.jpg', mask : undefined,
    ori : 0, pos : [-475, 30], size : [224.5, 250],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  example_color_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'example_color_b', units : 'pix', 
    image : 'example_color-b_w_outline.jpg', mask : undefined,
    ori : 0, pos : [-225, 30], size : [224.5, 250],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  example_disappear_a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'example_disappear_a', units : 'pix', 
    image : 'example_disappear-a_w_outline.jpg', mask : undefined,
    ori : 0, pos : [500, 30], size : [309, 200],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  example_disappear_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'example_disappear_b', units : 'pix', 
    image : 'example_disappear-b_w_outline.jpg', mask : undefined,
    ori : 0, pos : [165.5, 30], size : [309, 200],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
    // Initialize components for Routine "Airplane"
  AirplaneClock = new util.Clock();
  Airplane_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Airplane_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Airplane_text',
    text: 'How likely are you to spot this change?',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  Airplane_rating = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Rating', units : 'pix', 
    image : 'rating.jpg', mask : undefined,
    ori : 0, pos : [0, -300], size : [750, 151],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
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
  // Initialize components for Routine "Boat"
  BoatClock = new util.Clock();
  Boat_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Boat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Boat_text',
    text: 'How likely are you to spot this change?',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  Boat_rating = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Boat_rating', units : 'pix', 
    image : 'rating.jpg', mask : undefined,
    ori : 0, pos : [0, -300], size : [750, 151],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
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
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  user_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  trial_count = 0;
    
  trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_text',
    text: 'How likely are you to spot this change?',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  Rating = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Rating', units : 'pix', 
    image : 'rating.jpg', mask : undefined,
    ori : 0, pos : [0, -300], size : [750, 151],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [-300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [300, 150], size : [500, 357],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
// Initialize components for Routine "Cow"
  CowClock = new util.Clock();
  Cow_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Cow_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Cow_text',
    text: 'How likely are you to spot this change?',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  Cow_rating = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Cow_rating', units : 'pix', 
    image : 'rating.jpg', mask : undefined,
    ori : 0, pos : [0, -300], size : [750, 151],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
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
// Initialize components for Routine "Garden"
  GardenClock = new util.Clock();
  Garden_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Garden_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Garden_text',
    text: 'How likely are you to spot this change?',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.15], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  Garden_rating = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Garden_rating', units : 'pix', 
    image : 'rating.jpg', mask : undefined,
    ori : 0, pos : [0, -300], size : [750, 151],
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
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
    psychoJS.downloadResources(ts_resourceList);
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

    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (OpeningText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      OpeningText.setAutoDraw(false);
    }

      
    //continueRoutine = window.checkProgress();
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
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
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
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
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(text);
    InstructionsComponents.push(text_2);
    InstructionsComponents.push(key_resp_2);
    InstructionsComponents.push(example_color_a);
    InstructionsComponents.push(example_color_b);
    InstructionsComponents.push(example_disappear_a);
    InstructionsComponents.push(example_disappear_b);
    
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

    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    // *example_color_a* updates
    if (t >= 0.0 && example_color_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      example_color_a.tStart = t;  // (not accounting for frame time here)
      example_color_a.frameNStart = frameN;  // exact frame index
      
      example_color_a.setAutoDraw(true);
    }
    
    // *example_color_b* updates
    if (t >= 0.0 && example_color_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      example_color_b.tStart = t;  // (not accounting for frame time here)
      example_color_b.frameNStart = frameN;  // exact frame index
      
      example_color_b.setAutoDraw(true);
    }
    
    // *example_disappear_a* updates
    if (t >= 0.0 && example_disappear_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      example_disappear_a.tStart = t;  // (not accounting for frame time here)
      example_disappear_a.frameNStart = frameN;  // exact frame index
      
      example_disappear_a.setAutoDraw(true);
    }
    
    // *example_disappear_b* updates
    if (t >= 0.0 && example_disappear_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      example_disappear_b.tStart = t;  // (not accounting for frame time here)
      example_disappear_b.frameNStart = frameN;  // exact frame index
      
      example_disappear_b.setAutoDraw(true);
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
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
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
    // keep track of which components have finished
    AirplaneComponents = [];
    AirplaneComponents.push(Airplane_resp);
    AirplaneComponents.push(Airplane_text);
    AirplaneComponents.push(Airplane_rating);
    AirplaneComponents.push(Airplane_a);
    AirplaneComponents.push(Airplane_b);
    
    for (const thisComponent of AirplaneComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function AirplaneRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Airplane'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = AirplaneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Airplane_resp* updates
    if (t >= 1 && Airplane_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_resp.tStart = t;  // (not accounting for frame time here)
      Airplane_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Airplane_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Airplane_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Airplane_resp.clearEvents(); });
    }

    if (Airplane_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Airplane_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _Airplane_resp_allKeys = _Airplane_resp_allKeys.concat(theseKeys);
      if (_Airplane_resp_allKeys.length > 0) {
        Airplane_resp.keys = _Airplane_resp_allKeys[_Airplane_resp_allKeys.length - 1].name;  // just the last key pressed
        Airplane_resp.rt = _Airplane_resp_allKeys[_Airplane_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Airplane_text* updates
    if (t >= 1 && Airplane_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_text.tStart = t;  // (not accounting for frame time here)
      Airplane_text.frameNStart = frameN;  // exact frame index
      
      Airplane_text.setAutoDraw(true);
    }

    
    // *Airplane_rating* updates
    if (t >= 1 && Airplane_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Airplane_rating.tStart = t;  // (not accounting for frame time here)
      Airplane_rating.frameNStart = frameN;  // exact frame index
      
      Airplane_rating.setAutoDraw(true);
    }

    
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
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
    psychoJS.experiment.addData('Airplane_resp.keys', Airplane_resp.keys);
    if (typeof Airplane_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Airplane_resp.rt', Airplane_resp.rt);
        routineTimer.reset();
        }
    
    Airplane_resp.stop();
    // the Routine "Airplane" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Boat_resp_allKeys;
var BoatComponents;
function BoatRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Boat'-------
    t = 0;
    BoatClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Boat_resp.keys = undefined;
    Boat_resp.rt = undefined;
    _Boat_resp_allKeys = [];
    // keep track of which components have finished
    BoatComponents = [];
    BoatComponents.push(Boat_resp);
    BoatComponents.push(Boat_text);
    BoatComponents.push(Boat_rating);
    BoatComponents.push(Boat_a);
    BoatComponents.push(Boat_b);
    
    for (const thisComponent of BoatComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function BoatRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Boat'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = BoatClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Boat_resp* updates
    if (t >= 1 && Boat_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Boat_resp.tStart = t;  // (not accounting for frame time here)
      Boat_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Boat_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Boat_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Boat_resp.clearEvents(); });
    }

    if (Boat_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Boat_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _Boat_resp_allKeys = _Boat_resp_allKeys.concat(theseKeys);
      if (_Boat_resp_allKeys.length > 0) {
        Boat_resp.keys = _Boat_resp_allKeys[_Boat_resp_allKeys.length - 1].name;  // just the last key pressed
        Boat_resp.rt = _Boat_resp_allKeys[_Boat_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Boat_text* updates
    if (t >= 1 && Boat_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Boat_text.tStart = t;  // (not accounting for frame time here)
      Boat_text.frameNStart = frameN;  // exact frame index
      
      Boat_text.setAutoDraw(true);
    }

    
    // *Boat_rating* updates
    if (t >= 1 && Boat_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Boat_rating.tStart = t;  // (not accounting for frame time here)
      Boat_rating.frameNStart = frameN;  // exact frame index
      
      Boat_rating.setAutoDraw(true);
    }

    
    // *Boat_a* updates
    if (t >= 1 && Boat_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Boat_a.tStart = t;  // (not accounting for frame time here)
      Boat_a.frameNStart = frameN;  // exact frame index
      
      Boat_a.setAutoDraw(true);
    }

    
    // *Boat_b* updates
    if (t >= 1 && Boat_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Boat_b.tStart = t;  // (not accounting for frame time here)
      Boat_b.frameNStart = frameN;  // exact frame index
      
      Boat_b.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BoatComponents)
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


function BoatRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Boat'-------
    for (const thisComponent of BoatComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Boat_resp.keys', Boat_resp.keys);
    if (typeof Boat_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Boat_resp.rt', Boat_resp.rt);
        routineTimer.reset();
        }
    
    Boat_resp.stop();
    // the Routine "Boat" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var trials;
var currentLoop;
var infile;
var pathway;
function trialsLoopBegin(thisScheduler) {
    
    var obj = ['A03172343NB8PHOPICC1', 'A10AVWALIHR4UQ', 'A120URYFNZAZYW', 'A125AOX978LDG7', 'A15SJZQBR8I3B3', 'A15T9HDPHV3X7Q', 'A1969Q0R4Y0E3J', 'A1BIJGB7XA0GME', 'A1BWS5AD2T4NIR', 'A1CINWYLYY8SGL', 'A1CUDX7TTS2W61', 'A1CX684F5TEO5W', 'A1F669OTXWIJW0', 'A1FKRZKU1H9YFC', 'A1H2UHJ78F185L', 'A1HAOXJVRYT43K', 'A1HFPDHBLO6KZW', 'A1IZUMK7R8O98N', 'A1J1PWS99LFVPL', 'A1K61OKMPRZUML', 'A1KS9LITOVPAT8', 'A1OM5NWYYYJKQW', 'A1ONTPD4RQHVYK', 'A1Q27X84KILQHI', 'A1QKIA8XRNEXIG', 'A1RKGN3VY39TM1', 'A1SRJKD5QTAOM', 'A1T2598R44X648', 'A1T7EB1WEDCMXV', 'A1YSO7FP15WS4H', 'A1ZVC2VT88SYEP', 'A21SIPO89DP66I', 'A25D8MUZP7CQEY', 'A25PQTWHOMESAT', 'A2615YW1YERQBO', 'A282NN2RO8XZP6', 'A29SJZ0IEOHGMB', 'A2A4Q3XU50SBE2', 'A2A5HAPJD18TRU', 'A2B1DJ4FDYW2GP', 'A2CK0OXMPOR9LE', 'A2HHWFGVV9UUC5', 'A2IP3ZAFYGV8M9', 'A2J6MMNWUJQUXS', 'A2LPP288NK76W4', 'A2N2GFB33ZMYGF', 'A2N8JRW0CLL9G3', 'A2RNCA7PK35LHT', 'A2RVEG53L48BAE', 'A2TA4W441CNS5H', 'A2TZAXWOB3JMNV', 'A2UETT92P31OCW', 'A2V7M4R4Z9X4KZ', 'A2WGW5Y3ZFBDEC', 'A2WY6HLF2YLSOF', 'A2XKVWHXJV0HWZ', 'A30GJ0HHLO16E8', 'A31Z13BGZDNRN9', 'A35XALC5D5D800', 'A36JFN95KS3YKO', 'A372725XPFZ48Q', 'A37EV8RZ82WT8E', 'A37XBH865833FE', 'A3CGQOJC28OVGN', 'A3D6VDP1APQF3D', 'A3DYPDGX5U3OJZ', 'A3E6HPXTP1ZCV6', 'A3EDGV5ERV8G9O', 'A3F4MYZFB2UH50', 'A3FKEMHRTXPWMN', 'A3HW4QDJB63OQ2', 'A3HZFB2JLF3JMY', 'A3I9XLIHPPWPN1', 'A3K0E7TSPX25GH', 'A3LT7W355XOAKF', 'A3MF31JQ350ABS', 'A3NBLSA78ZXDNP', 'A3PGUPNMOU5BPW', 'A3QCK28LCPAAVE', 'A3RQR6LM6CHOMQ', 'A3UIDRGBV9NJWR', 'A3UN1F1EOHKKE6', 'A3URLNXHLP4ARU', 'A4158R4Y06ZB4', 'A4SC8G0149GEG', 'A51U5BEIC5XVR', 'A6MWJK1YEY5L2', 'A7OZPNXIVO1FX', 'A7QWTM8YJQZ23', 'A82Q1HS5CPZ5I', 'A8TIL9U6YHG5', 'A8UY8LQZCVL7K', 'A9WIOFVRSYW3L', 'AB3WEJ5B8U155', 'ABEU56A0TRZ7S', 'ABMH09TPJ72JW', 'AETIZKQNUSBLB', 'AIRR93Z1A27VF', 'AIYVV6AYE0MUX', 'AJFJ6VXZJKSXD', 'AM2KK02JXXW48', 'AMPMTF5IAAMK8', 'ANR0LIX0VLUYJ', 'AR5M3HHTQV9QY', 'ASCTCB5BHNS43', 'AT6LDQNLKTUSE', 'ATR0C90ELOATI', 'ATWH33XQ93WMF', 'AU0KL60G7FCCK', 'AVCOBHDVXZOZL', 'AWAW665TQQP2F', 'AWVLT2L5AP873', 'AYW62R027PUT1', 'AZLRPIAD0ZHAA', 'AZU0IKXKYEHS'];
    if (Object.values(obj).indexOf(expInfo['worker_ID']) > -1) {
        infile = (String(expInfo['worker_ID']) + '_trial_list.csv');
        pathway = infile;
    } else{
        pathway = 'wolfe1_trial_list.csv';
    }
    
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    //trialList: (String(expInfo["worker_ID"]) + '_trial_list.csv'),
    trialList: pathway,
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
    image1.setImage(image_a);
    image2.setImage(image_b);
    user_resp.keys = undefined;
    user_resp.rt = undefined;
    _user_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(user_resp);
    trialComponents.push(trial_text);
    trialComponents.push(Rating);
    trialComponents.push(image1);
    trialComponents.push(image2);
    
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
      let theseKeys = user_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _user_resp_allKeys = _user_resp_allKeys.concat(theseKeys);
      if (_user_resp_allKeys.length > 0) {
        user_resp.keys = _user_resp_allKeys[_user_resp_allKeys.length - 1].name;  // just the last key pressed
        user_resp.rt = _user_resp_allKeys[_user_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trial_text* updates
    if (t >= 1.0 && trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text.tStart = t;  // (not accounting for frame time here)
      trial_text.frameNStart = frameN;  // exact frame index
      
      trial_text.setAutoDraw(true);
    }

    
    // *Rating* updates
    if (t >= 1.0 && Rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rating.tStart = t;  // (not accounting for frame time here)
      Rating.frameNStart = frameN;  // exact frame index
      
      Rating.setAutoDraw(true);
    }

    
    // *image1* updates
    if (t >= 1.0 && image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image1.tStart = t;  // (not accounting for frame time here)
      image1.frameNStart = frameN;  // exact frame index
      
      image1.setAutoDraw(true);
    }

    
    if (image1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image1.setImage(image_a);
    }
    
    // *image2* updates
    if (t >= 1.0 && image2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image2.tStart = t;  // (not accounting for frame time here)
      image2.frameNStart = frameN;  // exact frame index
      
      image2.setAutoDraw(true);
    }

    
    if (image2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image2.setImage(image_b);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
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
    // keep track of which components have finished
    CowComponents = [];
    CowComponents.push(Cow_resp);
    CowComponents.push(Cow_text);
    CowComponents.push(Cow_rating);
    CowComponents.push(Cow_a);
    CowComponents.push(Cow_b);
    
    for (const thisComponent of CowComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function CowRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Cow'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CowClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Cow_resp* updates
    if (t >= 1 && Cow_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_resp.tStart = t;  // (not accounting for frame time here)
      Cow_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Cow_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Cow_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Cow_resp.clearEvents(); });
    }

    if (Cow_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Cow_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _Cow_resp_allKeys = _Cow_resp_allKeys.concat(theseKeys);
      if (_Cow_resp_allKeys.length > 0) {
        Cow_resp.keys = _Cow_resp_allKeys[_Cow_resp_allKeys.length - 1].name;  // just the last key pressed
        Cow_resp.rt = _Cow_resp_allKeys[_Cow_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Cow_text* updates
    if (t >= 1 && Cow_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_text.tStart = t;  // (not accounting for frame time here)
      Cow_text.frameNStart = frameN;  // exact frame index
      
      Cow_text.setAutoDraw(true);
    }

    
    // *Cow_rating* updates
    if (t >= 1 && Cow_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cow_rating.tStart = t;  // (not accounting for frame time here)
      Cow_rating.frameNStart = frameN;  // exact frame index
      
      Cow_rating.setAutoDraw(true);
    }

    
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

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
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
    psychoJS.experiment.addData('Cow_resp.keys', Cow_resp.keys);
    if (typeof Cow_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Cow_resp.rt', Cow_resp.rt);
        routineTimer.reset();
        }
    
    Cow_resp.stop();
    // the Routine "Cow" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _Garden_resp_allKeys;
var GardenComponents;
function GardenRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Garden'-------
    t = 0;
    GardenClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Garden_resp.keys = undefined;
    Garden_resp.rt = undefined;
    _Garden_resp_allKeys = [];
    // keep track of which components have finished
    GardenComponents = [];
    GardenComponents.push(Garden_resp);
    GardenComponents.push(Garden_text);
    GardenComponents.push(Garden_rating);
    GardenComponents.push(Garden_a);
    GardenComponents.push(Garden_b);
    
    for (const thisComponent of GardenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function GardenRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Garden'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = GardenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Garden_resp* updates
    if (t >= 1 && Garden_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Garden_resp.tStart = t;  // (not accounting for frame time here)
      Garden_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Garden_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Garden_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Garden_resp.clearEvents(); });
    }

    if (Garden_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Garden_resp.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _Garden_resp_allKeys = _Garden_resp_allKeys.concat(theseKeys);
      if (_Garden_resp_allKeys.length > 0) {
        Garden_resp.keys = _Garden_resp_allKeys[_Garden_resp_allKeys.length - 1].name;  // just the last key pressed
        Garden_resp.rt = _Garden_resp_allKeys[_Garden_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Garden_text* updates
    if (t >= 1 && Garden_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Garden_text.tStart = t;  // (not accounting for frame time here)
      Garden_text.frameNStart = frameN;  // exact frame index
      
      Garden_text.setAutoDraw(true);
    }

    
    // *Garden_rating* updates
    if (t >= 1 && Garden_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Garden_rating.tStart = t;  // (not accounting for frame time here)
      Garden_rating.frameNStart = frameN;  // exact frame index
      
      Garden_rating.setAutoDraw(true);
    }

    
    // *Garden_a* updates
    if (t >= 1 && Garden_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Garden_a.tStart = t;  // (not accounting for frame time here)
      Garden_a.frameNStart = frameN;  // exact frame index
      
      Garden_a.setAutoDraw(true);
    }

    
    // *Garden_b* updates
    if (t >= 1 && Garden_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Garden_b.tStart = t;  // (not accounting for frame time here)
      Garden_b.frameNStart = frameN;  // exact frame index
      
      Garden_b.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GardenComponents)
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


function GardenRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Garden'-------
    for (const thisComponent of GardenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Garden_resp.keys', Garden_resp.keys);
    if (typeof Garden_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Garden_resp.rt', Garden_resp.rt);
        routineTimer.reset();
        }
    
    Garden_resp.stop();
    // the Routine "Garden" was not non-slip safe, so reset the non-slip timer
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
