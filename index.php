<!DOCTYPE html>
<html lang="hu">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/style.css">
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title>Linux login</title>
</head>
<body>
<div class="cim">
<h2>Ki itt belépsz,<br>hagyj fel minden reménnyel!</h2>
<p><i>Dante, Isteni színjáték</i></p>

<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Belépek</button>
</div>
<div id="id01" class="modal">
  
  <form class="modal-content animate" action="belepve.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="css/tux.jpg" alt="Avatar" class="avatar">
    </div>

    <div class="container">
      <label for="uname"><b>Felhasználónév</b></label>
      <input type="text" placeholder="Felhasználóneved" name="uname" required>

      <label for="psw"><b>Jelszó</b></label>
      <input type="password" placeholder="Jelszavad" name="psw" required>
        
      <button type="submit">Belépés</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Emlékezz rám
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Mégse</button>
      <span class="psw">Elfelejtett <a href="#">jelszó?</a></span>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

</body>
</html>
