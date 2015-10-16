<?php
    $list = array(0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144);
    $x = 55;

    function iterative_binary_search($x, $list)
    {
    	$left = 0;
    	$right = count($list)-1;

    	while ($left <= $right) {
    		$mid = ($left + $right) >> 1;

    		if ($list[$mid] == $x) {
    			return $mid;
    		} elseif ($list[$mid] > $x) {
    			$right = $mid - 1;
    		} elseif ($list[$mid] < $x) {
    			$left = $mid + 1;
    		}
    	}

    	return -1;
    }

    echo iterative_binary_search($x, $list);
