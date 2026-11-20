const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname,'..','copeak-warp.js'),'utf8');
const page = fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const css = fs.readFileSync(path.join(__dirname,'..','copeak-warp.css'),'utf8');

function environment(reduce = false) {
  let capture, timeouts = [], routed = 0;
  const makeClassList = initial => {
    const set = new Set(initial);
    return {add(x){set.add(x)},remove(x){set.delete(x)},contains(x){return set.has(x)}};
  };
  const hub = {id:'copeakHomeHub',hidden:false,style:{setProperty(){}},classList:makeClassList([]),
    getBoundingClientRect(){return {left:0,top:0}}};
  const home = {classList:makeClassList(['cp-dashboard-mode']),querySelectorAll(){return []}};
  const target = {
    dataset:{cpAction:'read'},disabled:false,tagName:'BUTTON',
    classList:makeClassList([]),getBoundingClientRect(){return {left:20,top:20,width:140,height:80}},
    click(){routed++},isConnected:true,
    matches(){return false},hasAttribute(){return false}
  };
  const overlay = {style:{setProperty(){}},setAttribute(){},remove(){this.removed=true}};
  const doc = {
    documentElement:{classList:makeClassList([])},
    body:{appendChild(el){this.layer=el}},
    getElementById(id){if(id==='homeScreen')return home;if(id==='copeakHomeHub')return hub;return null;},
    createElement(){return overlay},
    addEventListener(type,fn,captureFlag){if(type==='click'&&captureFlag)capture=fn;}
  };
  const window = {matchMedia(){return {matches:reduce}},setTimeout(cb,ms){timeouts.push({cb,ms})},addEventListener(){}};
  vm.runInNewContext(source,{window,document:doc});
  function send(button=target,opts={}) {
    let prevented=false,stopped=false;
    const event={
      target:{closest(){return button}},
      button:0,clientX:60,clientY:55,detail:1,...opts,
      preventDefault(){prevented=true},
      stopImmediatePropagation(){stopped=true}
    };
    capture(event);
    return {prevented,stopped};
  }
  return {send,flush(){timeouts.sort((a,b)=>a.ms-b.ms).forEach(t=>t.cb());timeouts=[]},
    target,overlay,doc,window,get routed(){return routed},get scheduled(){return timeouts.map(t=>t.ms)}};
}

test('navigation is delayed only until the visual warp covers the page',()=>{
  const env = environment();
  const result = env.send();
  assert.deepEqual(result,{prevented:true,stopped:true});
  assert.equal(env.routed,0);
  assert.deepEqual(env.scheduled,[300,750]);
  env.flush();
  assert.equal(env.routed,1);
  assert.equal(env.overlay.removed,true);
  assert.equal(env.window.CopeakWarpNavigation.active,false);
});
test('reduced-motion preference bypasses animation and preserves original click',()=>{
  const env = environment(true);
  assert.deepEqual(env.send(),{prevented:false,stopped:false});
  assert.equal(env.scheduled.length,0);
});
test('non-navigation control is never intercepted',()=>{
  const env=environment();
  assert.deepEqual(env.send(null),{prevented:false,stopped:false});
});
test('modifier keys preserve native link or new-tab behavior',()=>{
  const env=environment();
  assert.deepEqual(env.send(env.target,{ctrlKey:true}),{prevented:false,stopped:false});
  assert.equal(env.scheduled.length,0);
});
test('repeated clicks during transit are consumed instead of navigating twice',()=>{
  const env=environment();
  env.send();
  assert.deepEqual(env.send(),{prevented:true,stopped:true});
  env.flush();
  assert.equal(env.routed,1);
});
test('targets only dashboard and page navigation; not mic/recording/scoring controls',()=>{
  assert.match(source,/#copeakHomeHub \.cp-home-cards/);
  assert.match(source,/#copeakHomeHub \.cp-home-bottom/);
  assert.match(source,/#homeScreen \.cp-page/);
  assert.doesNotMatch(source,/micBtn|toggleRecording|submitScoreToForm/);
  assert.match(css,/prefers-reduced-motion:reduce/);
  assert.match(page,/copeak-warp\.js/);
  assert.match(page,/copeak-warp\.css/);
});
