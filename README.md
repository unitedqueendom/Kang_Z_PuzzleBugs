# Kang_Z_PuzzleBugs

The bugs which allow drag and drop into any place on the website and also when you drag and drop more than one puzzle to a same zone will break the website. Also when you drag and drop the puzzles, its size won't change.

The solution is change JS function 'allowdragOver' which I put an If statement into prevent it from drop to anywhere other than the drop zone.

The second place I changed is function 'allowDrop'. When there is a puzzle in a zone, and you drag and drop another one onto it, because it contains puzzle-pieces. It has to be changed the width to 40%, otherwise, the width is 100%.

The second bug is when you switch to other picture, it won't reset. The way I solved this bug is changing function 'changeImageSet', when you choose the other image, all the puzzle pieces resized to 40% and move to the left side.
