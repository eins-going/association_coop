;(function(){
  var toggle=document.querySelector('.nav-toggle');
  var masthead=document.querySelector('.masthead');
  if(!toggle||!masthead)return;
  toggle.addEventListener('click',function(){
    var open=masthead.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');
  });
  masthead.querySelectorAll('.main-nav a').forEach(function(link){
    link.addEventListener('click',function(){
      masthead.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','메뉴 열기');
    });
  });
  window.addEventListener('resize',function(){
    if(window.innerWidth>960){masthead.classList.remove('open');toggle.setAttribute('aria-expanded','false')}
  });
})();

;(function(){
  var courseList=document.querySelector('.course-list');
  if(!courseList)return;

  var panelCopy={
    syllabus:{
      label:'SYLLABUS',title:'강의계획서',
      intro:'과목의 학습목표와 수업 구성, 주차별 주제를 확인합니다.',
      items:[['학습목표','조합경영의 핵심 개념을 이해하고 실제 조직의 문제를 진단·설명할 수 있도록 합니다.'],['수업구성','총 12강 · 이론강의 · 사례토론 · 적용과제'],['주차별 흐름','기초개념 → 제도와 사례 → 분석·평가 → 현장 적용'],['평가방식','사례분석, 수업 참여와 최종 적용과제를 중심으로 구성할 예정입니다.']]
    },
    materials:{
      label:'COURSE MATERIALS',title:'강의자료',
      intro:'저작권과 개인정보를 확인한 자료부터 강의 순서에 맞춰 제공합니다.',
      items:[['강의노트','핵심개념과 주요 도표를 정리한 PDF'],['읽기자료','논문, 법령, 제도자료와 사례'],['사례·과제','토론사례, 진단표와 실습자료'],['공개상태','개설 준비 중 · 자료 확정 후 순차 공개']]
    },
    lecture:{
      label:'LECTURES',title:'강의듣기',
      intro:'강의 영상 또는 음성 콘텐츠를 차시별로 이용하는 공간입니다.',
      items:[['제공방식','차시별 영상 · 음성 · 자막 또는 강의요약'],['학습순서','강의소개 → 본 강의 → 핵심정리 → 확인문제'],['이용기준','공개 강의와 회원 전용 강의를 구분하여 안내'],['현재상태','촬영 및 공개 기준 준비 중 · 아직 재생 가능한 강의 없음']]
    }
  };

  courseList.addEventListener('click',function(event){
    var closeButton=event.target.closest('.course-rollup-close');
    if(closeButton){
      var openCourse=closeButton.closest('article');
      var openPanel=openCourse&&openCourse.querySelector('.course-rollup');
      if(openPanel){openPanel.hidden=true;openPanel.innerHTML='';}
      if(openCourse)openCourse.querySelectorAll('[data-course-panel]').forEach(function(item){item.setAttribute('aria-expanded','false');});
      return;
    }
    var button=event.target.closest('[data-course-panel]');
    if(!button)return;
    var course=button.closest('article');
    var rollup=course.querySelector('.course-rollup');
    var type=button.getAttribute('data-course-panel');
    var isOpen=button.getAttribute('aria-expanded')==='true';

    course.querySelectorAll('[data-course-panel]').forEach(function(item){
      item.setAttribute('aria-expanded','false');
    });
    if(isOpen){rollup.hidden=true;rollup.innerHTML='';return;}

    var copy=panelCopy[type];
    var courseName=course.querySelector('.course-main h3').textContent;
    var professor=course.querySelector('.course-main dd').textContent;
    rollup.innerHTML='<div class="course-rollup-head"><div><span>'+copy.label+'</span><h4>'+courseName+' · '+copy.title+'</h4><p>'+copy.intro+'</p></div><div class="course-rollup-meta"><b>'+professor+'</b><button class="course-rollup-close" type="button" aria-label="'+courseName+' '+copy.title+' 닫기">×</button></div></div><div class="course-rollup-grid">'+copy.items.map(function(item){return '<div><b>'+item[0]+'</b><p>'+item[1]+'</p></div>';}).join('')+'</div>';
    rollup.hidden=false;
    button.setAttribute('aria-expanded','true');
  });
})();

;(function(){
  var faculty=document.querySelector('.faculty-grid');
  if(!faculty)return;
  faculty.addEventListener('click',function(event){
    var button=event.target.closest('.faculty-research-toggle,.faculty-career-toggle');
    if(!button)return;
    var panel=button.nextElementSibling;
    var isResearch=button.classList.contains('faculty-research-toggle');
    if(!panel||(!panel.classList.contains('faculty-publication')&&!panel.classList.contains('faculty-career')))return;
    var open=button.getAttribute('aria-expanded')==='true';
    button.setAttribute('aria-expanded',String(!open));
    button.querySelector('span').textContent=isResearch?(open?'주요 연구실적 보기':'주요 연구실적 닫기'):(open?'소속·경력 보기':'소속·경력 닫기');
    button.querySelector('i').textContent=open?'＋':'−';
    panel.hidden=open;
  });
})();

