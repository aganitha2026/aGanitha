const patterns = {
  natural:{name:'Natural numbers',icon:'●',rule:'Counting numbers: add 1 each time.',formula:'n',terms:[1,2,3,4,5,6],type:'dots',tip:'Natural numbers help us count everyday things.'},
  odd:{name:'Odd numbers',icon:'✦',rule:'Numbers that leave 1 when divided by 2: add 2.',formula:'2n − 1',terms:[1,3,5,7,9,11],type:'odd',tip:'Every other number is odd — 1, 3, 5, 7…'},
  even:{name:'Even numbers',icon:'◆',rule:'Numbers divisible by 2: add 2.',formula:'2n',terms:[2,4,6,8,10,12],type:'even',tip:'Even numbers can always be shared into two equal groups.'},
  fibonacci:{name:'Virahanka / Fibonacci numbers',icon:'🌀',rule:'Add the two previous numbers to get the next one.',formula:'aₙ = aₙ₋₁ + aₙ₋₂',terms:[1,1,2,3,5,8],type:'dots',tip:'This pattern is named after the Indian scholar Virahanka and appears in nature.'},
  triangular:{name:'Triangular numbers',icon:'▲',rule:'Keep adding the next natural number.',formula:'n(n + 1) / 2',terms:[1,3,6,10,15],type:'triangle',tip:'Each term can be arranged to make a triangle.'},
  square:{name:'Square numbers',icon:'■',rule:'A number multiplied by itself.',formula:'n²',terms:[1,4,9,16,25],type:'square',tip:'Each term makes a perfect square array.'},
  cube:{name:'Cube numbers',icon:'◼',rule:'A number multiplied by itself three times.',formula:'n³',terms:[1,8,27,64],type:'cube',tip:'Cube numbers describe blocks in a cube: 2 × 2 × 2 = 8.'},
  pow2:{name:'Powers of 2',icon:'⚡',rule:'Double each time.',formula:'2ⁿ',terms:[1,2,4,8,16,32],type:'even',tip:'Powers of 2 appear in doubling games and computer memory.'},
  pow3:{name:'Powers of 3',icon:'⚡',rule:'Multiply by 3 each time.',formula:'3ⁿ',terms:[1,3,9,27,81],type:'odd',tip:'Each term is three times the term before it.'},
  centered:{name:'Centered hexagonal numbers',icon:'✿',rule:'One central dot with hexagonal rings around it.',formula:'3n(n − 1) + 1',terms:[1,7,19,37,61],type:'centered',tip:'Every new ring adds 6 more dots than the previous ring.'}
};

const picker=document.querySelector('#patternPicker'),display=document.querySelector('#sequenceDisplay'),stage=document.querySelector('#dotStage');
Object.entries(patterns).forEach(([key,p])=>picker.add(new Option(p.name,key)));
function dots(count,type){return `<div class="dots">${Array.from({length:Math.min(count,64)},()=>`<i class="dot ${type==='dots'?'':type}"></i>`).join('')}</div>`}
function shape(count,type,index){
  if(type==='square'){const side=index+1;return `<div class="shape-grid" style="grid-template-columns:repeat(${side},13px)">${Array.from({length:count},()=>'<i class="dot square"></i>').join('')}</div>`}
  if(type==='triangle'){let h=index+1,html='<div class="shape-grid" style="grid-template-columns:repeat('+(h*2-1)+',13px)">';for(let r=1;r<=h;r++)for(let c=1;c<=h*2-1;c++)html+=c>=h-r+1&&c<=h+r-1&&((c-(h-r+1))%2===0)?'<i class="dot"></i>':'<i style="width:13px"></i>';return html+'</div>'}
  if(type==='centered')return `<div class="shape-grid"><div class="term">${count}</div></div>`;
  return dots(count,type);
}
function renderPattern(){const p=patterns[picker.value];document.querySelector('#patternName').textContent=p.name;document.querySelector('#patternRule').textContent=p.rule;document.querySelector('#formula').textContent=p.formula;document.querySelector('#patternIcon').textContent=p.icon;document.querySelector('#patternTip').textContent=p.tip;display.innerHTML=p.terms.map((t,i)=>`<span class="term">${t}</span>${i<p.terms.length-1?'<span class="term-arrow">→</span>':''}`).join('');stage.innerHTML=p.terms.slice(0,5).map((t,i)=>`<div class="shape-unit">${shape(t,p.type,i)}<div class="shape-label">Term ${i+1}</div></div>`).join('')}
picker.addEventListener('change',renderPattern);renderPattern();

