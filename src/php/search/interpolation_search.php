<?php
    $list = array(201, 209, 232, 233, 332, 399, 400);
    $x = 332;

    function interpolation_search($list, $x)
    {
    	$l = 0;
    	$r = count($list) - 1;

    	while ($l <= $r) {
    		if ($list[$l] == $list[$r]) {
    			if ($list[$l] == $x) {
    				return $l;
    			} else {
    				// not found
    				return -1;
    			}
    		}

    		$k = ($x - $list[$l])/($list[$r] - $list[$l]);

    		// not found
    		if ($k < 0 || $k > 1) {
    			return -1;
    		}

    		$mid = round($l + $k*($r - $l));

    		if ($x < $list[$mid]) {
    			$r = $mid - 1;
    		} else if ($x > $list[$mid]) {
    			$l = $mid + 1;
    		} else {
    			// success!
    			return $mid;
    		}

    		// not found
    		return -1;
    	}
    }

    echo interpolation_search($list, $x);