;(function(){
  var highlight=document.querySelector('.event-site .event-highlight');
  if(!highlight)return;

  var events=[
    {image:'assets/images/events/event-poster-conference.png',type:'학술대회',state:'개최 준비',title:'한국조합경영학회 창립 학술대회',date:'2026년 하반기 예정',venue:'장소 확정 후 안내'},
    {image:'assets/images/events/event-poster-forum.png',type:'조합경영포럼',state:'기획 중',title:'조합 거버넌스와 조합원 가치 포럼',date:'2026년 하반기 예정',venue:'온·오프라인 병행 검토'},
    {image:'assets/images/events/event-poster-policy.png',type:'정책세미나',state:'기획 중',title:'법정조합의 회계·감사와 정보공개',date:'2026년 하반기 예정',venue:'장소 확정 후 안내'},
    {image:'assets/images/events/event-poster-webinar.png',type:'웨비나',state:'기획 중',title:'조합경영 연구방법론 온라인 세미나',date:'2026년 일정 미정',venue:'온라인 개최'}
  ];

  var section=document.createElement('section');
  section.className='event-upcoming-band';
  section.id='upcoming';
  section.setAttribute('aria-labelledby','upcoming-title');
  section.innerHTML='<div class="wrap"><div class="upcoming-band-head"><div><span>UPCOMING EVENTS</span><h1 id="upcoming-title">예정 학술행사</h1></div><p>포스터와 핵심 정보로 준비 중인 행사를 확인하세요.</p></div><div class="upcoming-card-grid">'+events.map(function(item,index){return '<a class="upcoming-event-card" href="#archive"><img src="'+item.image+'" alt="'+item.title+' 포스터" '+(index?'loading="lazy"':'')+'><div><span class="upcoming-type">'+item.type+'</span><em>'+item.state+'</em><h2>'+item.title+'</h2><dl><div><dt>일정</dt><dd>'+item.date+'</dd></div><div><dt>장소</dt><dd>'+item.venue+'</dd></div></dl><b>상세 정보 보기 →</b></div></a>';}).join('')+'</div></div>';
  highlight.replaceWith(section);

  var resultCopy=document.querySelector('.event-result-head p');
  if(resultCopy)resultCopy.innerHTML='예정 행사와 지난 행사를 한곳에서 확인합니다.';
})();

;(function(){
  var target=document.querySelector('.about-site .bylaws-content');
  if(!target || target.getAttribute('data-full-bylaws') === 'true')return;

  fetch('bylaws.html').then(function(response){
    if(!response.ok)throw new Error('정관 전문을 불러오지 못했습니다.');
    return response.text();
  }).then(function(html){
    var documentCopy=new DOMParser().parseFromString(html,'text/html');
    var chapters=Array.from(documentCopy.querySelectorAll('.statute>section'));
    if(!chapters.length)throw new Error('정관 조문을 찾지 못했습니다.');

    var notice=document.createElement('div');
    notice.className='bylaws-notice';
    notice.textContent='아래 내용은 정관 전문과 동일합니다. 정관 전문 페이지의 조문이 변경되면 이곳에도 같은 내용이 반영됩니다.';
    var fragment=document.createDocumentFragment();
    fragment.appendChild(notice);

    chapters.forEach(function(chapter,index){
      var copy=chapter.cloneNode(true);
      var heading=copy.querySelector('h2');
      var title=heading?heading.textContent.trim():'정관';
      if(heading)heading.remove();
      var match=title.match(/^(제\d+장)\s*(.*)$/);
      var details=document.createElement('details');
      if(index===0)details.open=true;
      var summary=document.createElement('summary');
      summary.innerHTML=match?'<span>'+match[1]+'</span>'+match[2]:'<span>부칙</span> 시행 및 경과조치';
      var content=document.createElement('div');
      while(copy.firstChild)content.appendChild(copy.firstChild);
      details.appendChild(summary);
      details.appendChild(content);
      fragment.appendChild(details);
    });

    target.replaceChildren(fragment);
    var link=document.querySelector('.about-site .bylaws-side .btn');
    if(link)link.textContent='정관 별도 페이지 보기';
  }).catch(function(){
    var notice=target.querySelector('.bylaws-notice');
    if(notice)notice.textContent='정관 전문을 불러오지 못했습니다. 왼쪽의 정관 전문 보기 버튼을 이용해 주세요.';
  });
})();

;(function(){
  var table=document.querySelector('.about-site .officer-table');
  if(!table||Array.from(table.querySelectorAll('.officer-row b')).some(function(item){return item.textContent.trim()==='사무총장';}))return;
  var president=Array.from(table.querySelectorAll('.officer-row')).find(function(row){
    var role=row.querySelector('b');
    return role&&role.textContent.trim()==='회장';
  });
  if(!president)return;
  var secretary=document.createElement('div');
  secretary.className='officer-row';
  secretary.setAttribute('role','row');
  secretary.innerHTML='<b>사무총장</b><span>조승현</span><span>서울대학교 경제학박사</span><em>창립 임원</em>';
  president.insertAdjacentElement('afterend',secretary);
})();

;(function(){
  var label=document.querySelector('.college-hero-grid>div:first-child>span');
  if(!label)return;
  label.className='college-school-name';
  label.innerHTML='<b>한국조합경영대학교</b><small>KSMO MBA</small>';
})();

;(function(){
  var description=document.querySelector('.college-faculty .college-section-head>p');
  if(description)description.remove();
})();

;(function(){
  var select=document.querySelector('#issue-select');
  var panels=Array.from(document.querySelectorAll('.journal-site .issue-panel'));
  if(!select||!panels.length)return;

  function showIssue(){
    panels.forEach(function(panel){
      panel.hidden=panel.id!==select.value;
    });
  }

  select.addEventListener('change',showIssue);
  showIssue();
})();
