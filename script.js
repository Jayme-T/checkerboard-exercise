'use strict';


function checkerboard() {
    for (var i = 0; i < 63; i++) {
        if (i % 2 === 0) {
            var div1 = document.createElement('div');
            document.body.appendChild(div1);
            div1.style.backgroundColor = 'rgb(0, 6, 2)';
            div1.style.width = '11.1%';
            div1.style.paddingBottom = `11.1%`;
            div1.style.float = 'left';
          }

            else {
                var div2 = document.createElement('div');
                document.body.appendChild(div2);
                div2.style.backgroundColor = 'rgb(240, 20, 40)';
                div2.style.width = '11.1%';
                div2.style.paddingBottom = `11.1%`;
                div2.style.float = 'left';

              }

            }
          }


window.onload = checkerboard();
