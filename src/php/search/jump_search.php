<?php
    $list = array();

    for ($i = 0; $i < 1000; $i++) {
        $list[] = $i;
    }

    // now we have a sorted list: (0, 1, 2, 3, ..., 999)

    function jump_search($x, $list)
    {
    	// calculate the step
    	$len = count($list);
    	$step = floor(sqrt($len));
    	$prev = 0;

    	while ($list[($step < $len ? $step : $len)] < $x) {
    		$prev = $step;
    		$step += floor(sqrt($len));

    		if ($step >= $len) {
    			return FALSE;
    		}
    	}

    	while ($list[$prev] < $x) {
    		$prev++;
    		if ($prev == ($step < $len ? $step : $len)) {
    			return FALSE;
    		}
    	}

    	if ($list[$prev] == $x) {
    		return $prev;
    	}

    	return FALSE;
    }

    echo (int)jump_search(674, $list);
