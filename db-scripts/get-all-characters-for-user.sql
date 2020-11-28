SELECT
    json_agg(
        json_build_object(
            'name', cd.character_name,
            'id', cd.character_id
        )
    )
FROM character_data cd
WHERE cd.user_name = 'elchung'
GROUP BY cd.character_id;
