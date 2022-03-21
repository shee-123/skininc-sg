/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */

$( document ).ready(function() {
    $("footer.Cart__Footer").addClass("mobile");
    $('.Cart__Footer.mobile span.Cart__NoteButton').click(function(){
     $( "textarea#cart-note" ).toggle(); 
	});
    $(window).scroll(function(){
      var sticky = $('footer.Cart__Footer'),
          scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed_bott');
      else sticky.removeClass('fixed_bott');
    });    
});


  $(document).ready(function(){
    //listen to the promo button click
    $('#redemDevPromo').on('click', function(event){
      //disable the button event
      event.preventDefault();
      //write the url format
      var theUrl = '/checkout?discount=';
      //grab the discount code from the input
      var theDiscount = $('#devPromo').val();
      console.log(theDiscount);
      //full url to redirect to checkout with promo code
      var toRedirect = theUrl+theDiscount;
      console.log(toRedirect);
      //redirect
      window.location.href = toRedirect;
    });
  });



 /*  gift for cart */


$(function() {
  $("input[name='attributes[Gift Message]']").click(function() {
      if ($("#yes-button3").is(":checked")) {
        $("#pers_meg").show();
        $("#pers_meg textarea").addClass('required');
        $("#pers_meg textarea").attr('required',true);
      } else {
        $("#pers_meg textarea").val('');
        $("#pers_meg").hide();
        $("#pers_meg textarea").removeClass('required');
        $("#pers_meg textarea").attr('required',false);
      }
    });
  
});

function main_yes() {
  $('.inner_personal').toggle();
}
//click function
$('.img_selc img').click(function(){
    $('.img_selc img').removeClass('active');
    $(this).addClass('active');
});

$(".persSticker").click(function() {
     console.log("sdjfh");
      if ($("#yes-button4").is(":checked")) {
        $("#pers_stiker").show();
        if($('#stickerUrl').val() == ''){
          
        }
        //$('#stickerUrl').val(defaultSticker);
      } else {
        removeSticker();
        $("#pers_stiker").hide();
        $("#image_variant").val('');
        $('.main_selc img').attr('src', '');
  		$('#stickerUrl').val('');
      }
});
  


$('.img_selc img').click(function(){
    $('.img_selc img').removeClass('active');
    $(this).addClass('active');
});

/*$('.img_selc img').click(function(){
file_url = $(this).attr('src');
$('.main_selc img').attr('src', file_url);
  $('#stickerUrl').val(file_url);
});*/

/*  gift for cart */




/*  Shopify.Cart = Shopify.Cart || {};

  Shopify.Cart.GiftWrap = {};

  Shopify.Cart.GiftWrap.set = function() {
    var headers = new Headers({ 'Content-Type': 'application/json' });

    var request = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ updates: { {{ id }}: 1 }, attributes: { 'gift-wrapping': true } })
    };
    fetch('/cart/update.js', request)
    .then(function() {
      $(".wrap-product-cart").show();
      //location.href = '/cart';
    });
  }

  Shopify.Cart.GiftWrap.remove = function() {
    var headers = new Headers({ 'Content-Type': 'application/json' });

    var request = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ updates: { {{ id }}: 0 }, attributes: { 'gift-wrapping': '' } })
    };
    fetch('/cart/update.js', request)
    .then(function() {
      $(".wrap-product-cart").hide();
      $(".Cart__ItemList #item-40768713294017").hide();
      //location.href = '/cart';
    });
  }

  // If we have nothing but gift-wrap items in the cart.
  {% if cart.items.size == 1 and gift_wraps_in_cart > 0 %}
  console.log("only gift in cart");
  document.addEventListener("DOMContentLoaded", function(){
    Shopify.Cart.GiftWrap.remove();
  });
  // If we have more than one gift-wrap item in the cart.
  {% elsif gift_wraps_in_cart > 1 %}
  console.log("more gift in cart");
  document.addEventListener("DOMContentLoaded", function(){
    Shopify.Cart.GiftWrap.set();
  });
  // If we have a gift-wrap item in the cart but our gift-wrapping cart attribute has not been set.
  
  {% elsif gift_wraps_in_cart > 0 %} 
     {% if cart.attributes.gift-wrapping == 'no' or cart.attributes.gift-wrapping == blank  %}
  		console.log("no gift attribute");
  		document.addEventListener("DOMContentLoaded", function(){
    		Shopify.Cart.GiftWrap.set();
        });
     {% endif %}
  
  
  // If we have no gift-wrap item in the cart but our gift-wrapping cart attribute has been set.
  {% elsif cart.attributes.gift-wrapping != 'no' and cart.attributes.gift-wrapping != blank %}
  	  {% if gift_wraps_in_cart == 0 %}
      console.log("no gift in cart");
      document.addEventListener("DOMContentLoaded", function(){
        Shopify.Cart.GiftWrap.set();
      });
  	{% endif %}
  {% endif %}
  
   
  
  
   $(".gift-wrapping").change(function(){
        var gift_wrap = $(".gift-wrapping:checked").val();
        if (gift_wrap == 'yes') {
        	Shopify.Cart.GiftWrap.set();
      	} else {
        	console.log("hbhh");
        	Shopify.Cart.GiftWrap.remove();
      	}

   });
  
  
  */