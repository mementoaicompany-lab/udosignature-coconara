/* Independent GET-only view of the original guide's public ferry notice.
   Standard schedule and countdown match guide.udosignature.com (2026-09-23).
   No Firebase SDK, authentication, visitor counters, or database writes. */
(() => {
 'use strict';
 const KST=9*3600000, DAY=86400000;
 const time=n=>`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;
 function derive(record,epoch){
  const k=new Date(epoch+KST),date=k.toISOString().slice(0,10),month=k.getUTCMonth()+1;
  const minute=k.getUTCHours()*60+k.getUTCMinutes()+k.getUTCSeconds()/60;
  const dayStart=Math.floor((epoch+KST)/DAY)*DAY-KST;
  const usual=[1,2,11,12].includes(month)?1020:[3,10].includes(month)?1050:[4,9].includes(month)?1080:1110;
  const permitted=['status','date','serviceDayStart','memo','lastDeparture','updatedAt','updatedByUID'];
  const valid=record&&typeof record==='object'&&!Array.isArray(record)&&Object.keys(record).every(key=>permitted.includes(key))&&record.date===date&&record.serviceDayStart===dayStart&&Number.isInteger(record.updatedAt)&&record.updatedAt>=dayStart&&record.updatedAt<=epoch+60000&&['normal','shortened','cancel'].includes(record.status)&&typeof record.memo==='string'&&record.memo.length<=500&&(record.status==='shortened'?typeof record.lastDeparture==='string'&&/^([01]\d|2[0-3]):[0-5]\d$/.test(record.lastDeparture):record.lastDeparture==null);
  let status=valid?record.status:'normal',last=usual;
  if(status==='shortened'){const [h,m]=record.lastDeparture.split(':').map(Number);last=h*60+m;}
  if(['normal','shortened'].includes(status)&&minute>=last)status='closed';
  const active=['normal','shortened'].includes(status);
  const next=active&&minute>=480?Math.min((Math.floor(minute/30)+1)*30,last):null;
  return {date,month,status,last,returnAt:Math.max(0,last-60),next,remaining:next===null?null:Math.max(0,Math.ceil(next-minute)),memo:valid?record.memo:'',confirmed:Boolean(valid)};
 }
 window.UdoFerry=Object.freeze({derive});
 const panels=[...document.querySelectorAll('[data-ferry]')];if(!panels.length)return;
 let record=null,receivedAt=0,offset=0,busy=false,failed=false;
 const endpoint=document.querySelector('meta[name="udosignature-ferry-source"]')?.content;
 function write(panel,selector,value){panel.querySelectorAll(selector).forEach(el=>{if(el.textContent!==value)el.textContent=value;});}
 function render(){
  const s=derive(record,Date.now()+offset);
  panels.forEach(panel=>{
   panel.dataset.ferryState=s.status;
   write(panel,'[data-ferry-status]',{normal:s.confirmed?'정상 운항 안내':'기본 시간표 안내',shortened:'단축 운항 안내',cancel:'결항 안내',closed:'오늘 운항 종료'}[s.status]);
   write(panel,'[data-ferry-last]',s.status==='cancel'?'결항':time(s.last));
   write(panel,'[data-ferry-return]',s.status==='cancel'?'매장 문의':`${time(s.returnAt)}까지`);
   write(panel,'[data-ferry-clock]',s.next!==null?time(s.next):s.status==='cancel'?'결항':s.status==='closed'?'운항 종료':'항구 확인');
   write(panel,'[data-ferry-label]',s.next!==null?(s.next%60?'유동 출발':'출항'):'');
   write(panel,'[data-ferry-remaining]',s.remaining===null?'':String(s.remaining));
   panel.querySelectorAll('[data-ferry-countdown]').forEach(el=>el.hidden=s.remaining===null);
   write(panel,'[data-ferry-note]',s.status==='cancel'?'오늘 결항 안내가 게시되었습니다. 예약 내용은 코코나라에 문의해 주세요.':s.status==='closed'?'오늘 마지막 배 시간이 지났습니다. 다음 이용일의 운항은 항구에 확인해 주세요.':s.confirmed?'오늘 운항 공지를 반영했습니다. 실제 출항은 기상·만선·항구 상황에 따라 달라질 수 있습니다.':'평상시 정상 운항 기준 안내입니다. 탑승 전 항구와 목적지를 꼭 확인해 주세요.');
   const checked=receivedAt?`한국시간 ${new Date(receivedAt+offset+KST).toISOString().slice(11,16)} 확인`:'운항 공지를 확인하고 있습니다.';
   write(panel,'[data-ferry-checked]',`${checked} · ${s.confirmed?'오늘 공지 반영':'월별 기본 시간표'}${failed?' · 재연결 중':''}`);
   write(panel,'[data-ferry-memo]',s.memo);panel.querySelectorAll('[data-ferry-memo]').forEach(el=>el.hidden=!s.memo);
  });
 }
 async function refresh(){
  if(busy||document.hidden||!endpoint)return;busy=true;
  panels.forEach(p=>p.querySelectorAll('[data-ferry-refresh]').forEach(b=>{b.disabled=true;b.textContent='확인 중…';}));
  try{
   const response=await fetch(endpoint,{method:'GET',credentials:'omit',cache:'no-store',referrerPolicy:'no-referrer',signal:AbortSignal.timeout(8000)});
   if(!response.ok)throw new Error('Status unavailable');
   const remoteTime=Date.parse(response.headers.get('date')||'');if(Number.isFinite(remoteTime))offset=remoteTime-Date.now();
   record=await response.json();receivedAt=Date.now();failed=false;
  }catch{failed=true;/* Preserve a valid notice on transient errors; derive expires it at KST midnight. */}
  finally{busy=false;panels.forEach(p=>p.querySelectorAll('[data-ferry-refresh]').forEach(b=>{b.disabled=false;b.textContent='새로 확인';}));render();}
 }
 panels.forEach(p=>p.querySelectorAll('[data-ferry-refresh]').forEach(b=>{b.hidden=false;b.addEventListener('click',refresh);}));
 document.addEventListener('visibilitychange',()=>{if(!document.hidden){render();refresh();}});
 window.addEventListener('online',refresh);render();refresh();
 setInterval(()=>{if(!document.hidden)render();},1000);setInterval(refresh,60000);
})();