const questions=[
 {text:'Find the missing number.',seq:['47','48','?','50','51'],answer:'49',hint:'This is a counting pattern. Move forward by 1.',explain:'48 + 1 = 49.'},
 {text:'Find the missing term.',seq:['5','8','13','?','34'],answer:'21',hint:'Add the two terms before the blank.',explain:'8 + 13 = 21.'},
 {text:'Find the missing term.',seq:['8','16','?','64','128'],answer:'32',hint:'Each term is twice the previous term.',explain:'16 × 2 = 32.'},
 {text:'Find the missing term.',seq:['7','19','?','61','91'],answer:'37',hint:'The jumps grow by 6: +12, +18, +24, +30.',explain:'19 + 18 = 37.'},
 {text:'Find the missing number.',seq:['31','33','35','?','39'],answer:'37',hint:'Only every second counting number appears.',explain:'35 + 2 = 37.'},
 {text:'Find the missing number.',seq:['?','49','64','81','100'],answer:'36',hint:'These are numbers multiplied by themselves.',explain:'6 × 6 = 36.'},
 {text:'The sum of the first n odd numbers equals the nth square number. Find 1 + 3 + 5 + 7 + 9 + 11 + 13.',answer:'49',hint:'There are 7 odd numbers. Use the 7th square.',explain:'7² = 49.'},
 {text:'Find the final missing term.',seq:['3','6','10','15','21','15','10','6','?'],answer:'3',hint:'The additions +3, +4, +5, +6 are then reversed.',explain:'6 − 3 = 3.'},
 {text:'Complete this pattern.',seq:['27','?','125','216'],answer:'64',hint:'Each term is a number multiplied by itself three times.',explain:'4 × 4 × 4 = 64.'},
 {text:'Find the missing term.',seq:['15','21','?','36','45'],answer:'28',hint:'Keep adding the next counting number.',explain:'21 + 7 = 28.'},
 {text:'Sequence A: 1, 4, 9, 16, 25, 36 … Sequence B: 1, 3, 6, 10, 15, 21, 28, 36 … Which number appears in both?',kind:'radio',choices:['24','30','36'],answer:'36',hint:'Compare the last terms in both lists.',explain:'36 appears in both sequences.'},
 {text:'Fill in the blank.',seq:['68','70','72','?','76'],answer:'74',hint:'Every term is divisible by 2.',explain:'72 + 2 = 74.'},
 {text:'The sum of the first n odd numbers equals the nth square number. What is 1 + 3 + 5 + … + 23?',answer:'144',hint:'23 is the 12th odd number. Use the 12th square.',explain:'12² = 144.'},
 {text:'Complete the up-and-down pattern.',seq:['10','11','12','13','12','?','10'],answer:'11',hint:'The pattern rises by 1, then falls by 1.',explain:'12 − 1 = 11.'},
 {text:'Find the missing number.',seq:['3','9','?','81','243'],answer:'27',hint:'Each term is three times the previous term.',explain:'9 × 3 = 27.'},
 {text:'Find the missing number.',seq:['106','?','108','109','110'],answer:'107',hint:'This is a counting pattern.',explain:'106 + 1 = 107.'},
 {text:'Sequence A: 1, 2, 4, 8, 16, 32 … Sequence B: 1, 4, 9, 16, 25 … Which number appears in both?',kind:'radio',choices:['8','16','32'],answer:'16',hint:'Choose a number shown in both lists.',explain:'16 appears in both sequences.'},
 {text:'Find the missing number.',seq:['19','37','61','?','127'],answer:'91',hint:'Each difference grows by 6.',explain:'61 + 30 = 91.'},
 {text:'Find the missing number.',seq:['57','?','61','63','65'],answer:'59',hint:'Only numbers not divisible by 2 appear.',explain:'57 + 2 = 59.'},
 {text:'Complete this pattern that goes up and then down.',seq:['2','5','9','14','20','14','9','?'],answer:'5',hint:'The additions +3, +4, +5, +6 are then reversed.',explain:'9 − 4 = 5.'},
 {text:'Find the missing number.',seq:['36','49','?','81','100'],answer:'64',hint:'Look for 6², 7², 8², 9².',explain:'8 × 8 = 64.'},
 {text:'Find the missing term.',seq:['42','?','46','48','50'],answer:'44',hint:'Every term is divisible by 2.',explain:'42 + 2 = 44.'},
 {text:'Find the missing number.',seq:['13','21','?','55','89'],answer:'34',hint:'Add the two terms before the blank.',explain:'13 + 21 = 34.'},
 {text:'Find the missing number.',seq:['?','64','125','216'],answer:'27',hint:'These are 3³, 4³, 5³, 6³.',explain:'3 × 3 × 3 = 27.'},
 {text:'Find the missing term.',seq:['28','36','45','?','66'],answer:'55',hint:'The additions are +8, +9, +10, +11.',explain:'45 + 10 = 55.'},
 {text:'Fill in the blank.',seq:['32','?','128','256'],answer:'64',hint:'Double each term.',explain:'32 × 2 = 64.'},
 {text:'Find the missing term.',seq:['?','27','81','243'],answer:'9',hint:'Work backwards by dividing by 3.',explain:'27 ÷ 3 = 9.'},
 {text:'The centered hexagonal numbers begin 1, 7, 19, 37. Their sum is a cube number. Find 1 + 7 + 19 + 37.',answer:'64',hint:'The sum of the first 4 centered hexagonal numbers is 4³.',explain:'4³ = 64.'},
 {text:'The sum of the first 5 centered hexagonal numbers is a cube number. Find 1 + 7 + 19 + 37 + 61.',answer:'125',hint:'Use the cube of the number of terms.',explain:'5³ = 125.'},
 {text:'The first 5 centered hexagonal numbers add to 125. The first 6 add to 216. What is the 6th centered hexagonal number?',answer:'91',hint:'Subtract the first total from the second total.',explain:'216 − 125 = 91.'},
 {text:'A Koch snowflake starts with 3 sides. At each step, every side becomes 4 smaller sides. How many sides are there after 3 steps?',answer:'192',hint:'Multiply by 4 for each step: 3 × 4 × 4 × 4.',explain:'3 × 4³ = 192.'},
 {text:'A Koch snowflake has 12 sides after step 1. How many sides will it have after step 3?',answer:'192',hint:'There are two more steps; multiply by 4 twice.',explain:'12 × 4 × 4 = 192.'}
];

