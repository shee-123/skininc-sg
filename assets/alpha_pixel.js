
    function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    new MutationObserver(function (mutationsList, observer) {
      for (var _iterator = _createForOfIteratorHelperLoose(mutationsList), _step; !(_step = _iterator()).done;) {
        var mutation = _step.value;
    
        if (mutation.type === 'childList') {
          for (var _iterator2 = _createForOfIteratorHelperLoose(mutation.addedNodes), _step2; !(_step2 = _iterator2()).done;) {
            var element = _step2.value;
            var elementArray = ['button[name="checkout"]', 'input[name="checkout"]', 'a[href="/checkout"','input[value="Checkout"][type="submit"]'];
            for (var i = 0; i < elementArray.length; i++) {
              var array = document.querySelectorAll(elementArray[i]);
              if(array.length){
                for(var j=0;j<array.length;j++){
                  
                  if (array[j] == element) {
                    if(!array[j].onclick){
                      array[j].onclick = InitiateCheckoutAlphaPixel;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }).observe(document, {
      attributes: false,
      childList: true,
      subtree: true
    });
    document.addEventListener("DOMContentLoaded", function (event) {
      document.body.addEventListener('click',function(e){
        if(e.target && (e.target.matches('button._btn.float-right') || e.target.matches('button.btn.btn-checkout') || e.target.matches('button.btn[onclick~="window.location=\'\/checkout\'"]')  || e.target.matches('button.checkout-button.js-button-checkout.alt.wc-forward.bg-color') || e.target.matches('button.btn-medium[onclick~="window.location=\'\/checkout\'"]') || e.target.matches('input.cart__submit.btn.btn--small-wide') )){
          InitiateCheckoutAlphaPixel();
        }
      });
    });
    
    var alphaMasterPixels = [];
    var alphaPixels = [];
    var alphaTagPixels = [];
    var cartTags = [];
    var cartPixels = [];
    var cartData;
    var viewContentData = null;
    var alphaCollectionPixels = [];
    var product_data = "";
    var newprodcollections = [];
    var newprodtags = [];
    var newprodid = "";
    var pageviewId = '';
    var searchId = '';
    var viewContentId = '';
    var aTCIC = "";
    var addToCartSelectorsArray = ['button[class~=enj-add-to-cart-btn]','button[name="add"]','input[name="add"]','button[class~=add-to-cart-btn]','button[class~=product-form__cart-submit--small]','#button-cart','button[class~=btn-addtocart]','#AddToCartText6643010142366','input[class~=atc]','input[class~=add-to-cart-button]','#shopify_add_to_cart','a[class~=addtocart]','#AddToCart-product-template','button[class~="btn--add-to-cart"]','button[class~="product-form__add-button"]','button[class~="ProductForm__AddToCart "]','button[data-action~="add-to-cart"]','#AddToCart','button.btn-addtocart','button#add-to-cart._btn.add-to-cart','button.gt_button.gt_button--large.gt_atom-4204226_addToCart','button.product-submit.action-button.submit.desaturated.addtocart-button-active','button.single_add_to_cart_button.button.truncate.js_frm_cart.w__100.mt__20.order-4','button.gt_button.gt_button--large.gt_atom-4666427_addToCart'];
    

    document.addEventListener("DOMContentLoaded", function (event) {
      for(var i=0; i< addToCartSelectorsArray.length;i++){
        var array = document.querySelectorAll(addToCartSelectorsArray[i]);
        if(array.length){
          for(var j=0;j<array.length;j++){
            if(array[j] != null){
              if(!array[j].onalphaPixelEvent){
                  array[j].onalphaPixelEvent = function(){};
                  array[j].onclick = addToCartAlphaPixel;
              }
            }
          }
        }
      }
      if (meta.page.pageType === 'product') {
        newprodcollections = document.querySelector('product-collection');
    
        if (newprodcollections != null) {
          newprodcollections = newprodcollections.innerHTML.trim().slice(0, -1).split(',');
        }
    
        newprodtags = document.querySelector('new-product-tags');
    
        if (newprodtags != null) {
          newprodtags = newprodtags.innerHTML.trim().slice(0, -1).split(',');
        }
    
        newprodid = meta.product.id;
        setproductdetailsstorage();

      }
    });
    var initiate_data = "";
    var xhr = new XMLHttpRequest();
    if(!localStorage.getItem('alphaPixeluserIp')){
        document.addEventListener("DOMContentLoaded", function (event) {
            var url = "https://www.cloudflare.com/cdn-cgi/trace";
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                  data = this.responseText.trim().split('\n').reduce(function(obj, pair) {
                    pair = pair.split('=');
                    return obj[pair[0]] = pair[1], obj;
                  }, {});
                  localStorage.setItem("alphaPixeluserIp", data.ip);
                  pixelBeforeRun();
                }
            };
            xhr.send();
        });
    }else{
        document.addEventListener("DOMContentLoaded", function (event) {
            pixelBeforeRun();
        });
    }
    function pixelBeforeRun(){
        if(getCookie('c_user')){
          localStorage.setItem('c_user', getCookie('c_user'));
        }
        var url = "https://www.alpha-pixel-tracking-app.com/status/" + Shopify.shop + "?user_ip=" + localStorage.getItem('alphaPixeluserIp') + "&user_agent=" + navigator.userAgent + "&source_url=" + location.origin+location.pathname+encodeURIComponent(location.search) + "&currency=" + Shopify.currency.active+'&fbp='+getCookie('_fbp')+'&fbc='+getCookie('_fbc')+'&c_user='+getCookie('c_user')+"&pixelIds="+alphaPixels.join(',');
        if(typeof(searchedIds) != 'undefined'){
            url+="&content_ids="+searchedIds.join(',');
        }else if(typeof(productId) != 'undefined'){
            url+="&content_ids=" + productId;
        }
        if(typeof(productId) != 'undefined'){
          url+="&productId=" + productId;
        }
        if(typeof(value) != 'undefined'){
            url+="&value="+value;
        }else{
            url+="&value=1.0";
        }
        if(typeof(searchString) != 'undefined'){
            url+="&searchString="+searchString;
        }
        if(typeof(productCollections) != 'undefined'){
            url+="&productCollections="+productCollections.join(',');
        }
        if(typeof(productTags) != 'undefined'){
            url+="&productTags="+productTags.join(',');
        }
        if(typeof(productTitle) != 'undefined'){
            url+="&productTitle="+productTitle;
        }
        if(getCookie('_fbp')){
          url+="&fbp="+getCookie('_fbp');
        }
        if(getCookie('_fbc')){
          url+="&fbc="+getCookie('_fbc');
        }
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(this.responseText);
                if (response.status == true) {
                    for (var i = 0; i < response.pixels.length; i++) {
                        alphaMasterPixels[i] = response.pixels[i].code;
                    }
                    localStorage.setItem("callone", this.responseText);
                    alphaCollectionPixels = response.collectionPixel;
                    alphaTagPixels = response.tags;
                    pageviewId = response.pageviewId;
                    searchId = response.searchId;
                    viewContentId = response.viewContentId;
                    run();
                }
            }
        };
        xhr.send();
    }
    
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    
    function run() {
      initGeneralPixels();
      trackCollectionPage();
      trackProductPage();
      loadPixelsInFbq();
      if(typeof(fbq) != 'undefined'){
        fbq('track', "PageView",{
        },{
          eventID  : pageviewId
        });
      }
    
    
      var productIdsInCart = [];
      var cart = new XMLHttpRequest();
      cart.open("GET", '/cart.js');
    
      cart.onreadystatechange = function () {
        if (cart.readyState === 4 && cart.status === 200) {
          var products = JSON.parse(this.responseText); //##insert pixel code for product
    
          if (products.items.length > 0) {
            for (var _i = 0; _i < products.items.length; _i++) {
              productIdsInCart.push(products.items[_i].product_id);
            }
          }
    
          initiate_data = {
            //content_name: product.title,
            content_ids: productIdsInCart,
            content_type: 'product_group',
            //product.type,
            value: parseFloat(products.total_price) / 100,
            num_items: products.item_count,
            currency: ShopifyAnalytics.meta.currency
          };
          var _ids = [];
    
          for (var i = 0; i < products.items.length; i++) {
            _ids.push(products.items[i].product_id);
          }
    
          if (_ids.length > 0) setTagsCollections(_ids);
        }
      };
    
      cart.send();
      var url = window.location.pathname;
    
      if (meta) {
        if (url.indexOf('/products/') !== -1) {
          var product = new XMLHttpRequest();
          product.open("GET", '/products/' + url.match(/\/products\/([a-z0-9\-]+)/)[1] + '.js', true);
    
          product.onreadystatechange = function () {
            if (product.readyState === 4 && product.status === 200) {
              var _product = JSON.parse(this.responseText); //##insert pixel code for product
    
    
              product_data = {
                //content_name: product.title,
                content_type: 'product_group',
                //product.type,
                currency: ShopifyAnalytics.meta.currency,
                value: parseFloat(_product.price) / 100,
                content_ids: _product.id,
                content_name: _product.title,
                contents: niche
              };
            }
          };
    
          product.send();
        }
      }
          
      setTimeout(function () {
        var array = document.querySelectorAll('button[class^="shopify-payment-button__button"]');
        if(array.length){
          for(var j=0;j<array.length;j++){
            if(!array[j].onclick){
              array[j].onclick = InitiateCheckoutAlphaPixel;
            }
          }
        }

      }, 3000);
      var array = document.querySelectorAll('button[class^="cart__submit cart__submit-control"]');
      if(array.length){
        for(var j=0;j<array.length;j++){
          if(!array[j].onclick){
            array[j].onclick = InitiateCheckoutAlphaPixel;
          }
        }
      }
    
      document.addEventListener('DOMNodeInserted', function () {
        var array = document.querySelectorAll('input[name="checkout"],input[value="Checkout"][type="submit"],button[name="checkout"]');
        if(array.length){
          for(var j=0;j<array.length;j++){
            if(!array[j].onclick){
              array[j].onclick = InitiateCheckoutAlphaPixel;
            }
          }
        }
      });
    
      function trackCollectionPage() {
        if (meta) {
          if (meta.page.pageType === 'collection') {
            var pathName = location.pathname;
            var collectionHandle = pathName.split('collections/').pop(); //if it has trailing slashes
    
            if (collectionHandle.indexOf('/') !== -1) {
              collectionHandle = collectionHandle.slice(0, -1);
            }
    
            collections = document.querySelector('page-collection-id');
            if(collections !=null){
              var collectionIds = collections.innerHTML.trim().slice(0, -1).split(',');
    
              for (var i = 0; i < alphaCollectionPixels.length; i++) {
                if (alphaCollectionPixels[i].collections.length > 0) {
                  for (var j = 0; j < alphaCollectionPixels[i].collections.length; j++) {
                    if (collectionIds.includes(alphaCollectionPixels[i].collections[j])) {
                      alphaPixels.push(alphaCollectionPixels[i].id);
                    }
                  }
                }
              } // loadPixelsInFbq();
            }
            // fbq('track', 'PageView');
            // fbq('trackCustom', 'ViewCategory', {
            //     category_name: 'All',
            // });
    
    
            collections = document.querySelector('page-collection-id');
    
            if (collections != null) {
              collectionIds = collections.innerHTML.trim().slice(0, -1).split(',');
    
              for (var _i2 = 0; _i2 < alphaCollectionPixels.length; _i2++) {
                for (var _j = 0; _j < collectionIds.length; _j++) {
                  if (alphaCollectionPixels[_i2][collectionIds[_i2]]) {
                    if (alphaPixels.indexOf(alphaCollectionPixels[_i2][collectionIds[_i2]]) === -1) {
                      alphaPixels.push(alphaCollectionPixels[_i2][collectionIds[_i2]]);
                    }
                  }
                }
              } // loadPixelsInFbq();   
    
            }
          }
        }
      }
    
      function trackProductPage() {
        var url = window.location.pathname;
    
        if (meta) {
          if (url.indexOf('/products/') !== -1) {
            var _collections = document.querySelector('product-collection');
    
            if (_collections != null) {
              var pcollectionIds = _collections.innerHTML.trim().slice(0, -1).split(',');
    
              for (var i = 0; i < alphaCollectionPixels.length; i++) {
                if (alphaCollectionPixels[i].collections.length > 0) {
                  for (var j = 0; j < alphaCollectionPixels[i].collections.length; j++) {
                    if (pcollectionIds.indexOf(alphaCollectionPixels[i].collections[j]) > -1) {
                      alphaPixels.push(alphaCollectionPixels[i].id);
                    }
                  }
                }
              } // loadPixelsInFbq();   
    
            }
          }
        }
      }
    
      function setTagsCollections(ids) {
        var url = "https://alpha-pixel-tracking-app.com/collections";
        xhr.open("POST", url, true);
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            cartCollections = [];
            cartTags = [];
            var result = JSON.parse(xhr.responseText);
    
            for (j = 0; j < result.collections.length; j++) {
              if (!cartCollections.indexOf(result.collections[j]) > -1) {
                cartCollections.push(result.collections[j]);
              }
            }
    
            for (k = 0; k < result.tags.length; k++) {
              if (!cartTags.indexOf(result.tags[k]) > -1) {
                cartTags.push(result.tags[k].trim());
              }
            } // loadPixelsInFbq();
    
          }
        };
    
        var data = "sssss" + "skininc-dev.myshopify.com" + "sssss" + "ppppp" + ids.toString() + "ppppp";
        xhr.send(data);
      }
    
      function loadPixelsInFbq() {
        var url = window.location.pathname; // var viewContentData;
    
        var distinct_axes2 = [];
    
        for (var i = 0; i < alphaPixels.length; i++) {
          if (distinct_axes2.indexOf(alphaPixels[i]) == -1) {
            distinct_axes2.push(alphaPixels[i]);
          }
        }
    
        alphaPixels = distinct_axes2;
    
        if (url.indexOf('/cart') !== -1 || url.indexOf('/') !== -1) {
          !function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
    
            n = f.fbq = function () {
              n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
            };
    
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
          for (var i = 0; i < alphaPixels.length; i++) {
            fbq('init', alphaPixels[i]);
            if (typeof(alphaProductPage) !='undefined' && alphaProductPage == true) {
              if(typeof(fbq) != 'undefined'){
                fbq('trackSingle', alphaPixels[i], 'ViewContent', {
                  content_type: 'product_group',
                  currency: Shopify.currency.active,
                  value: value,
                  content_ids: [productId],
                  content_name: name,
                  contents: niche,
                },{eventID : viewContentId});
              }
            }
    
            if (typeof(alphaCartPage) !='undefined' && alphaCartPage==true) {
              if(typeof(fbq) != 'undefined'){
                fbq('trackSingle', alphaPixels[i], 'ViewCart', {
                  content_type: 'product_group',
                  content_ids: ids,
                  value: totalAmount,
                  num_items: itemsCount,
                  currency: Shopify.currency.active
                });
              }
            }
    
            if (typeof(alphaSearchPage) !='undefined' && alphaSearchPage ==true) {
              if(typeof(fbq) != 'undefined'){
                fbq('trackSingle', alphaPixels[i], 'Search', {
                  value: "1.00",
                  content_type: 'product_group',
                  content_ids: searchedIds,
                  search_string: searchString,
                  currency: Shopify.currency.active,
                },{eventID : searchId});
              }
            }
    
            if (typeof(alphaCollectionPage) !='undefined' && alphaCollectionPage==true) {
              if(typeof(fbq) != 'undefined'){
                fbq('trackSingle', alphaPixels[i], 'ViewCategory', {
                  content_type: 'product_group',
                  collection_title: collectionTitle,
                  value: '1.00',
                  currency: Shopify.currency.active
                });
              }
            }
          }
        }
      }
    
      function initGeneralPixels() {
        alphaPixels = alphaPixels.concat(alphaMasterPixels);
    
        for (var i = 0; i < alphaCollectionPixels.length; i++) {
          if (collections != null) {
            for (var _j2 = 0; _j2 < collections.length; _j2++) {
              for (var _k = 0; _k < alphaCollectionPixels[i].collections.length; _k++) {
                if (alphaCollectionPixels[i].collections[_k] === collections[_j2]) {
                  if (!alphaPixels.indexOf(alphaCollectionPixels[i].id) > -1) {
                    alphaPixels.push(alphaCollectionPixels[i].id);
                  }
                }
              }
            }
          }
        }
    
        for (var _i3 = 0; _i3 < alphaTagPixels.length; _i3++) {
          for (var _j3 = 0; _j3 < tags.length; _j3++) {
            if (alphaTagPixels[_i3].tag === tags[_j3]) {
              alphaPixels.push(alphaTagPixels[_i3].id);
            }
          }
        } // loadPixelsInFbq();
    
      }
    }

    function getATCIC(data,type = null){
      console.log(data.num_items);
      var url = "https://www.alpha-pixel-tracking-app.com/aTCIC/" + Shopify.shop + "?user_ip=" + localStorage.getItem('alphaPixeluserIp') + "&user_agent=" + navigator.userAgent + "&source_url=" + location.origin+location.pathname+encodeURIComponent(location.search) + "&currency=" + Shopify.currency.active+"&content_ids=" + data.content_ids+"&value="+data.value+"&content_name="+data.content_name+"&contents="+data.contents+"&num_items="+(data.num_items != undefined ? data.num_items : 1)+"&pixelIds="+alphaPixels.join(',');
      if(getCookie('_fbp')){
        url+="&fbp="+getCookie('_fbp');
      }
      if(getCookie('_fbc')){
        url+="&fbc="+getCookie('_fbc');
      }
      if(getCookie('c_user')){
        url+="&c_user="+getCookie('c_user');
      }
      if(type){
        url+="&requestType=InitiateCheckout";
      }else{
        url+="&requestType=addToCart";
      }
      xhr.open("GET", url, false);
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              var response = JSON.parse(this.responseText);
              if(response.status){
                aTCIC = response.aTCIC;
              }
          }
      };
      xhr.send();
    }

    function addToCartAlphaPixel(e) {
      
      if (product_data) {
        console.log("here");
        getATCIC(product_data);
        if(typeof(fbq) != 'undefined'){
          fbq('track', 'AddToCart', product_data,{eventID : aTCIC});
        }
      } else {
        console.log("there");
        var url = "/cart/add.js";
        var method = "POST";
        var postData = new FormData(document.querySelector('form[action="/cart/add"]'));
        var shouldBeAsync = false;
        var request = new XMLHttpRequest();
        request.onload = function () {
          var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
          var data = request.responseText; // Returned data, e.g., an HTML document.
          data = JSON.parse(data);
          dataa = {
            content_type: 'product_group',
            content_ids: [data.product_id],
            value: parseFloat(data.price) / 100,
            num_items: data.quantity,
            currency: Shopify.currency.active
          };
          getATCIC(dataa);
          if(typeof(fbq) != 'undefined'){
            fbq('track', 'AddToCart', dataa,{eventID : aTCIC});
          }
          
        };
        request.open(method, url, shouldBeAsync);
        request.send(postData);
      } // snaptr('track', 'ADD_CART');

    }
    
    function InitiateCheckoutAlphaPixel(e) {
      getATCIC(initiate_data,'ic');
      if(typeof(fbq) != 'undefined'){
        fbq('track', 'InitiateCheckout', initiate_data,{eventID : aTCIC});
      }
    }
    
    function setproductdetailsstorage() {
      var array = localStorage.getItem('calltwo');
    
      if (array != null) {
        array = JSON.parse(array);
        var length = array.length;
    
        for (var i = 0; i < length; i++) {
          if (array[i].newprodid == newprodid) {
            return;
          }
        }
        array.push({
          newprodid: newprodid,
          collections: newprodcollections,
          tags: newprodtags
        });
        localStorage.setItem('calltwo', JSON.stringify(array));
      } else {
        var array2 = [{
          newprodid: newprodid,
          collections: newprodcollections,
          tags: newprodtags
        }];
        localStorage.setItem('calltwo', JSON.stringify(array2));
      }
    }
    