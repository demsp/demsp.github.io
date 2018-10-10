<html>
 <head>
   <title>Пример использования PHP</title>
 </head>

<body>

<!-- вставляем код php -->
<?php
echo "Привет, мир!";
?>
<!-- вставляем код php -->
<?php
$file=fopen("data.txt","a+"); 
flock($file,LOCK_EX); 
$count=fread($file,100); 
$count++; 
ftruncate($file,0); 
fwrite($file,$count); 
flock($file,LOCK_UN); 
fclose($file); 
echo "Сайт был посещен <b> $count</b>  раз(a). "; 
?>
</body>
</html>
