ALTER DATABASE `dnd-character-db` to dnd_db;

REVOKE CONNECT ON DATABASE dnd_db FROM PUBLIC;

CREATE USER dndUser WITH PASSWORD 'cjfR4M-etye4';

grant select,insert,delete,update on database dnd_db to dndUser;