const qList=document.querySelector('#questionList'),scoreText=document.querySelector('#scoreText'),progressFill=document.querySelector('#progressFill');
const setup=document.querySelector('#studentSetup'),nameInput=document.querySelector('#studentName'),startBtn=document.querySelector('#startTestBtn'),tools=document.querySelector('#testTools'),timerBadge=document.querySelector('#timerBadge'),attemptBadge=document.querySelector('#attemptBadge'),countBadge=document.querySelector('#questionCount'),summaryView=document.querySelector('#summaryView'),historyView=document.querySelector('#studentHistory'),message=document.querySelector('#challengeMessage');
let current=0,attempts=0,score=0,student='',responses=[],seconds=60,timerId=null,testActive=false;
function toast(text){const t=document.querySelector('#toast');t.textContent=text;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500)}
function updateProgress(){scoreText.textContent=`${score} / ${questions.length} solved`;progressFill.style.width=`${score/questions.length*100}%`}
function choiceMarkup(q){if(q.kind==='radio')return `<div class="choice-row">${q.choices.map(c=>`<label class="choice"><input type="radio" name="activeQuestion" value="${c}"><span>${c}</span></label>`).join('')}</div>`;return `<div class="answer-line"><input inputmode="numeric" aria-label="Your answer" placeholder="Your answer"><button class="check-btn" id="checkBtn">Check answer</button></div>`}
function renderQuestion(){const q=questions[current];attempts=0;seconds=60;testActive=true;countBadge.textContent=`Question ${current+1} of ${questions.length}`;attemptBadge.textContent='Attempt 1 of 2';qList.innerHTML=`<article class="question-card"><div class="q-head"><span class="q-num">${current+1}</span><div class="q-text">${q.text}</div></div>${q.seq?`<div class="q-sequence">${q.seq.map(x=>`<span class="q-term ${x==='?'?'blank':''}">${x}</span>`).join('<span>→</span>')}</div>`:''}${choiceMarkup(q)}${q.kind==='radio'?'<button class="check-btn" id="checkBtn">Check answer</button>':''}<p class="feedback" id="feedback"></p></article>`;startTimer()}
function renderTimer(){timerBadge.textContent=`⏱ ${seconds} seconds`;timerBadge.classList.toggle('warning',seconds<=10)}
function startTimer(){clearInterval(timerId);renderTimer();timerId=setInterval(()=>{seconds--;renderTimer();if(seconds<=0)finishQuestion(false,'Time is up. ',true)},1000)}
function getAnswer(){const q=questions[current];return q.kind==='radio'?qList.querySelector('input:checked')?.value:qList.querySelector('input')?.value}
function lockQuestion(){qList.querySelectorAll('input,button').forEach(el=>el.disabled=true)}
function checkAnswer(){if(!testActive)return;const value=getAnswer(),q=questions[current];if(!value){toast('Choose or enter an answer first.');return}attempts++;const feedback=document.querySelector('#feedback'),good=String(value).trim()===q.answer;feedback.className='feedback '+(good?'good':'nope');if(good){finishQuestion(true,'✓ Correct! ');return}if(attempts===1){attemptBadge.textContent='Attempt 2 of 2';feedback.textContent='Not quite. Hint: '+q.hint;return}finishQuestion(false,'Two attempts used. ')}
function finishQuestion(correct,prefix='',timedOut=false){if(!testActive)return;testActive=false;clearInterval(timerId);const q=questions[current],feedback=document.querySelector('#feedback');lockQuestion();feedback.className='feedback '+(correct?'good':'nope');feedback.textContent=correct?prefix+q.explain:prefix+q.hint+' Correct answer: '+q.answer+'. '+q.explain;responses.push({number:current+1,correct,attempts:timedOut?0:attempts});if(correct)score++;updateProgress();const last=current===questions.length-1;qList.insertAdjacentHTML('beforeend',`<button class="check-btn next-btn" id="nextBtn">${last?'View my summary':'Next question →'}</button>`);message.textContent=correct?'Great work! Move to the next question when ready.':'Keep going — the next question starts with a fresh 60 seconds.'}
function nextQuestion(){if(current===questions.length-1){showSummary();return}current++;renderQuestion()}
function startTest(){student=nameInput.value.trim();if(!student){toast('Please enter the student name.');nameInput.focus();return}current=0;attempts=0;score=0;responses=[];updateProgress();setup.classList.add('hidden');tools.classList.remove('hidden');summaryView.classList.add('hidden');message.textContent='Read carefully — the timer begins now!';renderQuestion()}
function showSummary(){clearInterval(timerId);tools.classList.add('hidden');qList.innerHTML='';const incorrect=responses.filter(r=>!r.correct).length;summaryView.innerHTML=`<h3>${student}'s summary</h3><p>Score: ${score} / ${questions.length} correct • ${incorrect} to revise</p><table><thead><tr><th>Question</th><th>Result</th><th>Attempts used</th></tr></thead><tbody>${responses.map(r=>`<tr><td>${r.number}</td><td>${r.correct?'Correct ✓':'Review'}</td><td>${r.attempts || 'Time up'}</td></tr>`).join('')}</tbody></table>`;summaryView.classList.remove('hidden');message.textContent=`${student}, your timed challenge is complete!`;saveStudentSummary()}
function saveStudentSummary(){let saved=[];try{saved=JSON.parse(localStorage.getItem('patternStudentSummaries')||'[]')}catch(e){}saved.unshift({name:student,score,total:questions.length,date:new Date().toLocaleDateString()});saved=saved.slice(0,8);try{localStorage.setItem('patternStudentSummaries',JSON.stringify(saved))}catch(e){}renderHistory(saved)}
function renderHistory(saved){if(!saved){try{saved=JSON.parse(localStorage.getItem('patternStudentSummaries')||'[]')}catch(e){saved=[]}}historyView.innerHTML=saved.length?`<h3>Student summaries</h3>${saved.map(s=>`<div class="history-row"><span>${s.name}</span><span>${s.score} / ${s.total} • ${s.date}</span></div>`).join('')}`:''}
qList.addEventListener('click',e=>{if(e.target.id==='checkBtn')checkAnswer();if(e.target.id==='nextBtn')nextQuestion()});startBtn.addEventListener('click',startTest);nameInput.addEventListener('keydown',e=>{if(e.key==='Enter')startTest()});document.querySelector('#resetBtn').addEventListener('click',()=>{clearInterval(timerId);testActive=false;tools.classList.add('hidden');qList.innerHTML='';summaryView.classList.add('hidden');setup.classList.remove('hidden');nameInput.value='';score=0;updateProgress();message.textContent='Enter a student name to begin the timed challenge.';nameInput.focus()});updateProgress();renderHistory();
document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');document.querySelector('#exploreView').classList.toggle('hidden',tab.dataset.view!=='explore');document.querySelector('#practiceView').classList.toggle('hidden',tab.dataset.view!=='practice')}));
