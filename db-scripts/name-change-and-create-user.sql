ALTER DATABASE `dnd-character-db` to dndDb;

REVOKE CONNECT ON DATABASE dndDb FROM PUBLIC;

CREATE USER dndUser WITH PASSWORD 'cjfR4M-etye4';

grant select,insert,delete,update on database dndDb to dndUser;
