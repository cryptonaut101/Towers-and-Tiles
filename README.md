# Towers and Tiles - QED Project
### General Technicalities
  The objective of the first two versions of the game is to construct a tower out of the four given pieces before the other player does. The third version encourages the player to make as many fully constructed towers as possible before reaching the end of the board.
  In all versions, the two players must follow the rules. Excluding the smallest green piece, all pieces can only move vertically and laterally. The said green piece can move diagonally as well. Each piece can only move one tile of the grid at a time. A particular piece can not be stacked on a smaller piece.
  The initial placement of pieces relies on the player, which means strategy must be used to optimize the starting situation. The players take turns placing their pieces on the board strictly from largest to smallest: that said, the order of placement on the board should be 1) the largest piece(blue), 2) the second-largest piece(orange), 3) the second smallest piece(yellow), and 4) the smallest piece(dark green). In addition, a player can not place the largest piece next to the second-largest piece during this initialization. In addition, NO STACKING is allowed during initialization either.
  The green zones are only the corresponding player's zone: that is, the opponent cannot enter your zone, and vice versa. The red-zone is the area where both players can place and take pieces from.
  
  Version 1 and Version 2 have different grid sizes to add variety.

### Fundamental Game Rules: Versions 1 and 2
1. During initialization, each player has to have at least 2 of their pieces within their zone.
2. During initialization, the largest piece(blue) must stay within each player's respective zone.
3. Each time the red-zone is emptied, a die is rolled, unless one of the players wins the game.
4. When the number rolled is odd, the first player will place one of their pieces into the red-zone. If the number rolled is even, the second player will place one of their pieces into the red-zone.
5. A stolen piece can not be placed into the red-zone after the die is rolled. A stolen piece is the one piece that each party takes from the red-zone to cause it to become empty.

### Fundamental Game Rules: Version 3
1. During initialization, both players are only permitted to place in the first three columns and in their bounds.
2. The red zone is simply a neutral zone: if it is empty, nothing has to be done.
3. Every turn, a player rolls the dice. This will determine the number of tiles one piece should be moved. The said piece is chosen by the corresponding player.
4. A piece can only move up, down, and right within the player's bounds. In other words, a piece can not move backwards(left) on the board.
5. When one piece reaches the end of the board, the game is over for the placer of that piece.
6. A moving piece "bounces" on every tile, so the player can not move a piece over a tile a smaller piece has occupied.
