const blocks = document.querySelectorAll('.target');

const startPos = {
  y: '0px',
  x: '0px',
  block: null,
}

blocks.forEach((el) => {
  el.addEventListener('dblclick', (ev) => {
    el.classList.add('active');
    moveBlock(ev, el);
    startPos.block = el;
    el.onclick = () => {
      el.classList.remove('active');
    }
  })
  el.addEventListener('mousedown', (ev) => {
    startPos.block = el;
    moveBlock(ev, el);
  })
  el.addEventListener('touchstart', (ev) => {
    startPos.block = el;
    moveBlock(ev.touches[0], el);
  });
})

document.addEventListener('touchstart', (ev) => {
  let target = ev.target.closest('.target');
  if (!target) return;
  
  if (!touchtime) {
    touchtime = Date.now();
  } else {
    if (Date.now() - touchtime < 200) {
      startPos.block = target;
      target.classList.add('active');
    } else {
      touchtime = Date.now();
    }
  }
});

function resetPos() {
  startPos.block.style.left = startPos.x;
  startPos.block.style.top = startPos.y;
  startPos.block.classList.remove('active');
  document.onmousemove = null;
  document.ontouchmove = null;
  startPos.block.onmouseup = null;
  startPos.style.zIndex = 1;
}

document.addEventListener('touchmove', ev => {
  if (ev.touches.length < 2) {
    moveAt(ev.touches[0], startPos.block);
  } else {
    resetPos();
  }
})

document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') {
    resetPos();
  }
});


function moveBlock(e, el) {
  moveAt(e, el);
  el.style.zIndex = 2;
  [startPos.y, startPos.x] = [el.style.top, el.style.left];
  
  document.onmousemove = function(e) {
    moveAt(e, el);
  }

  el.onmouseup = function() {
    document.onmousemove = null;
    el.onmouseup = null;
  }
}

function moveAt(e, el) {
    el.style.left = e.pageX - el.offsetWidth / 2 + 'px';
    el.style.top = e.pageY - el.offsetHeight / 2 + 'px';
}
