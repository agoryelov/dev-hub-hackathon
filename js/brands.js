        //Refactor into a separate JS file later on. 
        //This method will be used to generate listings

        function generateRow(name1, link1, link1Hover, price1, name2, link2, link2Hover, price2) {
            /** Column 1 **/
            var column1 = $('<div class="col-xs col-6 pl-0 pr-1"> </div>');
            var imgDiv1 = $('<div class = "product-img" id = "' + name1 + '_img" > </div>');
            var img1 = $('<img src="' + link1 + '" alt = "Picture Name">');

            $(img1).mouseenter(function () {
                $(this).attr("src", link1Hover);
                console.log("hover2");
            }).mouseleave(function () {
                $(this).attr("src", link1);
                console.log("hoverleft");
            });

            imgDiv1.append(img1);

            var divDescription1 = $('<div class = "row justify-content-center pt-3 font-italic"> </div>');
            divDescription1.append(document.createTextNode("Verified: Sustainable"));

            var divText1 = $('<div class="row justify-content-center font-weight-light pt-3">');
            divText1.append('<a href = "item_page.html">' + name1 + ' </a>');

            var divCircle1 = $('<div class="row justify-content-center pt-3 pb-2"> </div>');
            divCircle1.append(
                '<span class="color-circle color_1"></span><span class="color-circle color_2"></span><span class="color-circle color_3"></span><span class="color-circle color_4"></span>'
            );

            var divPrice1 = $('<div class = "row justify-content-center pb-3"> </div>');
            divPrice1.append(price1);

            column1.append(imgDiv1).append(divDescription1).append(divText1).append(divCircle1).append(divPrice1);

            /** Column 2 **/

            var column2 = $('<div class="col-xs col-6 pl-1 pr-0">');
            var imgDiv2 = $('<div class = "product-img" id = "' + name2 + '_img" > </div>');
            var img2 = $('<img src="' + link2 + '" alt = "Picture Name">');

            $(img2).mouseenter(function () {

                $(this).attr("src", link2Hover);
                console.log("hover2");
            }).mouseleave(function () {

                $(this).attr("src", link2);
                console.log("hoverleft");
            });

            imgDiv2.append(img2);

            var divDescription2 = $('<div class = "row justify-content-center pt-3 font-italic"> </div>');
            divDescription2.append(document.createTextNode("Verified: Sustainable"));

            var divText2 = $('<div class="row justify-content-center font-weight-light pt-3"> </div>');
            divText2.append('<a href = " ">' + name2 + ' </a>');

            var divCircle2 = $('<div class="row justify-content-center font-weight-bold pt-3 pb-2">');
            divCircle2.append(
                '<span class="color-circle color_1"></span><span class="color-circle color_2"></span><span class="color-circle color_3"></span><span class="color-circle color_4"></span>'
            );

            var divPrice2 = $('<div class = "row justify-content-center pb-3"> </div>');
            divPrice2.append(price2);

            column2.append(imgDiv2).append(divDescription2).append(divText2).append(divCircle2).append(divPrice2);

            var row = $('<div class="row justify-content-center">');

            row.append(column1).append(column2);

            $('#item-container').append(row);

        }

        //Generate the rows for our page. Later our server will communicate with the client to do this.
        generateRow("Babaton Dress",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_01_a08_72388_11215_on_a.jpg",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_01_a08_72388_11215_on_b.jpg",
            "Retail Price: 159.99", "Camisole",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_08_a02_67186_3924_on_b.jpg",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_08_a02_67186_3924_on_c.jpg",
            "Retail Price: 159.99");

        generateRow("Wilfred Dress", "https://aritzia.scene7.com/is/image/Aritzia/large/s19_04_a08_72223_3304_on_a.jpg",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_04_a08_72223_3304_on_b.jpg",
            "Retail Price: 179.99", "Camisole",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_04_a08_61855_10108_on_a.jpg",
            "https://aritzia.scene7.com/is/image/Aritzia/medium/s19_04_a08_61855_10108_on_b.jpg",
            "Retail Price: 99.99");

        generateRow("Babaton Pant", "https://aritzia.scene7.com/is/image/Aritzia/large/s19_01_a06_43443_15712_on_a.jpg",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_01_a06_43443_15712_on_b.jpg",
            "Retail Price: 89.99", "Wilfred Jumpsuit",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_04_a08_68089_6005_on_a.jpg",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_04_a08_68089_6005_on_b.jpg",
            "Retail Price: 129.99");

        generateRow("Wilfred Dress",
            "https://aritzia.scene7.com/is/image/Aritzia/medium/s19_04_a08_73072_16557_on_b.jpg",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_04_a08_73072_16557_on_e.jpg",
            "Retail Price: 79.99", "Babaton T-Shirt",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_01_a01_67557_15222_on_a.jpg",
            "https://aritzia.scene7.com/is/image/Aritzia/large/s19_01_a01_67557_15222_on_b.jpg",
            "Retail Price: 69.99");