<script>
// Activar los botones del navbar
$(document).ready(function() {
  $(".navbar-nav a").on("click", function() {
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
</script>