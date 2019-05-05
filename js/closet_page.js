      window.onload = () => {
          subscribedItemsButtons();
      }

      var itemCounter = 0;
      var subscribeCounter = 5;

      const subscribedItemsButtons = () => {
          let return1 = document.getElementById('item-1-return-button');
          return1.onclick = () => {
            $("#item-1-card").insertBefore("#return-bin-container div:first-child");
            addItem();
          }
        
          let return2 = document.getElementById('item-2-return-button');
          return2.onclick = () => {
            $("#item-2-card").insertBefore("#return-bin-container div:first-child");
            addItem();
          }

          let return3 = document.getElementById('item-3-return-button');
          return3.onclick = () => {
            $("#item-3-card").insertBefore("#return-bin-container div:first-child");
            addItem();
          }

          let return4 = document.getElementById('item-4-return-button');
          return4.onclick = () => {
            $("#item-4-card").insertBefore("#return-bin-container div:first-child");
            addItem();
          }

          let return5 = document.getElementById('item-5-return-button');
          return5.onclick = () => {
            $("#item-5-card").insertBefore("#return-bin-container div:first-child");
            addItem();
          }
      }

      addItem = () => {
          subscribeCounter--;
          itemCounter++;
          document.getElementById('return-bin-text').innerHTML = 'Return Bin: ' + '(' + itemCounter + ') item(s)';
          document.getElementById('subscribe-item-text').innerHTML = 'Current Subscribed Items: ' + '(' + subscribeCounter + ') of 5 total';
      }
      
      const createContainersNodes = () => {
          div1 = document.createElement('div');
          div1.setAttribute('id', 'div1');
          div1.setAttribute('style', 'display: flex; flex-direction: row;');
          document.body.appendChild(div1);
      }