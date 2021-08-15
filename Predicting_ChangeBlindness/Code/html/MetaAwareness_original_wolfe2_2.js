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
//{ name: 'A10Z4QVBJIA914_trial_list.csv', path: './resources/A10Z4QVBJIA914_trial_list.csv' },
//{ name: 'A10ZW7G8U02Y78_trial_list.csv', path: './resources/A10ZW7G8U02Y78_trial_list.csv' },
//{ name: 'A110KENBXU7SUJ_trial_list.csv', path: './resources/A110KENBXU7SUJ_trial_list.csv' },
//{ name: 'A11MCPY8W4U6FL_trial_list.csv', path: './resources/A11MCPY8W4U6FL_trial_list.csv' },
//{ name: 'A11PIARI7WALAX_trial_list.csv', path: './resources/A11PIARI7WALAX_trial_list.csv' },
//{ name: 'A11W55U13HODN1_trial_list.csv', path: './resources/A11W55U13HODN1_trial_list.csv' },
//{ name: 'A1251G78LIS2M3_trial_list.csv', path: './resources/A1251G78LIS2M3_trial_list.csv' },
//{ name: 'A12O9P1OTMJOPW_trial_list.csv', path: './resources/A12O9P1OTMJOPW_trial_list.csv' },
//{ name: 'A145Z2L40FAB8J_trial_list.csv', path: './resources/A145Z2L40FAB8J_trial_list.csv' },
//{ name: 'A14EYTLSMJRPUK_trial_list.csv', path: './resources/A14EYTLSMJRPUK_trial_list.csv' },
//{ name: 'A14WLAP6TCEKO0_trial_list.csv', path: './resources/A14WLAP6TCEKO0_trial_list.csv' },
//{ name: 'A1522U5W2U1DMN_trial_list.csv', path: './resources/A1522U5W2U1DMN_trial_list.csv' },
//{ name: 'A15GLNTVDPCXUQ_trial_list.csv', path: './resources/A15GLNTVDPCXUQ_trial_list.csv' },
//{ name: 'A173A97OFDAX9F_trial_list.csv', path: './resources/A173A97OFDAX9F_trial_list.csv' },
//{ name: 'A17LF7GCAFYMSL_trial_list.csv', path: './resources/A17LF7GCAFYMSL_trial_list.csv' },
//{ name: 'A17M8NL5LMUB8S_trial_list.csv', path: './resources/A17M8NL5LMUB8S_trial_list.csv' },
//{ name: 'A18MHXGNZMORFP_trial_list.csv', path: './resources/A18MHXGNZMORFP_trial_list.csv' },
//{ name: 'A1AT47U7BICOLR_trial_list.csv', path: './resources/A1AT47U7BICOLR_trial_list.csv' },
//{ name: 'A1B5O1E2T429ET_trial_list.csv', path: './resources/A1B5O1E2T429ET_trial_list.csv' },
//{ name: 'A1BM57TUNAQIXM_trial_list.csv', path: './resources/A1BM57TUNAQIXM_trial_list.csv' },
//{ name: 'A1BQTDDVCHQM5T_trial_list.csv', path: './resources/A1BQTDDVCHQM5T_trial_list.csv' },
//{ name: 'A1DD39VFCRWI8G_trial_list.csv', path: './resources/A1DD39VFCRWI8G_trial_list.csv' },
//{ name: 'A1DS5O8MSI3ZH0_trial_list.csv', path: './resources/A1DS5O8MSI3ZH0_trial_list.csv' },
//{ name: 'A1F561VBW2J4PO_trial_list.csv', path: './resources/A1F561VBW2J4PO_trial_list.csv' },
//{ name: 'A1F9WGMST4WH88_trial_list.csv', path: './resources/A1F9WGMST4WH88_trial_list.csv' },
//{ name: 'A1FJINS24NQMIE_trial_list.csv', path: './resources/A1FJINS24NQMIE_trial_list.csv' },
//{ name: 'A1G6DFTYUM578N_trial_list.csv', path: './resources/A1G6DFTYUM578N_trial_list.csv' },
//{ name: 'A1G86FHR2YOW12_trial_list.csv', path: './resources/A1G86FHR2YOW12_trial_list.csv' },
//{ name: 'A1IFF4KV23FGHJ_trial_list.csv', path: './resources/A1IFF4KV23FGHJ_trial_list.csv' },
//{ name: 'A1IHSU4V83S0QP_trial_list.csv', path: './resources/A1IHSU4V83S0QP_trial_list.csv' },
//{ name: 'A1IRT5KE42KIIF_trial_list.csv', path: './resources/A1IRT5KE42KIIF_trial_list.csv' },
//{ name: 'A1JJYY622DGE5L_trial_list.csv', path: './resources/A1JJYY622DGE5L_trial_list.csv' },
//{ name: 'A1JLYIQ4HT4KQC_trial_list.csv', path: './resources/A1JLYIQ4HT4KQC_trial_list.csv' },
//{ name: 'A1KXESMB9K7504_trial_list.csv', path: './resources/A1KXESMB9K7504_trial_list.csv' },
//{ name: 'A1L1NNFVKS3G8T_trial_list.csv', path: './resources/A1L1NNFVKS3G8T_trial_list.csv' },
//{ name: 'A1LA6CIGBNDOH9_trial_list.csv', path: './resources/A1LA6CIGBNDOH9_trial_list.csv' },
//{ name: 'A1LB8HVSXK66U0_trial_list.csv', path: './resources/A1LB8HVSXK66U0_trial_list.csv' },
//{ name: 'A1LEC9PYYYXM1U_trial_list.csv', path: './resources/A1LEC9PYYYXM1U_trial_list.csv' },
//{ name: 'A1LQZMAUNWD6FW_trial_list.csv', path: './resources/A1LQZMAUNWD6FW_trial_list.csv' },
//{ name: 'A1M4ID9VUYGX23_trial_list.csv', path: './resources/A1M4ID9VUYGX23_trial_list.csv' },
//{ name: 'A1N7O7E8HC03D8_trial_list.csv', path: './resources/A1N7O7E8HC03D8_trial_list.csv' },
//{ name: 'A1N956KBC4G13I_trial_list.csv', path: './resources/A1N956KBC4G13I_trial_list.csv' },
//{ name: 'A1NF1XZTCVRG1V_trial_list.csv', path: './resources/A1NF1XZTCVRG1V_trial_list.csv' },
//{ name: 'A1NKBLZ8HK0W7_trial_list.csv', path: './resources/A1NKBLZ8HK0W7_trial_list.csv' },
//{ name: 'A1OJFN3L7YW143_trial_list.csv', path: './resources/A1OJFN3L7YW143_trial_list.csv' },
//{ name: 'A1P3HHEXWNLJMP_trial_list.csv', path: './resources/A1P3HHEXWNLJMP_trial_list.csv' },
//{ name: 'A1PHDT66U6IK4Q_trial_list.csv', path: './resources/A1PHDT66U6IK4Q_trial_list.csv' },
//{ name: 'A1Q96SFZ3JT4DE_trial_list.csv', path: './resources/A1Q96SFZ3JT4DE_trial_list.csv' },
//{ name: 'A1QAIJ6OOQH3RL_trial_list.csv', path: './resources/A1QAIJ6OOQH3RL_trial_list.csv' },
//{ name: 'A1QG4N21BF61PC_trial_list.csv', path: './resources/A1QG4N21BF61PC_trial_list.csv' },
//{ name: 'A1R1E7TZ9OHFIG_trial_list.csv', path: './resources/A1R1E7TZ9OHFIG_trial_list.csv' },
//{ name: 'A1RQDBE1ZFIZ7U_trial_list.csv', path: './resources/A1RQDBE1ZFIZ7U_trial_list.csv' },
//{ name: 'A1RVMADIZE3BXK_trial_list.csv', path: './resources/A1RVMADIZE3BXK_trial_list.csv' },
//{ name: 'A1SP3GBRZKMWZJ_trial_list.csv', path: './resources/A1SP3GBRZKMWZJ_trial_list.csv' },
//{ name: 'A1TCDQNDVZFTLE_trial_list.csv', path: './resources/A1TCDQNDVZFTLE_trial_list.csv' },
//{ name: 'A1TM6E8F7B9RLM_trial_list.csv', path: './resources/A1TM6E8F7B9RLM_trial_list.csv' },
//{ name: 'A1TYD55JKQPYP4_trial_list.csv', path: './resources/A1TYD55JKQPYP4_trial_list.csv' },
{ name: 'A1UBV2NP7OVDVV_trial_list.csv', path: './resources/A1UBV2NP7OVDVV_trial_list.csv' },
{ name: 'A1VB3MHF6YCDHJ_trial_list.csv', path: './resources/A1VB3MHF6YCDHJ_trial_list.csv' },
{ name: 'A1VC6F0FYG1L5I_trial_list.csv', path: './resources/A1VC6F0FYG1L5I_trial_list.csv' },
{ name: 'A1VR1XQEQQXYUE_trial_list.csv', path: './resources/A1VR1XQEQQXYUE_trial_list.csv' },
{ name: 'A1WOCD9SAYI07V_trial_list.csv', path: './resources/A1WOCD9SAYI07V_trial_list.csv' },
{ name: 'A1X4BKW05XDA8Q_trial_list.csv', path: './resources/A1X4BKW05XDA8Q_trial_list.csv' },
{ name: 'A1X84T4EFW04GZ_trial_list.csv', path: './resources/A1X84T4EFW04GZ_trial_list.csv' },
{ name: 'A1XE5G7H6AO5HH_trial_list.csv', path: './resources/A1XE5G7H6AO5HH_trial_list.csv' },
{ name: 'A1XVEKS9O73ERE_trial_list.csv', path: './resources/A1XVEKS9O73ERE_trial_list.csv' },
{ name: 'A1XZD3ZCEAAMAW_trial_list.csv', path: './resources/A1XZD3ZCEAAMAW_trial_list.csv' },
{ name: 'A1Z27X99F97JSR_trial_list.csv', path: './resources/A1Z27X99F97JSR_trial_list.csv' },
{ name: 'A1ZCP2OQXOMAHN_trial_list.csv', path: './resources/A1ZCP2OQXOMAHN_trial_list.csv' },
{ name: 'A20GYPIRZOCBZK_trial_list.csv', path: './resources/A20GYPIRZOCBZK_trial_list.csv' },
{ name: 'A20J7F7PKEZZV2_trial_list.csv', path: './resources/A20J7F7PKEZZV2_trial_list.csv' },
{ name: 'A21OS9KG7JNHR7_trial_list.csv', path: './resources/A21OS9KG7JNHR7_trial_list.csv' },
{ name: 'A21STU4Z97J2Z6_trial_list.csv', path: './resources/A21STU4Z97J2Z6_trial_list.csv' },
{ name: 'A22NU39DIQOJZ_trial_list.csv', path: './resources/A22NU39DIQOJZ_trial_list.csv' },
{ name: 'A240OTT1T85UGT_trial_list.csv', path: './resources/A240OTT1T85UGT_trial_list.csv' },
{ name: 'A24FN5BK5L9I2S_trial_list.csv', path: './resources/A24FN5BK5L9I2S_trial_list.csv' },
{ name: 'A255C5NDOBXZEC_trial_list.csv', path: './resources/A255C5NDOBXZEC_trial_list.csv' },
{ name: 'A25XUZYL1Q2HBW_trial_list.csv', path: './resources/A25XUZYL1Q2HBW_trial_list.csv' },
{ name: 'A288RSAGJBLY9_trial_list.csv', path: './resources/A288RSAGJBLY9_trial_list.csv' },
{ name: 'A28AXX4NCWPH1F_trial_list.csv', path: './resources/A28AXX4NCWPH1F_trial_list.csv' },
{ name: 'A28RL79ONUXTET_trial_list.csv', path: './resources/A28RL79ONUXTET_trial_list.csv' },
{ name: 'A29QDC93L0A4RW_trial_list.csv', path: './resources/A29QDC93L0A4RW_trial_list.csv' },
{ name: 'A29TQSAJPLXZU7_trial_list.csv', path: './resources/A29TQSAJPLXZU7_trial_list.csv' },
{ name: 'A2AMQX0BQZXG9N_trial_list.csv', path: './resources/A2AMQX0BQZXG9N_trial_list.csv' },
{ name: 'A2B23DWO4WZRA_trial_list.csv', path: './resources/A2B23DWO4WZRA_trial_list.csv' },
{ name: 'A2B4GWF7MF7AOB_trial_list.csv', path: './resources/A2B4GWF7MF7AOB_trial_list.csv' },
{ name: 'A2B7V3HDBDKHPN_trial_list.csv', path: './resources/A2B7V3HDBDKHPN_trial_list.csv' },
{ name: 'A2BABNE11OM5GW_trial_list.csv', path: './resources/A2BABNE11OM5GW_trial_list.csv' },
{ name: 'A2BBDH8DZD77AU_trial_list.csv', path: './resources/A2BBDH8DZD77AU_trial_list.csv' },
{ name: 'A2BVVFXMQU8AC7_trial_list.csv', path: './resources/A2BVVFXMQU8AC7_trial_list.csv' },
{ name: 'A2D34R2A1L9JCH_trial_list.csv', path: './resources/A2D34R2A1L9JCH_trial_list.csv' },
{ name: 'A2DWDTU1KVNISP_trial_list.csv', path: './resources/A2DWDTU1KVNISP_trial_list.csv' },
{ name: 'A2G2S14YIRXEKP_trial_list.csv', path: './resources/A2G2S14YIRXEKP_trial_list.csv' },
{ name: 'A2G3OXONXDRM3J_trial_list.csv', path: './resources/A2G3OXONXDRM3J_trial_list.csv' },
{ name: 'A2G7DTL156PTKA_trial_list.csv', path: './resources/A2G7DTL156PTKA_trial_list.csv' },
{ name: 'A2GDQ3XBEG44MI_trial_list.csv', path: './resources/A2GDQ3XBEG44MI_trial_list.csv' },
{ name: 'A2GF8CV3WFQ5E9_trial_list.csv', path: './resources/A2GF8CV3WFQ5E9_trial_list.csv' },
{ name: 'A2H6B2E7W89FJ0_trial_list.csv', path: './resources/A2H6B2E7W89FJ0_trial_list.csv' },
{ name: 'A2HFK76PFSAXBE_trial_list.csv', path: './resources/A2HFK76PFSAXBE_trial_list.csv' },
{ name: 'A2IG8L25SNKXYI_trial_list.csv', path: './resources/A2IG8L25SNKXYI_trial_list.csv' },
{ name: 'A2IWT7ERAYNPIK_trial_list.csv', path: './resources/A2IWT7ERAYNPIK_trial_list.csv' },
{ name: 'A2KDNIZ9PIM8V2_trial_list.csv', path: './resources/A2KDNIZ9PIM8V2_trial_list.csv' },
{ name: 'A2KXARDIOGJL8T_trial_list.csv', path: './resources/A2KXARDIOGJL8T_trial_list.csv' },
{ name: 'A2LC2DS8OH7NCA_trial_list.csv', path: './resources/A2LC2DS8OH7NCA_trial_list.csv' },
{ name: 'A2LF84L3K71GR2_trial_list.csv', path: './resources/A2LF84L3K71GR2_trial_list.csv' },
{ name: 'A2LO8K013TX9FA_trial_list.csv', path: './resources/A2LO8K013TX9FA_trial_list.csv' },
{ name: 'A2MDVYV4K2BTES_trial_list.csv', path: './resources/A2MDVYV4K2BTES_trial_list.csv' },
{ name: 'A2METANSJXXHRO_trial_list.csv', path: './resources/A2METANSJXXHRO_trial_list.csv' },
{ name: 'A2MOC4PTJYY15B_trial_list.csv', path: './resources/A2MOC4PTJYY15B_trial_list.csv' },
{ name: 'A2MX5YW3DSQ61W_trial_list.csv', path: './resources/A2MX5YW3DSQ61W_trial_list.csv' },
{ name: 'A2NKW6JBEM4LL4_trial_list.csv', path: './resources/A2NKW6JBEM4LL4_trial_list.csv' },
{ name: 'A2OG8XRYJ56HS7_trial_list.csv', path: './resources/A2OG8XRYJ56HS7_trial_list.csv' },
{ name: 'A2PH5T3HCCCXIN_trial_list.csv', path: './resources/A2PH5T3HCCCXIN_trial_list.csv' },
{ name: 'A2PR3J6Z0LBT1R_trial_list.csv', path: './resources/A2PR3J6Z0LBT1R_trial_list.csv' },
{ name: 'A2RP1QQW8ZTEB5_trial_list.csv', path: './resources/A2RP1QQW8ZTEB5_trial_list.csv' },
//{ name: 'A2RSHXMN7VW1ZO_trial_list.csv', path: './resources/A2RSHXMN7VW1ZO_trial_list.csv' },
//{ name: 'A2RWLFIP23FZA7_trial_list.csv', path: './resources/A2RWLFIP23FZA7_trial_list.csv' },
//{ name: 'A2S0MB5JFG8DF_trial_list.csv', path: './resources/A2S0MB5JFG8DF_trial_list.csv' },
//{ name: 'A2SHKXL4N38SK3_trial_list.csv', path: './resources/A2SHKXL4N38SK3_trial_list.csv' },
//{ name: 'A2SR85I8JMO1ZZ_trial_list.csv', path: './resources/A2SR85I8JMO1ZZ_trial_list.csv' },
//{ name: 'A2SVNXNMD7E7EH_trial_list.csv', path: './resources/A2SVNXNMD7E7EH_trial_list.csv' },
//{ name: 'A2TUUIV61CR0C7_trial_list.csv', path: './resources/A2TUUIV61CR0C7_trial_list.csv' },
//{ name: 'A2UAGNKP1BPON_trial_list.csv', path: './resources/A2UAGNKP1BPON_trial_list.csv' },
//{ name: 'A2UQ2471GMCFQ6_trial_list.csv', path: './resources/A2UQ2471GMCFQ6_trial_list.csv' },
//{ name: 'A2V35L3RIRYYXV_trial_list.csv', path: './resources/A2V35L3RIRYYXV_trial_list.csv' },
//{ name: 'A2WTBHTYWPRWK9_trial_list.csv', path: './resources/A2WTBHTYWPRWK9_trial_list.csv' },
//{ name: 'A2WZ8ZEB00LYF7_trial_list.csv', path: './resources/A2WZ8ZEB00LYF7_trial_list.csv' },
//{ name: 'A2YNWB6RWLLKRO_trial_list.csv', path: './resources/A2YNWB6RWLLKRO_trial_list.csv' },
//{ name: 'A2ZGAH6NOSU2PO_trial_list.csv', path: './resources/A2ZGAH6NOSU2PO_trial_list.csv' },
//{ name: 'A320BT7PLIQVZT_trial_list.csv', path: './resources/A320BT7PLIQVZT_trial_list.csv' },
//{ name: 'A34DWBBWZRLO1X_trial_list.csv', path: './resources/A34DWBBWZRLO1X_trial_list.csv' },
//{ name: 'A34LV51D4PO2R_trial_list.csv', path: './resources/A34LV51D4PO2R_trial_list.csv' },
//{ name: 'A34YH4SO3FPCA_trial_list.csv', path: './resources/A34YH4SO3FPCA_trial_list.csv' },
//{ name: 'A35CRYBHUZZZHO_trial_list.csv', path: './resources/A35CRYBHUZZZHO_trial_list.csv' },
//{ name: 'A36FBIDN58N139_trial_list.csv', path: './resources/A36FBIDN58N139_trial_list.csv' },
//{ name: 'A374UTBB2JKAH0_trial_list.csv', path: './resources/A374UTBB2JKAH0_trial_list.csv' },
//{ name: 'A3774HPOUKYTX7_trial_list.csv', path: './resources/A3774HPOUKYTX7_trial_list.csv' },
//{ name: 'A37VN02VTEQIQ7_trial_list.csv', path: './resources/A37VN02VTEQIQ7_trial_list.csv' },
//{ name: 'A37Y0IK0CSQ5N0_trial_list.csv', path: './resources/A37Y0IK0CSQ5N0_trial_list.csv' },
//{ name: 'A38K45F4I17TKB_trial_list.csv', path: './resources/A38K45F4I17TKB_trial_list.csv' },
//{ name: 'A3A1PMZDFJD218_trial_list.csv', path: './resources/A3A1PMZDFJD218_trial_list.csv' },
//{ name: 'A3B8DP6KHMP3OS_trial_list.csv', path: './resources/A3B8DP6KHMP3OS_trial_list.csv' },
//{ name: 'A3BZVFD82AVLT8_trial_list.csv', path: './resources/A3BZVFD82AVLT8_trial_list.csv' },
//{ name: 'A3C5G8LGIAW0XL_trial_list.csv', path: './resources/A3C5G8LGIAW0XL_trial_list.csv' },
//{ name: 'A3CF0PNXE6QR8T_trial_list.csv', path: './resources/A3CF0PNXE6QR8T_trial_list.csv' },
//{ name: 'A3CGDCXIOVQNE6_trial_list.csv', path: './resources/A3CGDCXIOVQNE6_trial_list.csv' },
//{ name: 'A3CH1Z6J9R38G9_trial_list.csv', path: './resources/A3CH1Z6J9R38G9_trial_list.csv' },
//{ name: 'A3E50NZCJNLDG1_trial_list.csv', path: './resources/A3E50NZCJNLDG1_trial_list.csv' },
//{ name: 'A3FMKTC7QI8V0H_trial_list.csv', path: './resources/A3FMKTC7QI8V0H_trial_list.csv' },
//{ name: 'A3H0133NSXWYTM_trial_list.csv', path: './resources/A3H0133NSXWYTM_trial_list.csv' },
//{ name: 'A3H35QRODK1C4K_trial_list.csv', path: './resources/A3H35QRODK1C4K_trial_list.csv' },
//{ name: 'A3HCP4KTFLQBCG_trial_list.csv', path: './resources/A3HCP4KTFLQBCG_trial_list.csv' },
//{ name: 'A3JE7KOBY3G4CJ_trial_list.csv', path: './resources/A3JE7KOBY3G4CJ_trial_list.csv' },
//{ name: 'A3JLWUIWWZ8PQ6_trial_list.csv', path: './resources/A3JLWUIWWZ8PQ6_trial_list.csv' },
//{ name: 'A3K8WQICXRO3F8_trial_list.csv', path: './resources/A3K8WQICXRO3F8_trial_list.csv' },
//{ name: 'A3L60SOWLYEDN2_trial_list.csv', path: './resources/A3L60SOWLYEDN2_trial_list.csv' },
//{ name: 'A3LVLZS8S41ZD7_trial_list.csv', path: './resources/A3LVLZS8S41ZD7_trial_list.csv' },
//{ name: 'A3MCGKRH5KEZR8_trial_list.csv', path: './resources/A3MCGKRH5KEZR8_trial_list.csv' },
//{ name: 'A3MHKFOJIXO7QN_trial_list.csv', path: './resources/A3MHKFOJIXO7QN_trial_list.csv' },
//{ name: 'A3MJCHFORYK0US_trial_list.csv', path: './resources/A3MJCHFORYK0US_trial_list.csv' },
//{ name: 'A3MYPYBVHX7FQ2_trial_list.csv', path: './resources/A3MYPYBVHX7FQ2_trial_list.csv' },
//{ name: 'A3NM5SP9NZ9BOJ_trial_list.csv', path: './resources/A3NM5SP9NZ9BOJ_trial_list.csv' },
//{ name: 'A3O5RKGH6VB19C_trial_list.csv', path: './resources/A3O5RKGH6VB19C_trial_list.csv' },
//{ name: 'A3O7X46E3REM7I_trial_list.csv', path: './resources/A3O7X46E3REM7I_trial_list.csv' },
//{ name: 'A3OPXWTBJZ37M8_trial_list.csv', path: './resources/A3OPXWTBJZ37M8_trial_list.csv' },
//{ name: 'A3OUF2YNBGJV57_trial_list.csv', path: './resources/A3OUF2YNBGJV57_trial_list.csv' },
//{ name: 'A3OZNTDPVDBJZV_trial_list.csv', path: './resources/A3OZNTDPVDBJZV_trial_list.csv' },
//{ name: 'A3PKTPXXORWR97_trial_list.csv', path: './resources/A3PKTPXXORWR97_trial_list.csv' },
//{ name: 'A3QOMMIZTW0XF1_trial_list.csv', path: './resources/A3QOMMIZTW0XF1_trial_list.csv' },
//{ name: 'A3RORPE1AZXP9T_trial_list.csv', path: './resources/A3RORPE1AZXP9T_trial_list.csv' },
//{ name: 'A3RUL1OC4CAINK_trial_list.csv', path: './resources/A3RUL1OC4CAINK_trial_list.csv' },
//{ name: 'A3S3WYVCVWW8IZ_trial_list.csv', path: './resources/A3S3WYVCVWW8IZ_trial_list.csv' },
//{ name: 'A3UEEIQ1XI25TS_trial_list.csv', path: './resources/A3UEEIQ1XI25TS_trial_list.csv' },
//{ name: 'A3UQ5DF8VVD975_trial_list.csv', path: './resources/A3UQ5DF8VVD975_trial_list.csv' },
//{ name: 'A3US4NGKXBVI48_trial_list.csv', path: './resources/A3US4NGKXBVI48_trial_list.csv' },
//{ name: 'A3VP27UUQ34OXK_trial_list.csv', path: './resources/A3VP27UUQ34OXK_trial_list.csv' },
//{ name: 'A3VRDQJNM1IC0E_trial_list.csv', path: './resources/A3VRDQJNM1IC0E_trial_list.csv' },
//{ name: 'A3VZ5K4RRT6NN8_trial_list.csv', path: './resources/A3VZ5K4RRT6NN8_trial_list.csv' },
//{ name: 'A3W4XLAHW96WQI_trial_list.csv', path: './resources/A3W4XLAHW96WQI_trial_list.csv' },
//{ name: 'A50K8MTKFSNQT_trial_list.csv', path: './resources/A50K8MTKFSNQT_trial_list.csv' },
//{ name: 'A8M0LFNLLHHT1_trial_list.csv', path: './resources/A8M0LFNLLHHT1_trial_list.csv' },
//{ name: 'A9AGF1C9DQXLM_trial_list.csv', path: './resources/A9AGF1C9DQXLM_trial_list.csv' },
//{ name: 'A9HIJETW998RR_trial_list.csv', path: './resources/A9HIJETW998RR_trial_list.csv' },
//{ name: 'AA402T4YY1S7N_trial_list.csv', path: './resources/AA402T4YY1S7N_trial_list.csv' },
//{ name: 'AA5ZDXAA2DLY1_trial_list.csv', path: './resources/AA5ZDXAA2DLY1_trial_list.csv' },
//{ name: 'AAO99PANYUZQ3_trial_list.csv', path: './resources/AAO99PANYUZQ3_trial_list.csv' },
//{ name: 'AB036D1V69QGV_trial_list.csv', path: './resources/AB036D1V69QGV_trial_list.csv' },
//{ name: 'ABNNSRB6Y5EFR_trial_list.csv', path: './resources/ABNNSRB6Y5EFR_trial_list.csv' },
//{ name: 'ABYFMKPTF0SHG_trial_list.csv', path: './resources/ABYFMKPTF0SHG_trial_list.csv' },
//{ name: 'AC3W6TPL0I3AY_trial_list.csv', path: './resources/AC3W6TPL0I3AY_trial_list.csv' },
//{ name: 'ADOA6CWS9LA9_trial_list.csv', path: './resources/ADOA6CWS9LA9_trial_list.csv' },
//{ name: 'AEKJ0Q3OITMRJ_trial_list.csv', path: './resources/AEKJ0Q3OITMRJ_trial_list.csv' },
//{ name: 'AF6CWERDIMNIZ_trial_list.csv', path: './resources/AF6CWERDIMNIZ_trial_list.csv' },
//{ name: 'AFCMHQWCV6N02_trial_list.csv', path: './resources/AFCMHQWCV6N02_trial_list.csv' },
//{ name: 'AFIRH8MV85A4D_trial_list.csv', path: './resources/AFIRH8MV85A4D_trial_list.csv' },
//{ name: 'AG0DR7A5Y1976_trial_list.csv', path: './resources/AG0DR7A5Y1976_trial_list.csv' },
//{ name: 'AG82E3YPR72O5_trial_list.csv', path: './resources/AG82E3YPR72O5_trial_list.csv' },
//{ name: 'AGB57MX9TVKND_trial_list.csv', path: './resources/AGB57MX9TVKND_trial_list.csv' },
//{ name: 'AHUO072N55J8H_trial_list.csv', path: './resources/AHUO072N55J8H_trial_list.csv' },
//{ name: 'AIFRN9GF0Q1ZI_trial_list.csv', path: './resources/AIFRN9GF0Q1ZI_trial_list.csv' },
//{ name: 'AIS6Q7LL5926A_trial_list.csv', path: './resources/AIS6Q7LL5926A_trial_list.csv' },
//{ name: 'AKON4ZPGX5DYQ_trial_list.csv', path: './resources/AKON4ZPGX5DYQ_trial_list.csv' },
//{ name: 'AL6KD1ZLYLJ61_trial_list.csv', path: './resources/AL6KD1ZLYLJ61_trial_list.csv' },
//{ name: 'ALCSNULDVTDFF_trial_list.csv', path: './resources/ALCSNULDVTDFF_trial_list.csv' },
//{ name: 'ALF9AAZGQP4K5_trial_list.csv', path: './resources/ALF9AAZGQP4K5_trial_list.csv' },
//{ name: 'AM4PAC2YQPREB_trial_list.csv', path: './resources/AM4PAC2YQPREB_trial_list.csv' },
//{ name: 'AMNRYECHXZY34_trial_list.csv', path: './resources/AMNRYECHXZY34_trial_list.csv' },
//{ name: 'ANSS4CFQGM8WM_trial_list.csv', path: './resources/ANSS4CFQGM8WM_trial_list.csv' },
//{ name: 'AOB5RZ3WSAZPS_trial_list.csv', path: './resources/AOB5RZ3WSAZPS_trial_list.csv' },
//{ name: 'AOIA4GWEH0CS5_trial_list.csv', path: './resources/AOIA4GWEH0CS5_trial_list.csv' },
//{ name: 'AOR0FSL893AJ2_trial_list.csv', path: './resources/AOR0FSL893AJ2_trial_list.csv' },
//{ name: 'AOWLCXNXCSQAC_trial_list.csv', path: './resources/AOWLCXNXCSQAC_trial_list.csv' },
//{ name: 'APYU0XBN08DHX_trial_list.csv', path: './resources/APYU0XBN08DHX_trial_list.csv' },
//{ name: 'AQSML514QJ4MO_trial_list.csv', path: './resources/AQSML514QJ4MO_trial_list.csv' },
//{ name: 'AS4NT97UP00R2_trial_list.csv', path: './resources/AS4NT97UP00R2_trial_list.csv' },
//{ name: 'ASFBN5SC3SGDG_trial_list.csv', path: './resources/ASFBN5SC3SGDG_trial_list.csv' },
//{ name: 'ASFLZUJ0OGAJF_trial_list.csv', path: './resources/ASFLZUJ0OGAJF_trial_list.csv' },
//{ name: 'AT9YSBZ2YIVOO_trial_list.csv', path: './resources/AT9YSBZ2YIVOO_trial_list.csv' },
//{ name: 'AUFOO8PU2BK37_trial_list.csv', path: './resources/AUFOO8PU2BK37_trial_list.csv' },
//{ name: 'AVXEDARJC5HLU_trial_list.csv', path: './resources/AVXEDARJC5HLU_trial_list.csv' },
//{ name: 'AVZSLLHJK3JF3_trial_list.csv', path: './resources/AVZSLLHJK3JF3_trial_list.csv' },
//{ name: 'AXK9KFTESXJ31_trial_list.csv', path: './resources/AXK9KFTESXJ31_trial_list.csv' },
//{ name: 'AXO22N46CSNVT_trial_list.csv', path: './resources/AXO22N46CSNVT_trial_list.csv' },
//{ name: 'AYJGQBBK6KXZ7_trial_list.csv', path: './resources/AYJGQBBK6KXZ7_trial_list.csv' },
//{ name: 'AYYBMS4XQJ9AP_trial_list.csv', path: './resources/AYYBMS4XQJ9AP_trial_list.csv' },
//{ name: 'AZBVDBOOKTL09_trial_list.csv', path: './resources/AZBVDBOOKTL09_trial_list.csv' },
//{ name: 'AZCGF2D7QIO10_trial_list.csv', path: './resources/AZCGF2D7QIO10_trial_list.csv' },
//{ name: 'AZOO1NLIYXGZ4_trial_list.csv', path: './resources/AZOO1NLIYXGZ4_trial_list.csv' },
{ name: 'wolfe2_trial_list.csv', path: './resources/wolfe2_trial_list.csv' },
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
    
    var obj = ['A10Z4QVBJIA914', 'A10ZW7G8U02Y78', 'A110KENBXU7SUJ', 'A11MCPY8W4U6FL', 'A11PIARI7WALAX', 'A11W55U13HODN1', 'A1251G78LIS2M3', 'A12O9P1OTMJOPW', 'A145Z2L40FAB8J', 'A14EYTLSMJRPUK', 'A14WLAP6TCEKO0', 'A1522U5W2U1DMN', 'A15GLNTVDPCXUQ', 'A173A97OFDAX9F', 'A17LF7GCAFYMSL', 'A17M8NL5LMUB8S', 'A18MHXGNZMORFP', 'A1AT47U7BICOLR', 'A1B5O1E2T429ET', 'A1BM57TUNAQIXM', 'A1BQTDDVCHQM5T', 'A1DD39VFCRWI8G', 'A1DS5O8MSI3ZH0', 'A1F561VBW2J4PO', 'A1F9WGMST4WH88', 'A1FJINS24NQMIE', 'A1G6DFTYUM578N', 'A1G86FHR2YOW12', 'A1IFF4KV23FGHJ', 'A1IHSU4V83S0QP', 'A1IRT5KE42KIIF', 'A1JJYY622DGE5L', 'A1JLYIQ4HT4KQC', 'A1KXESMB9K7504', 'A1L1NNFVKS3G8T', 'A1LA6CIGBNDOH9', 'A1LB8HVSXK66U0', 'A1LEC9PYYYXM1U', 'A1LQZMAUNWD6FW', 'A1M4ID9VUYGX23', 'A1N7O7E8HC03D8', 'A1N956KBC4G13I', 'A1NF1XZTCVRG1V', 'A1NKBLZ8HK0W7', 'A1OJFN3L7YW143', 'A1P3HHEXWNLJMP', 'A1PHDT66U6IK4Q', 'A1Q96SFZ3JT4DE', 'A1QAIJ6OOQH3RL', 'A1QG4N21BF61PC', 'A1R1E7TZ9OHFIG', 'A1RQDBE1ZFIZ7U', 'A1RVMADIZE3BXK', 'A1SP3GBRZKMWZJ', 'A1TCDQNDVZFTLE', 'A1TM6E8F7B9RLM', 'A1TYD55JKQPYP4', 'A1UBV2NP7OVDVV', 'A1VB3MHF6YCDHJ', 'A1VC6F0FYG1L5I', 'A1VR1XQEQQXYUE', 'A1WOCD9SAYI07V', 'A1X4BKW05XDA8Q', 'A1X84T4EFW04GZ', 'A1XE5G7H6AO5HH', 'A1XVEKS9O73ERE', 'A1XZD3ZCEAAMAW', 'A1Z27X99F97JSR', 'A1ZCP2OQXOMAHN', 'A20GYPIRZOCBZK', 'A20J7F7PKEZZV2', 'A21OS9KG7JNHR7', 'A21STU4Z97J2Z6', 'A22NU39DIQOJZ', 'A240OTT1T85UGT', 'A24FN5BK5L9I2S', 'A255C5NDOBXZEC', 'A25XUZYL1Q2HBW', 'A288RSAGJBLY9', 'A28AXX4NCWPH1F', 'A28RL79ONUXTET', 'A29QDC93L0A4RW', 'A29TQSAJPLXZU7', 'A2AMQX0BQZXG9N', 'A2B23DWO4WZRA', 'A2B4GWF7MF7AOB', 'A2B7V3HDBDKHPN', 'A2BABNE11OM5GW', 'A2BBDH8DZD77AU', 'A2BVVFXMQU8AC7', 'A2D34R2A1L9JCH', 'A2DWDTU1KVNISP', 'A2G2S14YIRXEKP', 'A2G3OXONXDRM3J', 'A2G7DTL156PTKA', 'A2GDQ3XBEG44MI', 'A2GF8CV3WFQ5E9', 'A2H6B2E7W89FJ0', 'A2HFK76PFSAXBE', 'A2IG8L25SNKXYI', 'A2IWT7ERAYNPIK', 'A2KDNIZ9PIM8V2', 'A2KXARDIOGJL8T', 'A2LC2DS8OH7NCA', 'A2LF84L3K71GR2', 'A2LO8K013TX9FA', 'A2MDVYV4K2BTES', 'A2METANSJXXHRO', 'A2MOC4PTJYY15B', 'A2MX5YW3DSQ61W', 'A2NKW6JBEM4LL4', 'A2OG8XRYJ56HS7', 'A2PH5T3HCCCXIN', 'A2PR3J6Z0LBT1R', 'A2RP1QQW8ZTEB5', 'A2RSHXMN7VW1ZO', 'A2RWLFIP23FZA7', 'A2S0MB5JFG8DF', 'A2SHKXL4N38SK3', 'A2SR85I8JMO1ZZ', 'A2SVNXNMD7E7EH', 'A2TUUIV61CR0C7', 'A2UAGNKP1BPON', 'A2UQ2471GMCFQ6', 'A2V35L3RIRYYXV', 'A2WTBHTYWPRWK9', 'A2WZ8ZEB00LYF7', 'A2YNWB6RWLLKRO', 'A2ZGAH6NOSU2PO', 'A320BT7PLIQVZT', 'A34DWBBWZRLO1X', 'A34LV51D4PO2R', 'A34YH4SO3FPCA', 'A35CRYBHUZZZHO', 'A36FBIDN58N139', 'A374UTBB2JKAH0', 'A3774HPOUKYTX7', 'A37VN02VTEQIQ7', 'A37Y0IK0CSQ5N0', 'A38K45F4I17TKB', 'A3A1PMZDFJD218', 'A3B8DP6KHMP3OS', 'A3BZVFD82AVLT8', 'A3C5G8LGIAW0XL', 'A3CF0PNXE6QR8T', 'A3CGDCXIOVQNE6', 'A3CH1Z6J9R38G9', 'A3E50NZCJNLDG1', 'A3FMKTC7QI8V0H', 'A3H0133NSXWYTM', 'A3H35QRODK1C4K', 'A3HCP4KTFLQBCG', 'A3JE7KOBY3G4CJ', 'A3JLWUIWWZ8PQ6', 'A3K8WQICXRO3F8', 'A3L60SOWLYEDN2', 'A3LVLZS8S41ZD7', 'A3MCGKRH5KEZR8', 'A3MHKFOJIXO7QN', 'A3MJCHFORYK0US', 'A3MYPYBVHX7FQ2', 'A3NM5SP9NZ9BOJ', 'A3O5RKGH6VB19C', 'A3O7X46E3REM7I', 'A3OPXWTBJZ37M8', 'A3OUF2YNBGJV57', 'A3OZNTDPVDBJZV', 'A3PKTPXXORWR97', 'A3QOMMIZTW0XF1', 'A3RORPE1AZXP9T', 'A3RUL1OC4CAINK', 'A3S3WYVCVWW8IZ', 'A3UEEIQ1XI25TS', 'A3UQ5DF8VVD975', 'A3US4NGKXBVI48', 'A3VP27UUQ34OXK', 'A3VRDQJNM1IC0E', 'A3VZ5K4RRT6NN8', 'A3W4XLAHW96WQI', 'A50K8MTKFSNQT', 'A8M0LFNLLHHT1', 'A9AGF1C9DQXLM', 'A9HIJETW998RR', 'AA402T4YY1S7N', 'AA5ZDXAA2DLY1', 'AAO99PANYUZQ3', 'AB036D1V69QGV', 'ABNNSRB6Y5EFR', 'ABYFMKPTF0SHG', 'AC3W6TPL0I3AY', 'ADOA6CWS9LA9', 'AEKJ0Q3OITMRJ', 'AF6CWERDIMNIZ', 'AFCMHQWCV6N02', 'AFIRH8MV85A4D', 'AG0DR7A5Y1976', 'AG82E3YPR72O5', 'AGB57MX9TVKND', 'AHUO072N55J8H', 'AIFRN9GF0Q1ZI', 'AIS6Q7LL5926A', 'AKON4ZPGX5DYQ', 'AL6KD1ZLYLJ61', 'ALCSNULDVTDFF', 'ALF9AAZGQP4K5', 'AM4PAC2YQPREB', 'AMNRYECHXZY34', 'ANSS4CFQGM8WM', 'AOB5RZ3WSAZPS', 'AOIA4GWEH0CS5', 'AOR0FSL893AJ2', 'AOWLCXNXCSQAC', 'APYU0XBN08DHX', 'AQSML514QJ4MO', 'AS4NT97UP00R2', 'ASFBN5SC3SGDG', 'ASFLZUJ0OGAJF', 'AT9YSBZ2YIVOO', 'AUFOO8PU2BK37', 'AVXEDARJC5HLU', 'AVZSLLHJK3JF3', 'AXK9KFTESXJ31', 'AXO22N46CSNVT', 'AYJGQBBK6KXZ7', 'AYYBMS4XQJ9AP', 'AZBVDBOOKTL09', 'AZCGF2D7QIO10', 'AZOO1NLIYXGZ4'];
    if (Object.values(obj).indexOf(expInfo['worker_ID']) > -1) {
        infile = (String(expInfo['worker_ID']) + '_trial_list.csv');
        pathway = infile;
    } else{
        pathway = 'wolfe2_trial_list.csv';
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
    frameN-1;
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
    frameN + 1;// number of completed frames (so 0 is the first frame)
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
    frameN-1;
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
    frameN + 1;// number of completed frames (so 0 is the first frame)
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
    frameN-1;
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
    frameN + 1;// number of completed frames (so 0 is the first frame)
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
    frameN-1;
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
    frameN + 1;// number of completed frames (so 0 is the first frame)
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
    frameN-1;
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
    frameN + 1;// number of completed frames (so 0 is the first frame)
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
    
    var obj = ['A10Z4QVBJIA914', 'A10ZW7G8U02Y78', 'A110KENBXU7SUJ', 'A11MCPY8W4U6FL', 'A11PIARI7WALAX', 'A11W55U13HODN1', 'A1251G78LIS2M3', 'A12O9P1OTMJOPW', 'A145Z2L40FAB8J', 'A14EYTLSMJRPUK', 'A14WLAP6TCEKO0', 'A1522U5W2U1DMN', 'A15GLNTVDPCXUQ', 'A173A97OFDAX9F', 'A17LF7GCAFYMSL', 'A17M8NL5LMUB8S', 'A18MHXGNZMORFP', 'A1AT47U7BICOLR', 'A1B5O1E2T429ET', 'A1BM57TUNAQIXM', 'A1BQTDDVCHQM5T', 'A1DD39VFCRWI8G', 'A1DS5O8MSI3ZH0', 'A1F561VBW2J4PO', 'A1F9WGMST4WH88', 'A1FJINS24NQMIE', 'A1G6DFTYUM578N', 'A1G86FHR2YOW12', 'A1IFF4KV23FGHJ', 'A1IHSU4V83S0QP', 'A1IRT5KE42KIIF', 'A1JJYY622DGE5L', 'A1JLYIQ4HT4KQC', 'A1KXESMB9K7504', 'A1L1NNFVKS3G8T', 'A1LA6CIGBNDOH9', 'A1LB8HVSXK66U0', 'A1LEC9PYYYXM1U', 'A1LQZMAUNWD6FW', 'A1M4ID9VUYGX23', 'A1N7O7E8HC03D8', 'A1N956KBC4G13I', 'A1NF1XZTCVRG1V', 'A1NKBLZ8HK0W7', 'A1OJFN3L7YW143', 'A1P3HHEXWNLJMP', 'A1PHDT66U6IK4Q', 'A1Q96SFZ3JT4DE', 'A1QAIJ6OOQH3RL', 'A1QG4N21BF61PC', 'A1R1E7TZ9OHFIG', 'A1RQDBE1ZFIZ7U', 'A1RVMADIZE3BXK', 'A1SP3GBRZKMWZJ', 'A1TCDQNDVZFTLE', 'A1TM6E8F7B9RLM', 'A1TYD55JKQPYP4', 'A1UBV2NP7OVDVV', 'A1VB3MHF6YCDHJ', 'A1VC6F0FYG1L5I', 'A1VR1XQEQQXYUE', 'A1WOCD9SAYI07V', 'A1X4BKW05XDA8Q', 'A1X84T4EFW04GZ', 'A1XE5G7H6AO5HH', 'A1XVEKS9O73ERE', 'A1XZD3ZCEAAMAW', 'A1Z27X99F97JSR', 'A1ZCP2OQXOMAHN', 'A20GYPIRZOCBZK', 'A20J7F7PKEZZV2', 'A21OS9KG7JNHR7', 'A21STU4Z97J2Z6', 'A22NU39DIQOJZ', 'A240OTT1T85UGT', 'A24FN5BK5L9I2S', 'A255C5NDOBXZEC', 'A25XUZYL1Q2HBW', 'A288RSAGJBLY9', 'A28AXX4NCWPH1F', 'A28RL79ONUXTET', 'A29QDC93L0A4RW', 'A29TQSAJPLXZU7', 'A2AMQX0BQZXG9N', 'A2B23DWO4WZRA', 'A2B4GWF7MF7AOB', 'A2B7V3HDBDKHPN', 'A2BABNE11OM5GW', 'A2BBDH8DZD77AU', 'A2BVVFXMQU8AC7', 'A2D34R2A1L9JCH', 'A2DWDTU1KVNISP', 'A2G2S14YIRXEKP', 'A2G3OXONXDRM3J', 'A2G7DTL156PTKA', 'A2GDQ3XBEG44MI', 'A2GF8CV3WFQ5E9', 'A2H6B2E7W89FJ0', 'A2HFK76PFSAXBE', 'A2IG8L25SNKXYI', 'A2IWT7ERAYNPIK', 'A2KDNIZ9PIM8V2', 'A2KXARDIOGJL8T', 'A2LC2DS8OH7NCA', 'A2LF84L3K71GR2', 'A2LO8K013TX9FA', 'A2MDVYV4K2BTES', 'A2METANSJXXHRO', 'A2MOC4PTJYY15B', 'A2MX5YW3DSQ61W', 'A2NKW6JBEM4LL4', 'A2OG8XRYJ56HS7', 'A2PH5T3HCCCXIN', 'A2PR3J6Z0LBT1R', 'A2RP1QQW8ZTEB5', 'A2RSHXMN7VW1ZO', 'A2RWLFIP23FZA7', 'A2S0MB5JFG8DF', 'A2SHKXL4N38SK3', 'A2SR85I8JMO1ZZ', 'A2SVNXNMD7E7EH', 'A2TUUIV61CR0C7', 'A2UAGNKP1BPON', 'A2UQ2471GMCFQ6', 'A2V35L3RIRYYXV', 'A2WTBHTYWPRWK9', 'A2WZ8ZEB00LYF7', 'A2YNWB6RWLLKRO', 'A2ZGAH6NOSU2PO', 'A320BT7PLIQVZT', 'A34DWBBWZRLO1X', 'A34LV51D4PO2R', 'A34YH4SO3FPCA', 'A35CRYBHUZZZHO', 'A36FBIDN58N139', 'A374UTBB2JKAH0', 'A3774HPOUKYTX7', 'A37VN02VTEQIQ7', 'A37Y0IK0CSQ5N0', 'A38K45F4I17TKB', 'A3A1PMZDFJD218', 'A3B8DP6KHMP3OS', 'A3BZVFD82AVLT8', 'A3C5G8LGIAW0XL', 'A3CF0PNXE6QR8T', 'A3CGDCXIOVQNE6', 'A3CH1Z6J9R38G9', 'A3E50NZCJNLDG1', 'A3FMKTC7QI8V0H', 'A3H0133NSXWYTM', 'A3H35QRODK1C4K', 'A3HCP4KTFLQBCG', 'A3JE7KOBY3G4CJ', 'A3JLWUIWWZ8PQ6', 'A3K8WQICXRO3F8', 'A3L60SOWLYEDN2', 'A3LVLZS8S41ZD7', 'A3MCGKRH5KEZR8', 'A3MHKFOJIXO7QN', 'A3MJCHFORYK0US', 'A3MYPYBVHX7FQ2', 'A3NM5SP9NZ9BOJ', 'A3O5RKGH6VB19C', 'A3O7X46E3REM7I', 'A3OPXWTBJZ37M8', 'A3OUF2YNBGJV57', 'A3OZNTDPVDBJZV', 'A3PKTPXXORWR97', 'A3QOMMIZTW0XF1', 'A3RORPE1AZXP9T', 'A3RUL1OC4CAINK', 'A3S3WYVCVWW8IZ', 'A3UEEIQ1XI25TS', 'A3UQ5DF8VVD975', 'A3US4NGKXBVI48', 'A3VP27UUQ34OXK', 'A3VRDQJNM1IC0E', 'A3VZ5K4RRT6NN8', 'A3W4XLAHW96WQI', 'A50K8MTKFSNQT', 'A8M0LFNLLHHT1', 'A9AGF1C9DQXLM', 'A9HIJETW998RR', 'AA402T4YY1S7N', 'AA5ZDXAA2DLY1', 'AAO99PANYUZQ3', 'AB036D1V69QGV', 'ABNNSRB6Y5EFR', 'ABYFMKPTF0SHG', 'AC3W6TPL0I3AY', 'ADOA6CWS9LA9', 'AEKJ0Q3OITMRJ', 'AF6CWERDIMNIZ', 'AFCMHQWCV6N02', 'AFIRH8MV85A4D', 'AG0DR7A5Y1976', 'AG82E3YPR72O5', 'AGB57MX9TVKND', 'AHUO072N55J8H', 'AIFRN9GF0Q1ZI', 'AIS6Q7LL5926A', 'AKON4ZPGX5DYQ', 'AL6KD1ZLYLJ61', 'ALCSNULDVTDFF', 'ALF9AAZGQP4K5', 'AM4PAC2YQPREB', 'AMNRYECHXZY34', 'ANSS4CFQGM8WM', 'AOB5RZ3WSAZPS', 'AOIA4GWEH0CS5', 'AOR0FSL893AJ2', 'AOWLCXNXCSQAC', 'APYU0XBN08DHX', 'AQSML514QJ4MO', 'AS4NT97UP00R2', 'ASFBN5SC3SGDG', 'ASFLZUJ0OGAJF', 'AT9YSBZ2YIVOO', 'AUFOO8PU2BK37', 'AVXEDARJC5HLU', 'AVZSLLHJK3JF3', 'AXK9KFTESXJ31', 'AXO22N46CSNVT', 'AYJGQBBK6KXZ7', 'AYYBMS4XQJ9AP', 'AZBVDBOOKTL09', 'AZCGF2D7QIO10', 'AZOO1NLIYXGZ4'];
    if (Object.values(obj).indexOf(expInfo['worker_ID']) > -1) {
        infile = (String(expInfo['worker_ID']) + '_trial_list.csv');
        pathway = infile;
    } else{
        pathway = 'wolfe2_trial_list.csv';
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
    frameN-1;
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
    frameN + 1;// number of completed frames (so 0 is the first frame)
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
    frameN-1;
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
    frameN + 1;// number of completed frames (so 0 is the first frame)
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
    frameN-1;
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
    frameN + 1;// number of completed frames (so 0 is the first frame)
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
