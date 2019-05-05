      window.onload = () => {
          subscribedItemsButtons();
      }

      const subscribedItemsButtons = () => {
          let itemCounter = 0;
          let subscribeCounter = 5;

          let return1 = document.getElementById('item-1-return-button');
          return1.onclick = () => {
            $("#item-1-card").insertBefore("#return-bin-container div:first-child");
            subscribeCounter--;
            itemCounter++;
            document.getElementById('return-bin-text').innerHTML = 'Return Bin: ' + '(' + itemCounter + ') items';
            document.getElementById('subscribe-bin-text').innerHTML = 'Return Bin: ' + '(' + itemCounter + ') items';
          }
        
          let return2 = document.getElementById('item-2-return-button');
          return2.onclick = () => {
            $("#item-2-card").insertBefore("#return-bin-container div:first-child");
            itemCounter++;
            document.getElementById('return-bin-text').innerHTML = 'Return Bin: ' + '(' + itemCounter + ') items';
          }

          let return3 = document.getElementById('item-3-return-button');
          return3.onclick = () => {
            $("#item-3-card").insertBefore("#return-bin-container div:first-child");
            itemCounter++;
            document.getElementById('return-bin-text').innerHTML = 'Return Bin: ' + '(' + itemCounter + ') items';
          }

          let return4 = document.getElementById('item-4-return-button');
          return4.onclick = () => {
            $("#item-4-card").insertBefore("#return-bin-container div:first-child");
            itemCounter++;
            document.getElementById('return-bin-text').innerHTML = 'Return Bin: ' + '(' + itemCounter + ') items';
          }

          let return5 = document.getElementById('item-5-return-button');
          return5.onclick = () => {
            $("#item-5-card").insertBefore("#return-bin-container div:first-child");
            itemCounter++;
            document.getElementById('return-bin-text').innerHTML = 'Return Bin: ' + '(' + itemCounter + ') items';
          }
      }

      const addItem = () => {

      }
      
      const createContainersNodes = () => {
          div1 = document.createElement('div');
          div1.setAttribute('id', 'div1');
          div1.setAttribute('style', 'display: flex; flex-direction: row;');
          document.body.appendChild(div1);
      }