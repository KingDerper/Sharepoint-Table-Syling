
<script src="/sites/ICT/innovation/SiteAssets/jquery.min.js" type="text/javascript" language="javascript"></script>
<script>
function listFormat() {
 
     $Text1 = $("th.ms-vh-icon:last-child");
     $Text1.css("display", "none");       
	$('.ms-vb2 a').text("Open Link");
 }

 $(document).ready(function(){
     listFormat1()
 }); 
 window.onhashchange = listFormat;
</script>