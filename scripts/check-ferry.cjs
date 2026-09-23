// Schedule boundaries and interruption behavior affect customers' return journeys.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const code=fs.readFileSync(path.join(__dirname,'../assets/ferry.js'),'utf8');
const sandbox={window:{},document:{querySelectorAll:()=>[]}};vm.runInNewContext(code,sandbox);
const derive=sandbox.window.UdoFerry.derive;
let checks=0;const eq=(a,b)=>{assert.equal(a,b);checks++;};
const now=Date.parse('2026-09-20T02:10:00Z'),day=Date.parse('2026-09-19T15:00:00Z');
const normal={date:'2026-09-20',serviceDayStart:day,status:'normal',memo:'당일 안내',updatedAt:now-1000,lastDeparture:null};
eq(derive(normal,now).next,690);eq(derive(normal,now).confirmed,true);
eq(derive(null,now).next,690);eq(derive(null,now).remaining,20);eq(derive(null,now).confirmed,false);
eq(derive(null,now).last,1080);eq(derive(null,now).returnAt,1020);
eq(derive(null,Date.parse('2026-09-20T03:30:00Z')).next,780);
eq(derive(null,Date.parse('2026-09-19T22:59:59Z')).next,null);
eq(derive(null,Date.parse('2026-09-19T23:00:00Z')).next,510);
eq(derive(null,Date.parse('2026-09-20T08:59:30Z')).remaining,1);
eq(derive(null,Date.parse('2026-09-20T09:00:00Z')).status,'closed');
eq(derive({...normal,status:'cancel'},now).next,null);
eq(derive({...normal,status:'shortened',lastDeparture:'17:15'},Date.parse('2026-09-20T08:05:00Z')).next,1035);
eq(derive({...normal,status:'shortened',lastDeparture:'17:15'},Date.parse('2026-09-20T08:15:00Z')).status,'closed');
eq(derive({...normal,status:'shortened',lastDeparture:'25:99'},now).confirmed,false);
eq(derive({...normal,date:'2026-09-19',status:'cancel'},now).status,'normal');
eq(derive({...normal,status:'cancel'},Date.parse('2026-09-20T15:00:00Z')).confirmed,false);
eq(derive({...normal,updatedAt:now+90000},now).confirmed,false);
eq(derive({...normal,serviceDayStart:day-86400000},now).confirmed,false);
eq(derive({...normal,memo:'x'.repeat(501)},now).confirmed,false);
for(const [month,last] of [[1,1020],[2,1020],[3,1050],[4,1080],[5,1110],[6,1110],[7,1110],[8,1110],[9,1080],[10,1050],[11,1020],[12,1020]])eq(derive(null,Date.parse(`2026-${String(month).padStart(2,'0')}-01T00:00:00Z`)).last,last);
(async()=>{
 const status={textContent:''},countdown={hidden:false},handlers={},intervals=[];
 const button={textContent:'',addEventListener:(event,fn)=>{handlers.refresh=fn;}};
 const panel={dataset:{},querySelectorAll:selector=>selector==='[data-ferry-status]'?[status]:selector==='[data-ferry-countdown]'?[countdown]:selector==='[data-ferry-refresh]'?[button]:[]};
 let clock=now,calls=0;
 class TestDate extends Date{static now(){return clock;}}
 const live={window:{addEventListener:()=>{}},document:{hidden:false,querySelectorAll:()=>[panel],querySelector:()=>({content:'https://example.test/status.json'}),addEventListener:()=>{}},Date:TestDate,AbortSignal:{timeout:()=>undefined},setInterval:fn=>intervals.push(fn),fetch:async(url,options)=>{eq(options.method,'GET');eq(options.credentials,'omit');if(calls++)throw new Error('Offline');return{ok:true,headers:{get:()=>null},json:async()=>({...normal,status:'cancel'})};}};
 vm.runInNewContext(code,live);await new Promise(setImmediate);
 eq(panel.dataset.ferryState,'cancel');eq(countdown.hidden,true);
 await handlers.refresh();eq(panel.dataset.ferryState,'cancel');eq(status.textContent,'결항 안내');
 clock=Date.parse('2026-09-21T00:00:00Z');intervals[0]();eq(panel.dataset.ferryState,'normal');eq(countdown.hidden,false);
 console.log(`PASS: ${checks} ferry schedule, KST boundary, override and connection-recovery assertions`);
})().catch(error=>{console.error(error);process.exitCode=1;});
