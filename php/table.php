
<?php

    if(!isset($_POST["x"]) || $_POST["x"] != "table") {
        throw new Exception('An error occurs in tab file at line 5');
    }
    // }else{   
    //     $a = array('x' => $_POST["x"]." apch", 'y' => $_POST["y"]);
    //     echo json_encode($a);
    // }

    $db = new SQLite3('comptes.db');// connect db

    //sqlite query
    $q = " 
        SELECT l.id, l.dte,somme, r.secteur, s.mvt,l.coche, l.rem
        FROM comptes l  
        INNER JOIN secteurs r ON r.id = l.id_secteur
        INNER JOIN  mvts s ON s.id = l.id_mvt  
        WHERE  l.dte >=  date(CURRENT_DATE, '-300 day')  OR  l.coche = 0                           
        ORDER BY l.dte DESC ; ";

    $results = $db->query($q); // execute query 
    $a=[];// fill result
    while ($row = $results->fetchArray(SQLITE3_NUM )) {
        $a[]=$row; // push $rows
    }   

    echo json_encode($a); // send responsez

    ?>