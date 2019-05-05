      window.onload = () => {
          subscribedItemsButtons();
      }

      const subscribedItemsButtons = () => {
          let return1 = document.getElementById('item-1-return-button');
          return1.onclick = () => {
            $("#item-1-card").insertBefore("#return-bin-container div:first-child");
          }
        
          let return2 = document.getElementById('item-2-return-button');
          return2.onclick = () => {
            $("#item-2-card").insertBefore("#return-bin-container div:first-child");
          }

          let return3 = document.getElementById('item-3-return-button');
          return3.onclick = () => {
            $("#item-3-card").insertBefore("#return-bin-container div:first-child");
          }

          let return4 = document.getElementById('item-4-return-button');
          return4.onclick = () => {
            $("#item-4-card").insertBefore("#return-bin-container div:first-child");
          }

          let return5 = document.getElementById('item-5-return-button');
          return5.onclick = () => {
            $("#item-5-card").insertBefore("#return-bin-container div:first-child");
          }
      }
      
      const createContainersNodes = () => {
          div1 = document.createElement('div');
          div1.setAttribute('id', 'div1');
          div1.setAttribute('style', 'display: flex; flex-direction: row;');
          document.body.appendChild(div1);
      }