CREATE USER 'clinic_db'@'%' IDENTIFIED BY 'nkmclinic';
GRANT ALL PRIVILEGES ON *.* TO 'clinic_db'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
