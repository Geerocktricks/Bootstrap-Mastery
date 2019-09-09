$breadcrumb-divider: quote(">");
$(document).ready(function() {
   console.log("document is ready");
     
   
     $( ".card" ).hover(
     function() {
       $(this).addClass('shadow-lg').css('cursor', 'pointer').delay(2000); 
     }, function() {
       $(this).removeClass('shadow-lg');
     }
   );
     
   // document ready  
   });
