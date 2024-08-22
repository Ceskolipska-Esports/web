-- populate games table
INSERT INTO games
	(id, name, genre, pegi_rating)
VALUES
	(1, 'VALORANT', 'FPS', 16),
	(2, 'Minecraft', 'Adventure', 7),
	(3, 'League of Legends', 'MOBA', 12),
	(4, 'Overwatch', 'FPS', 12),
	(5, 'Team Fortress 2', 'FPS', 12);

-- populate tournaments table
INSERT INTO tournaments 
	(name, start, "end", prize, game_id) -- end is a reserved keyword. this took too long to figure out.
VALUES
	(
		'Turnaj bez informací',
		NULL, NULL, NULL, NULL
	),
	(
		'Turnaj se začátkem',
		(NOW() + INTERVAL '3 days'),
		NULL, NULL, NULL
	),
	(
		'Turnaj s koncem',
		NULL,
		(NOW() + INTERVAL '5 days'),
		NULL, NULL
	),
	(
		'Turnaj se začátkem i koncem',
		(NOW() + INTERVAL '8 days'),
		(NOW() + INTERVAL '9 days'),
		NULL, NULL
	),
	(
		'Turnaj ve VALORANTu',
		NULL, NULL, NULL,
		(SELECT id FROM games WHERE name = 'VALORANT')
	),
	(
		'Turnaj v TF2 s cenou',
		NULL, NULL,
		'Červený balónek',
		(SELECT id FROM games WHERE name = 'Team Fortress 2')
	);
