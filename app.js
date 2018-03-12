

const subtitles = {
  hls_js: '5a988177725fdd0001001237',
  hls_flash: '5a988178725fdd0001001251',
  mp4_js: '5a98817c725fdd000100127b',
  mp4_flash: '5a98817c725fdd0001001298'
}

const google_analytics = {
  hls_js: '5a7dc5cc5fcac111b501285a',
  hls_flash: '5a7dc6b83e527f121d012574',
  mp4_js: '5a7dc6fb45793d11c70120ce',
  mp4_flash: '5a7dc73a5fcac111b50128d7'
}

const social_sharing = {
  hls_js: '5a988154725fdd0001000ea4',
  hls_flash: '5a988154725fdd0001000ebd',
  mp4_js: '5a988154725fdd0001000ed9',
  mp4_flash: '5a988158725fdd0001000eff'
}

const age_gate = {
  hls_js: '5a988153725fdd0001000e89',
  hls_flash: '5a98814e725fdd00010007bc',
  mp4_js: '5a98814e725fdd00010007dc',
  mp4_flash: '5a988151725fdd0001000e65'
}

const engagement_analytics = {
  hls_js: '5a98815f725fdd0001000fc3',
  hls_flash: '5a988160725fdd0001000fe1',
  mp4_js: '5a988160725fdd0001000ffa',
  mp4_flash: '5a988164725fdd000100101d'
}

const bitrate_selection = {
  hls_js: '5a988166725fdd0001001077',
  hls_flash: '5a988167725fdd0001001090',
  mp4_js: '5a988164725fdd0001001036',
  mp4_flash: '5a988165725fdd0001001054'
}

const bitrate_switching = {
  hls_js: '5a98816b725fdd00010010d1',
  hls_flash: '5a98816c725fdd00010010ef',
  mp4_js: '5a98816b725fdd00010010b3',
  mp4_flash: '5a98816d725fdd000100110d'
}

const player_render = {
  hls_js: '5a988171725fdd000100117f',
  hls_flash: '5a98816e725fdd0001001127',
  mp4_js: '5a988170725fdd0001001159',
  mp4_flash: '5a988170725fdd000100114d'
}

const fullscreen_playback = {
  hls_js: '5a988175725fdd00010011fa',
  hls_flash: '5a988175725fdd0001001215',
  mp4_js: '5a988174725fdd00010011e1',
  mp4_flash: '5a988172725fdd00010011ba'
}

const theoCases = {
  subtitles: subtitles,
  google_analytics: google_analytics,
  social_sharing: social_sharing,
  age_gate: age_gate,
  engagement_analytics: engagement_analytics,
  bitrate_selection: bitrate_selection,
  bitrate_switching: bitrate_switching,
  player_render: player_render,
  fullscreen_playback: fullscreen_playback
};


console.log(theoCases);
  
let select = document.createElement('select');

for(let property in theoCases) {
  console.log(theoCases[property]);
  const hls_js = `${property} ${theoCases[property].hls_js}`;
  const hls_flash = `${property} ${theoCases[property].hls_flash}`;
  const mp4_js = `${property} ${theoCases[property].mp4_js}`;
  const mp4_flash = `${property} ${theoCases[property].mp4_flash}`;

  const el1 = document.createElement('option');
  el1.textContent = `${property} hls_js`;
  el1.value = theoCases[property].hls_js;

  const el2 = document.createElement('option');
  el2.textContent = `${property} hls_flash`;
  el2.value = theoCases[property].hls_flash;

  const el3 = document.createElement('option');
  el3.textContent = `${property} mp4_js`;
  el3.value = theoCases[property].mp4_js;

  const el4 = document.createElement('option');
  el4.textContent = `${property} mp4_flash`;
  el4.value = theoCases[property].mp4_flash;  

  select.appendChild(el1);
  select.appendChild(el2);
  select.appendChild(el3);
  select.appendChild(el4);

}

select.setAttribute('id', 'selector');
select.setAttribute('onchange', handleOptionChange);

updateVideoPlayer(theoCases[Object.keys(theoCases)[0]].hls_js);

document.querySelector('#dropdown').appendChild(select);

select.addEventListener('change', handleOptionChange);

function handleOptionChange(event) {
  const id = event.target.value;
  updateVideoPlayer(id);
}

function updateVideoPlayer(id) {
  const template = `
    <iframe allowfullscreen="allowfullscreen" frameborder="0" height="315" src="https://player.theo-harness.stage.zy.pe/embed/${id}.html?app_key=ETTTyetKuRlaZGxQogjzwAQlhZpZJqxBmM3bRaGGVJQTwVEpt1vpTCiuRGU0jVFR" width="560"></iframe>
  `;

  const player = document.querySelector('#player');
  player.innerHTML = template;
}



